// src/components/pages/ArticleFour.tsx
'use client';

import React, {forwardRef, JSX, useEffect, useRef, useState} from 'react';

import {Safari} from '@/components/ui/safari';
import {Meteors} from '@/components/ui/meteors';
import {NumberTicker} from '@/components/ui/number-ticker';
import {AnimatedBeam} from '@/components/ui/animated-beam';
import {AnimatedList} from '@/components/ui/animated-list';
import {Tree} from '@/components/ui/file-tree';
import {Terminal} from '@/components/ui/terminal';
import {Marquee} from '@/components/ui/marquee';
import {Iphone} from '@/components/ui/iphone';
import {cn} from '@/lib/utils';

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({className, children}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

const Icons = {
  instagram: () => <img src="/Article4/Logos/Instagram.svg" alt="Instagram" className="w-5 h-5"/>,
  snapchat: () => <img src="/Article4/Logos/Snapchat.svg" alt="Snapchat" className="w-5 h-5"/>,
  tiktok: () => <img src="/Article4/Logos/TikTok.svg" alt="TikTok" className="w-5 h-5"/>,
  whatsapp: () => <img src="/Article4/Logos/Whatsapp.svg" alt="WhatsApp" className="w-5 h-5"/>,
  youtube: () => <img src="/Article4/Logos/Yotube.svg" alt="Youtube" className="w-5 h-5"/>,
  messenger: () => <img src="/Article4/Logos/Messenger.svg" alt="Messenger" className="w-5 h-5"/>,
};

function AnimatedBeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  // center anchor refs for precise beam endpoints
  const anchor1Ref = useRef<HTMLDivElement>(null);
  const anchor2Ref = useRef<HTMLDivElement>(null);
  const anchor3Ref = useRef<HTMLDivElement>(null);
  const anchor4Ref = useRef<HTMLDivElement>(null);
  const anchor5Ref = useRef<HTMLDivElement>(null);
  const anchor6Ref = useRef<HTMLDivElement>(null);
  const anchor7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[300px] w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[200px] w-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref} className="relative">
            <Icons.instagram/>
            <div ref={anchor1Ref} className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[1px] h-[1px]"/>
            </div>
          </Circle>

          <Circle ref={div5Ref} className="relative">
            <Icons.snapchat/>
            <div ref={anchor5Ref} className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[1px] h-[1px]"/>
            </div>
          </Circle>
        </div>

        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref} className="relative">
            <Icons.tiktok/>
            <div ref={anchor2Ref} className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[1px] h-[1px]"/>
            </div>
          </Circle>

          <Circle ref={div4Ref} className="size-16 relative">
            <img
              src="/Article4/Logos/brain.png"
              alt="Brain icon representing addiction/focus"
              className="size-full object-contain"
            />
            <div ref={anchor4Ref} className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[1px] h-[1px]"/>
            </div>
          </Circle>

          <Circle ref={div6Ref} className="relative">
            <Icons.whatsapp/>
            <div ref={anchor6Ref} className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[1px] h-[1px]"/>
            </div>
          </Circle>
        </div>

        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref} className="relative">
            <Icons.youtube/>
            <div ref={anchor3Ref} className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[1px] h-[1px]"/>
            </div>
          </Circle>

          <Circle ref={div7Ref} className="relative">
            <Icons.messenger/>
            <div ref={anchor7Ref} className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[1px] h-[1px]"/>
            </div>
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={anchor1Ref}
        toRef={anchor4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam containerRef={containerRef} fromRef={anchor2Ref} toRef={anchor4Ref}/>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={anchor3Ref}
        toRef={anchor4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={anchor5Ref}
        toRef={anchor4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam containerRef={containerRef} fromRef={anchor6Ref} toRef={anchor4Ref} reverse/>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={anchor7Ref}
        toRef={anchor4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}

export default function ArticleFour(): JSX.Element {
  // --- Start: Logic for Audio Toggle ---
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [volume, setVolume] = useState<number>(() => {
    try {
      const v = typeof window !== "undefined" ? localStorage.getItem("article4_volume") : null;
      return v !== null ? Math.max(0, Math.min(1, Number(v))) : 0.15; // default quieter 15%
    } catch {
      return 0.15;
    }
  });

  // Placeholder paths. Ensure these assets exist.
  const audioPath = "/Article4/videoCollageAudio.mp3";
  const iconOn = "/Article4/Logos/volume.png";
  const iconOff = "/Article4/Logos/noVolume.png";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
    try {
      localStorage.setItem("article4_volume", String(volume));
    } catch {
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = volume;
      if (isAudioPlaying) {
        // Handle play promise to avoid uncaught exception errors
        void audioRef.current.play().catch(e => console.error("Audio play failed:", e));
      } else {
        audioRef.current.pause();
      }
    }
    // Cleanup function to pause audio on unmount
    return () => {
      audioRef.current?.pause();
    };
  }, [isAudioPlaying, volume]);

  const toggleAudio = () => {
    setIsAudioPlaying(prev => !prev);
  };
  // --- End: Logic for Audio Toggle ---

  // sample items used as children for AnimatedList and Marquee and Terminal content
  const brainRotText = [
    "What is brain rot?",
    "In 2023 and 2024, a new term has become mainstream.",
    "“Brain rot”, a phenomenon similar to doomscrolling’s negative effects, but with an added sense of mental fogginess.",
    "This article will define, explain and explore brain rot through studies and an interview with a 22-year-old student who believes he experiences it every day.",
    "Doomscrolling is defined as a vicious cycle of endlessly consuming short-form content until one is hit with exhaustion and regret.",
    "It is another phenomenon that became mainstream during Covid-19 and remained normalized afterward.",
    "Brain rot is best explained through Newsport Institute’s definition: “Brain rot is a condition of mental fogginess, lethargy, reduced attention span, and cognitive decline that results from an overabundance of screen time”.",
  ];

  const marqueeItems = [
    'Placeholder marquee item 1',
    'Placeholder marquee item 2',
    'Placeholder marquee item 3',
  ];

  const terminalLines = [
    '$ npm run dev',
    '✓ Verified framework. Found Next.js.',
    '✓ Validating Tailwind CSS.',
    'Success! Project initialization completed.',
  ];

  return (
    <div className="bg-white h-full flex flex-col relative mx-auto max-w-[85%] overflow-hidden">
      <div
        className="min-h-screen bg-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
        <div className="max-w-screen-xl mx-auto w-full p-8 md:p-12 lg:p-16 flex flex-col items-center gap-12">

          {/* Safari (top) */}
          <div className="w-full">
            <Safari videoSrc="/Article4/blurredCollage.mp4">
              {/* A relative wrapper to enable absolute positioning of the button */}
              <div
                className="relative w-full h-full flex flex-col items-center justify-center p-4 text-center z-40 -mt-5">

                {/* 1. Catchy, centered, and readable text in English */}
                <span
                  className="text-3xl md:text-6xl font-bold text-white/90 leading-snug mt-4 drop-shadow text-shadow-lg">
                  <span className="text-3xl md:text-4xl font-extrabold text-white inline-block text-shadow-lg">
                    40 VIDEOS.
                  </span>
                </span>

                <span className="text-3xl md:text-6xl text-white leading-none drop-shadow-lg text-shadow-lg">
                  <NumberTicker
                    value={320}
                    duration={3}
                    className="text-white inline-block font-semibold text-shadow-lg"
                    /* NumberTicker will inherit the parent's stroke/shadow; if not, add similar style inside its wrapper */
                  />{' '}SECONDS.
                </span>

                <span className="text-lg md:text-3xl font-medium text-white mt-5 max-w-lg text-shadow-md">
                  That&apos;s the amount of content you consume before your consciousness registers the scrolling
                  impulse.
                </span>


                {/* Audio element - hidden */}
                <audio ref={audioRef} src={audioPath} loop preload="auto"/>

                {/* 2. Toggle Icon/Button at bottom right */}
                <button
                  onClick={toggleAudio}
                  className="absolute bottom-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors shadow-xl backdrop-blur-sm"
                  aria-label={isAudioPlaying ? "Pause audio" : "Play audio"}
                >
                  <img
                    src={isAudioPlaying ? iconOn : iconOff}
                    alt={isAudioPlaying ? "Speaker on" : "Speaker off"}
                    className="w-6 h-6 filter invert"
                  />
                </button>
              </div>
            </Safari>
          </div>

          {/* Meteors Title/Header */}
          <div
            className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-lg mt-20">
            <Meteors number={30}/>
            <span
              className="pointer-events-none bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10">
              Your brain&apos;s rotting, and you call it entertainment
            </span>
          </div>

          <p className="text-center text-lg font-opensans text-gray-600 -mb-15">Endless scrolling, mindless videos and
            toxic
            online trends aren&apos;t just killing time, but also wearing
            down your focus, fogging your thoughts and rewiring your brain. Experts and a student reveal the warning
            signs and how to fight back </p>
          <p className="text-md font-opensans text-gray-600 border-t border-gray-300 pt-3 px-20 mt-10">
            October 8, 2025 | By Daniel Betto
          </p>

          <AnimatedBeamSection/>

          {/* another plain div */}
          <div className="w-full mt-40">
            <div className="bg-gray-100 rounded-lg p-6 min-h-[140px]">
              <h1 className="text-lg font-semibold mb-2">Mental consequences: reduced attention and focus </h1>
              <p className="text-sm text-gray-700">Doomscrolling is known to have harmful mental effects such as loss of
                focus and increased anxiety. A specific shared effect between doomscrolling and brain rot is reduced
                attention span. According to Healthline, short attention span can cause poor performance at school,
                difficulty completing tasks, communication problems, and even trouble watching a full film without
                checking one’s phone.<br/> “Sometimes I notice I struggle to concentrate on movies. All I want is to
                grab my
                phone, but I can’t because I usually watch it with my dad. I just have to suffer through the long,
                boring parts. I 100% notice my attention span is horrible”, he says. “I can’t watch anything longer than
                two minutes without at 2x speed. That’s why I skip any reels that last longer than one minute and a
                half, because Instagram does not let me speed them up”. </p>
            </div>
          </div>

          {/* iPhone with AnimatedList and TweetSkeleton */}
          <div className="w-full flex justify-center mt-20">
            <div className="w-[500px] md:w-[480px]">
              <Iphone src="/Article4/iphoneBg.JPG">
                <div className="space-y-4 p-2 mt-17">
                  {/* AnimatedList requires children -> we pass list item nodes */}
                  <AnimatedList delay={300} className="w-full z-50 overflow-visible">
                    {brainRotText.map((text, index) => (
                      <div
                        key={index}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded p-3 shadow-sm relative z-10"
                      >
                        <p className="text-sm text-gray-800">{text}</p>
                      </div>
                    ))}
                  </AnimatedList>
                </div>
              </Iphone>
            </div>
          </div>

          {/* Plain div instead of Textbox */}
          <div className="w-full mt-30">
            <div className="bg-gray-100 rounded-lg p-6 min-h-[140px]">
              <h1 className="text-lg font-semibold mb-2">A student’s perspective</h1>
              <p className="text-sm text-gray-700">
                To understand if this definition holds true, it is important to not only research, but also ask those
                who experience it. <br/> “At night I can easily get bombarded with information and overstimulated. It is
                hard
                to explain how it feels, but it is like I am tired in the brain, or my brain feels full. I don’t know”,
                he says. <br/> This feeling of having the brain feeling “full” can be caused by watching YouTube,
                scrolling on
                social media, or doing both simultaneously. It can also come from reading negative or distressing news
                articles online. Any activity that leaves the user exhausted and overstimulated can be considered an
                experience of brain rot.
              </p>
            </div>
          </div>

          {/* File tree (Tree) + plain div */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-20">
            <div>
              <Tree className="bg-white border rounded p-4"/>
            </div>
            <div>
              <div className="bg-gray-100 rounded-lg p-6 min-h-[140px]">
                <h1 className="text-lg font-semibold mb-2">The appeal of meaningless content </h1>
                <p className="text-sm text-gray-700">“I mostly like to scroll because I find weird stuff in there,
                  either funny stuff or just brain rot”, he explains. <br/> According to the Merriam-webster Dictionary,
                  this
                  reflects the growing trend of seeking out “stupid, mindless internet content”. Many young people even
                  take pride in knowing countless brain rot terms such as like “rizz”, “delulu”, “sigma”,” skibidi” and
                  names from “Italian brainrot”. The appeal often lies in the intentionally poor quality and content so
                  shallow that it becomes addictive. This addiction can occupy the mind and lead to mental
                  exhaustion.<br/>
                  “Usually, I just absorb whatever I get and scroll to the next. I don’t think about anything”, he
                  mentions. “Sometimes when I am trying to sleep, I find myself lying there, thinking about the funny
                  reel I saw earlier and then it takes longer to sleep”. </p>
              </div>
            </div>
          </div>

          {/* Terminal requires children -> pass a preformatted block */}
          <div className="w-full">
            <Terminal className="min-h-[140px] rounded-lg">
              <pre className="whitespace-pre-wrap text-sm text-gray-800">
                {terminalLines.join('\n')}
              </pre>
            </Terminal>
          </div>

          {/* another plain div */}
          <div className="w-full mt-20">
            <div className="bg-gray-100 rounded-lg p-6 min-h-[140px]">
              <h1 className="text-lg font-semibold mb-2">Mental consequences: reduced attention and focus </h1>
              <p className="text-sm text-gray-700">Doomscrolling is known to have harmful mental effects such as loss of
                focus and increased anxiety. A specific shared effect between doomscrolling and brain rot is reduced
                attention span. According to Healthline, short attention span can cause poor performance at school,
                difficulty completing tasks, communication problems, and even trouble watching a full film without
                checking one’s phone.<br/> “Sometimes I notice I struggle to concentrate on movies. All I want is to
                grab my
                phone, but I can’t because I usually watch it with my dad. I just have to suffer through the long,
                boring parts. I 100% notice my attention span is horrible”, he says. “I can’t watch anything longer than
                two minutes without at 2x speed. That’s why I skip any reels that last longer than one minute and a
                half, because Instagram does not let me speed them up”. </p>
            </div>
          </div>

          {/* Survey placeholder */}
          <div className="w-full flex justify-center mt-20">
            <div className="bg-white border rounded-lg p-6 w-full max-w-md text-center">
              <h1 className="text-lg font-semibold mb-3">Survey</h1>
              <p className="text-sm text-gray-600">Zwei-Schritt Survey: (Placeholder UI)</p>
            </div>
          </div>

          <div className="w-full mt-20">
            <div className="bg-gray-100 rounded-lg p-6 min-h-[140px]">
              <h1 className="text-lg font-semibold mb-2">Reality check </h1>
              <p className="text-sm text-gray-700">When asked to estimate his daily screen time without checking his
                phone, the interviewee guessed he spent “around four to five hours on social media, mostly Instagram”.<br/>
                However, when he finally checked, the statistics revealed a different story. His actual daily average
                was closer to two hours, which seemed lower than expected until he noticed the weekly total.<br/> “Fifteen
                hours in one week”, he says, shaking his head. “That’s a almost a whole day. This is absolutely insane.
                But fair enough”. </p>
            </div>
          </div>

          {/* Marquee requires children -> provide inline items */}
          <div className="w-full">
            <Marquee className="py-6" pauseOnHover>
              {marqueeItems.map((m, i) => (
                <span key={i} className="inline-block px-4 py-2 bg-white/60 rounded-md text-sm mx-2">
                  {m}
                </span>
              ))}
            </Marquee>
          </div>

          <footer
            className="mt-12 pt-8 border-t-2 px-60 border-gray-300 text-center text-gray-600 text-sm font-opensans">
            <p>Communication Design 2025</p>
            <p>Melisa Avci, Raphael Tam-Dao, Daniel Betto, Ylva Romann Aas, Ingrid Christensen Øvrelid</p>
          </footer>
        </div>
      </div>
    </div>
  );
}