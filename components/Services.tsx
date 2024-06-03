
import { services } from '@/constants';
import MovingCards from './MovingCards';
import { Meteors } from './ui/meteors';
import { TypewriterEffect } from './ui/typewriter-effect';
import { Button } from "@/components/ui/moving-border";

const Services = () => {
    const words = [
        {
          text: "Build",
        },
        {
          text: "awesome",
        },
        {
          text: "web",
        },
        {
            text: "apps",
        },

        {
          text: "with",
        },
        {
          text: "Softwaregenies.",
          className: "text-blue-500 dark:text-orange-500",
        },
      ];
  return (
    <div className="flex flex-col bg-transparent w-full items-center justify-start  px-2 my-20">
      <div className="text-center ">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <span className="bg-orange-100 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                  Services
              </span>
              <h2 className="text-3xl font-extrabold sm:text-5xl lg:text-6xl lg:mt-10 tracking-wide">
                  Our{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                      Services
                  </span>
              </h2> 
              <p className="text-lg text-neutral-500 text-center my-12">
                At SoftwareGenies, we offer a wide range of services to help your business thrive in the digital world.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (

                  <Button 
                    key={service.title}
                    borderRadius="1.75rem"
                    duration={Math.floor(Math.random() * 10000) + 10000}
                    className=" dark:bg-slate-900 text-black dark:text-white border-transparent dark:border-slate-80">
                    <div key={index} className={`p-6 ${service.bgColor} rounded-lg shadow-lg`}>
                      <div className="flex items-center justify-center mb-4 max-w-[100px] max-h-[100px] mx-auto">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-neutral-500 mb-2 text-center">
                        {service.title}
                      </h3>
                      <p className="text-neutral-500 text-center">{service.description}</p>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
      </div>
      
  
    </div>
  )
}

export default Services