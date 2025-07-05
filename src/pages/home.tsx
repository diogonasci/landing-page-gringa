import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import HowItWorks from "@/components/HowItWorks";
import Possibilities from "@/components/Possibilities";
import SpecialOffer from "@/components/SpecialOffer";
import StickyBanner from "@/components/StickyBanner";
import SuccessCases from "@/components/SuccessCases";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import { CONTACT_WHATSAPP } from "@/constants/urls";
import { useGTM } from "@/hooks/useGTM";
import { usePageTracking } from "@/hooks/usePageTracking";
import { MessageCircle } from "lucide-react";

const HomePage = () => {
  const { trackWhatsAppClick } = useGTM();

  // Hook para tracking geral da página
  usePageTracking();

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <StickyBanner />
      <main className="flex-grow">
        <Hero />
        <Testimonials />
        <SuccessCases />
        <HowItWorks />
        <Possibilities />
        <WhyChooseUs />
        <SpecialOffer />
        <ContactForm />
      </main>
      <Footer />

      {/* Botão de WhatsApp flutuante */}
      <a
        href={CONTACT_WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Fale pelo WhatsApp"
        onClick={() => trackWhatsAppClick("floating_button")}
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  );
};

export default HomePage;
