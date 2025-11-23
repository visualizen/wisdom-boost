import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Globe, Target, Users, TrendingUp, Shield, Zap, Package, Ship, TrendingUp as Growth } from "lucide-react";
import heroImage from "@/assets/quem-somos-hero.jpg";
import teamImage from "@/assets/quem-somos-team.jpg";
import logisticsImage from "@/assets/quem-somos-logistics.jpg";

const QuemSomos = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const stats = [
    { icon: Users, end: 30, suffix: "+", label: "Anos de Experiência", color: "from-blue-500 to-cyan-500" },
    { icon: Globe, end: 50, suffix: "+", label: "Países Atendidos", color: "from-purple-500 to-pink-500" },
    { icon: Package, end: 1000, suffix: "+", label: "Operações Realizadas", color: "from-orange-500 to-red-500" },
    { icon: Ship, end: 500000, suffix: "+", label: "Toneladas Movimentadas", color: "from-green-500 to-emerald-500" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-on-scroll");
    elements.forEach((el) => observerRef.current?.observe(el));

    // Stats animation observer
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            stats.forEach((stat, index) => {
              const duration = 2000;
              const steps = 60;
              const increment = stat.end / steps;
              let current = 0;
              
              const timer = setInterval(() => {
                current += increment;
                if (current >= stat.end) {
                  current = stat.end;
                  clearInterval(timer);
                }
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = Math.floor(current);
                  return newCounts;
                });
              }, duration / steps);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
      statsObserver.disconnect();
    };
  }, [hasAnimated]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section com Parallax */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            transform: 'translateZ(0)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 animate-fade-in">
              <span className="text-primary font-semibold">Excelência em Comércio Exterior</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Quem Somos
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in mb-8">
              Conectando empresas brasileiras ao mercado global com tecnologia e expertise
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
              <div className="px-6 py-3 bg-card/50 backdrop-blur-md rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-primary">+30</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="px-6 py-3 bg-card/50 backdrop-blur-md rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-primary">+50</div>
                <div className="text-sm text-muted-foreground">Países Atendidos</div>
              </div>
              <div className="px-6 py-3 bg-card/50 backdrop-blur-md rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Estatísticas Animadas */}
      <section ref={statsRef} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--primary-rgb),0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(var(--primary-rgb),0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 fade-on-scroll opacity-0">
            <div className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full backdrop-blur-sm">
              <span className="text-primary font-semibold text-sm">Conquistas em Números</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Nossa Trajetória de Sucesso
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Décadas de excelência refletidas em resultados concretos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative fade-on-scroll opacity-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-full bg-card/50 backdrop-blur-md p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                    
                    {/* Icon */}
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Animated Number */}
                    <div className="relative">
                      <div className="text-5xl font-bold mb-2 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                        {counts[index].toLocaleString('pt-BR')}
                        <span className="text-primary">{stat.suffix}</span>
                      </div>
                      <div className="text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* História com Imagem */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="fade-on-scroll opacity-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl blur-2xl"></div>
                <img 
                  src={teamImage} 
                  alt="Equipe Wisdom Trading" 
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
            <div className="fade-on-scroll opacity-0">
              <div className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full">
                <span className="text-primary font-semibold text-sm">Nossa Jornada</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Nossa História
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  A Wisdom Trading nasceu da experiência e paixão de profissionais com mais de 30 anos 
                  de atuação no mercado de comércio exterior. Fundada com o propósito de facilitar e 
                  otimizar operações internacionais, nos especializamos em conectar empresas brasileiras 
                  ao mercado global.
                </p>
                <p>
                  Ao longo dos anos, construímos uma sólida reputação baseada em confiança, transparência 
                  e resultados. Nossa trajetória é marcada por parcerias de sucesso e pela constante busca 
                  por inovação e excelência em todos os serviços prestados.
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="flex items-center gap-2 text-primary">
                    <Shield className="w-5 h-5" />
                    <span className="font-semibold">Confiança</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <Zap className="w-5 h-5" />
                    <span className="font-semibold">Inovação</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-semibold">Resultados</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores - Modern Cards */}
      <section className="py-24 relative">
        <div 
          className="absolute inset-0 opacity-5 bg-cover bg-center"
          style={{ backgroundImage: `url(${logisticsImage})` }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 fade-on-scroll opacity-0">
            <div className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm">Nossos Pilares</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Missão, Visão e Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam nossa atuação no mercado global
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="fade-on-scroll opacity-0 group">
              <div className="relative h-full bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 rounded-t-2xl"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Facilitar e otimizar operações de comércio exterior, oferecendo soluções personalizadas 
                  e eficientes que conectam empresas brasileiras ao mercado global com segurança e agilidade.
                </p>
              </div>
            </div>

            <div className="fade-on-scroll opacity-0 group" style={{ animationDelay: '100ms' }}>
              <div className="relative h-full bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 rounded-t-2xl"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser referência nacional em trading e comércio exterior, reconhecida pela excelência 
                  operacional, inovação e pelo impacto positivo que geramos nos negócios dos nossos clientes.
                </p>
              </div>
            </div>

            <div className="fade-on-scroll opacity-0 group" style={{ animationDelay: '200ms' }}>
              <div className="relative h-full bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 rounded-t-2xl"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Valores</h3>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Integridade e transparência</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Excelência operacional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Comprometimento com resultados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Inovação contínua</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Respeito e ética</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais - Grid Moderno */}
      <section className="py-24 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-on-scroll opacity-0">
            <div className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm">Por Que Nos Escolher</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nossos Diferenciais
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              O que nos torna únicos no mercado de comércio exterior
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="fade-on-scroll opacity-0 group">
              <div className="relative h-full p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Experiência Consolidada</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Mais de 30 anos de expertise em comércio exterior e conhecimento profundo 
                  do mercado internacional.
                </p>
              </div>
            </div>

            <div className="fade-on-scroll opacity-0 group" style={{ animationDelay: '100ms' }}>
              <div className="relative h-full p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Globe className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Rede Global</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Parcerias estratégicas em diversos países, facilitando operações em 
                  mercados-chave ao redor do mundo.
                </p>
              </div>
            </div>

            <div className="fade-on-scroll opacity-0 group" style={{ animationDelay: '200ms' }}>
              <div className="relative h-full p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Certificações de Qualidade</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Certificados internacionais que garantem os mais altos padrões de 
                  qualidade e conformidade.
                </p>
              </div>
            </div>

            <div className="fade-on-scroll opacity-0 group" style={{ animationDelay: '300ms' }}>
              <div className="relative h-full p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Soluções Personalizadas</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Atendimento customizado e estratégias específicas para cada cliente 
                  e segmento de atuação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${logisticsImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/90"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white fade-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para Expandir seu Negócio?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Entre em contato conosco e descubra como podemos ajudar sua empresa 
              a alcançar novos mercados com segurança e eficiência.
            </p>
            <a href="/#contact">
              <button className="group px-10 py-5 bg-white text-primary rounded-xl font-bold text-lg hover:bg-white/95 transition-all duration-300 hover:shadow-2xl hover:scale-105">
                Fale Conosco
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuemSomos;
