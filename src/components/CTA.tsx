
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pronto para transformar seus dados em resultados?
          </h2>
          <p className="text-xl opacity-90 mb-12 leading-relaxed">
            Agende uma consultoria gratuita com nossos especialistas e descubra como 
            a Chave pode revolucionar a gestão da sua empresa através do Business Intelligence.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0" />
              <span>Consultoria inicial gratuita</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0" />
              <span>Análise personalizada</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0" />
              <span>Proposta sob medida</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-pink-500 hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
            >
              Agendar Consultoria Gratuita
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-pink-500 px-8 py-6 text-lg"
            >
              (11) 9999-9999
            </Button>
          </div>

          <div className="mt-8 text-sm opacity-75">
            <p>Sem compromisso • Resposta em até 24h • Especialistas certificados</p>
          </div>
        </div>
      </div>
    </section>
  );
};
