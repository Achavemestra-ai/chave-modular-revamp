
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, TrendingUp, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section id="inicio" className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-pink-50/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Transforme seus
                <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent block">
                  dados em decisões
                </span>
                inteligentes
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A Chave oferece consultoria especializada em Business Intelligence para 
                empresas que querem crescer com base em dados estratégicos e insights acionáveis.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white px-8 py-6 text-lg">
                Solicitar Consultoria
                <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-2">
                Ver Cases de Sucesso
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="text-pink-500" />
                <span className="text-sm font-medium">+200% ROI médio</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="text-orange-400" />
                <span className="text-sm font-medium">50+ empresas atendidas</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="text-yellow-500" />
                <span className="text-sm font-medium">Resultados em 30 dias</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-pink-500/20 to-orange-400/20 rounded-3xl p-8 backdrop-blur-sm">
              <div className="bg-white/90 rounded-2xl p-6 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800">Dashboard Principal</h3>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Vendas</span>
                      <span className="font-bold text-green-600">+45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-pink-500 to-orange-400 h-2 rounded-full w-3/4"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Conversões</span>
                      <span className="font-bold text-blue-600">+32%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-400 h-2 rounded-full w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
