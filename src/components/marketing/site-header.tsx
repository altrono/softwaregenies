"use client"

import { useState } from "react"
import Link from "next/link"
import { User, Menu } from 'lucide-react'
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes";
import { NavigationMenuDemo } from "./NavigationMenu"
import Image from "next/image"


export function SiteHeader() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme} = useTheme()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 120)
  })

  const navItems = ["Home", "Services", "Pricing", "About", "Blog", "Contact us"]

  return (
    <motion.header
      className="fixed top-0 w-full z-50"
      initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
      animate={{ 
        backgroundColor: isScrolled 
          ? theme == "light" ? "rgba(255, 255, 255, 1)" : "rgba(5, 5, 5, 1)"
          : "rgba(255, 255, 255, 0)",
        // backdropFilter: isScrolled ? "blur(90px)" : "none"
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center ">
            <Image src={'/lolenga.png'} alt="logo" width={35} height={32} />
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-foreground' : 'text-white dark:text-white'
            }`}>
              Softwaregenies<span className="hidden md:inline-block">.online</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
           <NavigationMenuDemo />
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-4">
            <Button
              size="icon"
              variant="ghost"
              className={`rounded-full transition-colors duration-300 ${
                isScrolled 
                  ? 'bg-purple-600 text-white hover:bg-purple-700' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <User className="h-10 w-10" />
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  size="icon"
                  variant="ghost"
                  className={`transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-foreground' 
                      : 'text-white'
                  }`}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="text-foreground hover:text-purple-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

