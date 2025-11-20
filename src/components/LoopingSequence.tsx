import React, { useEffect, useState } from 'react';

interface LoopingSequenceProps {
  basePath: string;
  frameCount: number;
  padDigits?: number;
  fileType?: string;
  className?: string;
  interval?: number;
  startFrame?: number;
}

export default function LoopingSequence({
                                          basePath,
                                          frameCount,
                                          padDigits = 2,
                                          fileType = 'png',
                                          className = '',
                                          interval = 80,
                                          startFrame = 0,
                                        }: LoopingSequenceProps) {
  const [relativeIndex, setRelativeIndex] = useState<number>(0);

  useEffect(() => {
    setRelativeIndex(0);
  }, [startFrame, frameCount]);

  useEffect(() => {
    const id = setInterval(() => {
      setRelativeIndex(prev => (prev + 1) % Math.max(1, frameCount));
    }, interval);
    return () => clearInterval(id);
  }, [frameCount, interval]);

  const displayedFrame = startFrame + relativeIndex;
  const frameStr = String(displayedFrame).padStart(padDigits, '0');
  const src = `${basePath}${frameStr}.${fileType}`;

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt="" className={className} />;
}
