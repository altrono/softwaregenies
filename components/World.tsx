

const World = () => {
  return (
    <div className="flex flex-col bg-transparent w-full items-center justify-start  px-2 mt-20">
      <div className="text-center mt-20">
            <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                Operation
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                We work{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                    globally
                </span>
            </h2>
            
      </div>
      <div className="mt-10 md:mt-20 max-w-[900px] mx-auto">
            <img src="/map.png" alt="map" className="object-scale-down"  />
       </div>
    </div>
    
  )
}

export default World