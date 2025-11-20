import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const IPAD_WIDTH = 960;
const IPAD_HEIGHT = 700;
const BEZEL_WIDTH = 40;
const SCREEN_X = BEZEL_WIDTH;
const SCREEN_Y = BEZEL_WIDTH;
const SCREEN_WIDTH = IPAD_WIDTH - (BEZEL_WIDTH * 2);
const SCREEN_HEIGHT = IPAD_HEIGHT - (BEZEL_WIDTH * 2);

const LEFT_PCT = (SCREEN_X / IPAD_WIDTH) * 100;
const TOP_PCT = (SCREEN_Y / IPAD_HEIGHT) * 100;
const WIDTH_PCT = (SCREEN_WIDTH / IPAD_WIDTH) * 100;
const HEIGHT_PCT = (SCREEN_HEIGHT / IPAD_HEIGHT) * 100;

export interface IpadProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  videoSrc?: string;
  children?: ReactNode;
}

export function Ipad({
                       src,
                       videoSrc,
                       children,
                       className,
                       style,
                       ...props
                     }: IpadProps) {
  const hasVideo = !!videoSrc;

  return (
    <div
      className={cn("relative inline-block w-full align-middle leading-none", className)}
      style={{
        aspectRatio: `${IPAD_WIDTH}/${IPAD_HEIGHT}`,
        ...style,
      }}
      {...props}
    >
      <div
        className="absolute overflow-hidden bg-gray-100"
        style={{
          left: `${LEFT_PCT}%`,
          top: `${TOP_PCT}%`,
          width: `${WIDTH_PCT}%`,
          height: `${HEIGHT_PCT}%`,
          borderRadius: '12px',
        }}
      >
        {(hasVideo || src) && (
          <div className="absolute inset-0 z-0 w-full h-full">
            {hasVideo ? (
              <video
                className="block w-full h-full object-cover"
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                src={src}
                alt=""
                className="block w-full h-full object-cover"
              />
            )}
          </div>
        )}

        {children && (
          <div className="relative z-10 w-full h-full overflow-y-auto no-scrollbar">
            {children}
          </div>
        )}
      </div>

      <svg
        viewBox={`0 0 ${IPAD_WIDTH} ${IPAD_HEIGHT}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
      >
        <defs>
          <mask id="bezelMask">
            <rect width={IPAD_WIDTH} height={IPAD_HEIGHT} fill="white" />
            <rect
              x={SCREEN_X}
              y={SCREEN_Y}
              width={SCREEN_WIDTH}
              height={SCREEN_HEIGHT}
              rx="12"
              fill="black"
            />
          </mask>
        </defs>

        <rect
          x="2" y="2"
          width={IPAD_WIDTH - 4}
          height={IPAD_HEIGHT - 4}
          rx="32"
          fill="white"
          mask="url(#bezelMask)"
        />

        <rect
          x="2" y="2"
          width={IPAD_WIDTH - 4}
          height={IPAD_HEIGHT - 4}
          rx="32"
          stroke="black"
          strokeWidth="4"
        />

        <rect
          x={SCREEN_X}
          y={SCREEN_Y}
          width={SCREEN_WIDTH}
          height={SCREEN_HEIGHT}
          rx="12"
          stroke="black"
          strokeWidth="3"
        />

        <circle cx={IPAD_WIDTH / 2} cy={SCREEN_Y / 2} r="4" fill="white" stroke="black" strokeWidth="2" />

        <rect
          x={(IPAD_WIDTH / 2) - 60}
          y={IPAD_HEIGHT - SCREEN_Y - 15}
          width="120"
          height="4"
          rx="2"
          fill="black"
        />

        <path d={`M${IPAD_WIDTH - 80} 0 H${IPAD_WIDTH - 40}`} stroke="black" strokeWidth="4" strokeLinecap="round" />
        <path d={`M${IPAD_WIDTH} 90 V140`} stroke="black" strokeWidth="4" strokeLinecap="round" />
        <path d={`M${IPAD_WIDTH} 160 V210`} stroke="black" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  );
}