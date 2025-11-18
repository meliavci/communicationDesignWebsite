// src/components/pages/ArticleFour.tsx
'use client';

import React, {forwardRef, JSX, useEffect, useRef, useState} from 'react';

import {Safari} from '@/components/ui/safari';
import {Meteors} from '@/components/ui/meteors';
import {NumberTicker} from '@/components/ui/number-ticker';
import {AnimatedBeam} from '@/components/ui/animated-beam';
import {AnimatedList} from '@/components/ui/animated-list';
import {File as FileElement, Folder, Tree, TreeViewElement} from '@/components/ui/file-tree';
import {AnimatedSpan, Terminal} from '@/components/ui/terminal';
import {Marquee} from '@/components/ui/marquee';
import {Iphone} from '@/components/ui/iphone';
import {cn} from '@/lib/utils';
import {Tweet} from '@/components/ui/tweet';
import {Button} from '@/components/ui/button';
import {ArrowRight, FileIcon} from 'lucide-react';
import {useInView} from 'motion/react';


// --- Configuration ---
// Determined from src/app/page.tsx: 'addiction' tab uses bg-blue-900
const ACCENT_COLOR_BG = "bg-blue-900"; // Background for buttons
const ACCENT_COLOR_HOVER = "hover:bg-blue-800";
const ACCENT_COLOR_TEXT = "text-blue-900"; // Text for accents/links/marquee titles


// Helper function to generate random metrics for realistic tweets
const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomAvatar = (seed: string) => `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffdfbf,ffd5dc`;
const getRandomName = (index: number) => {
  const names = ["MindlessMapper", "DopamineDrainer", "TheReelAddict", "FocusFighter", "DigitalDetoxer"];
  return names[index % names.length] + getRandomInt(10, 99);
};
const getRandomHandle = (name: string) => `@${name.toLowerCase().replace(/[^a-z0-9]/g, '')}`;


// --- Components for ArticleFour ---

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({className, children}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 border-black bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
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

// --- NEW Bar Chart Component for Survey ---

interface BarChartComparisonProps {
  guessedValue: number;
  actualValue: number;
  onReset: () => void;
}

const BarChartComparison: React.FC<BarChartComparisonProps> = ({guessedValue, actualValue, onReset}) => {
  const maxVal = Math.max(guessedValue, actualValue, 1) * 1.2;
  const guessHeight = (guessedValue / maxVal) * 100;
  const actualHeight = (actualValue / maxVal) * 100;

  const difference = actualValue - guessedValue;

  // UPDATED: More impactful statement
  const statement = difference > 30 ?
    "DIGITAL ALARM: Your digital consumption is far beyond what you perceive. This level of self-deception is a CRITICAL sign of disengagement." :
    difference > 10 ?
      "SEVERE MISCALCULATION: You grossly underestimated your screen time. This gap suggests a high lack of digital self-awareness." :
      difference > 0 ?
        "REALITY CHECK: Your actual screen time is slightly higher than your guess. A sign to be more vigilant." :
        difference < -10 ?
          "EXCEPTIONAL SELF-AWARENESS: You are well-insulated from brain rot. Your mindful habits are working effectively. Keep it up!" :
          "ACCURATE PERCEPTION: Your guess aligns closely with reality. You possess a strong degree of digital mindfulness.";

  const statementClass = difference > 10 ? "text-red-700" : difference > 0 ? "text-orange-500" : difference < -10 ? "text-green-600" : ACCENT_COLOR_TEXT; // Use ACCENT_COLOR_TEXT for neutral/positive cases.

  const chartRef = useRef(null);
  const isInView = useInView(chartRef, {once: true, amount: 0.5});
  const [isChartVisible, setIsChartVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsChartVisible(true);
    }
  }, [isInView]);


  return (
    <div className="p-4 flex flex-col items-center justify-center space-y-8 min-h-[300px]" ref={chartRef}>
      <h2 className="text-2xl font-bold text-gray-900 text-center">Screen Time Comparison</h2>

      <div className="w-full flex justify-around items-end h-[150px] max-w-sm border-b-2 border-gray-300">

        {/* Bar 1: Guess */}
        <div className="flex flex-col items-center justify-end h-full">
          <div
            className="bg-indigo-600 rounded-t-md transition-all duration-1000 ease-out"
            style={{
              height: isChartVisible ? `${guessHeight}%` : '0%',
              width: '40px',
              transitionDelay: isChartVisible ? '0ms' : '0ms',
            }}
          ></div>
          <p className="mt-2 text-sm font-bold text-indigo-600">{guessedValue}h</p>
          <p className="text-xs font-medium text-gray-500">Your Guess</p>
        </div>

        {/* Bar 2: Actual */}
        <div className="flex flex-col items-center justify-end h-full">
          <div
            className="bg-red-600 rounded-t-md transition-all duration-1000 ease-out"
            style={{
              height: isChartVisible ? `${actualHeight}%` : '0%',
              width: '40px',
              transitionDelay: isChartVisible ? '300ms' : '0ms',
            }}
          ></div>
          <p className="mt-2 text-sm font-bold text-red-600">{actualValue}h</p>
          <p className="text-xs font-medium text-gray-500">Actual Value</p>
        </div>
      </div>

      <p className={cn("text-center text-lg font-bold max-w-xs", statementClass)}>
        {statement}
      </p>

      <Button onClick={onReset} variant="outline" className="mt-4">
        Start Again
      </Button>
    </div>
  );
};


interface SurveyState {
  step: 1 | 2 | 3;
  guess: number | null;
  actual: number | null;
  inputValue: string;
}

const BrainRotSurvey: React.FC = () => {
  const [state, setState] = useState<SurveyState>({
    step: 1,
    guess: null,
    actual: null,
    inputValue: '',
  });

  const title: Record<SurveyState['step'], string> = {
    1: "Step 1: The Guess",
    2: "Step 2: The Reality",
    3: "Comparison",
  };

  const question: Record<1 | 2, string> = {
    1: "Guess how much screentime you have in hours per week",
    2: "Now look at your phone and tell me how much screentime you actually have (hours per week)",
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(prev => ({...prev, inputValue: e.target.value.replace(/[^0-9]/g, '')}));
  };

  const handleNext = () => {
    const value = parseInt(state.inputValue, 10);
    if (isNaN(value) || value < 0 || value > 168) return;

    if (state.step === 1) {
      setState(prev => ({
        ...prev,
        step: 2,
        guess: value,
        inputValue: '',
      }));
    } else if (state.step === 2) {
      setState(prev => ({
        ...prev,
        step: 3,
        actual: value,
        inputValue: '',
      }));
    }
  };

  const handleReset = () => {
    setState({step: 1, guess: null, actual: null, inputValue: ''});
  };

  const currentQuestion = state.step === 1 ? question[1] : question[2];
  const isNextDisabled = state.inputValue.length === 0 || parseInt(state.inputValue, 10) > 168;

  return (
    <div
      className="bg-white border-2 border-gray-900 rounded-xl p-6 w-full max-w-lg shadow-[3px_3px_0_#1f2937] transition-all duration-300 transform hover:shadow-[10px_10px_0_#1f2937]">
      <div className="flex justify-between items-center border-b pb-3 mb-4">
        <h1 className="text-xl font-bold text-gray-900">{title[state.step]}</h1>
        <span className="text-sm font-medium text-gray-500">Step {state.step} of 3</span>
      </div>

      {state.step < 3 ? (
        <div className="flex flex-col space-y-6">
          <p className="text-lg text-gray-800">{currentQuestion}</p>
          <div className="flex items-center space-x-3">
            <input
              type="number"
              min="0"
              max="168"
              value={state.inputValue}
              onChange={handleInputChange}
              placeholder="e.g. 25"
              className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg text-lg focus:border-indigo-500 focus:ring-indigo-500 transition duration-150 shadow-inner [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <span className="text-lg font-medium text-gray-500">hours / week</span>
          </div>

          <Button onClick={handleNext} disabled={isNextDisabled}
                  className={cn("w-full text-white font-bold py-2 px-4 rounded transition-colors duration-150", ACCENT_COLOR_BG, ACCENT_COLOR_HOVER)}>
            {state.step === 1 ? "Next Step" : "Show Comparison"}
            <ArrowRight className="size-4 ml-2"/>
          </Button>
        </div>
      ) : (
        <BarChartComparison
          guessedValue={state.guess!}
          actualValue={state.actual!}
          onReset={handleReset}
        />
      )}
    </div>
  );
};

// --- Main ArticleFour Component ---

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

  // Link 2 integrated here (word "caused")
  const brainRotText = [
    "A student’s perspective",
    "To understand if this definition holds true, it is important to not only research, but also ask those who experience it.",
    "“At night I can easily get bombarded with information and overstimulated. It is hard to explain how it feels, but it is like I am tired in the brain, or my brain feels full. I don’t know”, he says. ",
    (<>This feeling of having the brain feeling “full” can be <a
      href="https://www.newportinstitute.com/resources/co-occurring-disorders/brain-rot/" target="_blank"
      rel="noopener noreferrer" className={cn("underline font-semibold", ACCENT_COLOR_TEXT)}>caused</a> by watching
      YouTube, scrolling on social media, or doing both simultaneously.</>),
    " It can also come from reading negative or distressing news articles online.",
    " Any activity that leaves the user exhausted and overstimulated can be considered an experience of brain rot. ",
  ];

  const tweetData = [
    {
      username: "What is brain rot? ",
      handle: "@whatisbrainrot",
      avatarSeed: "janesmith",
      title: "1_WhatIsBrainRot.ts",
      // Link 1 integrated here (word "definition")
      content: (<>In 2023 and 2024, a new term has become mainstream. “Brain rot”, a phenomenon similar to
        doomscrolling’s negative effects, but with an added sense of mental fogginess. This article will define, explain
        and explore brain rot through studies and an interview with a 22-year-old student who believes he experiences it
        every day. Doomscrolling is defined as a vicious cycle of endlessly consuming short-form content until one is
        hit with exhaustion and regret. It is another phenomenon that became mainstream during Covid-19 and remained
        normalized afterward. Brain rot is best explained through Newsport Institute’s <a
          href="https://www.newportinstitute.com/resources/co-occurring-disorders/brain-rot/" target="_blank"
          rel="noopener noreferrer" className={cn("underline font-semibold", ACCENT_COLOR_TEXT)}>definition</a>: “Brain
        rot is a condition of mental fogginess, lethargy, reduced attention span, and cognitive decline that results
        from an overabundance of screen time”. </>),
      replyCount: getRandomInt(30, 80),
      retweetCount: getRandomInt(60, 150),
      likeCount: getRandomInt(200, 500),
    },
    {
      username: "The appeal of meaningless content ",
      handle: "@theappealofmeaninglesscontent",
      avatarSeed: "marko",
      title: "2_AppealOfContent.ts",
      content: "“I mostly like to scroll because I find weird stuff in there, either funny stuff or just brain rot”, he explains.  According to the Merriam-webster Dictionary, this reflects the growing trend of seeking out “stupid, mindless internet content”. Many young people even take pride in knowing countless brain rot terms such as like “rizz”, “delulu”, “sigma”,” skibidi” and names from “Italian brainrot”. The appeal often lies in the intentionally poor quality and content so shallow that it becomes addictive. This addiction can occupy the mind and lead to mental exhaustion. “Usually, I just absorb whatever I get and scroll to the next. I don’t think about anything”, he mentions. “Sometimes when I am trying to sleep, I find myself lying there, thinking about the funny reel I saw earlier and then it takes longer to sleep”. ",
      replyCount: getRandomInt(5, 20),
      retweetCount: getRandomInt(10, 70),
      likeCount: getRandomInt(100, 300),
    },
    {
      username: "Small steps to reclaim your brain ",
      handle: "@smallstepstoreclaimyourbrain",
      avatarSeed: "sarah",
      title: "3_ReclaimYourBrain.ts",
      // Link 4 integrated here (word "Experts")
      content: (<>His struggle with focus is not unique. <a
        href="https://www.healthline.com/health/short-attention-span#risk-factors" target="_blank"
        rel="noopener noreferrer" className={cn("underline font-semibold", ACCENT_COLOR_TEXT)}>Experts</a> say that
        constant scrolling and consuming meaningless content can slowly reshape the brain, creating unhealthy routines
        and mental fatigue. Over time, this can lead to neglect and not only personal responsibilities, but also
        emotional and social well-being. Yet, despite how overwhelming it may sound, there are small, practical steps to
        begin mending what brain rot damaged and to take back control of your attention. The first step is awareness,
        understanding that every video, post, or reel you interact with shapes your thoughts, habits and even your mood.
        Choose to engage only with content that supports creativity, teaches you something new or feeds genuine
        generosity. To limit exposure to meaningless scrolling, unfollow accounts that post addictive or repetitive
        material, or make use of the “Not interested” button on platforms like Instagram, TikTok, or YouTube. These
        small digital boundaries can make a surprisingly big difference over time. Spending time offline is just as
        important. Refreshing your mind doesn’t always require grand change. It can be as simple as finally doing the
        dishes you’ve been avoiding. Even mundane activities like cleaning or organizing your space can restore a sense
        of control and reduce stress. Lastly, be mindful of what fills your social conversations. Avoid engaging in
        endless talk about meaningless online trends unless the goal is to reflect on leaving them behind. Instead, try
        reconnecting meaningful discussions like topics that make you laugh, think, and feel connected. In the end,
        reducing brain rot isn’t about abandoning the internet; it’s about reclaiming your time, focus and ability to
        find meaning in what truly matters.</>),
      replyCount: getRandomInt(50, 100),
      retweetCount: getRandomInt(150, 400),
      likeCount: getRandomInt(500, 1200),
    },
    {
      username: "Reality check",
      handle: "@realitycheck",
      avatarSeed: "david",
      title: "4_RealityCheck.ts",
      content: "When asked to estimate his daily screen time without checking his phone, the interviewee guessed he spent “around four to five hours on social media, mostly Instagram”. However, when he finally checked, the statistics revealed a different story. His actual daily average was closer to two hours, which seemed lower than expected until he noticed the weekly total.  “Fifteen hours in one week”, he says, shaking his head. “That’s a almost a whole day. This is absolutely insane. But fair enough”. ",
      replyCount: getRandomInt(10, 40),
      retweetCount: getRandomInt(20, 90),
      likeCount: getRandomInt(80, 250),
    },
  ];

  const fileTreeElements: TreeViewElement[] = [
    {
      id: "root",
      name: "src",
      isSelectable: false,
      children: [
        {
          id: "components",
          name: "components",
          isSelectable: false,
          children: [
            {
              id: "pages",
              name: "pages",
              isSelectable: false,
              children: [
                {
                  id: "article-one",
                  name: "ArticleOne.tsx",
                  isSelectable: true,
                },
                {
                  id: "article-two",
                  name: "ArticleTwo.tsx",
                  isSelectable: true,
                },
                {
                  id: "article-four-main",
                  name: "ArticleFour.tsx",
                  isSelectable: false,
                  children: [
                    ...tweetData.map(d => ({
                      id: d.title,
                      name: d.title,
                      isSelectable: true,
                    })),
                    {
                      id: "terminal-log",
                      name: "terminal.log",
                      isSelectable: true,
                    }
                  ],
                },
                {
                  id: "proto-page",
                  name: "ProtoPage.tsx",
                  isSelectable: true,
                },
              ]
            },
          ],
        },
      ],
    },
    {
      id: "public",
      name: "public",
      isSelectable: false,
      children: [
        {
          id: "brain.png",
          name: "brain.png",
          isSelectable: true,
        }
      ]
    }
  ];


  const marqueeDefinitions = [
    {
      term: "Rizz",
      definition: " A shortened form of the word ‘charisma’, having ‘rizz’ indicated charm, attractiveness and the ability to attract a romantic partner. ",
      link: "https://www.bbc.co.uk/bitesize/articles/zx6qg2p#zwpx9ty",
    },
    {
      term: "Delulu",
      definition: " Comes from the word ‘delusional’ and has similar meaning: when a person has a strongly held belief which can’t be shaken despite evidence to contrary. ",
      link: "https://www.bbc.co.uk/bitesize/articles/zx6qg2p#zwpx9ty",
    },
    {
      term: "Sigma",
      definition: "Relates to a confident, independent-minded person, usually a man. Has high status and dominant.  ",
      link: "https://www.bbc.co.uk/bitesize/articles/zx6qg2p#zwpx9ty",
    },
    {
      term: "Skibidi",
      definition: "Comes from an animated series about a war between toilets and humanoids. Otherwise, is meaningless and holds no value.  ",
      link: "https://www.bbc.co.uk/bitesize/articles/zx6qg2p#zwpx9ty",
    },
    {
      term: "Italien brainrot",
      definition: " A sub-genre of ‘brain rot’ which features exaggerated AI characters with Italian-sounding names.",
      link: "https://www.bbc.co.uk/bitesize/articles/zx6qg2p#zwpx9ty",
    },
  ];

  const terminalLines = [
    {prefix: "$", text: "npm install brain-rot-cure-kit"},
    {prefix: ">", text: "Fetching packages for mental-health-cli..."},
    {prefix: "✓", text: "Validated: attention-span-boost@1.0.0"},
    {prefix: "✓", text: "Validated: meaningful-content-filter@2.1.0"},
    {prefix: "!", text: "Warning: Addiction-core module detected. Proceeding with caution.", isWarning: true},
    {prefix: "Success!", text: "Mindful state restoration initialized."},
  ];

  const terminalRef = useRef(null);
  const isTerminalInView = useInView(terminalRef, {once: true, amount: 0.1});

  // Link 3 integrated here (word "attention span")
  const mentalConsequencesContent = (
    <>
      Doomscrolling is known to have harmful mental effects such as loss
      of focus and increased anxiety. A specific shared effect between doomscrolling and brain rot is
      reduced <a href="https://www.healthline.com/health/short-attention-span#risk-factors" target="_blank"
                 rel="noopener noreferrer" className={cn("underline font-semibold", ACCENT_COLOR_TEXT)}>attention
      span</a>. According to Healthline, short attention span can cause poor performance at
      school, difficulty completing tasks, communication problems, and even trouble watching a full film
      without checking one’s phone.<br/><br/>
      “Sometimes I notice I struggle to concentrate on movies. All I want is
      to grab my phone, but I can’t because I usually watch it with my dad. I just have to suffer through
      the long, boring parts. I 100% notice my attention span is horrible”, he says. “I can’t watch anything
      longer than two minutes without at 2x speed. That’s why I skip any reels that last longer than one
      minute and a half, because Instagram does not let me speed them up”.
    </>
  )

  return (
    // Responsive container padding adjustment
    <div className="bg-white h-full flex flex-col relative z-10 mx-auto max-w-[85%] overflow-hidden">
      <div
        className="min-h-screen bg-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
        <div className="max-w-screen-xl mx-auto w-full p-0 md:p-12 lg:p-16 flex flex-col items-center gap-12">

          {/* Safari (top) */}
          <div className="w-full px-4 sm:px-0">
            <Safari videoSrc="/Article4/blurredCollage.mp4">
              <div
                className="relative w-full h-full flex flex-col items-center justify-center p-4 text-center z-40 -mt-5">

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
                  />{' '}SECONDS.
                </span>

                <span className="text-lg md:text-3xl font-medium text-white mt-5 max-w-lg text-shadow-lg">
                  That&apos;s the amount of content you consume before your consciousness registers the scrolling
                  impulse.
                </span>

                <audio ref={audioRef} src={audioPath} loop preload="auto"/>

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
            className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-lg mt-20 px-4 sm:px-0">
            <Meteors number={30}/>
            <span
              className="pointer-events-none bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-center text-5xl sm:text-7xl lg:text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10">
              Your brain&apos;s rotting, and you call it entertainment
            </span>
          </div>

          <p className="text-center text-lg font-opensans text-gray-600 -mb-15 max-w-2xl px-4 sm:px-0">Endless
            scrolling, mindless videos and
            toxic
            online trends aren&apos;t just killing time, but also wearing
            down your focus, fogging your thoughts and rewiring your brain. Experts and a student reveal the warning
            signs and how to fight back </p>
          <p className="text-md font-opensans text-gray-600 border-t border-gray-300 pt-3 px-4 sm:px-20 mt-10">
            November 13, 2025 | By Daniel Betto
          </p>

          <div className="w-full px-4 sm:px-0">
            <AnimatedBeamSection/>
          </div>


          {/* Tweet 1: What is brain rot? */}
          <div className="w-full mt-40 px-4 sm:px-20">
            <Tweet
              username={tweetData[0].username}
              handle={tweetData[0].handle}
              timestamp="5h"
              content={tweetData[0].content}
              avatarUrl={getRandomAvatar(tweetData[0].avatarSeed)}
              replyCount={tweetData[0].replyCount}
              retweetCount={tweetData[0].retweetCount}
              likeCount={tweetData[0].likeCount}
            />
          </div>

          {/* iPhone with AnimatedList and TweetSkeleton (Messages/Notifications) */}
          <div className="w-full flex justify-center mt-20 px-4 sm:px-0">
            <div className="w-full max-w-[500px] md:max-w-[480px]">
              <Iphone src="/Article4/iphoneBg.png">
                <div className="space-y-4 p-2 mt-17">
                  <AnimatedList delay={300} className="w-full z-50 overflow-visible" startOnView={true}>
                    {/* Messages/Notifications, Link 2 integrated in brainRotText */}
                    {[...brainRotText].reverse().map((text, index) => (
                      <div
                        key={index}
                        // UPDATED CLASSNAME for glassmorphism/notification look
                        className="w-full bg-white/80 border border-white/50 text-gray-900 rounded-xl p-3 shadow-lg backdrop-blur-md relative z-10 transition-shadow hover:shadow-xl"
                      >
                        {/* Simulate a notification/message header */}
                        <div className="flex justify-between items-center mb-1">
                          <span className={cn("text-xs font-semibold", ACCENT_COLOR_TEXT)}>New Insight</span>
                          <span className="text-xs text-gray-500">just now</span>
                        </div>
                        <p className="text-sm text-gray-800">{text}</p>
                      </div>
                    ))}
                  </AnimatedList>
                </div>
              </Iphone>
            </div>
          </div>

          {/* Tweet 2: The appeal of meaningless content */}
          <div className="w-full mt-20 px-4 sm:px-20">
            <Tweet
              username={tweetData[1].username}
              handle={tweetData[1].handle}
              timestamp="11h"
              content={tweetData[1].content}
              avatarUrl={getRandomAvatar(tweetData[1].avatarSeed)}
              replyCount={tweetData[1].replyCount}
              retweetCount={tweetData[1].retweetCount}
              likeCount={tweetData[1].likeCount}
            />
          </div>


          {/* File tree (Tree) + plain div (IDE-like layout) */}
          <div className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-lg mt-20 max-w-full">
            {/* Split Panel for File Tree and Content */}
            <div className="flex w-full min-h-[400px] flex-col lg:flex-row">
              {/* File Tree / Sidebar */}
              <div
                className="w-full max-w-full lg:max-w-[300px] bg-gray-50 border-r border-gray-300 p-2 overflow-auto text-sm text-gray-700 font-mono flex-shrink-0">
                <Tree
                  elements={fileTreeElements}
                  initialExpandedItems={['root', 'components', 'pages', 'article-four-main', 'public']}
                  className="w-full h-full"
                  dir="ltr"
                >
                  <Folder value="root" element="src">
                    <Folder value="components" element="components">
                      <Folder value="pages" element="pages">
                        {/* Article Files as siblings */}
                        <FileElement value="article-one" fileIcon={<FileIcon
                          className="size-3 text-blue-500"/>}>ArticleOne.tsx</FileElement>
                        <FileElement value="article-two" fileIcon={<FileIcon
                          className="size-3 text-blue-500"/>}>ArticleTwo.tsx</FileElement>
                        {/* Current Article Folder structure */}
                        <Folder value="article-four-main" element="ArticleFour.tsx">
                          <FileElement value={tweetData[0].title} fileIcon={<FileIcon
                            className="size-3 text-blue-500"/>}>{tweetData[0].title}</FileElement>
                          <FileElement value={tweetData[1].title} fileIcon={<FileIcon
                            className="size-3 text-blue-500"/>}>{tweetData[1].title}</FileElement>
                          <FileElement value={tweetData[2].title} fileIcon={<FileIcon
                            className="size-3 text-blue-500"/>}>{tweetData[2].title}</FileElement>
                          <FileElement value={tweetData[3].title} fileIcon={<FileIcon
                            className="size-3 text-blue-500"/>}>{tweetData[3].title}</FileElement>
                          <FileElement value="terminal-log"
                                       fileIcon={<FileIcon className="size-3 text-red-500"/>}>terminal.log</FileElement>
                        </Folder>
                        <FileElement value="proto-page"
                                     fileIcon={<FileIcon className="size-3 text-blue-500"/>}>ProtoPage.tsx</FileElement>
                      </Folder>
                    </Folder>
                  </Folder>
                  <Folder value="public" element="public">
                    <FileElement value="brain.png"
                                 fileIcon={<FileIcon className="size-3 text-green-500"/>}>brain.png</FileElement>
                  </Folder>
                </Tree>
              </div>

              {/* Content / Editor Area, Link 3 integrated in mentalConsequencesContent */}
              <div className="flex-1 bg-white p-6 overflow-y-auto">
                <h1 className="text-2xl font-bold mb-3 border-b pb-2">Mental consequences: reduced attention and
                  focus</h1>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {mentalConsequencesContent}
                </p>
              </div>
            </div>

            {/* Terminal (Full Width) */}
            <div className="w-full" ref={terminalRef}>
              <Terminal
                className="min-h-[140px] w-full max-w-full rounded-t-none rounded-b-lg border-t-gray-300 border-t-2"
                sequence
                startOnView
                externalInView={isTerminalInView}
              >
                {terminalLines.map((line, index) => (
                  <AnimatedSpan key={index} delay={index === 0 ? 500 : 300}>
                    <span className={cn("font-bold mr-2", line.isWarning ? "text-yellow-500" : "text-green-500")}>
                      {line.prefix}
                    </span>
                    <span className={cn("text-white", line.isWarning && "text-yellow-500")}>
                      {line.text}
                    </span>
                  </AnimatedSpan>
                ))}
              </Terminal>


            </div>
          </div>

          {/* Tweet 3: Small steps to reclaim your brain, Link 4 integrated in tweetData[2].content */}
          <div className="w-full mt-20 px-4 sm:px-20">
            <Tweet
              username={tweetData[2].username}
              handle={tweetData[2].handle}
              timestamp="11h"
              content={tweetData[2].content}
              avatarUrl={getRandomAvatar(tweetData[2].avatarSeed)}
              replyCount={tweetData[2].replyCount}
              retweetCount={tweetData[2].retweetCount}
              likeCount={tweetData[2].likeCount}
            />
          </div>

          {/* Tweet 4: Reality check */}
          <div className="w-full px-4 sm:px-20">
            <Tweet
              username={tweetData[3].username}
              handle={tweetData[3].handle}
              timestamp="11h"
              content={tweetData[3].content}
              avatarUrl={getRandomAvatar(tweetData[3].avatarSeed)}
              replyCount={tweetData[3].replyCount}
              retweetCount={tweetData[3].retweetCount}
              likeCount={tweetData[3].likeCount}
            />
          </div>

          {/* Survey component (Uses BarChartComparison now) */}
          <div className="w-full flex justify-center mt-20 px-4 sm:px-0">
            <BrainRotSurvey/>
          </div>

          {/* Marquee with definitions (UPDATED STYLING) */}
          <div className="w-full mt-20 px-4 sm:px-0">
            <Marquee className="py-6 border-y border-gray-300" pauseOnHover>
              {marqueeDefinitions.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className="inline-flex flex-col px-4 py-3 bg-gray-100/80 hover:bg-gray-200 transition-colors rounded-lg text-sm mx-4 border border-gray-300 shadow-sm min-w-[200px] max-w-[250px] min-h-[100px] cursor-pointer justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={cn("font-bold text-lg mb-1", ACCENT_COLOR_TEXT)}>{item.term}</span>
                  <p className="text-xs text-gray-700 leading-snug">{item.definition}</p>
                </a>
              ))}
            </Marquee>
          </div>
          <footer
            className="mt-12 pt-8 border-t-2 px-4 sm:px-20 border-gray-300 text-center text-gray-600 text-sm font-opensans w-full max-w-screen-xl">
            <p>Communication Design 2025</p>
            <p>Melisa Avci, Raphael Tam-Dao, Daniel Betto, Ylva Romann Aas, Ingrid Christensen Øvrelid</p>
          </footer>
        </div>
      </div>
    </div>
  );
}