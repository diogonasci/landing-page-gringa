import ContactForm from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import Features from "@/components/Features";
import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/Hero";
import { MessageButton } from "@/components/MessageButton";
import TeacherCarousel from "@/components/TeacherCarousel";
import Testimonials from "@/components/Testimonials";
import MainLayout from "@/layouts/main-layout";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <TeacherCarousel />
      <Testimonials />
      <ContactForm />
      <FAQ />
      <FinalCTA />
      <MessageButton phoneNumber="5521985043074" />
    </MainLayout>
  );
};

export default HomePage;
