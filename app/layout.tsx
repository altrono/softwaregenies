import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Navbar from "@/components/Navbar";
import { source } from "@/lib/fonts";



export const metadata: Metadata = {
  title: "Building the Future with Next.js, Reactjs, React Native, Vercel, AWS, Google Cloud, and More | SoftwareGenies",
  description: "At SoftwareGenies, we leverage cutting-edge technologies like Next.js, Reactjs, React Native, AWS, Vercel, Azure and Google Cloud to create innovative mobile and web applications that drive success. Join us on our journey to transform the digital landscape.",
  keywords: "SoftwareGenies, Reactjs, React Native, Vercel, Next.js, AWS,  Google Cloud, mobile app development, web app development, tech startup, innovation, digital transformation",
  icons: {
    icon: '/logo.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${source.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
        <main className="mx-auto">
          <div className="text-center border-b-[1px] border-neutral-700 z-10 py-2">
              <span className="max-sm:hidden">admin@softwaregenies.co.za |</span> +721 444 55 444
          </div>
          <Navbar />
          {children}
         
       </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
