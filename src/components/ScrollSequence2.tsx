"use client";

import { useCallback, useEffect, useRef, useState } from "react";

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
                                          className = "",
                                          startFrame = 0,
                                        }: ScrollSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [images, setImages] = useState<(HTMLImageElement | null)[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getFrameName = useCallback((i: number) =>
      `${basePath}${String(startFrame + i).padStart(padDigits, "0")}.${fileType}`,
    [basePath, startFrame, padDigits, fileType]
  );

  useEffect(() => {
    let isMounted = true;
    const imgs: (HTMLImageElement | null)[] = new Array(frameCount).fill(null);
    let loaded = 0;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = getFrameName(i);
      img.onload = () => {
        imgs[i] = img;
        loaded++;
        if (loaded === frameCount && isMounted) {
          setImages(imgs);
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        imgs[i] = null;
        loaded++;
        if (loaded === frameCount && isMounted) {
          setImages(imgs);
          setIsLoaded(true);
        }
      };
    }

    return () => {
      isMounted = false;
    };
  }, [frameCount, getFrameName]);

  useEffect(() => {
    if (!isLoaded || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const firstValidImage = images.find((im) => !!im && im.naturalWidth > 0) ?? null;
    if (!firstValidImage) return;

    canvas.width = firstValidImage.naturalWidth;
    canvas.height = firstValidImage.naturalHeight;

    canvas.style.maxHeight = "100vh";
    canvas.style.display = "block";

    let currentFrameIndex = -1;

    const findFallbackImage = (index: number): HTMLImageElement | null => {
      for (let i = index; i >= 0; i--) {
        const cand = images[i];
        if (cand && cand.naturalWidth > 0 && cand.complete) return cand;
      }
      for (let i = index + 1; i < images.length; i++) {
        const cand = images[i];
        if (cand && cand.naturalWidth > 0 && cand.complete) return cand;
      }
      return null;
    };

    const renderFrame = async (index: number) => {
      let img = images[index];
      if (!img || !img.complete || img.naturalWidth === 0) {
        img = findFallbackImage(index);
      }
      if (!img) return;

      if (typeof img.decode === "function") {
        try {
          await img.decode();
        } catch {
          const fallback = findFallbackImage(index);
          if (!fallback || fallback === img) return;
          img = fallback;
          try {
            if (typeof img.decode === "function") await img.decode();
          } catch {
            return;
          }
        }
      }

      if (!img.complete || img.naturalWidth === 0 || img.naturalHeight === 0) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      try {
        ctx.drawImage(img, 0, 0);
      } catch {
      }
    };

    const activeFramesCount = frameCount;

    const handleScroll = () => {
      const rect = containerRef.current!.getBoundingClientRect();
      const containerHeight = containerRef.current!.offsetHeight;
      const scrollDistance = -rect.top;
      let progress = 0;
      if (containerHeight > 0) {
        progress = scrollDistance / containerHeight;
      }
      progress = Math.min(Math.max(progress, 0), 1);

      let frameIndex = Math.floor(progress * (activeFramesCount - 1));
      frameIndex = Math.min(Math.max(frameIndex, 0), activeFramesCount - 1);

      if (frameIndex !== currentFrameIndex) {
        currentFrameIndex = frameIndex;
        void renderFrame(frameIndex);
      }
    };

    void renderFrame(0);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isLoaded, images, frameCount, scrollLengthVh]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${scrollLengthVh}vh` }}
    >
      <div className="sticky top-0 flex items-center justify-center h-screen overflow-hidden">
        <canvas
          ref={canvasRef}
          className={`block ${className}`}
        />
      </div>
    </div>
  );
}