import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Globe, Target, Users, Shield, Zap, Package, Ship, TrendingUp } from "lucide-react";
import heroImage from "@/assets/quem-somos-hero.jpg";
import teamImage from "@/assets/quem-somos-team.jpg";
import logisticsImage from "@/assets/quem-somos-logistics.jpg";

const QuemSomos = () => {
  const stats = [
    { icon: Users, value: 30, suffix: "+", label: "Anos de Experiência", color: "from-blue-500 to-cyan-500" },
    { icon: Globe, value: 50, suffix: "+", label: "Países Atendidos", color: "from-purple-500 to-pink-500" },
    { icon: Package, value: 1000, suffix: "+", label: "Operações Realizadas", color: "from-orange-500 to-red-500" },
    { icon: Ship, value: 500000, suffix: "+", label: "Toneladas Movimentadas", color: "from-green-500 to-emerald-500" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
              <span className="text-primary font-semibold">Excelência em Comércio Exterior</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Quem Somos
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Conectando empresas brasileiras ao mercado global com tecnologia e expertise
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
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

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Estatísticas */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--primary)/0.05),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
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
                <div key={index} className="group relative">
                  <div className="relative h-full bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl`}></div>
                    
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="relative">
                      <div className="text-5xl font-bold mb-2 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                        {stat.value.toLocaleString('pt-BR')}
                        <span className="text-primary">{stat.suffix}</span>
                      </div>
                      <div className="text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-xl opacity-50"></div>
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
            <div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl blur-xl"></div>
                <img 
                  src={teamImage} 
                  alt="Equipe Wisdom Trading" 
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
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

      {/* Missão, Visão e Valores */}
      <section className="py-24 relative">
        <div 
          className="absolute inset-0 opacity-5 bg-cover bg-center"
          style={{ backgroundImage: `url(${logisticsImage})` }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
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
            <div className="group">
              <div className="relative h-full bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 rounded-t-2xl"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/50 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Facilitar e otimizar operações de comércio exterior, oferecendo soluções personalizadas 
                  e eficientes que conectam empresas brasileiras ao mercado global com segurança e agilidade.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="relative h-full bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 rounded-t-2xl"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/50 rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser referência nacional em trading e comércio exterior, reconhecida pela excelência 
                  operacional, inovação e pelo impacto positivo que geramos nos negócios dos nossos clientes.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="relative h-full bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 rounded-t-2xl"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/50 rounded-2xl flex items-center justify-center mb-6">
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

      {/* Diferenciais */}
      <section className="py-24 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
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
            <div className="group">
              <div className="relative h-full p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/50 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Experiência Consolidada</h3>
                <p className="text-muted-foreground">
                  Mais de 30 anos de atuação no mercado internacional com expertise comprovada.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="relative h-full p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/50 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Alcance Global</h3>
                <p className="text-muted-foreground">
                  Rede de contatos em mais de 50 países facilitando suas operações internacionais.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="relative h-full p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/50 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Segurança e Compliance</h3>
                <p className="text-muted-foreground">
                  Processos certificados e conformidade com regulamentações internacionais.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="relative h-full p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/50 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Agilidade Operacional</h3>
                <p className="text-muted-foreground">
                  Soluções rápidas e eficientes com tecnologia de ponta e processos otimizados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm">Pronto para Começar?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Vamos Conectar Seu Negócio ao Mundo
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Entre em contato conosco e descubra como podemos otimizar suas operações de comércio exterior
            </p>
            <a 
              href="/#contato" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuemSomos;
