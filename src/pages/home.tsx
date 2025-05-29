import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import SpecialOffer from "@/components/SpecialOffer";
import StickyBanner from "@/components/StickyBanner";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import { CONTACT_WHATSAPP } from "@/constants/urls";
import { MessageCircle } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <StickyBanner />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Testimonials />
        <HowItWorks />
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
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  );
};

export default HomePage;
