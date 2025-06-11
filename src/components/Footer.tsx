
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contato" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/182f3f96-891a-47f8-a34b-cc975b2b9248.png" 
                alt="A Chave Logo" 
                className="h-10 w-10"
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
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Links Úteis</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#sobre" className="hover:text-pink-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-pink-400 transition-colors">Serviços</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-pink-400" />
                <a 
                  href="https://wa.me/5527988527452" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-pink-400" />
                <span>contato@achave-ia.com.br</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pink-400 mt-1" />
                <span>
                  Avenida Nossa Senhora da Penha 2598<br />
                  Santa Luíza<br />
                  Vitória ES<br />
                  29045-402
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Agência Chave. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
