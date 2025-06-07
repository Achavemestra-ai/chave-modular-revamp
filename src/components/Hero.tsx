
import { Button } from "@/components/ui/button";
import { Building2, Briefcase, ShoppingCart, Laptop } from "lucide-react";

export const Hero = () => {
  const scrollToBenefits = () => {
    const benefitsElement = document.querySelector('#benefits');
    if (benefitsElement) {
      benefitsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-black text-white relative">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Tenha um time feito{" "}
            <span className="text-pink-500">sob medida</span>{" "}
            para atender seu negócio
          </h1>
          
          <div className="mt-12">
            <Button 
              onClick={scrollToBenefits}
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white px-12 py-6 text-xl font-bold"
            >
              QUERO MAIS INFORMAÇÕES
            </Button>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70 mb-6">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto">
                <Laptop className="w-8 h-8 text-white" />
              </div>
            </div>
            <p className="text-gray-300 text-lg">
              mais de 15.500 empresas já tomaram essa decisão
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
