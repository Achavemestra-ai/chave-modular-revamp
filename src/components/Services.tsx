
import { Button } from "@/components/ui/button";
import { BarChart3, Database, Settings, Users, Smartphone, Cloud } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Dashboard Executivo",
      description: "Painéis intuitivos com métricas estratégicas para tomada de decisão rápida e assertiva.",
      features: ["KPIs personalizados", "Visualizações interativas", "Atualizações em tempo real"],
      price: "A partir de R$ 2.500"
    },
    {
      icon: Database,
      title: "Integração de Dados",
      description: "Conectamos todas as suas fontes de dados em uma única plataforma centralizada.",
      features: ["APIs e ETL", "Múltiplas fontes", "Dados unificados"],
      price: "A partir de R$ 3.500"
    },
    {
      icon: Settings,
      title: "Automação de Relatórios",
      description: "Relatórios automáticos que chegam diretamente na sua caixa de entrada.",
      features: ["Envios programados", "Múltiplos formatos", "Personalização total"],
      price: "A partir de R$ 1.800"
    },
    {
      icon: Users,
      title: "Treinamento de Equipe",
      description: "Capacitamos sua equipe para usar as ferramentas de BI de forma independente.",
      features: ["Workshops práticos", "Material didático", "Suporte pós-treinamento"],
      price: "A partir de R$ 2.200"
    },
    {
      icon: Smartphone,
      title: "BI Mobile",
      description: "Acesse seus dados em qualquer lugar através de aplicativos mobile otimizados.",
      features: ["Apps nativos", "Offline disponível", "Notificações push"],
      price: "A partir de R$ 4.000"
    },
    {
      icon: Cloud,
      title: "Migração para Cloud",
      description: "Migre sua infraestrutura de dados para a nuvem com segurança e eficiência.",
      features: ["AWS/Azure/GCP", "Backup automático", "Escalabilidade"],
      price: "Sob consulta"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Nossos
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              {" "}Serviços
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em Business Intelligence, desde a coleta de dados 
            até a implementação de dashboards estratégicos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card p-8 rounded-2xl border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-pink-500/10 to-orange-400/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-pink-500" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-border pt-6">
                <div className="text-lg font-semibold text-pink-500 mb-4">{service.price}</div>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500">
                  Solicitar Orçamento
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="border-2 border-pink-500 text-pink-500 hover:bg-pink-50">
            Ver Todos os Serviços
          </Button>
        </div>
      </div>
    </section>
  );
};
