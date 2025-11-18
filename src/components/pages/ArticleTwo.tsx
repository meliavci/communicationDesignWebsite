'use client';

import React, {useState} from 'react';
import ScrollSequence2 from '@/components/ScrollSequence2';
import {ComicText} from "@/components/ui/comic-text";
import {LineShadowText} from "@/components/ui/line-shadow-text";

export default function ArticleTwo() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="bg-white h-full flex flex-col relative mx-auto max-w-full xl:max-w-[85%] overflow-x-hidden halftone-overlay">
      <div
        className="min-h-screen bg-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-merriweather text-gray-800 ">
        <div className="absolute inset-0 halftone-overlay" aria-hidden="true" />
        <div className="max-w-screen-xl mx-auto w-full md:p-12 lg:p-16">

          <header className="mb-6 comic-header">
            <div className="header-ray-background relative overflow-visible">
              <div className="halftone-overlay" aria-hidden="true"/>

              <div className="max-w-6xl mx-auto px-6 py-10 relative flex items-center justify-center">
                <div className="header-content relative z-20 text-center">
                  <div className="inline-block px-6 py-4 transform -translate-y-3">
                    <ComicText
                      fontSize={5}
                      className="text-4xl sm:text-6xl xl:text-[5rem]"
                      style={{WebkitTextStroke: '2px #000000'}}
                    >
                      Screens and Childhood:
                    </ComicText>
                    <ComicText
                      fontSize={3}
                      backgroundColor="#00a2ff"
                      dotColor="#0071b3"
                      className="mt-5 text-2xl sm:text-4xl xl:text-[3rem]"
                      style={{WebkitTextStroke: '1px #000000'}}
                    >
                      Gaming vs. Doomscrolling
                    </ComicText>
                    <p className="mt-10 comic-text text-lg md:text-xl lg:text-3xl text-black">
                      From iPads to endless feeds, interviews with families disclose the difference between gaming and
                      doomscrolling in kids
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="caption absolute bottom-3 right-3 bg-white text-black px-3 py-1 font-bold text-sm rounded-sm"
                style={{border: '4px solid #000', transform: 'skewX(-5deg)'}}>
                November 03, 2025 | By Daniel Betto
              </div>
            </div>
          </header>

          <div className="mt-6">
            <div
              className="border-8 border-black bg-[#FFC400FF] p-6 relative flex flex-col items-center gap-6 overflow-visible pb-32 sm:pb-48 xl:pb-[760px]"
              style={{minHeight: 0}}
            >
              <div className="comic-bubble p-4 bg-white"
                   style={{border: '6px solid #000', boxShadow: '6px 6px 0 #00000022'}}>
                <h1
                  className="text-2xl text-black leading-none font-semibold tracking-tighter text-balance sm:text-3xl md:text-4xl lg:text-6xl">
                  Two habits, {' '}
                  <LineShadowText className="italic">one</LineShadowText>{' '}
                  <LineShadowText className="italic">screen</LineShadowText>

                </h1>
                <p className="comic-text">Children’s never ending screen time usage has evolved into two different
                  habits, according to experts
                  and observation from families; gaming focused “iPad kids” and “doomscrollers.” This article includes
                  interviews with a grandfather experiencing the worrisome term iPad kids, and an interview with an
                  older sister worried about her younger siblings’ excessive screentime not on iPad, but phones. The
                  grandsons are 12 and 14, while both the twin sisters are 12. The similar experiences of the grandsons
                  and the twin sisters reveal interesting differences in how children use screen and how it affects
                  them.</p>
              </div>

              <div className="w-full flex items-center justify-center">
                <ScrollSequence2
                  basePath="/Article2/windowSequences/RECOVER_RECOVER_vindu"
                  frameCount={42}
                  padDigits={2}
                  fileType="png"
                  scrollLengthVh={20}
                  scrollSpeedFactor={2}
                  startFrame={0}
                  className="w-full h-auto -mt-160 md:mt-0 max-w-[1200px]"
                />
              </div>
            </div>
          </div>

          <div
            className="border-8 border-t-0 border-black bg-white p-6 relative flex flex-col items-center gap-6 overflow-visible">
            <h1
              className="text-2xl text-black leading-none font-semibold tracking-tighter text-balance sm:text-3xl md:text-4xl lg:text-6xl">
              <LineShadowText className="italic">Gaming</LineShadowText>{' '}
              vs{' '}
              <LineShadowText className="italic">Endless</LineShadowText>{' '}
              <LineShadowText className="italic">scrolling</LineShadowText>
            </h1>
            <p className="comic-text">To start off with what differs the children apart the most, it is that the
              grandsons spend their time on their iPad playing games, with a portion of that time spent scrolling on
              YouTube shorts. Meanwhile, the twin sisters spend their time scrolling exclusively through YouTube shorts.
              They both fall into the phenomenon called “doomscrolling”. It is a vicious cycle in which users find
              themselves stuck in a pattern of wanting more entertainment no matter how much they already consumed.</p>
            <p className="comic-text">“They are terrible at managing screentime, they have no limit” the older sister
              continues with, “after doing their homework, which takes around an hour, the rest of the day goes to
              scrolling on YouTube shorts”.</p>
            <p className="comic-text">This is not something an iPad kid would choose to do between 2010 to 2019.
              Scrolling was not normalized until 2022. During the Covid pandemic, people would endlessly seek
              information online by scrolling through news articles. This habit shifted to scrolling through social
              media for entertainment and dopamine release.</p>
            <p className="comic-text">“They received their iPad before ever starting at school, and there was an
              explosion on screentime usage.” The grandfather says when it comes to his grandsons using their devices.
              “They took their iPads everywhere they went”.</p>
          </div>


          <div className="comic-grid grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div
              className="border-8 border-black bg-[#70ff8f] col-span-1 p-6 relative flex flex-col items-center gap-6 overflow-visible">
              <h1
                className="text-2xl text-black leading-none font-semibold tracking-tighter text-balance sm:text-3xl md:text-4xl lg:text-6xl">
                Which is {' '}
                <LineShadowText className="italic">better?</LineShadowText>
              </h1>
              <p className="comic-text">National Institutes of Health has shown a study of nearly 2,000 children who
                reported playing games for three hours per day and performed better on cognitive skills compared to
                children who had never played. Since there are no advantages with doomscrolling, despite both habits
                causing issues within families, experts and families themselves agree that gaming may be less harmful
                than
                constant scrolling. “It is obvious that gaming is healthier than pure scrolling. It is even more of a
                time
                waste,” the grandfather points out.</p>
            </div>


            <div className="md:col-span-2 panel-right flex flex-col gap-6 h-full">
              <div className="panel side-panel border-8 border-black bg-white relative overflow-hidden"
                   style={{minHeight: '260px'}}>
                <div className="flex items-center justify-center gap-6 h-full bg-[#ff6347] cursor-pointer">
                  <div
                    className={`w-1/2 transform transition-transform duration-300 ${hovered === 'boy' ? 'scale-110' : ''}`}
                    onMouseEnter={() => setHovered('boy')}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/Article2/Girl.png" alt="Girl"
                         className="w-full h-auto object-contain rounded-sm drop-shadow"/>
                  </div>
                  <div
                    className={`w-1/2 transform transition-transform duration-300 ${hovered === 'girl' ? 'scale-120' : ''}`}
                    onMouseEnter={() => setHovered('girl')}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/Article2/Boy.png" alt="Boy"
                         className="w-full h-auto object-contain rounded-sm drop-shadow"/>
                  </div>
                </div>

                <div className="absolute top-4 right-4">
                  <div className="speech-bubble px-3 py-1 bg-white text-black font-bold"
                       style={{border: '4px solid #000'}}>
                    CHOOSE!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="comic-grid w-full grid gap-6 mt-6 grid-cols-1 lg:grid-cols-2">
            <div className="panel-full col-span-full grid gap-6 mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="col-span-1 border-8 border-black bg-[#70cbff] p-6 gap-6 relative overflow-hidden"
                     style={{minHeight: '220px'}}>
                  <div className="p-4 bg-white"
                       style={{border: '6px solid #000', boxShadow: '6px 6px 0 #00000022'}}>
                    <h1
                      className="text-2xl text-black leading-none font-semibold tracking-tighter text-balance sm:text-3xl md:text-4xl lg:text-6xl mb-6">
                      How the {' '}
                      <LineShadowText className="italic">children</LineShadowText>{' '}
                      respond
                    </h1>
                    <p className="text-black mb-3 comic-text">
                      When parents fear their children being consumed by screen time, there are a few measures that can
                      hopefully mitigate their usage. Either talk to them about the seriousness of what they are doing
                      or take it away to force them to go a day or two without their devices. In this case, the twin
                      sisters react differently than the grandsons.</p>
                    <p className="text-black comic-text">
                      “They get bored, whine, and complain a lot, but they do not have complete meltdowns. It is not
                      that bad, but we could get there,” the older sister continues with, “During those periods, they
                      complain about how bored they are and have nothing to do. They have lost any ability to do
                      anything other than scrolling. But they accept the situation and do not rage against us for taking
                      their phones. “
                    </p>
                    <p className="text-black mt-3 comic-text">
                      This shows how the twin sisters do not throw tantrums or get in a bad mood; they accept the
                      situation and try to find other things to do. In contrast, the grandfather mentions, “I have been
                      a witness to when the parents said enough is enough - that is when the children get really
                      aggressive,” the grandfather explains. The difference between how both the grandsons and twin
                      sisters react is noticeable.
                    </p>
                  </div>
                  <div className="-mt-90 lg:-mt-[280px]">
                    <ScrollSequence2
                      basePath="/Article2/vsSequences/vs"
                      frameCount={30}
                      padDigits={2}
                      fileType="png"
                      scrollLengthVh={60}
                      scrollSpeedFactor={1.4}
                      startFrame={0}
                      className="w-full h-auto max-w-[680px]"
                    />
                  </div>
                </div>

                <div className="col-span-1 relative border-8 border-black bg-[#8861ff] overflow-hidden">
                  <div className="w-full flex items-center justify-center -mt-80 lg:-mt-[200px]">
                    <ScrollSequence2
                      basePath="/Article2/doorSequences/RECOVER_door"
                      frameCount={25}
                      padDigits={2}
                      fileType="png"
                      scrollLengthVh={60}
                      scrollSpeedFactor={1.4}
                      startFrame={0}
                      className="w-full h-auto max-w-[760px] mx-auto lg:ml-24"
                    />
                  </div>
                  <div
                    className="bg-white text-black px-3 py-1 rounded-sm p-4 mt-35 mx-6 mb-6"
                    style={{border: '4px solid #000', transform: 'skewX(-2deg)'}}>
                    <h1
                      className="text-2xl text-black leading-none font-semibold tracking-tighter text-balance sm:text-3xl md:text-4xl lg:text-6xl mb-6">
                      Finding {' '}
                      <LineShadowText className="italic">healthier</LineShadowText>{' '}
                      habits
                    </h1>
                    <p className="text-black mb-3 comic-text">
                      Both interviewees have been asked about how they believe their family members will eventually
                      detox from these habits. The older sister mentions that if the girls played video games rather
                      than scrolling, it would be way better. She agrees that playing games is far healthier than
                      scrolling and that it could strengthen their cognitive abilities. So, for her belief, replacing
                      scrolling with games could be the easiest answer.</p>
                    <p className="text-black comic-text pb-4">
                      The grandfather believes that finding things to do as a family outside of the home will help them.
                      Obviously, iPads are not allowed when outside the home. The more the grandsons play sports, eat
                      out with family or take a long trip to visit the cabin - with no internet or electricity, the
                      easier it will be for them to slowly reduce the desire to play games all day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="comic-grid w-full grid gap-6 mt-6 border-8 border-black header-ray-background p-6 grid-cols-1">
            <div className="w-full flex items-center justify-center -mt-100 lg:-mt-[180px] lg:pb-[180px]">
              <ScrollSequence2
                basePath="/Article2/controllerWinsSequences/controller-winns-over-phone-vrs1-2_"
                frameCount={41}
                padDigits={2}
                fileType="png"
                scrollLengthVh={60}
                scrollSpeedFactor={2}
                startFrame={1000}
                className="w-full h-auto max-w-[1088px]"
              />
            </div>
          </div>
          <footer className="mt-12 pt-8 border-t-2 border-gray-300 text-center text-gray-600 text-sm font-opensans">
            <p>Communication Design 2025</p>
            <p>Melisa Avci, Raphael Tam-Dao, Daniel Betto, Ylva Romann Aas, Ingrid Christensen Øvrelid</p>
          </footer>
        </div>

        <style jsx>{`
            .panel {
                background-image: linear-gradient(180deg, #fff 0%, #fff 100%);
            }

            .comic-grid {
            }

            .speech-bubble {
                border-radius: 12px;
                font-family: 'Comic Neue', sans-serif;
                box-shadow: 6px 6px 0 #00000022;
            }

            .comic-bubble p {
                margin: 0;
            }

            .panel::before {
                content: '';
                position: absolute;
                inset: 0;
                pointer-events: none;
                background-image: radial-gradient(circle at 10% 10%, rgba(0, 0, 0, 0.06) 1px, transparent 1px),
                radial-gradient(circle at 30% 50%, rgba(0, 0, 0, 0.04) 1px, transparent 1px);
                background-size: 8px 8px, 12px 12px;
                mix-blend-mode: multiply;
                opacity: 0.35;
            }

            .comic-bubble {
                position: relative;
                z-index: 2;
            }

            @media (max-width: 900px) {
                .panel-right {
                    order: 2;
                }

                .panel-large {
                    order: 1;
                }
            }

            .comic-header {
            }

            .explosion {
                opacity: 0.95;
            }

            .explosion-svg {
                width: 100%;
                height: 220px;
                max-height: 260px;
                display: block;
            }

            .halftone-overlay {
                position: absolute;
                inset: 0;
                z-index: 15;
                pointer-events: none;
                background-image: radial-gradient(circle, rgba(0, 0, 0, 0.14) 1px, transparent 2px);
                background-size: 10px 10px;
                mix-blend-mode: multiply;
                opacity: 0.25;
            }

            .header-content {
                position: relative;
                z-index: 20;
            }

            .halftone-title {
                color: #ff3b3b;
                font-family: var(--font-comic);
                font-weight: 900;
                text-transform: none;
                -webkit-text-stroke: 6px #000;
                text-stroke: 6px #000;
                text-shadow: 8px 8px 0 rgba(0, 0, 0, 0.95);
                display: inline-block;
                padding: 0 0.25rem;
                letter-spacing: -0.02em;
            }

            .subtitle {
                color: #1a1a1a;
                font-family: var(--font-comic);
            }

        `}</style>
      </div>
    </div>
  )
    ;
}