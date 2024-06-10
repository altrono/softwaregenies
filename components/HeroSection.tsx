import Link from "next/link";
import { TextGenerateEffect } from "./ui/text-generate-effect";

import { BackgroundBeams } from "./ui/background-beams";


const HeroSection = () => {
  return (
    <div className="relative flex flex-col pt-20 items-center justify-center  md:mx-auto w-full min-h-full" id="about">
        
        <h1 className="text-3xl md:text-5xl px-4  bg-clip-text text-transparent max-w-[1000px] bg-gradient-to-b from-neutral-200 to-neutral-600  text-center  font-extrabold">
        <span className=" font-bold">Next.js</span> and <span className=" font-bold">React Native</span>{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-800">development experts</span>
        </h1>
        
        <div className="mt-5 px-4 text-sm md:text-lg lg:text-lg text-center text-neutral-500 max-w-[800px]">
            <TextGenerateEffect words="We’re a team of engineers using headless and composable architecture 
                to create powerful Web and Mobile experiences.The ideal beginning stage for your next project." />
        </div>
        <BackgroundBeams />
    </div>
  )
}

export default HeroSection