import Image from "next/image";
import logo from "@/public/logo.png"
import { NavItemsProps, navItems } from "@/constants";
import Link from "next/link";
import Drawer from "./Drawer";
import { ModeToggle } from "./ModeToggle";


const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 pt-3 px-5 backdrop-blur-lg border-b
        border-neutral-700/80">
            <div className="container mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <Link href='/'>
                        <div className="flex items-center bg-dark- flex-shrik-0">
                            <Image 
                                alt="Softwaregenies Logo" 
                                src={logo} height={20} 
                                width={50} 
                                
                                />
                            <span className="hidden sm:block text-sm sm:text-xl tracking-light">Softwaregenies</span>
                        </div>
                    </Link>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item: NavItemsProps, index: number) => (<Link className="hover:text-orange-500" key={item.label}  href={item.href}>{item.label}</Link>))}
                    </ul>

                    <div className=" justify-center  items-center">
                        
                        <a href='#contact' className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
                            <span>Get started</span>
                            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-orange-500 to-transparent  h-px" />
                        </a>

                    </div>
                    <div className="flex gap-2 lg:gap-2 items-center justify-center">
                        <div className="lg:hidden">
                            <Drawer />
                        </div>   
                    </div>

                </div>
            </div>

    </nav>
  )
}

export default Navbar