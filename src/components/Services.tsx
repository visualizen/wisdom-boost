import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Shield, TrendingUp, Users, Zap, Code2, Globe2, Database } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Importação com Segurança",
      description: "Processos seguros e conformes com todas as regulamentações aduaneiras, garantindo tranquilidade em cada operação.",
      badge: "Segurança",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe2,
      title: "Assessoria Completa",
      description: "Suporte integral em importação e exportação, desde a seleção de fornecedores até a entrega final.",
      badge: "Global",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      title: "Estratégia para Exportação",
      description: "Desenvolvemos estratégias personalizadas para expandir seus produtos no mercado internacional.",
      badge: "Estratégia",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Database,
      title: "Seleção de Fornecedores",
      description: "Identificamos e qualificamos os melhores fornecedores internacionais para o seu negócio.",
      badge: "Data Driven",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary relative overflow-hidden">
      {/* Digital grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated circuit lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="10%" y1="20%" x2="90%" y2="20%" stroke="url(#circuit-gradient)" strokeWidth="2">
            <animate attributeName="x1" values="10%;90%;10%" dur="8s" repeatCount="indefinite" />
            <animate attributeName="x2" values="90%;10%;90%" dur="8s" repeatCount="indefinite" />
          </line>
          <line x1="20%" y1="80%" x2="80%" y2="80%" stroke="url(#circuit-gradient)" strokeWidth="2">
            <animate attributeName="x1" values="20%;80%;20%" dur="6s" repeatCount="indefinite" />
            <animate attributeName="x2" values="80%;20%;80%" dur="6s" repeatCount="indefinite" />
          </line>
          <circle cx="50%" cy="50%" r="3" fill="hsl(var(--primary))">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Tecnologia & Inovação</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
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
              {/* Animated gradient border */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10`} />
              </div>
              
              {/* Glow effect on hover */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
              
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l ${service.gradient}`} />
                <div className={`absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b ${service.gradient}`} />
              </div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <service.icon className="text-white" size={28} />
                  </div>
                  <Badge variant="secondary" className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                  {service.title}
                  <Code2 className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary" />
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                
                {/* Tech indicator dots */}
                <div className="flex gap-1 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} opacity-60`} />
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} opacity-30`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
