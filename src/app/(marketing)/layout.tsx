import { SiteHeader } from "@/components/marketing/site-header"
import { Footer } from "@/components/marketing/footer"
import { ScrollToTop } from "@/components/marketing/scroll-to-top"


export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
        <SiteHeader />  
          <main className="flex-1">{children}</main>
        <Footer />
      <ScrollToTop />
    </div>
  )
}

