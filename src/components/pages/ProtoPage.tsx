import React, {useLayoutEffect, useRef, useState} from 'react';
import ScrollSequence2 from "@/components/ScrollSequence2";

export default function ProtoPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <style>{`
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

      <div
        ref={pageRef}
        className="bg-[#FCFCF7] h-full flex flex-col relative z-30 mx-auto max-w-[90%] overflow-hidden"
      >
        <div className="flex-1 p-16 overflow-auto space-y-12 no-scrollbar">
          <div className="max-w-7xl mx-auto px-4">
            <header className="text-center md:text-left space-y-4 mt-20 -mb-40 relative z-40">
              <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-black">
                Adolescents’ chosen drug
              </h1>
              <p className="text-2xl font-medium text-gray-700">
                You are looking at a drug, right now.
              </p>
            </header>

            <ScrollSequence2
              basePath="/Article1/syringeSequences/WIEDERHERGESTELLT_Syringe"
              frameCount={70}
              padDigits={2}
              fileType="png"
              scrollLengthVh={15}
              scrollSpeedFactor={2.0}
              startFrame={1}
            />

            <p className="text-md italic text-gray-600 border-b mt-160 pb-2">
              Once a coping mechanism during Covid-19, doomscrolling has evolved into a daily addiction for many teens.
            </p>

            <p className="text-sm text-gray-500 mt-5">
              October 8, 2025 | By Daniel Betto
            </p>

            <div className="flex flex-row items-start gap-8 w-full">
              <div className="flex-1 min-w-0 pt-10">
                <h2 className="text-3xl font-bold text-black mb-2">Hooked on the scroll</h2>
                <p className="text-black whitespace-normal break-words text-justify">
                  What does right after waking up in the morning and before lying in bed have in common? Using our
                  thumbs to
                  continuously swipe up on our phones. It starts by checking what has been posted on social media and
                  then
                  scrolling past what you were curious about, ending up an hour later unmotivated and full of regret.
                  Despite social media or news articles being gloomy, we still choose to absorb the energy by scrolling
                  to
                  the next short video or headline until we also become gloomy. That phenomenon is what the Oxford
                  English
                  Dictionary calls “doomscrolling”.
                </p>
              </div>

              <div className="flex-1 min-w-0 pt-10">
                <h2 className="text-3xl font-bold text-black mb-2">Established during pandemic</h2>
                <p className="text-black whitespace-normal break-words text-justify">
                  Doomscrolling became a threat during the Covid-19 pandemic, by feeding off stress and fear from
                  individuals
                  throughout the world. Due to the uncertainty surrounding the pandemic, the internet and social media
                  were the
                  only ways to protect ourselves. The prolonged feeling of discomfort and lack of control increased an
                  inner
                  urge to gather as much information as possible to feel prepared and safe. This mostly leads to
                  discovering
                  negative social media and news that most end up unsatisfied and even more distressed. Thus, creating
                  hope that
                  the next article or social media post will lessen discomfort-until it doesn’t-and almost two hours
                  have
                  passed.
                </p>
              </div>
            </div>

            <section className="w-full mt-20">
              <div className="border rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => setIsOpen(v => !v)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-4 bg-blue-950 hover:bg-blue-900 focus:outline-none"
                >
                  <div className="text-left">
                    <h2 className="text-3xl font-bold text-white">Established during pandemic</h2>
                  </div>

                  <span
                    className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    aria-hidden="true"
                  >
                  <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </span>
                </button>

                <div
                  className={`px-4 overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? 'max-h-[40rem] pb-6' : 'max-h-0'}`}
                  aria-hidden={!isOpen}
                >
                  <p className="pt-4 text-base text-gray-700 text-justify">
                    Doomscrolling became a threat during the Covid-19 pandemic, by feeding off stress and fear from
                    individuals
                    throughout the world. Due to the uncertainty surrounding the pandemic, the internet and social media
                    were the
                    only ways to protect ourselves. The prolonged feeling of discomfort and lack of control increased an
                    inner
                    urge to gather as much information as possible to feel prepared and safe. This mostly leads to
                    discovering
                    negative social media and news that most end up unsatisfied and even more distressed. Thus, creating
                    hope that
                    the next article or social media post will lessen discomfort-until it doesn’t-and almost two hours
                    have
                    passed.
                  </p>
                </div>
              </div>
            </section>

            <div className="flex w-full items-stretch justify-between">
              <div className="flex-1 min-w-0 pr-6 pt-20">
                <h2 className="text-3xl font-bold text-black mb-2">Fear to boredom</h2>
                <p className="text-black text-justify">
                  Five years later Covid-19 is not a worldwide threat anymore, yet we still have not lost that urge to
                  gather
                  information. Most people have spent hours scrolling throughout the years, which has become a hobby to
                  engage
                  in at any given time. The Doomscrolling phenomenon has evolved into not only feeding off of fear, but
                  boredom.
                  Gathering information about a certain subject won’t last as many hours as scrolling through entertaining
                  short
                  videos. All social media platforms have a page solely based on short videos that users watch by
                  scrolling
                  upwards to view more. This time doomscrolling appears to be a vicious cycle in which users find
                  themselves
                  stuck in a pattern of wanting more entertainment no matter how much they already absorbed<sup
                  className="text-blue-600">1</sup>.
                </p>
              </div>

              <div className="flex-none min-w-0 flex items-center justify-center px-10 pt-20">
                <img
                  src="/Article1/Head.png"
                  alt="Head looking at phone"
                  className="max-h-100 h-auto w-auto rounded-lg object-contain"
                />
              </div>

              <div className="flex-1 min-w-0 pl-6 pt-20">
                <h2 className="text-3xl font-bold text-black mb-2">Hidden mental price</h2>
                <p className="text-black text-justify">
                  As many users who doomscroll one to two times a day for a total of five hours total would say it is
                  harmless and would not mind their hours being spent on killing time, it has been found that it has harmful
                  effects to their mental health. A study has shown that teens who spend a minimum of two hours a day scrolling
                  double the risk of developing anxiety and quadruple the risk of showing signs of depression
                  <sup className="text-blue-600">2</sup>. Professor Emma Duerden conducted a study before Covid-19, showing
                  rates of anxiety in adolescents were between 8-15%, while years after the pandemic, it has gone up to 45% of the
                  adolescents. Actively using social media like chatting or posting for more than two hours would not increase
                  any harm to mental health, but passively scrolling through social media does.
                </p>
              </div>
            </div>

            <div className="flex-1 min-w-0 pt-20">
              <h2 className="text-3xl font-bold text-black mb-2">An addiction in disguise</h2>
              <p className="text-black text-justify">
                Due to phones being commonplace in the early ages, a whole generation and those after might be greatly
                affected and have a completely different childhood than most before Covid-19. Spending a short amount of
                time-consuming content that turns into more than intended; using doomscrolling as a way to procrastinate
                chores and thoughts; continuing to doomscroll even though one knows the problems within it; and failing
                to
                stop despite awareness, all similar symptoms to addiction are all similar symptoms to addiction.
                Addiction is
                a disease that affects the brain and leads to an inability to control the use of any chosen drug<sup
                className="text-blue-600">3</sup>. “It starts as something positive that activates dopamine receptors,
                but you
                are constantly chasing the high”, states Multicare Vitals in their report of the dangers of
                doomscrolling.
                This is especially concerning knowing that adolescence is a critical period for brain development with
                emotion
                regulation and impulse control. It is therefore very easy to grab the phone as soon as one wake up and
                stay
                scrolling all morning<sup className="text-blue-600">4</sup>. An effective way to support adolescents’
                well-being would be to reduce screen time to under 2 hours a day, but that is easier said than done.
              </p>
            </div>

            <div className="flex flex-row items-start gap-6 w-full">
              <div className="flex-1 min-w-0 pt-20">
                <p className="text-black text-justify">
                  It is crucial that parents and scientists find ways to encourage adolescents to set boundaries and not
                  dive
                  into a ritual that induces signs of anxiety, depression, impulsiveness and addiction. Doomscrolling
                  has become
                  a normalized daily routine that despite feeling regret after, it still creates a form of muscle memory
                  where
                  you would go to Instagram to watch Instagram reels instead of setting an alarm for tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
