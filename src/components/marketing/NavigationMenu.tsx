"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { BrainCog } from "lucide-react"
import { usePathname } from 'next/navigation'


const components: { title: string; href: string; description: string }[] = [
  {
    title: "Our Values",
    href: "/about",
    description:
      "We believe in innovation, integrity, and excellence. Our values guide every project we take on and every partnership we build",
  },
  {
    title: "Join Us",
    href: "/join-us",
    description:
      "Looking for a career in tech? We’re always seeking passionate, driven individuals to join our team. Check out open positions and apply today!",
  },
  {
    title: "Partner with Us",
    href: "/partner-with-us",
    description:
      "We value long-term partnerships with businesses aiming for digital growth. Let’s collaborate to create impactful solutions together.",
  },
  {
    title: "Customer Success",
    href: "/about",
    description: "Our customers' success is our priority. Discover how our solutions have empowered businesses to achieve their goals and grow.",
  },
  {
    title: "Our Story",
    href: "/about",
    description:
      "From humble beginnings to a trusted tech provider, we’ve been helping businesses grow with innovative digital solutions. Learn more about our journey.",
  },
  {
    title: "Venture Capital",
    href: "/partner-with-us",
    description:
      "We believe in the power of innovation and support startups with funding and mentorship. Explore opportunities to partner with us in driving the next big idea.",
  },
]

export function NavigationMenuDemo() {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${pathname === '/' && 'text-purple-500 font-bold'}`} >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={`${pathname === '/about' && 'text-purple-500'}`}>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={`${pathname.includes('/services') && 'text-purple-500'}`}>
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/services/ai-saas"
                  >
                    
                    <BrainCog className="h-6 w-6 text-purple" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      AI SaaS Applications
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    Harness the power of AI with our tailored SaaS solutions.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/services/ready-made-templates" title="Ready-Made Templates">
              Quickly launch your digital projects with our professionally designed, customizable templates. Perfect for businesses that want high-quality designs without the hassle.
              </ListItem>
              <ListItem href="/services/mobile-dev" title="Mobile Development">
              Create seamless and intuitive mobile applications for iOS and Android. We design and develop user-friendly, high-performance apps to keep your audience engaged.
              </ListItem>
              <ListItem href="/services/web-dev" title="Web Development">
              Get a custom-built website that meets your business needs. From dynamic web pages to complex e-commerce platforms, we offer end-to-end web development services.
              </ListItem>
              <ListItem href="/services/seo-optimization" title="SEO Optimization">
              Boost your online visibility and drive organic traffic with our expert SEO strategies. We help improve your search engine rankings and enhance user engagement.
              </ListItem>
              <ListItem href="/services/cloud-solutions" title="Cloud Solutions">
              Scale your business with flexible, secure, and efficient cloud solutions. We offer cloud storage, hosting, and SaaS integrations to enhance your digital infrastructure.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${pathname === '/blog' && "text-purple-500"}`}>
              Blogs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${pathname === '/contact' && "text-purple-500"}`}>
              Contact us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
