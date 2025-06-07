
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { MarketingFunnel } from "@/components/MarketingFunnel";
import { ValueProposition } from "@/components/ValueProposition";
import { Certifications } from "@/components/Certifications";
import { Differential } from "@/components/Differential";
import { Adaptability } from "@/components/Adaptability";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Process />
      <MarketingFunnel />
      <ValueProposition />
      <Certifications />
      <Differential />
      <Adaptability />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
