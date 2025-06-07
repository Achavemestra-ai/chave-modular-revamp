
import { BarChart3, Target, Zap, Shield, Users, TrendingUp } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: BarChart3,
      title: "Análise de Dados Avançada",
      description: "Transformamos dados brutos em insights estratégicos que impulsionam o crescimento do seu negócio."
    },
    {
      icon: Target,
      title: "Estratégias Personalizadas",
      description: "Cada empresa é única. Desenvolvemos soluções de BI sob medida para suas necessidades específicas."
    },
    {
      icon: Zap,
      title: "Implementação Rápida",
      description: "Metodologia ágil que entrega resultados tangíveis em até 30 dias após o início do projeto."
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Protocolos rigorosos de segurança para garantir a integridade e confidencialidade dos seus dados."
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Consultores certificados com mais de 10 anos de experiência em Business Intelligence."
    },
    {
      icon: TrendingUp,
      title: "ROI Comprovado",
      description: "Nossos clientes obtêm em média 200% de retorno sobre investimento em projetos de BI."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-pink-50/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Por que escolher a
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              {" "}Agência Chave?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos especialistas em transformar dados em vantagem competitiva. 
            Conheça os diferenciais que fazem da Chave a escolha certa para sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-pink-500/10 to-orange-400/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
