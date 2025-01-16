import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-slate-950/80" />
        <img
          src="back.jpg"
          alt="Office background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10 justify-center items-center flex">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl lg:text-6xl xl:text-7xl font-bold m-4 text-center tracking-tight text-white/80">
          Transform Your Business <br />with Cutting-Edge <br />  Digital Solutions
          </h1>
          <p className="my-8 px-8 md:px-0 mx-auto m-w-10 text-center mb-8 text-md md:text-3xl lg:text-3xl max-w-4xl  text-slate-400 ">
          SEO Optimization, AI-driven Saas Applications,  Ready-to-Use Templates, and Custom Web & Mobile Development.
          </p>
          <div className="flex flex-col sm:flex-row  max-w-md mx-auto">
            <Button className="bg-purple-600 text-white hover:bg-purple-700 -ml-2 rounded-md mx-auto">
            Request a Free Consultation
              <span className="ml-2">→</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

