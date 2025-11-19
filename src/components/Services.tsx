import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Shield, TrendingUp, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Importação com Segurança",
      description: "Processos seguros e conformes com todas as regulamentações aduaneiras, garantindo tranquilidade em cada operação.",
    },
    {
      icon: Package,
      title: "Assessoria Completa",
      description: "Suporte integral em importação e exportação, desde a seleção de fornecedores até a entrega final.",
    },
    {
      icon: TrendingUp,
      title: "Estratégia para Exportação",
      description: "Desenvolvemos estratégias personalizadas para expandir seus produtos no mercado internacional.",
    },
    {
      icon: Users,
      title: "Seleção de Fornecedores",
      description: "Identificamos e qualificamos os melhores fornecedores internacionais para o seu negócio.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary relative overflow-hidden">
      {/* Tech background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, hsl(var(--primary)) 2%, transparent 0%), 
                           radial-gradient(circle at 75px 75px, hsl(var(--primary)) 2%, transparent 0%)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-title bg-clip-text text-transparent">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas e personalizadas para o seu negócio no comércio exterior
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden transition-all duration-500 hover:-translate-y-3 animate-slide-up-bounce border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              style={{ 
                animationDelay: `${index * 0.15}s`,
                animationFillMode: 'both'
              }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              
              <CardHeader className="relative z-10">
                <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-500 group-hover:scale-110">
                  <service.icon className="text-white" size={28} />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
