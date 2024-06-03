"use client";
 
import Image from "next/image";
import { Tabs } from "./ui/tabs";


const DummyContent = () => {
    return (
      <Image
        src="/p3.svg"
        alt="dummy image"
        width="1000"
        height="1000"
        className=""
      />
    );
  };

const CaseStudies = () => {
    const tabs = [
        {
          title: "E-commerce",
          value: "product",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-500 to-orange-700">
              <p>Product Tab</p>
              <DummyContent />
            </div>
          ),
        },
        {
          title: "Services",
          value: "services",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-50 to-orange-100">
              <p>Services tab</p>
              <DummyContent />
            </div>
          ),
        },
        {
          title: "Playground",
          value: "playground",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-50 to-orange-100">
              <p>Playground tab</p>
              <DummyContent />
            </div>
          ),
        },
        {
          title: "Content",
          value: "content",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-500 to-orange-700">
              <p>Content tab</p>
              <DummyContent />
            </div>
          ),
        },
        {
          title: "Random",
          value: "random",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white from-orange-500 to-orange-700">
              <p>Random tab</p>
              <DummyContent />
            </div>
          ),
        },
      ];
     
  return (
    <div className="py-20 flex flex-col items-center justify-center">
        <div className="text-center ">
            <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                SUCCESS STORIES
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                See our{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                    Case Studies
                </span>
            </h2>
        </div>
    
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start">
             <Tabs tabs={tabs} />
        </div>
    </div>
  )
}

export default CaseStudies