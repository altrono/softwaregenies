import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 bg-purple-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied clients who have transformed their business with our remote team solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg">
            Schedule a Demo
          </Button>
          <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  )
}

