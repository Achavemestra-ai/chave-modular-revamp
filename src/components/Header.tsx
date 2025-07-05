import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
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
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">Início</a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">Sobre</a>
            <a href="#servicos" className="text-foreground hover:text-primary transition-colors">Serviços</a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">Contato</a>
            <Button onClick={scrollToForm} className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold">
              Solicitar Consultoria
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#inicio" className="block text-foreground hover:text-primary transition-colors">Início</a>
            <a href="#sobre" className="block text-foreground hover:text-primary transition-colors">Sobre</a>
            <a href="#servicos" className="block text-foreground hover:text-primary transition-colors">Serviços</a>
            <a href="#contato" className="block text-foreground hover:text-primary transition-colors">Contato</a>
            <Button onClick={scrollToForm} className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold">
              Solicitar Consultoria
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
