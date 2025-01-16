import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Image src={'/lolenga.png'} alt="logo" width={35} height={32} />
              <span className="text-2xl font-bold text-white">Softwaregenies</span>
            </Link>
            <p className="text-sm">
              Empowering businesses with professional remote team solutions for sustainable growth and success.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {["About", "Careers", "Blog", "Pricing"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {["Help Center", "Terms of Service", "Privacy Policy", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <Link key={index} href="#" className="hover:text-white">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p className="text-md font-bold">&copy; 2025 Softwaregenies.<span className="text-purple-500 text-md font-bold">online</span> . All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

