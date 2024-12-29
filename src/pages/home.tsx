import { FAQ } from "@/components/FAQ";
import Features from "@/components/Features";
import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/Hero";
import TeacherCarousel from "@/components/TeacherCarousel";
import Testimonials from "@/components/Testimonials";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import MainLayout from "@/layouts/main-layout";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <TeacherCarousel />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <WhatsAppButton phoneNumber="5521985043074" />
    </MainLayout>
  );
};

export default HomePage;
