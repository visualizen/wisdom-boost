import { Card, CardContent } from "@/components/ui/card";
import { Quote, TrendingUp, Award, Users } from "lucide-react";

const SuccessCases = () => {
  const cases = [
    {
      company: "Metalúrgica São Paulo",
      segment: "Indústria de Ferragens",
      challenge: "Redução de custos em importação de matéria-prima",
      results: [
        { metric: "32%", label: "Redução de custos" },
        { metric: "45 dias", label: "Otimização de prazo" },
        { metric: "R$ 2.8M", label: "Economia anual" }
      ],
      testimonial: "A Wisdom Trading transformou nossa operação de importação. Com a consultoria tributária e escolha do melhor regime especial, conseguimos reduzir significativamente nossos custos operacionais e aumentar nossa competitividade no mercado.",
      client: "Carlos Eduardo Silva",
      position: "Diretor de Suprimentos",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=300&fit=crop"
    },
    {
      company: "FoodBrasil Importadora",
      segment: "Setor Alimentício",
      challenge: "Complexidade nos processos de certificação e importação",
      results: [
        { metric: "60%", label: "Agilidade no processo" },
        { metric: "100%", label: "Conformidade legal" },
        { metric: "150+", label: "Containers processados" }
      ],
      testimonial: "Lidar com importação de alimentos é extremamente complexo devido às regulamentações sanitárias. A equipe da Wisdom nos guiou em cada etapa, desde a análise de viabilidade até o desembaraço aduaneiro, garantindo total conformidade.",
      client: "Marina Costa",
      position: "Gerente de Importação",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop"
    },
    {
      company: "TechComponents Ltd",
      segment: "Componentes Eletrônicos",
      challenge: "Necessidade de importações recorrentes com melhor custo-benefício",
      results: [
        { metric: "28%", label: "Redução tributária" },
        { metric: "12 meses", label: "Parceria estabelecida" },
        { metric: "240+", label: "Operações realizadas" }
      ],
      testimonial: "Precisávamos de um parceiro confiável para nossa operação de importação contínua. A Wisdom não só otimizou nossos custos através do regime de drawback, como também nos conectou com fornecedores qualificados na Ásia.",
      client: "Roberto Tanaka",
      position: "CEO",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
    },
    {
      company: "Química Industrial BR",
      segment: "Produtos Químicos",
      challenge: "Gestão logística complexa e custos de seguro elevados",
      results: [
        { metric: "18%", label: "Economia em logística" },
        { metric: "Zero", label: "Incidentes reportados" },
        { metric: "95%", label: "Satisfação do cliente" }
      ],
      testimonial: "A gestão completa da cadeia logística pela Wisdom, incluindo o seguro de carga internacional, nos deu tranquilidade para focar no nosso core business. O rastreamento em tempo real é um diferencial importante.",
      client: "Ana Paula Ferreira",
      position: "Diretora de Operações",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-br from-background via-blue-500/5 to-background">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, hsl(var(--primary)) 2%, transparent 0%), 
                           radial-gradient(circle at 75px 75px, hsl(var(--primary)) 2%, transparent 0%)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-blue-500/20">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Histórias de Sucesso</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 bg-clip-text text-transparent">
            Casos de Sucesso
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça empresas que transformaram suas operações de comércio exterior com nossa expertise
          </p>
        </div>

        {/* Success Cards */}
        <div className="space-y-16">
          {cases.map((caseItem, index) => {
            const isEven = index % 2 === 0;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden border-2 border-border/50 hover:border-primary/50 transition-all duration-500 bg-card/50 backdrop-blur-sm"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-8 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image */}
                    <div className={`relative ${!isEven ? 'lg:order-2' : ''}`}>
                      <div className="relative h-full min-h-[400px] overflow-hidden">
                        <img 
                          src={caseItem.image}
                          alt={caseItem.company}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                        
                        {/* Company info overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                          <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-primary/90 rounded-full">
                            <Users className="w-4 h-4 text-white" />
                            <span className="text-white font-semibold text-sm">{caseItem.segment}</span>
                          </div>
                          <h3 className="text-3xl font-bold text-white mb-2">{caseItem.company}</h3>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${!isEven ? 'lg:order-1' : ''}`}>
                      {/* Challenge */}
                      <div className="mb-8">
                        <div className="inline-flex items-center gap-2 mb-3 text-primary">
                          <TrendingUp className="w-5 h-5" />
                          <span className="font-bold text-sm uppercase tracking-wide">Desafio</span>
                        </div>
                        <p className="text-muted-foreground text-lg">{caseItem.challenge}</p>
                      </div>

                      {/* Results */}
                      <div className="mb-8">
                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                          <Award className="w-5 h-5 text-primary" />
                          Resultados Alcançados
                        </h4>
                        <div className="grid grid-cols-3 gap-4">
                          {caseItem.results.map((result, idx) => (
                            <div 
                              key={idx}
                              className="text-center p-4 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20"
                            >
                              <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent mb-1">
                                {result.metric}
                              </div>
                              <div className="text-xs text-muted-foreground font-semibold">
                                {result.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="relative">
                        <Quote className="absolute -top-2 -left-2 w-12 h-12 text-primary/20" />
                        <blockquote className="relative pl-8 border-l-4 border-primary/30 italic text-muted-foreground text-lg leading-relaxed mb-6">
                          "{caseItem.testimonial}"
                        </blockquote>
                        <div className="pl-8">
                          <div className="font-bold text-foreground text-lg">{caseItem.client}</div>
                          <div className="text-primary text-sm font-semibold">{caseItem.position}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-sky-500/10 rounded-3xl border-2 border-primary/20">
            <h3 className="text-3xl font-bold mb-4">Pronto para o próximo caso de sucesso?</h3>
            <p className="text-xl text-muted-foreground mb-6">
              Sua empresa pode ser a próxima a alcançar resultados extraordinários
            </p>
            <a 
              href="/contato" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary hover:opacity-90 transition-opacity text-white font-bold rounded-xl text-lg shadow-lg hover:shadow-xl"
            >
              Fale com Nossos Especialistas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;
