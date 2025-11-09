
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin only once
gsap.registerPlugin(ScrollTrigger);

// 1. Define the TypeScript Interface for the props
interface ScrollSequenceProps {
  frameCount: number;
  basePath: string;
  framePadding?: number; // Optional prop for padding digits (e.g., 2 for '00')
  heightVh?: number;     // Optional prop for scroll duration in viewport height (vh)
  className?: string;    // Optional Tailwind classes
}

/**
 * Renders a scroll-controlled PNG sequence animation using Canvas and GSAP.
 * This version is optimized for 0-based frame sequences (e.g., 00.png, 01.png, ...).
 */
const ScrollSequence: React.FC<ScrollSequenceProps> = ({
                                                         frameCount,
                                                         basePath,
                                                         framePadding = 3,
                                                         heightVh = 500, // Default scroll duration is 500vh
                                                         className = '',
                                                       }) => {
  // Explicitly type the refs for TypeScript
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Function to construct the image path based on 0-based index
  const getImagePath = (index: number) => {
    // Frames start at 0
    const frameNumber = index.toString().padStart(framePadding, '0');
    return `${basePath}${frameNumber}.png`;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    // Check for null refs before proceeding
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    // Array to hold images, indexed 0 to frameCount - 1
    const images: HTMLImageElement[] = [];
    let animationTrigger: ScrollTrigger | undefined;

    setIsLoading(true);

    // 1. Preload all images and capture promises
    const imagePromises: Promise<unknown>[] = [];

    // LOOP CHANGE: Start at 0, end at frameCount - 1 (e.g., 0 to 68)
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      images[i] = img;
      img.src = getImagePath(i); // Use the 0-based index

      imagePromises.push(
        new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = () => {
            console.error(`Failed to load frame: ${img.src}`);
            reject();
          };
        })
      );
    }

    // 2. Setup after all images are loaded
    Promise.all(imagePromises).then(() => {
      setIsLoading(false);

      // First image is now images[0]
      const firstImage = images[0];
      if (!firstImage) return;

      // Set the internal canvas resolution based on the first loaded image
      canvas.width = firstImage.width;
      canvas.height = firstImage.height;
      context.drawImage(firstImage, 0, 0, canvas.width, canvas.height);

      // Function to draw the frame
      const updateFrame = (index: number) => {
        // Clamp index between 0 and frameCount - 1
        const frameIndex = Math.min(Math.max(Math.floor(index), 0), frameCount - 1);
        const img = images[frameIndex];

        if (img) {
          context.clearRect(0, 0, canvas.width, canvas.height);
          // This draws the image scaled to fit the full internal canvas size
          context.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
      };

      // 3. GSAP ScrollTrigger Setup
      if (containerRef.current) {
        animationTrigger = ScrollTrigger.create({
          trigger: containerRef.current,
          pin: canvas, // Pin the canvas element
          start: "top top",
          end: "bottom top",
          scrub: 0.5, // Smooth scrubbing
          onUpdate: (self) => {
            const progress = self.progress;
            // Calculate 0-based index: progress * total number of frames
            const newFrameIndex = progress * frameCount;
            updateFrame(newFrameIndex);
          }
        });
        ScrollTrigger.refresh();
      }

    }).catch(error => {
      console.error("One or more images failed to load:", error);
      setIsLoading(false);
    });

    // 4. Cleanup function
    return () => {
      if (animationTrigger) {
        animationTrigger.kill();
      }
    };

  }, [frameCount, basePath, framePadding]);

  return (
    <div
      ref={containerRef}
      // Set the scroll length of the container via style
      style={{ height: `${heightVh}vh` }}
      className="relative w-full"
    >
      <canvas
        ref={canvasRef}
        // w-full h-screen and sticky top-0 ensures it stays pinned
        className={`w-full h-screen sticky top-0 ${className}`}
      />
      {/* Optional: Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 text-white z-20">
          Loading Animation Frames...
        </div>
      )}
    </div>
  );
};

export default ScrollSequence;