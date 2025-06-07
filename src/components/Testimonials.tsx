
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "CEO",
      company: "TechCorp",
      content: "A Chave transformou completamente nossa visão sobre dados. Em 3 meses, conseguimos identificar oportunidades que resultaram em 40% de aumento nas vendas.",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "João Santos",
      role: "Diretor Comercial",
      company: "InnovaTech",
      content: "O dashboard criado pela Agência Chave nos permite tomar decisões estratégicas com muito mais agilidade e precisão. Recomendo fortemente!",
      rating: 5,
      avatar: "JS"
    },
    {
      name: "Ana Costa",
      role: "Gerente de Marketing",
      company: "Digital Plus",
      content: "Antes da Chave, tomávamos decisões baseadas em intuição. Agora, cada estratégia é respaldada por dados concretos. O ROI foi impressionante!",
      rating: 5,
      avatar: "AC"
    },
    {
      name: "Pedro Oliveira",
      role: "CTO",
      company: "StartupXYZ",
      content: "A metodologia da Chave é excepcional. Eles não apenas entregaram as soluções, mas também capacitaram nossa equipe para ser autônoma.",
      rating: 5,
      avatar: "PO"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50/10 to-orange-50/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            O que nossos
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              {" "}clientes dizem
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja como a Chave tem ajudado empresas a alcançar resultados excepcionais 
            através de soluções inteligentes de Business Intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-pink-500/10 to-orange-400/10 p-8 rounded-2xl border border-pink-200/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Junte-se a mais de 50 empresas satisfeitas!
            </h3>
            <p className="text-muted-foreground mb-6">
              Descubra como a Chave pode transformar os dados da sua empresa em vantagem competitiva.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">4.9/5</span>
              <span>baseado em 50+ avaliações</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
