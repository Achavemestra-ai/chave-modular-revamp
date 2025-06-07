
export const Certifications = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Reconhecimento de Mercado
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Google Partner Premier</h3>
              <p className="text-gray-300 leading-relaxed">
                O Google Partner Premier é o nível mais alto de parceria com o Google. As empresas 
                que alcançam esse status demonstram excelência no uso das ferramentas de marketing 
                e publicidade do Google. Apenas 3% das empresas brasileiras são Google Partner Premier. 
                Nossa empresa é uma delas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Meta Business Partner</h3>
              <p className="text-gray-300 leading-relaxed">
                O Meta Business Partner Certified Company é um selo de qualidade que garante que 
                as empresas que o possuem são especialistas em marketing digital da Meta e estão 
                altamente capacitadas para ajudar as empresas a alcançar seus objetivos. De acordo 
                com dados da Meta, apenas 1% das empresas possuem esse certificado. Estamos nessa lista.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Parceiro Diamante</h3>
              <p className="text-gray-300 leading-relaxed">
                O Parceiro Diamante Tray é o nível mais alto do programa de parceria da Tray, 
                uma das maiores plataforma de e-commerce brasileira.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
