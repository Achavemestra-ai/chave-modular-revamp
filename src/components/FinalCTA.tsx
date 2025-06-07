
import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para Acelerar seu Crescimento?
          </h2>
          <p className="text-xl mb-12 leading-relaxed">
            Converse com um de nossos consultores. Analisaremos melhor o seu caso e 
            explicaremos como poderemos te atender da melhor forma possível.
          </p>

          <Button 
            size="lg" 
            className="bg-white text-pink-500 hover:bg-gray-100 px-12 py-6 text-xl font-bold"
          >
            Agendar Consultoria Gratuita Agora
          </Button>
        </div>
      </div>
    </section>
  );
};
