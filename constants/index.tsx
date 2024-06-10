import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";


import user1 from "@/public/profile-pictures/user1.jpg";
import user2 from "@/public/profile-pictures/user2.jpg";
import user3 from "@/public/profile-pictures/user3.jpg";
import user4 from "@/public/profile-pictures/user4.jpg";
import user5 from "@/public/profile-pictures/user5.jpg";
import user6 from "@/public/profile-pictures/user6.jpg";
import { StaticImageData } from "next/image";

export declare interface NavItemsProps {
  label: string;
  href: string;
}

export declare interface TestimonialsProps {
  user: string;
  company: string;
  image: string;
  text: string;
}

export const navItems : NavItemsProps[] = [
  { label: "About", href: "#about" },
  { label: "Workflow", href: "#workflow" },
  { label: "My works", href: "#project" },
  { label: "Testimonials", href: "#testimonials" },
];

export const testimonials: TestimonialsProps[] = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: '/profile-pictures/user1.jpg',
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: '/profile-pictures/user2.jpg',
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: '/profile-pictures/user3.jpg',
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: '/profile-pictures/user4.jpg',
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: '/profile-pictures/user5.jpg',
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: '/profile-pictures/user5.jpg',
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Specialization",
    description:
      "Building on 5 years of Next.js focus, we are the industry leader in providing unmatched expertise and experience for headless web implementations, delivering top-notch solutions for businesses seeking a specialized partner.",
  },
  {
    icon: <Fingerprint />,
    text: "Consulting approach",
    description:
      "We understand that communication is key to any successful project. We not only excel at developing high-quality solutions, but we also offer extensive consulting expertise, helping our clients make more informed decisions.",
  },
  {
    icon: <ShieldHalf />,
    text: "Speed & flexibility",
    description:
      "We understand the importance of business value in software solutions. We fear no deadline. For urgent projects, we can flexibly scale our team to adapt to your timeline.",
  },
  {
    icon: <BatteryCharging />,
    text: "Stability",
    description:
      "We prioritize lasting partnerships with our clients and maintain consistent team composition throughout the entire project to build trust and a deep understanding of your businesses.",
  }
];


export const services = [
  {
    title: 'Web Development',
    description: 'We build responsive and high-performance websites using the latest technologies like Next.js, React, and more.',
    icon: (
      <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 21V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16m16 0H4m16 0a2 2 0 002-2v-2a2 2 0 00-2-2H4a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
      </svg>
    ),
    bgColor: 'bg-blue-50',
  },
  {
    title: 'Mobile App Development',
    description: 'Our team creates high-quality mobile applications for both iOS and Android platforms using React Native, Swift, and Kotlin.',
    icon: (
      <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.5 9.4a3.1 3.1 0 11-4.4-4.4 3.1 3.1 0 014.4 4.4zM12 7.5a2 2 0 11-2-2 2 2 0 012 2zm0 0L8.25 13.75m7.5-2.25H15m2 0h-2.25M12 7.5L15.75 13.75m-7.5-2.25H9m-2 0h2.25"></path>
      </svg>
    ),
    bgColor: 'bg-green-50',
  },
  {
    title: 'Cloud Solutions',
    description: 'We offer cloud computing solutions using AWS, Google Cloud, and Azure to ensure your business operations are scalable and secure.',
    icon: (
      <svg className="w-16 h-16 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l3-3 3 3v13m-3 3v-2m6 0H9m12 0a2 2 0 00-2-2v-2a2 2 0 00-2-2H4a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
      </svg>
    ),
    bgColor: 'bg-yellow-50',
  },
  {
    title: 'DevOps Services',
    description: 'Our DevOps services ensure continuous integration and delivery using tools like Docker, Kubernetes, and Jenkins.',
    icon: (
      <svg className="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 12h4v10h-4V12zm-1.5 0h-1V6h1v6zm5 0h1V6h-1v6zM16 12h4v10h-4V12z"></path>
      </svg>
    ),
    bgColor: 'bg-red-50',
  },
  {
    title: 'UI/UX Design',
    description: 'We create intuitive and engaging user experiences with our expert UI/UX design services, ensuring your applications are both beautiful and functional.',
    icon: (
      <svg className="w-16 h-16 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h10M7 11h10m-3 4H7m10 6a2 2 0 002-2h-2a2 2 0 00-2 2h-4a2 2 0 00-2-2H7a2 2 0 00-2 2H3a2 2 0 002-2h10a2 2 0 002 2z"></path>
      </svg>
    ),
    bgColor: 'bg-purple-50',
  },
  {
    title: 'Data Analytics',
    description: 'Our data analytics services provide valuable insights to drive your business decisions using tools like Tableau, Power BI, and Python.',
    icon: (
      <svg className="w-16 h-16 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 0h4m-4 0H8m12 0a9.74 9.74 0 00-.713-4.3 9.747 9.747 0 00-2.285-3.288 9.747 9.747 0 00-3.288-2.285A9.747 9.747 0 0012 4a9.747 9.747 0 00-4.3.713 9.747 9.747 0 00-3.288 2.285 9.747 9.747 0 00-2.285 3.288A9.74 9.74 0 002 12c0 .865.11 1.714.324 2.545a9.74 9.74 0 002.285 3.288 9.747 9.747 0 003.288 2.285A9.74 9.74 0 0012 20c.865 0 1.714-.11 2.545-.324a9.74 9.74 0 003.288-2.285 9.747 9.747 0 002.285-3.288A9.74 9.74 0 0022 12"></path>
      </svg>
    ),
    bgColor: 'bg-teal-50',
  },
];


export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
