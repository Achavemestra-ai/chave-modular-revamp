
export const Process = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Como Funciona
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Envie suas informações de contato. Todos os seus dados estarão seguros, 
                vamos cuidar bem deles.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                No mesmo dia um de nossos especialistas retornará o contato para 
                agendar sua consultoria gratuita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
