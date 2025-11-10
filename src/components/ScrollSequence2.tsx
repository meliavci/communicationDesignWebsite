"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollSequenceProps {
  basePath: string;
  frameCount: number;
  fileType?: string;
  padDigits?: number;
  scrollLengthVh?: number;
  scrollSpeedFactor?: number;
  className?: string;
  startFrame?: number;
}

export default function ScrollSequence2({
                                          basePath,
                                          frameCount,
                                          fileType = "png",
                                          padDigits = 4,
                                          scrollLengthVh = 200,
                                          scrollSpeedFactor = 1.0,
                                          className = "",
                                          startFrame = 0,
                                        }: ScrollSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getFrameName = (i: number) =>
    `${basePath}${String(i).padStart(padDigits, "0")}.${fileType}`;


  useEffect(() => {
    let isMounted = true;
    const imgs: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = getFrameName(i);
      img.onload = () => {
        loaded++;
        if (loaded === frameCount && isMounted) {
          setImages(imgs);
          setIsLoaded(true);
        }
      };
      imgs.push(img);
    }

    return () => {
      isMounted = false;
    };
  }, [basePath, frameCount, fileType, padDigits]);


  useEffect(() => {
    if (!isLoaded || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const firstImage = images[0];
    canvas.width = firstImage.width;
    canvas.height = firstImage.height;

    let currentFrame = startFrame;

    const renderFrame = (index: number) => {
      const img = images[index];
      if (!img) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    };

    const activeFramesCount = frameCount - startFrame;

    const handleScroll = () => {
      const rect = containerRef.current!.getBoundingClientRect();

      const containerHeight = containerRef.current!.offsetHeight;

      const scrollDistance = -rect.top;

      let progress = 0;

      if (containerHeight > 0) {
        progress = scrollDistance / containerHeight;
      }

      progress = Math.min(Math.max(progress, 0), 1);


      let frameIndex = startFrame + Math.floor(progress * (activeFramesCount - 1));

      frameIndex = Math.min(frameIndex, frameCount - 1);


      if (frameIndex !== currentFrame) {
        currentFrame = frameIndex;
        renderFrame(frameIndex);
      }
    };

    renderFrame(startFrame);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isLoaded, images, frameCount, startFrame]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${scrollLengthVh}vh` }}
    >
      <div className="sticky top-0 flex items-center justify-center h-screen overflow-hidden">
        <canvas
          ref={canvasRef}
          className={`max-w-full max-h-full object-contain ${className}`}
        />
      </div>
    </div>
  );
}