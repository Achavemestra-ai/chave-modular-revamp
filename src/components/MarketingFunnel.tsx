
import { Button } from "@/components/ui/button";
import { Megaphone, Handshake, BarChart, RefreshCw } from "lucide-react";

export const MarketingFunnel = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Existe um método científico para que sua empresa nunca pare de vender
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Se você não segui-lo, ela não vai sair do lugar
          </p>
          <p className="text-2xl font-bold text-pink-500 mb-16">
            Método A Chave
          </p>

          <div className="relative mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-24 h-24 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Megaphone className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Aquisição</h3>
                <p className="text-gray-300">Atrair a atenção do público.</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Engajamento</h3>
                <p className="text-gray-300">Construir confiança e interesse.</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Monetização</h3>
                <p className="text-gray-300">Realizar vendas.</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Retenção</h3>
                <p className="text-gray-300">Manter os clientes comprando.</p>
              </div>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
          >
            Quero ver isso na prática
          </Button>
        </div>
      </div>
    </section>
  );
};
