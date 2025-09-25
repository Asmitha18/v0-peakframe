import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import GallerySection from "@/components/gallery-section"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PackagesSection from "@/components/packages-section"
import ClientPressSection from "@/components/client-press-section"
import HowItWorksSection from "@/components/how-it-works-section"
import DeliveryFAQSection from "@/components/delivery-faq-section"
import InquiryFormSection from "@/components/inquiry-form-section"
import PrepGuideSection from "@/components/prep-guide-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <PackagesSection />
        <ClientPressSection />
        <HowItWorksSection />
        <DeliveryFAQSection />
        <PrepGuideSection />
        <InquiryFormSection />
      </main>
      <Footer />
    </div>
  )
}
