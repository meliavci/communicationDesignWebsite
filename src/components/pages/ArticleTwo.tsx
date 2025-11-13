'use client';

import React, { useState } from 'react';
import ScrollSequence2 from '@/components/ScrollSequence2';



const articleText = `
/* --- ERSETZE DIESEN BLOCK MIT DEM GANZEN TEXT AUS DEINEM PDF (KEEP AS-IS) --- */

Screens and Childhood: Gaming vs. Doomscrolling 

From iPads to endless feeds, interviews with families disclose the difference between gaming and doomscrolling in kids 

November 03, 2025 | By Daniel Betto 

 

Two habits, one screen 

Children’s never ending screen time usage has evolved into two different habits, according to experts and observation from families; gaming focused “iPad kids” and “doomscrollers.” This article includes interviews with a grandfather experiencing the worrisome term iPad kids, and an interview with an older sister worried about her younger siblings’ excessive screentime not on iPad, but phones. The grandsons are 12 and 14, while both the twin sisters are 12. The similar experiences of the grandsons and the twin sisters reveal interesting differences in how children use screen and how it affects them.  

 

Gaming vs Endless scrolling 

To start off with what differs the children apart the most, it is that the grandsons spend their time on their iPad playing games, with a portion of that time spent scrolling on YouTube shorts. Meanwhile, the twin sisters spend their time scrolling exclusively through YouTube shorts. They both fall into the phenomenon called “doomscrolling”. It is a vicious cycle in which users find themselves stuck in a pattern of wanting more entertainment no matter how much they already consumed.  

“They are terrible at managing screentime, they have no limit” the older sister continues with, “after doing their homework, which takes around an hour, the rest of the day goes to scrolling on YouTube shorts”. 

This is not something an iPad kid would choose to do between 2010 to 2019. Scrolling was not normalized until 2022. During the Covid pandemic, people would endlessly seek information online by scrolling through news articles. This habit shifted to scrolling through social media for entertainment and dopamine release. 

“They received their iPad before ever starting at school, and there was an explosion on screentime usage.” The grandfather says when it comes to his grandsons using their devices. “They took their iPads everywhere they went”.  

 

 

Which is better? 

National Institutes of Health has shown a study of nearly 2,000 children who reported playing games for three hours per day and performed better on cognitive skills compared to children who had never played.  Since there are no advantages with doomscrolling, despite both habits causing issues within families, experts and families themselves agree that gaming may be less harmful than constant scrolling. “It is obvious that gaming is healthier than pure scrolling. It is even more of a time waste,” the grandfather points out.   

How the children respond 

When parents fear their children being consumed by screen time, there are a few measures that can hopefully mitigate their usage. Either talk to them about the seriousness of what they are doing or take it away to force them to go a day or two without their devices. In this case, the twin sisters react differently than the grandsons.  

“They get bored, whine, and complain a lot, but they do not have complete meltdowns. It is not that bad, but we could get there,” the older sister continues with, “During those periods, they complain about how bored they are and have nothing to do. They have lost any ability to do anything other than scrolling. But they accept the situation and do not rage against us for taking their phones. “ 

This shows how the twin sisters do not throw tantrums or get in a bad mood; they accept the situation and try to find other things to do. In contrast, the grandfather mentions, “I have been a witness to when the parents said enough is enough - that is when the children get really aggressive,” the grandfather explains. The difference between how both the grandsons and twin sisters react is noticeable.  

 

Finding healthier habits 

Both interviewees have been asked about how they believe their family members will eventually detox from these habits.  The older sister mentions that if the girls played video games rather than scrolling, it would be way better. She agrees that playing games is far healthier than scrolling and that it could strengthen their cognitive abilities. So, for her belief, replacing scrolling with games could be the easiest answer.  

The grandfather believes that finding things to do as a family outside of the home will help them. Obviously, iPads are not allowed when outside the home. The more the grandsons play sports, eat out with family or take a long trip to visit the cabin - with no internet or electricity, the easier it will be for them to slowly reduce the desire to play games all day.  

 
`;

export default function ArticleTwo() {
  const [hovered, setHovered] = useState<string | null>(null);

  const paragraphBlocks = articleText
    .split(/\n{2,}/)
    .map(p => p.trim())
    .filter(Boolean);

  return (
    <div className="bg-white h-full flex flex-col relative mx-auto max-w-[85%] overflow-hidden">
      <div className="min-h-screen bg-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-merriweather text-gray-800">
        <div className="max-w-screen-xl mx-auto w-full p-8 md:p-12 lg:p-16">
          <header className="mb-6">
            <h1 className="text-5xl font-extrabold tracking-tight text-black"
                style={{ fontFamily: "'Comic Neue', 'Luckiest Guy', 'Permanent Marker', sans-serif" }}>
              Comic Article — Titel
            </h1>
            <p className="text-sm text-gray-600">By — Datum</p>
          </header>

          <div className="comic-grid grid gap-6" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="panel panel-large relative border-8 border-black bg-white overflow-hidden" style={{ padding: '8px' }}>
              <div className="w-full h-full flex items-center justify-center">
                <ScrollSequence2
                  basePath="/Article2/doorSequences/RECOVER_door"
                  frameCount={25}
                  padDigits={2}
                  fileType="png"
                  scrollLengthVh={60}
                  scrollSpeedFactor={1.4}
                  startFrame={0}
                  className="w-250 h-auto ml-40 mb-80"
                />
              </div>
              <div className="caption absolute bottom-3 left-3 bg-yellow-300 text-black px-3 py-1 font-bold text-sm rounded-sm"
                   style={{ border: '4px solid #000', transform: 'skewX(-5deg)' }}>
                Animation Panel
              </div>
            </div>

            <div className="panel-right flex flex-col gap-6">
              <div className="panel side-panel border-8 border-black bg-white p-4 relative overflow-hidden" style={{ minHeight: '260px' }}>
                <div className="flex items-center justify-center gap-6 h-full">
                  <div
                    className={`w-1/2 transform transition-transform duration-300 ${hovered === 'boy' ? 'scale-110' : ''}`}
                    onMouseEnter={() => setHovered('boy')}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <img src="/Article2/Girl.png" alt="Girl" className="w-full h-auto object-contain rounded-sm drop-shadow" />
                  </div>
                  <div
                    className={`w-1/2 transform transition-transform duration-300 ${hovered === 'girl' ? 'scale-110' : ''}`}
                    onMouseEnter={() => setHovered('girl')}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <img src="/Article2/Boy.png" alt="Boy" className="w-full h-auto object-contain rounded-sm drop-shadow" />
                  </div>
                </div>

                <div className="absolute top-4 right-4">
                  <div className="speech-bubble px-3 py-1 bg-white text-black font-bold" style={{ border: '4px solid #000' }}>
                    CHOOSE!
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="panel small-panel border-8 border-black bg-white p-4 relative" style={{ minHeight: '160px' }}>
                  <div className="bubble p-3 bg-white" style={{ border: '4px solid #000' }}>
                    <p className="text-sm text-black font-medium">Panel Text / Speech</p>
                  </div>
                </div>
                <div className="panel small-panel border-8 border-black bg-white p-4 relative" style={{ minHeight: '160px' }}>
                  <div className="bubble p-3 bg-white" style={{ border: '4px solid #000' }}>
                    <p className="text-sm text-black font-medium">Panel Text / Speech</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel-full col-span-2 grid gap-6 mt-6" style={{ gridColumn: '1 / -1' }}>
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2 panel border-8 border-black bg-yellow-50 p-6 relative" style={{ minHeight: '220px' }}>
                  <div className="comic-bubble p-4 bg-white" style={{ border: '6px solid #000', boxShadow: '6px 6px 0 #00000022' }}>
                    {paragraphBlocks.slice(0, Math.ceil(paragraphBlocks.length / 3)).map((p, i) => (
                      <p key={i} className="text-sm text-black mb-3" style={{ fontFamily: "'Comic Neue', sans-serif" }}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="panel border-8 border-black bg-cyan-50 p-6 relative" style={{ minHeight: '220px' }}>
                  <div className="comic-bubble p-4 bg-white" style={{ border: '6px solid #000' }}>
                    {paragraphBlocks.slice(Math.ceil(paragraphBlocks.length / 3), Math.ceil(2 * paragraphBlocks.length / 3)).map((p, i) => (
                      <p key={i} className="text-sm text-black mb-3" style={{ fontFamily: "'Comic Neue', sans-serif" }}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-6">
                <div className="panel border-8 border-black bg-lime-50 p-4" style={{ minHeight: '180px' }}>
                  <div className="comic-bubble p-3 bg-white" style={{ border: '6px solid #000' }}>
                    {paragraphBlocks.slice(Math.ceil(2 * paragraphBlocks.length / 3)).map((p, i) => (
                      <p key={i} className="text-sm text-black mb-2" style={{ fontFamily: "'Comic Neue', sans-serif" }}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="col-span-2 panel border-8 border-black bg-pink-50 p-4" style={{ minHeight: '180px' }}>
                  <div className="comic-bubble p-3 bg-white" style={{ border: '6px solid #000' }}>
                    <p className="text-sm text-black" style={{ fontFamily: "'Comic Neue', sans-serif" }}>
                      Weitere erklärende Blöcke, Quellenangaben oder Zitate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-8 text-right">
            <span className="text-xs text-gray-500">Comic layout — designed for article two</span>
          </footer>

          <style jsx>{`
            .panel { background-image: linear-gradient(180deg, #fff 0%, #fff 100%); }
            .comic-grid { }
            .speech-bubble {
              border-radius: 12px;
              font-family: 'Comic Neue', sans-serif;
              box-shadow: 6px 6px 0 #00000022;
            }
            .comic-bubble p { margin: 0; }
            .panel::before {
              content: '';
              position: absolute;
              inset: 0;
              pointer-events: none;
              background-image:
                radial-gradient(circle at 10% 10%, rgba(0,0,0,0.06) 1px, transparent 1px),
                radial-gradient(circle at 30% 50%, rgba(0,0,0,0.04) 1px, transparent 1px);
              background-size: 8px 8px, 12px 12px;
              mix-blend-mode: multiply;
              opacity: 0.35;
            }
            .comic-bubble { position: relative; z-index: 2; }
            @media (max-width: 900px) {
              .comic-grid { grid-template-columns: 1fr; }
              .panel-right { order: 2; }
              .panel-large { order: 1; }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}