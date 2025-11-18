import React, {useEffect, useRef, useState} from 'react';
import ScrollSequence2 from "@/components/ScrollSequence2";

const useIntersectionObserver = (ref: React.RefObject<HTMLElement>, options: IntersectionObserverInit) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return isVisible;
};

const VisibleImage: React.FC<{ src: string; alt: string; caption: string; className?: string }> = ({
                                                                                                     src,
                                                                                                     alt,
                                                                                                     caption,
                                                                                                     className
                                                                                                   }) => {
  const imageRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const isVisible = useIntersectionObserver(imageRef, {threshold: 0.1});

  return (
    <figure
      ref={imageRef}
      className={`mb-10 transition-transform duration-1000 ease-out flex flex-col items-center ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-1/4 opacity-0'}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className={`w-[90%] h-auto grayscale-100 ${className || ''}`}/>
      <figcaption className="text-xs text-gray-500 mt-2 text-center w-[90%]">
        {caption}
      </figcaption>
    </figure>
  );
};


const ArticleOne: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white h-full flex flex-col relative mx-auto max-w-full xl:max-w-[85%] overflow-hidden">
      <div
        className="min-h-screen bg-white flex flex-col items-center pt-0 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 font-merriweather text-gray-800">
        <div
          className="max-w-screen-xl mx-auto w-full p-4 sm:p-8 md:p-12 lg:p-16">

          <header className="mb-10 border-b-4 border-gray-900 pb-6 mt-8">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-playfair font-extrabold leading-tight mb-3 uppercase tracking-tight">
              You are looking at a drug, right now.
            </h1>
            <p className="text-lg md:text-2xl font-playfair italic mb-5 text-gray-700">
              Adolescents’ chosen drug
            </p>
            <p className="text-xs md:text-md font-opensans text-gray-600 border-t border-gray-300 pt-3  -mb-55">
              October 8, 2025 | By Daniel Betto
            </p>
            <ScrollSequence2
              basePath="/Article1/syringeSequences/WIEDERHERGESTELLT_Syringe"
              frameCount={69}
              padDigits={2}
              fileType="png"
              scrollLengthVh={15}
              scrollSpeedFactor={2.0}
              startFrame={0}
              className="w-full grayscale-100"
            />

            <p className="text-sm md:text-md italic text-gray-600 mt-150">
              Once a coping mechanism during Covid-19, doomscrolling has evolved into a daily addiction for many teens.
            </p>
          </header>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">

            <div className="md:col-span-2">
              <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-10">
                <div className="w-full order-2 -mt-90 md:order-1 pt-10 md:-mt-78">
                  <ScrollSequence2
                    basePath="/Article1/armSequences/RECOVER_RECOVER_RECOVER_arm_"
                    frameCount={25}
                    padDigits={3}
                    fileType="png"
                    scrollLengthVh={38}
                    scrollSpeedFactor={2.0}
                    startFrame={500}
                    className="!w-5/8 !h-auto z-10 grayscale-100"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-2xl md:text-4xl font-playfair font-bold mb-5 border-b-2 border-gray-400 pb-2">
                    Hooked on the scroll
                  </h2>
                  <p className="mb-6 leading-relaxed text-sm break-words text-justify">
                    What does right after waking up in the morning and before lying in bed have in common? Using our
                    thumbs to continuously swipe up on our phones. It starts by checking what has been posted on social
                    media and then scrolling past what you were curious about, ending up an hour later unmotivated and
                    full of regret. Despite social media or news articles being gloomy, we still choose to absorb the
                    energy by scrolling to the next short video or headline until we also become gloomy. That phenomenon
                    is what the Oxford English Dictionary calls “doomscrolling”.
                  </p>
                </div>
              </section>

              <section className="mt-90 md:mt-8 sm:mt-25 w-full mb-20 z-20">
                <div className="border-2 border-gray-300 overflow-hidden">
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setIsExpanded(v => !v)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setIsExpanded(v => !v);
                      }
                    }}
                    className="w-full flex items-center justify-between p-4 focus:outline-none cursor-pointer hover:bg-gray-100 transition-colors relative z-30 pointer-events-auto"
                  >
                    <h2 className="text-xl md:text-4xl font-playfair font-bold pointer-events-none">
                      Grew larger during pandemic
                    </h2>

                    <svg
                      className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'} pointer-events-none`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </div>

                  <div
                    className={`px-4 overflow-hidden transition-[max-height] duration-500 ease-in-out ${isExpanded ? 'max-h-[500px] pb-6' : 'max-h-0'}`}
                  >
                    <div className="pt-4 text-sm text-justify text-gray-700 font-merriweather">
                      <p className="mb-4">
                        Doomscrolling became a threat during the Covid-19 pandemic, by feeding off stress and fear from
                        individuals throughout the world. Due to the uncertainty surrounding the pandemic, the internet
                        and social media were the only ways to protect ourselves. The prolonged feeling of discomfort
                        and lack of control increased an inner urge to gather as much information as possible to feel
                        prepared and safe. This mostly leads to discovering negative social media and news that most end
                        up unsatisfied and even more distressed. Thus, creating hope that the next article or social
                        media post will lessen discomfort-until it doesn’t-and almost two hours have passed.
                      </p>
                    </div>
                  </div>
                </div>
              </section>


              <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-10">
                <div className="order-2 md:order-1 md:mt-0 mt-60">
                  <h2 className="text-2xl md:text-4xl font-playfair font-bold mb-5 border-b-2 border-gray-400 pb-2">
                    Fear to boredom
                  </h2>
                  <p className="mb-6 leading-relaxed text-sm break-words text-justify">
                    Five years later Covid-19 is not a worldwide threat anymore, yet we still have not lost that urge to
                    gather information. Most people have spent hours scrolling throughout the years, which has become a
                    hobby to engage in at any given time. The Doomscrolling phenomenon has evolved into not only feeding
                    off of fear, but boredom. Gathering information about a certain subject won’t last as many hours as
                    scrolling through entertaining short videos. All social media platforms have a page solely based on
                    short videos that users watch by scrolling upwards to view more. This time doomscrolling appears to
                    be a vicious cycle in which users find themselves stuck in a pattern of wanting more entertainment
                    no matter how much they already <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9580444/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-bold ml-1">absorbed</a>.
                  </p>
                </div>
                <div className="w-full pt-10 -mt-100 md:-mt-68 order-1 md:order-2">
                  <ScrollSequence2
                    basePath="/Article1/messagesSequences/messages"
                    frameCount={25}
                    padDigits={2}
                    fileType="png"
                    scrollLengthVh={10}
                    scrollSpeedFactor={2.0}
                    startFrame={0}
                    className="!w-full !h-auto z-0 grayscale-100"
                  />
                </div>
              </section>
            </div>

            <aside className="md:col-span-1">
              <div className="md:border-l-2 md:border-gray-300 md:pl-8 h-full">
                <VisibleImage
                  src="/Article1/Head.png"
                  alt="Image of a brain with a frustrated face"
                  className="grayscale-100" caption={""}                />

                <h3 className="text-xl md:text-2xl font-playfair font-bold mb-4 border-b-2 border-gray-400 pb-2">
                  Hidden mental price
                </h3>
                <p className="leading-relaxed text-sm break-words text-justify mb-5">
                  As many users who doomscroll one to two times a day for a total of five hours total would say it is
                  harmless and would not mind their hours being spent on killing time, it has been found that it has
                  harmful effects to their mental health. A study has shown that teens who spend a minimum of two hours
                  a
                  day scrolling double the risk of developing anxiety and quadruple the risk of showing signs of <a href="https://economictimes.indiatimes.com/magazines/panache/is-doomscrolling-quietly-damaging-teen-brains-scientists-warn-it-is-more-than-just-a-waste-of-time/articleshow/121746535.cms?from=mdr" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-bold ml-1">depression</a>. Professor Emma Duerden conducted a
                  study before Covid-19, showing rates of anxiety in adolescents were between 8-15%, while years after
                  the
                  pandemic, it has gone up to 45% of the adolescents. Actively using social media like chatting or
                  posting
                  for more than two hours would not increase any harm to mental health, but passively scrolling through
                  social media does.
                </p>

                <VisibleImage
                  src="/Article1/Pills.png"
                  alt="Image of pills with social media logos"
                  className="w-[90%] h-auto grayscale-100" caption={""}                />
              </div>
            </aside>

          </div>


          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-x-14 gap-y-12 mt-8 sm:mt-12 items-start border-t-2 pt-6 border-gray-300 z-20">

            <section className="clear-right md:col-span-2 relative z-30">
              <h2 className="text-2xl md:text-4xl font-playfair font-bold mb-5 border-b-2 border-gray-400 pb-2 z-20">
                An addiction in disguise
              </h2>
              <p className="mb-6 leading-relaxed text-sm break-words text-justify">
                Due to phones being commonplace in the early ages, a whole generation and those after might be greatly
                affected and have a completely different childhood than most before Covid-19. Spending a short amount of
                time-consuming content that turns into more than intended; using doomscrolling as a way to procrastinate
                chores and thoughts; continuing to doomscroll even though one knows the problems within it; and failing
                to stop despite awareness, all similar symptoms to addiction are all similar symptoms to addiction.
                Addiction is a disease that affects the brain and leads to an inability to control the use of any chosen <a href="https://www.mayoclinic.org/diseases-conditions/drug-addiction/symptoms-causes/syc-20365112" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-bold ml-1 cursor-pointer z-20">drug</a>. “It starts as something positive that
                activates dopamine receptors, but you are constantly chasing the high”, states Multicare Vitals in their
                report of the dangers of doomscrolling. This is especially concerning knowing that adolescence is a
                critical period for brain development with emotion regulation and impulse control. It is therefore very
                easy to grab the phone as soon as one wake up and stay scrolling all <a href="https://economictimes.indiatimes.com/magazines/panache/is-doomscrolling-quietly-damaging-teen-brains-scientists-warn-it-is-more-than-just-a-waste-of-time/articleshow/121746535.cms?from=mdr" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-bold ml-1">morning</a>. An effective way to support adolescents’ well-being
                would be to reduce screen time to under 2 hours a day, but that is easier said than done.
              </p>

              <p className="mb-6 leading-relaxed text-sm break-words text-justify">
                It is crucial that parents and scientists find ways to encourage adolescents to set boundaries and not
                dive into a ritual that induces signs of anxiety, depression, impulsiveness and addiction. Doomscrolling
                has become a normalized daily routine that despite feeling regret after, it still creates a form of
                muscle memory where you would go to Instagram to watch Instagram reels instead of setting an alarm for
                tomorrow.
              </p>
            </section>
            <div className="-mt-68 md:-mt-58 md:pb-0 pb-150">
              <ScrollSequence2
                basePath="/Article1/bongSequences/bong"
                frameCount={24}
                padDigits={2}
                fileType="png"
                scrollLengthVh={10}
                scrollSpeedFactor={2.0}
                startFrame={0}
                className="!w-full !h-auto grayscale-100 -z-1"
              />
            </div>
          </div>

          <footer className="mt-12 pt-8 border-t-2 border-gray-300 text-center text-gray-600 text-sm font-opensans">
            <p>Communication Design 2025</p>
            <p>Melisa Avci, Raphael Tam-Dao, Daniel Betto, Ylva Romann Aas, Ingrid Christensen Øvrelid</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ArticleOne;