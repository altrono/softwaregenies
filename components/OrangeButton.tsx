import { ArrowRight } from 'lucide-react'
import React from 'react'
import Link from "next/link";

const OrangeButton = ({title, href, bg, hov, icon,}: {title: string, href: string, bg: string, hov: string, icon: React.ReactNode}) => {
  return (
    <Link href={href} className={`z-100 block max-w-200 h-14  border-transparent 
    shadow-[inset_0_0_0_1px_#fb923c] text-black px-5 py-4 rounded-full tracking-widest 
    uppercase font-bold hover:bg-${hov} bg-${bg}  hover:text-white 
    dark:text-neutral-200 transition duration-300 overflow-hidden`} >          
                    <div className="flex flex-row gap-1">
                        <button >{title}</button> 
                        {icon}
                    </div>
     </Link> 
  )
}

export default OrangeButton