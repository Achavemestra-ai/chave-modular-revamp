
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

export const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    priority: '',
    math: '',
    companyAge: '',
    revenue: '',
    segment: '',
    digitalMarketing: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const message = `Olá! Vim através do site e gostaria de receber uma consultoria gratuita.

Meus dados:
• Nome: ${formData.name}
• Email: ${formData.email}
• Telefone: ${formData.phone}
• Empresa: ${formData.company}
• Maior prioridade para impulsionar a empresa: ${formData.priority}
• Anos de empresa: ${formData.companyAge}
• Faturamento mensal: ${formData.revenue}
• Ramo/Segmento: ${formData.segment}
• Já investiu em Marketing Digital: ${formData.digitalMarketing}`;

    const whatsappUrl = `https://wa.me/5527988527452?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
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

              <div>
                <Label htmlFor="priority" className="text-gray-700 font-semibold">
                  Qual serviço você acredita ser a maior prioridade para impulsionar sua empresa num período de 7 dias?
                </Label>
                <Textarea
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="mt-2"
                  placeholder="Descreva qual serviço seria mais importante..."
                />
              </div>

              <div>
                <Label htmlFor="math" className="text-gray-700 font-semibold">4+3=? *</Label>
                <Input
                  id="math"
                  name="math"
                  type="text"
                  required
                  value={formData.math}
                  onChange={handleChange}
                  className="mt-2"
                  placeholder="Resposta"
                />
              </div>

              <div>
                <Label className="text-gray-700 font-semibold">Quantos anos de empresa?</Label>
                <RadioGroup 
                  value={formData.companyAge} 
                  onValueChange={(value) => handleRadioChange('companyAge', value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="menos-1-ano" id="menos-1-ano" />
                    <Label htmlFor="menos-1-ano" className="text-gray-800 font-medium">Menos de 1 ano</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1-3-anos" id="1-3-anos" />
                    <Label htmlFor="1-3-anos" className="text-gray-800 font-medium">1 a 3 anos</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mais-5-anos" id="mais-5-anos" />
                    <Label htmlFor="mais-5-anos" className="text-gray-800 font-medium">Mais de 5 anos</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-gray-700 font-semibold">Qual média de faturamento mensal?</Label>
                <RadioGroup 
                  value={formData.revenue} 
                  onValueChange={(value) => handleRadioChange('revenue', value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="menos-5mil" id="menos-5mil" />
                    <Label htmlFor="menos-5mil" className="text-gray-800 font-medium">Menos de 5mil reais</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="5-10mil" id="5-10mil" />
                    <Label htmlFor="5-10mil" className="text-gray-800 font-medium">5 a 10mil reais</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mais-10mil" id="mais-10mil" />
                    <Label htmlFor="mais-10mil" className="text-gray-800 font-medium">Mais de 10 mil reais</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="segment" className="text-gray-700 font-semibold">Qual Ramo/Segmento da Empresa?</Label>
                <Input
                  id="segment"
                  name="segment"
                  type="text"
                  value={formData.segment}
                  onChange={handleChange}
                  className="mt-2"
                  placeholder="Ex: E-commerce, Consultoria, Saúde..."
                />
              </div>

              <div>
                <Label className="text-gray-700 font-semibold">Já investiu em Marketing Digital na sua empresa?</Label>
                <RadioGroup 
                  value={formData.digitalMarketing} 
                  onValueChange={(value) => handleRadioChange('digitalMarketing', value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sim" id="marketing-sim" />
                    <Label htmlFor="marketing-sim" className="text-gray-800 font-medium">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="nao" id="marketing-nao" />
                    <Label htmlFor="marketing-nao" className="text-gray-800 font-medium">Não</Label>
                  </div>
                </RadioGroup>
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
