'use client';
import { NavItemsProps, navItems } from "@/constants";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


const Drawer = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }
  return (
    <div className="relative">
        <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar} className="transition duration-300">
                {mobileDrawerOpen ? <X className="transition-all" /> : <Menu className="transition-all" />}
            </button>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden transition duration-300">
            <ul>
                {navItems.map((item: NavItemsProps, index: number) => (<li key={item.label} className="py-4"><Link className="hover:text-orange-500" key={item.label}  href={item.href}>{item.label}</Link></li>))}
            </ul>
            <div className="flex space-x-6">
              <Link href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </Link>
              <Link
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </Link>
            </div>
          </div>
        )}
    </div>
  )
}

export default Drawer