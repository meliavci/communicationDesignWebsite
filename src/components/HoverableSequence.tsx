import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface HoverableSequenceProps {
  basePath: string;
  startFrame?: number;
  endFrame?: number;
  padDigits?: number;
  fileType?: string;
  className?: string;
  hoverScale?: number;
  interval?: number;
  play?: boolean;
  onPlay?: (playing: boolean) => void;
}

const HoverableSequence: React.FC<HoverableSequenceProps> = ({
                                                               basePath,
                                                               startFrame = 100,
                                                               endFrame = 134,
                                                               padDigits = 3,
                                                               fileType = 'png',
                                                               className = '',
                                                               hoverScale = 1.2,
                                                               interval = 80,
                                                               play = false,
                                                               onPlay,
                                                             }) => {
  const frameCount = endFrame - startFrame + 1;
  const [frame, setFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // respond to external play prop
  useEffect(() => {
    if (play) {
      setFrame(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [play]);

  // notify parent when isPlaying changes
  useEffect(() => {
    onPlay?.(isPlaying);
  }, [isPlaying, onPlay]);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isPlaying) {
      timer = setInterval(() => {
        setFrame((prev) => {
          if (prev + 1 < frameCount) return prev + 1;
          // stop at end
          setIsPlaying(false);
          return 0;
        });
      }, interval);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, frameCount, interval]);

  const frameNumber = startFrame + frame;
  const frameStr = String(frameNumber).padStart(padDigits, '0');
  const src = `${basePath}_${frameStr}.${fileType}`;

  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: hoverScale }}
      onClick={() => {
        setFrame(0);
        setIsPlaying(true);
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="Hoverable sequence" className="w-full h-auto" />
    </motion.div>
  );
};

export default HoverableSequence;