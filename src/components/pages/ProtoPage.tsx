import React, {useRef, useState} from 'react';
import ScrollSequence from '../ScrollSequence';

export default function ProtoPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  const mediaClassName = "max-w-xl w-full h-auto";
  const [isOpen, setIsOpen] = useState(false);

  // Define the desired scroll duration for the animation in pixels.
  // This will be used to calculate the height of the container div.
  const animationHeight = 2000;

  const syringeAnimation = {
    frameCount: 69,
    basePath: '/export/WIEDERHERGESTELLT_Syringe',
    framePadding: 2,
    heightVh: 200,
    className: "w-full h-full",
  }


  return (
    <div ref={pageRef} className="bg-white h-full flex flex-col relative z-30 rounded-t-lg shadow-2xl">
      <div className="flex-1 p-16 space-y-12 px-60">

        <header className="text-center md:text-left space-y-4 mt-6 -mb-20 relative z-40">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-black">
            Adolescents’ chosen drug
          </h1>
          <p className="text-2xl font-medium text-gray-700">
            You are looking at a drug, right now.
          </p>
        </header>

        <div style={{ height: `${syringeAnimation.heightVh}vh` }}>
          <ScrollSequence
            frameCount={syringeAnimation.frameCount}
            basePath={syringeAnimation.basePath}
            framePadding={syringeAnimation.framePadding}
            heightVh={syringeAnimation.heightVh}
            className="w-full h-full"
          />
        </div>


        <p className="text-md italic text-gray-600 border-b pb-4">
          Once a coping mechanism during Covid-19, doomscrolling has evolved into a daily addiction for many teens.
        </p>

        <p className="text-sm text-gray-500">
          October 8, 2025 | By Daniel Betto
        </p>


        <div className="flex flex-row items-start gap-8 w-full">
          <div className="flex-1 min-w-0 pt-20">
            <h2 className="text-4xl font-bold text-black mb-5">Hooked on the scroll</h2>
            <p className="text-black whitespace-normal break-words">
              What does right after waking up in the morning and before lying in bed have in common? Using our thumbs to
              continuously swipe up on our phones. It starts by checking what has been posted on social media and then
              scrolling past what you were curious about, ending up an hour later unmotivated and full of regret.
              Despite social media or news articles being gloomy, we still choose to absorb the energy by scrolling to
              the next short video or headline until we also become gloomy. That phenomenon is what the Oxford English
              Dictionary calls “doomscrolling”.
            </p>
          </div>

          {/*<div className="flex-shrink-0 w-[420px] max-w-[45vw] flex justify-center">*/}
          {/* <ScrollControlledMedia*/}
          {/* src={"RECOVER_arm.gif"}*/}
          {/* alt="Arm connected to phone IV drip"*/}
          {/* type="image"*/}
          {/* className="w-full h-auto max-h-[80vh] object-contain"*/}
          {/* />*/}
          {/*</div>*/}

          <div className="flex-1 min-w-0 pt-20">
            <h2 className="text-4xl font-bold text-black mb-5">Established during pandemic</h2>
            <p className="text-black whitespace-normal break-words">
              Doomscrolling became a threat during the Covid-19 pandemic, by feeding off stress and fear from individuals
              throughout the world. Due to the uncertainty surrounding the pandemic, the internet and social media were the
              only ways to protect ourselves. The prolonged feeling of discomfort and lack of control increased an inner
              urge to gather as much information as possible to feel prepared and safe. This mostly leads to discovering
              negative social media and news that most end up unsatisfied and even more distressed. Thus, creating hope that
              the next article or social media post will lessen discomfort-until it doesn’t-and almost two hours have
              passed.
            </p>
          </div>
        </div>



        <section className="w-full">
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
              <p className="pt-4 text-base text-gray-700">
                Doomscrolling became a threat during the Covid-19 pandemic, by feeding off stress and fear from individuals
                throughout the world. Due to the uncertainty surrounding the pandemic, the internet and social media were the
                only ways to protect ourselves. The prolonged feeling of discomfort and lack of control increased an inner
                urge to gather as much information as possible to feel prepared and safe. This mostly leads to discovering
                negative social media and news that most end up unsatisfied and even more distressed. Thus, creating hope that
                the next article or social media post will lessen discomfort-until it doesn’t-and almost two hours have
                passed.
              </p>
            </div>
          </div>
        </section>


        <h2 className="text-4xl font-bold text-black pt-8">Fear to boredom</h2>
        <p className="text-black">
          Five years later Covid-19 is not a worldwide threat anymore, yet we still have not lost that urge to gather
          information. Most people have spent hours scrolling throughout the years, which has become a hobby to engage
          in at any given time. The Doomscrolling phenomenon has evolved into not only feeding off of fear, but boredom.
          Gathering information about a certain subject won’t last as many hours as scrolling through entertaining short
          videos. All social media platforms have a page solely based on short videos that users watch by scrolling
          upwards to view more. This time doomscrolling appears to be a vicious cycle in which users find themselves
          stuck in a pattern of wanting more entertainment no matter how much they already absorbed<sup
          className="text-blue-600">1</sup>.
        </p>

        {/*<div className="flex justify-center gap-8 -mt-10">*/}
        {/* <div className="flex-shrink-0 w-[420px] max-w-[45vw] flex justify-center">*/}
        {/* <ScrollControlledMedia*/}
        {/* src={"boobler.fla.gif"}*/}
        {/* alt="Person with phone over face"*/}
        {/* type="image"*/}
        {/* className={mediaClassName}*/}
        {/* />*/}
        {/* </div>*/}

        {/* <div className="flex-shrink-0 w-[420px] max-w-[45vw] flex justify-center" aria-hidden="true">*/}
        {/* <div style={{ transform: 'scaleX(-1)' }}>*/}
        {/* <ScrollControlledMedia*/}
        {/* src={"boobler.fla.gif"}*/}
        {/* alt="Person with phone over face (mirrored)"*/}
        {/* type="image"*/}
        {/* className={mediaClassName}*/}
        {/* />*/}
        {/* </div>*/}
        {/* </div>*/}
        {/*</div>*/}


        <h2 className="text-4xl font-bold text-black pt-8">Hidden mental price</h2>
        <p className="text-black">
          As many users who doomscroll one to two times a day for a total of five hours total would say it is harmless
          and would not mind their hours being spent on killing time, it has been found that it has harmful effects to
          their mental health. A study has shown that teens who spend a minimum of two hours a day scrolling double the
          risk of developing anxiety and quadruple the risk of showing signs of depression<sup
          className="text-blue-600">2</sup>. Professor Emma Duerden conducted a study before Covid-19, showing rates of
          anxiety in adolescents were between 8-15%, while years after the pandemic, it has gone up to 45% of the
          adolescents. Actively using social media like chatting or posting for more than two hours would not increase
          any harm to mental health, but passively scrolling through social media does.
        </p>

        {/*<div className="flex justify-center py-8">*/}
        {/* <ScrollControlledMedia*/}
        {/* src={"Head.png"}*/}
        {/* alt="Head with open top showing brain"*/}
        {/* type="image"*/}
        {/* className="max-w-xs w-full h-auto"*/}
        {/* />*/}
        {/*</div>*/}

        <h2 className="text-4xl font-bold text-black pt-8">An addiction in disguise</h2>
        <p className="text-black">
          Due to phones being commonplace in the early ages, a whole generation and those after might be greatly
          affected and have a completely different childhood than most before Covid-19. Spending a short amount of
          time-consuming content that turns into more than intended; using doomscrolling as a way to procrastinate
          chores and thoughts; continuing to doomscroll even though one knows the problems within it; and failing to
          stop despite awareness, all similar symptoms to addiction are all similar symptoms to addiction. Addiction is
          a disease that affects the brain and leads to an inability to control the use of any chosen drug<sup
          className="text-blue-600">3</sup>. “It starts as something positive that activates dopamine receptors, but you
          are constantly chasing the high”, states Multicare Vitals in their report of the dangers of doomscrolling.
          This is especially concerning knowing that adolescence is a critical period for brain development with emotion
          regulation and impulse control. It is therefore very easy to grab the phone as soon as one wake up and stay
          scrolling all morning<sup className="text-blue-600">4</sup>. An effective way to support adolescents’
          well-being would be to reduce screen time to under 2 hours a day, but that is easier said than done.
        </p>



        <div className="flex flex-row items-start gap-6 w-full">
          {/*<div className="flex-shrink-0 w-[320px] max-w-[40vw] flex justify-center">*/}
          {/* <ScrollControlledMedia*/}
          {/* src={"Head.png"}*/}
          {/* alt="Head with open top showing brain"*/}
          {/* type="image"*/}
          {/* className="w-full h-auto max-h-[80vh] object-contain"*/}
          {/* />*/}
          {/*</div>*/}


          <div className="flex-1 min-w-0 self-center">
            <p className="text-black">
              It is crucial that parents and scientists find ways to encourage adolescents to set boundaries and not dive
              into a ritual that induces signs of anxiety, depression, impulsiveness and addiction. Doomscrolling has become
              a normalized daily routine that despite feeling regret after, it still creates a form of muscle memory where
              you would go to Instagram to watch Instagram reels instead of setting an alarm for tomorrow.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}