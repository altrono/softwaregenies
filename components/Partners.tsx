import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';
import { TypewriterEffect } from './ui/typewriter-effect';
import MovingCards from './MovingCards';
import { Rocket } from 'lucide-react';

const Partners = () => {
  const words = [
    {
      text: "Web",
      className: 'dark:text-[rgb(63,63,70)]'
    },
    {
      text: "Apps",
      className: 'dark:text-[rgb(63,63,70)]'
    },
    {
      text: "that",
      
      className: 'dark:text-[rgb(63,63,70)]'
    },
    {
        text: "Make ",
        className: "dark:text-orange-500",
    },

    {
      text: "Sense",
      className: "text-blue-500 dark:text-orange-500",
    },
    {
      text: ".",
      className: "text-blue-500 dark:text-orange-500",
    },

  ];
  return (
    <div className="flex flex-col w-full bg-slate-100 ">
       
            <div className="mx-auto -mt-20 sm:-mt-16">
              
                <h2 className='text-sm md:text-lg lg:text-lg text-center text-neutral-500 font-bold px-5'>We leverage cutting-edge technologies like:</h2>
                <HoverEffect items={projects} />
            </div>
            <div className="mt-16 w-full text-slate-900 text-center ">
              
              <span className="bg-orange-100 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                  Technologies
              </span>
              <h2 className="text-2xl font-extrabold sm:text-5xl lg:text-6xl lg:mt-10 tracking-wide">
              Trusted by Leading{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                  Companies
                  </span>
              </h2> 
              
              <p className='text-neutral-900 mx-auto my-4 text-sm text-center max-w-[800px] px-4'>The technologies we use at SoftwareGenies are trusted and utilized by some of the world's leading companies, ensuring peerless perfomance, efficiency, robust and scalable solutions for our clients.</p>
              
              <div className="w-full mt-5  px-4">
                <MovingCards />
              </div>
            </div>
            <div className="container flex flex-col md:flex-row my-0 md:mt-10 w-full  gap-4 mx-auto  py-20 px-5 ">
                <div className=" flex-1  px-3 py-10">
                  <div className="flex gap-2 ">
                    <span className="text-orange-500 bg-orange-100 rounded-full text-sm p-2  text-center h-8">
                      Starter
                    </span>
                    <span className="text-green-500 bg-green-100 rounded-full text-sm p-2 text-center h-8">
                      Ecommerce
                    </span>
                    <span className="text-purple-500 bg-purple-100 rounded-full text-sm p-2 text-center h-8">
                      Blog
                    </span>
                    <span className="text-blue-500 bg-blue-100 rounded-full text-sm p-2 text-center h-8">
                      AI Application
                    </span>
                    <span className="text-teal-500 bg-teal-100 rounded-full text-sm p-2 text-center h-8">
                      And more...
                    </span>
                  </div>
                    
                    <h2 className='text-1xl lg:text-2xl font-bold text-slate-900 my-5'>Build like a <span className='text-orange-500'>Boss</span></h2>
                    <p className='text-slate-900 text-sm lg:text-md'>We have years-long relationships with many of our clients. As trusted development partners, we take full ownership of the projects and continuously optimize apps, stores, websites, and implement new features, or automate workflows.</p>
                </div>
                <div className=" flex-1 ">
                    <video  className="rounded-lg w-fill  h-full" autoPlay loop controls>
                        <source src='/vid.mp4' type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
      
            
            
    </div>
  )
}


export default Partners;

export const projects = [
  {
    image: '/partners/nextjs.png',
    link: 'https://nextjs.com'
  },
    {
      image: '/partners/vercel.png',
      link: 'https://nextjs.com'
    },
    {
      image: '/partners/react.png',
      link: 'https://react.com'
    },
    {
      image: '/partners/tailwindcss.png',
      link: 'https://react.com'
    },
  
    {
        image: '/partners/turbopack.png',
        link: 'https://heri-lolenga'
      },
      {
        image: '/partners/prismic.png',
        link: 'https://versscel.com'
      },
      {
        image: '/partners/amazon.png',
        link: 'https://vercesl.com'
      },
      {
        image: '/partners/google.png',
        link: 'https://vercel.com'
      },
      {
        image: '/partners/slack.png',
        link: 'https://react.com'
      },
      
    ];