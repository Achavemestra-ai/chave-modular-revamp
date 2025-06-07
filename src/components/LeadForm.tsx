
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com sua API de leads
    console.log('Dados do lead:', formData);
    alert('Obrigado! Em breve entraremos em contato.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="lead-form" className="py-20 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transforme sua Empresa com Marketing Digital
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Preencha o formulário abaixo e receba uma consultoria gratuita personalizada para seu negócio.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-semibold">Nome Completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-semibold">E-mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-semibold">WhatsApp *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="text-gray-700 font-semibold">Nome da Empresa</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="Sua empresa"
                  />
                </div>
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white px-8 py-6 text-lg font-semibold"
              >
                Receber Consultoria Gratuita Agora
              </Button>

              <p className="text-sm text-gray-600 text-center">
                Seus dados estão seguros conosco. Não enviamos spam.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
