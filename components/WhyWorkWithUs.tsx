import { features } from "@/constants"

const WhyWorkWithUs = () => {
  return (
    <div className="flex flex-col bg-transparent w-full items-center justify-start  px-2 my-20">
      <div className="text-center ">  
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <span className="bg-orange-100 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                  Why
              </span>
              <h2 className="text-3xl font-extrabold sm:text-5xl lg:text-6xl lg:mt-10 tracking-wide">
                  Why work with{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                      Us
                  </span>
              </h2> 
              <p className="text-lg text-neutral-500 text-center my-12">
                At SoftwareGenies, we offer a wide range of services to help your business thrive in the digital world.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
                {features.map((feature, index) => (

                  <div
                    className=" dark:bg-slate-900 text-black dark:text-white border-transparent dark:border-slate-80 px-5 py-3 rounded-lg">
                    <div className="">
        
                      <div className="flex">
                        <div className="flex mx-6 h-10 w-10 p-2 bg-orange-50 text-orange-700 justify-center items-center rounded-full">
                          {feature.icon}
                        </div>
                        <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>    
                      </div>
                      <p className="text-md p-2 mb-20 text-neutral-500 text-center">
                          {feature.description}
                        </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
      </div>
  </div>
  )
}

export default WhyWorkWithUs

