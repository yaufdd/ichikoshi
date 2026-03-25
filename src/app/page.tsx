import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ScenariosSection from "@/components/ScenariosSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ObjectTypesSection from "@/components/ObjectTypesSection";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import FormSection from "@/components/FormSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ScenariosSection />
        <HowItWorksSection />
        <ObjectTypesSection />
        <AboutSection />
        <FaqSection />
        <FormSection />
      </main>
      <Footer />
    </>
  );
}
