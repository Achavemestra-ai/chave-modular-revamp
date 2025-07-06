import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contato" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-1">
              <img 
                src="/lovable-uploads/logo-chave.png" 
                alt="A Chave Logo" 
                className="h-12 w-12 object-contain"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                A Chave
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Somos especialistas em transformar dados em decisões estratégicas. 
              Desbloqueie o potencial do seu negócio com nossas soluções de Business Intelligence.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/achavemestra.ia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@achavemestra-ia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Os outros blocos de "Links úteis" e "Contato" continuam aqui normalmente */}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm flex flex-col md:flex-row justify-between text-gray-500">
          <p>© 2024 Agência Chave. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#">Termos de Uso</a>
            <a href="#">Política de Privacidade</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
