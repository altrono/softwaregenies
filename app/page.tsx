import Image from "next/image";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/WhyWorkWithUs";
import Workflow from "@/components/Workflow";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { Spotlight } from "@/components/ui/Spotlight";
import Partners from "@/components/Partners";

import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";
import ProjectsStat from "@/components/ProjectsStat";
import CaseStudies from "@/components/CaseStudies";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import Services from "@/components/Services";
import World from "@/components/World";
import ContactSection from "@/components/ContactSection";


export default function Home() {
  return (
    <main className="relative bg-black-100 overflow-clip flex justify-center items-center flex-col mx-auto  ">    
        <div className="w-full  flex justify-center items-center h-[50vh]">    
            <Spotlight 
                className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
                fill='white'  />
            

            <Spotlight 
                className='top-28 left-80 h-[80vh] w-[50vh]' fill='blue'  />

          
            <HeroSection />
            
                 
        </div>
        <div className="flex gap-5 justify-center mb-20 p-10">
              <Link  href="/"
                className="block max-w-200 h-14  border-transparent 
                shadow-[inset_0_0_0_1px_#fb923c] text-black px-5 text-center py-4 rounded-full tracking-widest 
                uppercase font-bold bg-orange-500 hover:bg-transparent  hover:text-white 
                dark:text-neutral-200 transition duration-300 overflow-hidden"
              >Contact <span className="max-md:hidden"> Us</span></Link>
              <Link  href="/"
                className="block max-w-200 h-14  border-transparent 
                shadow-[inset_0_0_0_1px_#fb923c] text-black px-5 py-4 rounded-full tracking-widest 
                uppercase font-bold hover:bg-orange-500 bg-transparent  hover:text-white 
                dark:text-neutral-200 transition duration-300 overflow-hidden"
              ><span className="max-md:hidden"> Our </span>Services</Link>
        </div> 

        <Partners /> 

        <Services /> 

        <ProjectsStat />
        
        <WhyWorkWithUs />

        <CaseStudies />
        <World />
        
        <ContactSection />
        {/* 
        <Workflow />
        <Pricing />
        <Testimonials /> */}
        <Footer />
    </main>
  );
}
