'use client'
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    image: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-3    py-5",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className={`relative group  p-2 h-full w-full ${idx > 3 ? 'hidden md:block' : 'block'}`}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-950 block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card image={item.image} />
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  image
}: {
  className?: string;
  image: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full px-2 overflow-hidden bg-gray-100 border shadow-sm relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">
          <Image className="brightness-[1] invert-3" src={image} width={100} height={50} alt="Partner logo"/>
        </div>
      </div>
    </div>
  );
};
