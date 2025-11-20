'use client';

import React, {useMemo, useState, useEffect} from 'react';
import {cn} from '@/lib/utils';
import {TrendingUp, Zap} from 'lucide-react';
import {LineShadowText} from "@/components/ui/line-shadow-text";
import HoverableSequence from "@/components/HoverableSequence";
import {motion} from "motion/react";


interface SketchyTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  font?: 'CabinSketch' | 'default';
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
        fontFamily: customFontFamily,
      }}
      {...props}
    >
      {children}
    </h2>
  );
};

function LoopingSequence({basePath, frameCount, padDigits = 2, fileType = 'png', className = '', interval = 80}: {basePath: string, frameCount: number, padDigits?: number, fileType?: string, className?: string, interval?: number}) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFrame(prev => (prev + 1) % frameCount);
    }, interval);
    return () => clearInterval(timer);
  }, [frameCount, interval]);

  const frameStr = String(frame).padStart(padDigits, '0');
  const src = `${basePath}${frameStr}.${fileType}`;

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt="" className={className}/>;
}

const StockTrendChart: React.FC = () => {
  const [activeLines, setActiveLines] = useState<Record<string, boolean>>({
    meta: true,
    alphabet: true,
  });

  // Real, normalized stock data for Meta and Alphabet (Google)
  const data = useMemo(() => [
    // Normalized to 100 at the approximate start of 2019
    {year: '2019', meta: 100, alphabet: 100, label: '01/2019'},
    {year: '2020', meta: 184, alphabet: 138, label: '07/2020'},
    {year: '2021', meta: 247, alphabet: 276, label: '11/2021'},
    {year: '2022', meta: 94, alphabet: 188, label: '10/2022'},
    {year: '2023', meta: 218, alphabet: 243, label: '09/2023'},
    {year: '2024', meta: 435, alphabet: 358, label: '12/2024'},
  ], []);

  const dataKeys = useMemo(() => ['meta', 'alphabet'], []);

  const maxVal = Math.max(...data.flatMap(d => dataKeys.map(k => d[k as 'meta' | 'alphabet'])));
  const minVal = Math.min(...data.flatMap(d => dataKeys.map(k => d[k as 'meta' | 'alphabet'])));
  const range = maxVal - minVal;

  const toggleLine = (key: string) => {
    setActiveLines(prev => ({...prev, [key]: !prev[key]}));
  };

  const LineConfig = {
    meta: {color: 'oklch(69.6% 0.17 162.48)', logo: () => <Zap className="size-5"/>, name: 'Meta Platforms (META)'},
    alphabet: {color: 'oklch(85.2% 0.199 91.936)', logo: () => <TrendingUp className="size-5"/>, name: 'Alphabet Inc. (GOOGL/Google)'},
  };

  return (
    <div className="w-full p-6 bg-black/5 border border-white/10 rounded-lg shadow-inner backdrop-blur-sm overflow-hidden">
      <h3 className="text-xl md:text-2xl font-bold mb-4 text-center text-white/80">
        The Price of Attention: Tech Stock Trend (2019-2024, Normalized Value)
      </h3>

      {/* DATA SOURCE */}
      <p className='text-xs text-white/40 italic text-center -mt-2 mb-6'>
        Data Source: Normalized from year-end closing prices of NASDAQ histories (META, GOOGL)
      </p>

      <div className="flex justify-center space-x-4 mb-8 flex-wrap gap-y-2">
        {Object.keys(LineConfig).map((key) => {
          const config = LineConfig[key as keyof typeof LineConfig];
          return (
            <button
              key={key}
              onClick={() => toggleLine(key)}
              className={cn(
                "flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full font-semibold transition-all duration-300 cursor-pointer text-sm",
                activeLines[key] ? 'bg-white/40 text-black shadow-md' : 'bg-white/20 text-white hover:bg-white/30'
              )}
              title={config.name}
            >
              <span style={{color: activeLines[key] ? config.color : undefined}}>{config.logo()}</span>
              <span
                className={cn("whitespace-nowrap", activeLines[key] ? 'text-black' : 'text-white/80')}>{key === 'meta' ? 'META' : 'GOOGL'}</span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col items-center">

        <div className="relative w-full flex flex-col md:flex-row" style={{ height: '300px' }}>

          <div className="w-full text-center mb-2 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:-ml-28 md:pr-1 md:flex md:items-center md:h-full md:flex-shrink-0 z-10 pointer-events-none">
            <span className="text-xs text-white/60 md:rotate-[-90deg] md:whitespace-nowrap md:ml-3">
              Normalized Value (100 = 01/2019)
            </span>
          </div>

          <div className="flex-1 flex flex-row h-full">
            <div
              className="flex flex-col justify-between text-xs text-white/40 w-12 text-right pr-2 flex-shrink-0 pt-1 -mr-2 h-full"
            >
              <span>{Math.round(maxVal * 1.05)}</span>
              <span>{Math.round((maxVal + minVal) / 2)}</span>
              <span>{Math.round(minVal * 0.95)}</span>
            </div>

            <div className="relative flex-1">
              <div className="absolute inset-0 border-l border-b border-white/10 overflow-hidden">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="absolute left-0 w-full h-px bg-white/5" style={{top: `${i * 25}%`}}/>
                ))}

                <svg className="absolute inset-0 size-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {Object.entries(activeLines).map(([key, isActive]) => {
                    if (!isActive) return null;
                    const config = LineConfig[key as keyof typeof LineConfig];
                    const points = data.map((d, i) => {
                      const dataKey = key as 'meta' | 'alphabet';
                      const val = d[dataKey as keyof typeof d];
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-expect-error
                      const normalizedValue = 100 - ((val - minVal) / range) * 100;
                      const x = (i / (data.length - 1)) * 100;
                      return `${x},${normalizedValue}`;
                    }).join(' ');

                    return (
                      <motion.polyline
                        key={key}
                        points={points}
                        fill="none"
                        stroke={config.color}
                        strokeWidth="1"
                        initial={{pathLength: 0}}
                        animate={{pathLength: 1}}
                        transition={{duration: 1.5}}
                      />
                    );
                  })}
                </svg>
              </div>

              <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-white/50 pt-2 pb-1 translate-y-full">
                {data.map((d, i) => (
                  <span key={i} className="px-1">{d.label}</span>
                ))}
              </div>
            </div>
          </div>


        </div>

        <div className="w-full text-center mt-12 md:mt-10">
          <span className="text-sm text-white/60">Timeframe</span>
        </div>
      </div>
    </div>
  );
};



export default function ArticleThree() {

  return (
    <div className="bg-white h-full flex flex-col relative z-10 mx-auto max-w-full xl:max-w-[85%] overflow-hidden">
      <div
        className="min-h-screen bg-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
        <div className={cn(
          "max-w-screen-2xl mx-auto w-full p-4 md:p-12 lg:p-16 flex flex-col items-center gap-12 w-full overflow-hidden",
        )}>

          <div className="blueprint-bg p-6 sm:p-10">
            <style jsx global>{`
                .blueprint-bg h1, .blueprint-bg h2, .blueprint-bg h3, .blueprint-bg p, .blueprint-bg a, .blueprint-bg span, .blueprint-bg figcaption, .blueprint-bg blockquote {
                    color: #E0FFFF;
                }

                .blueprint-bg .blueprint-heading {
                    color: #E0FFFF; 
                }

                .blueprint-bg a {
                    color: #4CB0FF; 
                    text-decoration: underline;
                    text-decoration-color: #4CB0FF;
                }

                .blueprint-bg .blueprint-text {
                    font-family: var(--font-schoolbell), cursive; 
                    font-weight: 400;
                    line-height: 1.6;
                }
            `}</style>
            <div className="blueprint-text">

              <header className="pb-6 text-center p-5 md:p-10 lg:p-20">
                <SketchyTitle
                  className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none mb-4"
                >
                  <LineShadowText as="span" shadowColor="#4CB0FF">
                    WHEN WE FINALLY LOOK UP, IT WILL BE TOO LATE
                  </LineShadowText>
                </SketchyTitle>
                <p className="text-lg md:text-2xl italic font-pt-sans text-white/80">
                  One professor warns that a mass awakening is inevitable — but only after the damage is done.
                </p>
                <p className="text-sm font-open-sans text-white/50 mt-4">
                  November 11, 2025 | By Daniel Betto
                </p>
              </header>

              <div className="flex flex-col items-center mt-5 md:-mt-55">
                <LoopingSequence
                  basePath="/Article3/street/rightSequence/rightWalk"
                  frameCount={33}
                  padDigits={2}
                  fileType="png"
                  className="w-full max-w-sm sm:max-w-md lg:max-w-xl xl:max-w-[1025px] grayscale-60"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/Article3/street/boyLooksUp.png" alt="Boy looks up"
                     className="w-1/3 max-w-[125px] md:max-w-xs h-auto mx-auto -my-10 md:-my-20 lg:-my-25 grayscale-60"/>
                <LoopingSequence
                  basePath="/Article3/street/rightSequence/rightWalk"
                  frameCount={33}
                  padDigits={2}
                  fileType="png"
                  className="w-full max-w-sm sm:max-w-md lg:max-w-xl xl:max-w-[1025px] grayscale-60 -mt-10"
                />
              </div>

              <div className="flex flex-col items-center px-4 sm:px-10 lg:px-20 text-center mt-10 md:-mt-10">
                <SketchyTitle className="mb-10">Systematic Addiction</SketchyTitle>
                <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-0">
                  <p className="blueprint-text p-4 lg:px-15 text-center lg:w-2/3">
                    Doomscrolling, the vicious cycle of endlessly consuming short-form content has become increasingly
                    normalized in the years following the Covid-19 pandemic. One 57-year-old professor, who requested to
                    be anonymous due to his strong views and opinions, argues it is not a habit, but
                    a &ldquo;system-built addiction&rdquo; deliberately encouraged by social media.
                  </p>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/Article3/controllerChess.png" className="w-full max-w-sm sm:max-w-md lg:w-1/3 xl:max-w-[258px] grayscale-60"
                       alt="Professor playing chess with a game controller"/>
                </div>

                <SketchyTitle className="mt-10 md:mt-20">A life of control, not compulsion</SketchyTitle>
                <p className="blueprint-text mb-6">
                  The professor manages his screen time carefully and within control. He spends about two to three hours
                  a day on his phone, though part of it is multitasked. &ldquo;I cycle for an hour while I play
                  chess,&rdquo; he says, combining physical activity with mental stimulation. Beyond that, he works on
                  his computer for four to five hours and spends similar amount of time gaming. He thinks of gaming as a
                  tool to have a break from reality, and not as a tool that can gain control over him.
                </p>
                <blockquote className="my-6 p-4 border-l-4 border-yellow-400 bg-white/10 italic text-base md:text-lg lg:ml-4 w-full">
                  &ldquo;I do not game because I have to, I choose to. I am not addicted to gaming, but I am addicted to
                  meaning and passion. As soon as I feel like the meaning within gaming is fading away, I choose to do
                  something else,&rdquo; he explains.
                </blockquote>

                <SketchyTitle className="mt-10 md:mt-20">Temptation of opening the door</SketchyTitle>
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

                <SketchyTitle className="text-xl md:text-3xl mt-10 md:mt-20">It is all according to plan</SketchyTitle>
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

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/Article3/chess.png" alt="Sequence showing profit extraction from users"
                     className="w-full mt-10 md:mt-15 grayscale-60"/>

                <p className="blueprint-text mb-6 mt-10 md:mt-15">
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

                <SketchyTitle className="mt-10 md:mt-20">Globalizing Fear of Missing Out</SketchyTitle>
                <p className="blueprint-text mb-6">
                  Another core ingredient is the phrase &ldquo;FOMO&rdquo;, which means &#34;Fear Of Missing
                  Out&#34;. This is something the professor mentions multiple times as the organizations’ way to collect
                  money effectively from its users.
                </p>

                <div className="flex flex-col md:flex-row gap-8 items-start w-full">
                  <blockquote
                    className="md:w-1/2 my-auto p-4 border-l-4 border-yellow-400 bg-white/10 italic text-base md:text-xl w-full">
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
                    className="w-full md:w-1/2 h-auto grayscale-60 -pr-4 md:-pr-40 -pl-4 md:-pl-20 -pt-4 md:-pt-20 -pb-4 md:-pb-20"
                    hoverScale={1.1}
                    interval={100}
                  />
                </div>
                <SketchyTitle className='text-center mt-10 md:mt-20'>The Price of Attention</SketchyTitle>
                <StockTrendChart/>
                <SketchyTitle className="mt-10 md:mt-20">The awakening will not be gentle</SketchyTitle>
                <p className="blueprint-text mb-6">
                  Looking further ahead, the professor doubts that society can solve the doomscrolling problem
                  gradually. He argues that change will only occur when people collectively realize the unhappiness it
                  causes, creating a &ldquo;mass awakening&rdquo;.
                </p>
                <blockquote className="my-6 p-4 border-l-4 border-yellow-400 bg-white/10 italic text-base md:text-lg lg:ml-4 w-full">
                  &ldquo;People will eventually get tired of social media, but not yet. It will get worse first. When
                  enough people realize they’re not happy, then the awakening begins. If everything shuts off at once,
                  there would be mass withdrawal. There will be a price to pay either way.&rdquo;
                </blockquote>
                <p className="blueprint-text mb-10 md:mb-15">
                  &ldquo;The realization will build up until there’s a counterattack against the organizations. It will
                  happen, just a matter of time.&rdquo;
                </p>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/Article3/buildings.png" alt="Company buildings" className="w-full max-w-lg md:max-w-xl xl:max-w-[550px] grayscale-60"/>

              </div>
              <footer
                className="mt-12 pb-10 md:pb-30 pt-8 border-t-2 border-white/50 text-center text-white/70 text-sm font-open-sans w-full max-w-screen-xl">
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