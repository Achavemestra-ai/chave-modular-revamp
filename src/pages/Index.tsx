
import { Header } from "@/components/Header";
import { LeadForm } from "@/components/LeadForm";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { MarketingFunnel } from "@/components/MarketingFunnel";
import { ValueProposition } from "@/components/ValueProposition";
import { Benefits } from "@/components/Benefits";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
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
      <LeadForm />
      <Hero />
      <Process />
      <MarketingFunnel />
      <ValueProposition />
      <Benefits />
      <Services />
      <About />
      <Testimonials />
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
