// src/components/pages/ArticleThree.tsx
'use client';

import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import ScrollSequence2 from '@/components/ScrollSequence2';
import {cn} from '@/lib/utils';
import {motion, useInView} from "motion/react";
import {PixelImage} from "@/components/ui/pixel-image";
import {PulsatingButton} from "@/components/ui/pulsating-button";
import {Sparkles, TrendingUp, Zap} from 'lucide-react';
import {LineShadowText} from "@/components/ui/line-shadow-text";
import HoverableSequence from "@/components/HoverableSequence";


// --- Component: SketchyTitle (Blueprint Heading Helper) ---
interface SketchyTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  font?: 'CabinSketch' | 'default'; // Nur CabinSketch als Option
}

const fontMap: Record<string, string> = {
  CabinSketch: 'var(--font-cabin-sketch)',
  default: 'monospace, var(--font-geist-mono), sans-serif',
};

const SketchyTitle: React.FC<SketchyTitleProps> = ({children, className, font = 'CabinSketch', ...props}) => {
  const customFontFamily = fontMap[font] || fontMap['default'];
  return (
    <h2
      className={cn(
        "blueprint-heading text-4xl md:text-5xl lg:text-6xl uppercase tracking-widest my-6 border-b border-white/30 pb-2",
        className
      )}
      style={{
        textShadow: '0 0 5px rgba(224, 255, 255, 0.5), 1px 1px 0 #000',
        fontFamily: customFontFamily, // Apply font here
      }}
      {...props}
    >
      {children}
    </h2>
  );
};

function LoopingSequence({basePath, frameCount, padDigits = 2, fileType = 'png', className = '', interval = 80}) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFrame(prev => (prev + 1) % frameCount);
    }, interval);
    return () => clearInterval(timer);
  }, [frameCount, interval]);

  const frameStr = String(frame).padStart(padDigits, '0');
// Fix: Remove '/' between basePath and frameStr
  const src = `${basePath}${frameStr}.${fileType}`;

  return <img src={src} alt="" className={className}/>;
}


// --- Component: Illustration (Wrapper for Sequence/PixelImage) ---
interface IllustrationProps {
  src: string;
  alt: string;
  caption: string;
  className?: string;
  isSequence?: boolean;
  isInteractive?: boolean;
  sequenceFrameCount?: number;
  sequenceStartFrame?: number;
  scrollLengthVh?: number;
}

const Illustration: React.FC<IllustrationProps> = ({
                                                     src,
                                                     alt,
                                                     caption,
                                                     className,
                                                     isSequence = false,
                                                     isInteractive = false,
                                                     sequenceFrameCount = 25,
                                                     sequenceStartFrame = 0,
                                                     scrollLengthVh = 40,
                                                   }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, amount: 0.1});
  const [key, setKey] = useState(0);

  const handleButtonClick = useCallback(() => {
    if (isInteractive) {
      // Force re-render/remount of ScrollSequence2 to 'replay' from start
      setKey(prev => prev + 1);
    }
  }, [isInteractive]);

  const isPixel = !isSequence && !isInteractive;

  return (
    <figure
      ref={ref}
      className={cn(
        // Added blueprint-style container styling (bg-black/10 for blur contrast)
        "my-8 p-4 border border-white/20 shadow-xl backdrop-blur-sm relative bg-black/10",
        "transition-all duration-1000 ease-out",
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        className
      )}
    >
      {isSequence || isInteractive ? (
        <div key={key} className="relative w-full h-full">
          {isInteractive && (
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <PulsatingButton
                onClick={handleButtonClick}
                pulseColor="#4CB0FF"
                className="w-40 h-20 bg-[#4CB0FF] text-white/90 font-bold text-xl rounded-full opacity-90 hover:opacity-100 transition-opacity"
              >
                Click me!
              </PulsatingButton>
            </div>
          )}
          <ScrollSequence2
            basePath={src}
            frameCount={sequenceFrameCount}
            padDigits={2}
            fileType="png"
            scrollLengthVh={scrollLengthVh}
            scrollSpeedFactor={1.5}
            startFrame={sequenceStartFrame}
            className={cn(
              "w-full h-auto grayscale",
              isInteractive ? "opacity-30 blur-sm" : ""
            )}
          />
        </div>
      ) : isPixel ? (
        <div className="relative w-full h-72 mx-auto grayscale-60">
          <PixelImage
            src={src}
            grid="8x8"
            className="size-full"
            grayscaleAnimation={true}
            pixelFadeInDuration={800}
          />
        </div>
      ) : (
        <img src={src} alt={alt} className="w-full h-auto opacity-90 grayscale"/> // Applied grayscale/opacity to static image
      )}

        <figcaption className="text-xs mt-2 text-center blueprint-text text-white/70">
          {caption}
        </figcaption>
    </figure>
  );
};

// --- Component: StreetIllustration (For Illustration 1) ---
const StreetIllustration = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, amount: 0.1});

  return (
    <figure
      ref={ref}
      className={cn(
        // Applies the common illustration style to the container
        "border border-white/20 shadow-xl backdrop-blur-sm relative bg-black/10 -py-15",
        "transition-all duration-1000 ease-out",
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        "flex flex-col items-center mt-10 " // Adjusted margin for layout fix
      )}
    >
      <div className="flex flex-col items-center">
        <LoopingSequence
          basePath="/Article3/street/rightSequence/rightWalk"
          frameCount={33}
          padDigits={2}
          fileType="png"
          className="w-250 rotate-180 grayscale-60"
        />
        <img src="/Article3/street/boyLooksUp.png" alt="Boy looks up"
             className="w-50 h-auto mx-auto -my-40 grayscale-60"/>
        <LoopingSequence
          basePath="/Article3/street/rightSequence/rightWalk"
          frameCount={33}
          padDigits={2}
          fileType="png"
          className="w-250 grayscale-60"
        />
      </div>
    </figure>
  );
};


// --- Component: StockTrendChart (NEW) ---

const StockTrendChart: React.FC = () => {
  const [activeLines, setActiveLines] = useState<Record<string, boolean>>({
    meta: true,
    alphabet: true,
    socialIndex: true,
  });

  // Simulated 5-year normalized data (2020-2025)
  const data = useMemo(() => [
    {year: '2020', meta: 100, alphabet: 100, socialIndex: 100},
    {year: '2021', meta: 150, alphabet: 130, socialIndex: 140},
    {year: '2022', meta: 80, alphabet: 105, socialIndex: 90},
    {year: '2023', meta: 200, alphabet: 180, socialIndex: 160},
    {year: '2024', meta: 250, alphabet: 220, socialIndex: 200},
    {year: '2025', meta: 280, alphabet: 250, socialIndex: 230},
  ], []);

  const maxVal = Math.max(...data.flatMap(d => [d.meta, d.alphabet, d.socialIndex]));
  const minVal = Math.min(...data.flatMap(d => [d.meta, d.alphabet, d.socialIndex]));
  const range = maxVal - minVal;

  const toggleLine = (key: string) => {
    setActiveLines(prev => ({...prev, [key]: !prev[key]}));
  };

  const LineConfig = {
    meta: {color: '#ef4444', logo: () => <Zap className="size-5"/>, name: 'Meta Platforms (META)'},
    alphabet: {color: '#10b981', logo: () => <TrendingUp className="size-5"/>, name: 'Alphabet Inc. (GOOGL/YouTube)'},
    socialIndex: {
      color: '#f59e0b',
      logo: () => <Sparkles className="size-5"/>,
      name: 'Social Index (Simulated/TikTok Proxy)'
    },
  };

  return (
    // MADE MORE SUBTLE: bg-black/5, border-white/10, text-white/80
    <div className="w-full mt-20 p-6 bg-black/5 border border-white/10 rounded-lg shadow-inner">
      <h3 className="text-2xl font-bold mb-4 text-center text-white/80">
        The Price of Attention: 5-Year Tech Stock Trend (Normalized Value)
      </h3>

      <div className="flex justify-center space-x-4 mb-8">
        {Object.keys(LineConfig).map((key) => {
          const config = LineConfig[key as keyof typeof LineConfig];
          return (
            <button
              key={key}
              onClick={() => toggleLine(key)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-300",
                activeLines[key] ? 'bg-white text-gray-900 shadow-md' : 'bg-white/20 text-white hover:bg-white/30'
              )}
            >
              <span style={{color: activeLines[key] ? config.color : undefined}}>{config.logo()}</span>
              <span
                className={activeLines[key] ? 'text-gray-900' : 'text-white/80'}>{key === 'meta' ? 'Meta' : key === 'alphabet' ? 'Alphabet' : 'Social Index'}</span>
            </button>
          );
        })}
      </div>

      <div className="relative w-full h-72" style={{marginLeft: '3rem'}}>
        {/* Y-Axis Labels (Simulated) */}
        <div
          className="absolute top-0 left-0 h-full flex flex-col justify-between text-xs text-white/40 w-12 text-right pr-2 transform -translate-x-full">
          <span>{Math.round(maxVal * 1.05)}</span>
          <span>{Math.round((maxVal + minVal) / 2)}</span>
          <span>{Math.round(minVal * 0.95)}</span>
        </div>

        {/* Chart Grid/Area (Simulated) */}
        {/* MADE MORE SUBTLE: border-white/10 */}
        <div className="absolute top-0 left-0 right-0 h-full border-l border-b border-white/10">
          {/* Horizontal Grid Lines */}
          {/* MADE MORE SUBTLE: bg-white/5 */}
          {[...Array(5)].map((_, i) => (
            <div key={i} className="absolute left-0 w-full h-px bg-white/5" style={{top: `${i * 25}%`}}/>
          ))}

          {/* Data Lines (Simple SVG for visualization) */}
          <svg className="absolute inset-0 size-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {Object.entries(activeLines).map(([key, isActive]) => {
              if (!isActive) return null;
              const config = LineConfig[key as keyof typeof LineConfig];
              const points = data.map((d, i) => {
                const normalizedValue = 100 - ((d[key as keyof typeof data[0]] - minVal) / range) * 100;
                const x = (i / (data.length - 1)) * 100;
                return `${x},${normalizedValue}`;
              }).join(' ');

              return (
                <motion.polyline
                  key={key}
                  points={points}
                  fill="none"
                  stroke={config.color}
                  strokeWidth="1" // MADE MORE SUBTLE
                  initial={{pathLength: 0}}
                  animate={{pathLength: 1}}
                  transition={{duration: 1.5}}
                />
              );
            })}
          </svg>

          {/* X-Axis Labels */}
          <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-white/50 pt-2 pb-1">
            {data.map((d, i) => (
              <span key={i} className="px-1">{d.year}</span>
            ))}
          </div>
        </div>
        <p className='absolute right-0 bottom-0 text-xs text-white/40 italic pt-1'>TikTok (ByteDance) is a private
          company.</p>
      </div>
    </div>
  );
};


// --- Main ArticleThree Component ---

export default function ArticleThree() {
  // Removed unused sequenceKey state

  return (
    // Outer White Page Container
    <div className="bg-white h-full flex flex-col relative z-10 mx-auto max-w-[85%] overflow-hidden">
      <div
        className="min-h-screen bg-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
        {/* Inner Blueprint Container (Centered and with Margin) */}
        <div className={cn(
          "max-w-screen-2xl mx-auto w-full p-0 md:p-12 lg:p-16 flex flex-col items-center gap-12 w-full overflow-hidden",
        )}>

          <div className="blueprint-bg p-10">
            <style jsx global>{`
                /* Apply blueprint styles globally for this page only */
                .blueprint-bg h1, .blueprint-bg h2, .blueprint-bg h3, .blueprint-bg p, .blueprint-bg a, .blueprint-bg span, .blueprint-bg figcaption, .blueprint-bg blockquote {
                    color: #E0FFFF; /* Blueprint color */
                }

                .blueprint-bg .blueprint-heading {
                    color: #E0FFFF; /* Heading color */
                }

                .blueprint-bg a {
                    color: #4CB0FF; /* Link color */
                    text-decoration: underline;
                    text-decoration-color: #4CB0FF;
                }

                .blueprint-bg .blueprint-text {
                    font-family: var(--font-schoolbell), cursive; /* UPDATED FONT FAMILY */
                    font-weight: 400;
                    line-height: 1.6;
                }
            `}</style>
            <div className="blueprint-text">

              {/* --- HEADER --- */}
              <header className="pb-6 text-center p-20">
                <SketchyTitle
                  className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-none mb-4"
                >
                  <LineShadowText as="span" shadowColor="#4CB0FF">
                    WHEN WE FINALLY LOOK UP, IT WILL BE TOO LATE
                  </LineShadowText>
                </SketchyTitle>
                <p className="text-2xl italic font-pt-sans text-white/80">
                  One professor warns that a mass awakening is inevitable — but only after the damage is done.
                </p>
                <p className="text-sm font-open-sans text-white/50 mt-4">
                  November 11, 2025 | By Daniel Betto
                </p>
              </header>

              {/* Illustration 1 - PNG Sequence with Blueprint Styling Wrapper */}
              <div className="flex flex-col items-center -mt-20">
                <LoopingSequence
                  basePath="/Article3/street/rightSequence/rightWalk"
                  frameCount={33}
                  padDigits={2}
                  fileType="png"
                  className="w-250 rotate-180 grayscale-60"
                />
                <img src="/Article3/street/boyLooksUp.png" alt="Boy looks up"
                     className="w-50 h-auto mx-auto -my-40 grayscale-60"/>
                <LoopingSequence
                  basePath="/Article3/street/rightSequence/rightWalk"
                  frameCount={33}
                  padDigits={2}
                  fileType="png"
                  className="w-250 grayscale-60"
                />
              </div>

              <div className="flex flex-col items-center px-20 text-center -mt-10">
                <SketchyTitle className="mb-10">Systematic Addiction</SketchyTitle>
                <div className="flex flex-row items-center">
                  <p className="blueprint-text px-15 text-center">
                    Doomscrolling, the vicious cycle of endlessly consuming short-form content has become increasingly
                    normalized in the years following the Covid-19 pandemic. One 57-year-old professor, who requested to
                    be anonymous due to his strong views and opinions, argues it is not a habit, but
                    a &ldquo;system-built addiction&rdquo; deliberately encouraged by social media.
                  </p>
                  <img src="/Article3/controllerChess.png" className="w-103 grayscale-60"
                       alt="Professor playing chess with a game controller"/>
                </div>

                <SketchyTitle className="mt-20">A life of control, not compulsion</SketchyTitle>
                <p className="blueprint-text mb-6">
                  The professor manages his screen time carefully and within control. He spends about two to three hours
                  a day on his phone, though part of it is multitasked. &ldquo;I cycle for an hour while I play
                  chess,&rdquo; he says, combining physical activity with mental stimulation. Beyond that, he works on
                  his computer for four to five hours and spends similar amount of time gaming. He thinks of gaming as a
                  tool to have a break from reality, and not as a tool that can gain control over him.
                </p>
                <blockquote className="my-6 p-4 border-l-4 border-yellow-400 bg-white/10 italic text-lg ml-4">
                  &ldquo;I do not game because I have to, I choose to. I am not addicted to gaming, but I am addicted to
                  meaning and passion. As soon as I feel like the meaning within gaming is fading away, I choose to do
                  something else,&rdquo; he explains.
                </blockquote>

                <SketchyTitle className="mt-20">Temptation of opening the door</SketchyTitle>
                <p className="blueprint-text mb-6">
                  To prevent addiction, he avoids multiplayer games entirely, which he calls an &ldquo;open
                  door&rdquo; to addictive traits.
                </p>
                <p className="blueprint-text mb-6">
                  &ldquo;I remove the choice. I know what invites addiction, so I don’t open the door. Even if I am
                  tempted&rdquo;. His strategies have also influenced his daughter, who grew up with social media.
                  Despite spending a considerable amount of time on Tik Tok, it is still within control.
                </p>
                <p className="blueprint-text italic mb-6">
                  &ldquo;She grew up on social media. The difference is that she gets a lot of screen time because of
                  social media, I don’t have social media,&rdquo; he says.
                </p>

                <SketchyTitle className="text-3xl mt-20">It is all according to plan</SketchyTitle>
                <p className="blueprint-text">
                  The professor believes doomscrolling is not accidental but an engineered business strategy. Fear,
                  instant gratification and algorithmic design combine to keep users engaged, often at the expense of
                  other important activities. <br/><br/> &ldquo;It is a newer version of the same old business trick. ‘I
                  want more from you.’ More profit, more customers, more interactions. Because the more you use, the
                  more profit I get,&rdquo; he says. &ldquo;This is why you have strong algorithms, content and
                  functionality to create addiction. Addiction is good for companies, because you get more uses,
                  critical mass, more transactions and more influencers. It is not society’s fault they are addicted; it
                  is the organizations.&rdquo;
                </p>

                <img src="/Article3/chess.png" alt="Sequence showing profit extraction from users"
                     className="w-full mt-15 grayscale-60"/>

                <p className="blueprint-text mb-6 mt-15">
                  But beyond business agendas, doomscrolling also affects psychological patterns. For example, addiction
                  can be defined as many things, and self-sabotage is one of them. This is what the professor believes
                  is one of the core ingredients to fuelling addiction.
                </p>
                <p className="blueprint-text italic">
                  &ldquo;You have other things to do, but you can’t stop. Then two hours pass, you’re not happy, but you
                  do it again. When two unhappy and addicted people are together, they can’t stop each other,&rdquo; in
                  other words, doomscrolling is not only a waste of time, but a real cause of unhappiness, which makes
                  it even harder to decide on doing other things with higher priority.
                </p>

                <SketchyTitle className="mt-20">Globalizing Fear of Missing Out</SketchyTitle>
                <p className="blueprint-text mb-6">
                  Another core ingredient is the phrase &ldquo;FOMO&rdquo;, which means **F**ear **O**f **M**issing
                  **O**ut. This is something the professor mentions multiple times as the organizations’ way to collect
                  money effectively from its users.
                </p>

                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Illustration 4 - Interactive PNG Sequence with Pulsating Button */}
                  <blockquote
                    className="md:w-1/2 my-auto p-4 border-l-4 border-yellow-400 bg-white/10 italic text-xl">
                    &ldquo;Fear of missing out has always been the fall of man. But now it’s built into a system. The
                    only way to not miss out will always be one click away. And that is exactly how the algorithm
                    keeps people online and the tech gets all the money,&rdquo; he explains.
                  </blockquote>
                  <HoverableSequence
                    basePath="/Article3/moneySequence/click-flew-money-ani"
                    startFrame={100}
                    endFrame={134}
                    padDigits={3}
                    fileType="png"
                    className="w-full h-auto grayscale-60 -pr-40 -pl-20 -pt-20 -pb-20"
                    hoverScale={1.1}
                    interval={100}
                  />
                </div>
                <SketchyTitle className='text-center mt-20'>The Price of Attention</SketchyTitle>
                {/*<StockTrendChart/>*/}
                <SketchyTitle className="mt-20">The awakening will not be gentle</SketchyTitle>
                <p className="blueprint-text mb-6">
                  Looking further ahead, the professor doubts that society can solve the doomscrolling problem
                  gradually. He argues that change will only occur when people collectively realize the unhappiness it
                  causes, creating a &ldquo;mass awakening&rdquo;.
                </p>
                <blockquote className="my-6 p-4 border-l-4 border-yellow-400 bg-white/10 italic text-lg ml-4">
                  &ldquo;People will eventually get tired of social media, but not yet. It will get worse first. When
                  enough people realize they’re not happy, then the awakening begins. If everything shuts off at once,
                  there would be mass withdrawal. There will be a price to pay either way.&rdquo;
                </blockquote>
                <p className="blueprint-text mb-15">
                  &ldquo;The realization will build up until there’s a counterattack against the organizations. It will
                  happen, just a matter of time.&rdquo;
                </p>

                <img src="/Article3/buildings.png" alt="Company buildings" className="w-220 grayscale-60"/>

              </div>
              <footer
                className="mt-12 pb-30 pt-8 border-t-2 border-white/50 text-center text-white/70 text-sm font-open-sans w-full max-w-screen-xl">
                <p>Communication Design 2025</p>
                <p>Melisa Avci, Raphael Tam-Dao, Daniel Betto, Ylva Romann Aas, Ingrid Christensen Øvrelid</p>
              </footer>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}