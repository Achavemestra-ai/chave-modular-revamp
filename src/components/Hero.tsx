
import { Button } from "@/components/ui/button";

export const Hero = () => {
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
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 text-xl font-bold"
            >
              QUERO MAIS INFORMAÇÕES
            </Button>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70 mb-6">
              <div className="bg-white/10 rounded-lg p-4 h-12 flex items-center justify-center">
                <span className="text-sm font-semibold">EMPRESA 1</span>
              </div>
              <div className="bg-white/10 rounded-lg p-4 h-12 flex items-center justify-center">
                <span className="text-sm font-semibold">EMPRESA 2</span>
              </div>
              <div className="bg-white/10 rounded-lg p-4 h-12 flex items-center justify-center">
                <span className="text-sm font-semibold">EMPRESA 3</span>
              </div>
              <div className="bg-white/10 rounded-lg p-4 h-12 flex items-center justify-center">
                <span className="text-sm font-semibold">EMPRESA 4</span>
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
