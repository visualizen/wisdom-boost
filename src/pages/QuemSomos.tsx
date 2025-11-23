import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Globe, Target, Users, Shield, Zap, Package, Ship, TrendingUp, Sparkles, Rocket, ChartBar, Network } from "lucide-react";
import heroImage from "@/assets/quem-somos-hero.jpg";
import teamImage from "@/assets/innovative-team.jpg";
import globalCommerceImage from "@/assets/global-commerce.jpg";
import techPatternImage from "@/assets/tech-pattern.jpg";
import portModernImage from "@/assets/port-modern.jpg";

const QuemSomos = () => {
  const stats = [
    { icon: Users, value: 30, suffix: "+", label: "Anos de Experiência", color: "from-sky-500 via-blue-500 to-indigo-500" },
    { icon: Globe, value: 50, suffix: "+", label: "Países Atendidos", color: "from-blue-500 via-cyan-500 to-teal-500" },
    { icon: Package, value: 1000, suffix: "+", label: "Operações Realizadas", color: "from-indigo-500 via-blue-600 to-cyan-600" },
    { icon: Ship, value: 500000, suffix: "+", label: "Toneladas Movimentadas", color: "from-cyan-500 via-blue-500 to-sky-500" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Mais Colorido */}
      <section className="relative h-[80vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-cyan-900/60 to-sky-900/70"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_70%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full border-2 border-blue-400/30">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-semibold text-lg">Inovação em Comércio Exterior</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
              Quem Somos
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-10 font-light">
              Conectando empresas ao futuro do <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">comércio global</span>
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <div className="px-8 py-4 bg-gradient-to-br from-blue-600/80 to-cyan-600/80 backdrop-blur-md rounded-2xl border-2 border-blue-400/50 shadow-2xl shadow-blue-500/50">
                <div className="text-3xl font-bold text-white">+30</div>
                <div className="text-sm text-white/80">Anos de Experiência</div>
              </div>
              <div className="px-8 py-4 bg-gradient-to-br from-cyan-600/80 to-sky-600/80 backdrop-blur-md rounded-2xl border-2 border-cyan-400/50 shadow-2xl shadow-cyan-500/50">
                <div className="text-3xl font-bold text-white">+50</div>
                <div className="text-sm text-white/80">Países Atendidos</div>
              </div>
              <div className="px-8 py-4 bg-gradient-to-br from-indigo-600/80 to-blue-600/80 backdrop-blur-md rounded-2xl border-2 border-indigo-400/50 shadow-2xl shadow-indigo-500/50">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-white/80">Satisfação</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Estatísticas Coloridas */}
      <section className="py-32 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: `url(${techPatternImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full backdrop-blur-sm border border-blue-500/20">
              <ChartBar className="w-5 h-5 text-blue-500" />
              <span className="text-primary font-semibold">Conquistas em Números</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
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
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-sky-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative h-full bg-card/80 backdrop-blur-xl p-8 rounded-3xl border-2 border-blue-500/30 group-hover:border-cyan-500/50 transition-all duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/30">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500`}></div>
                    
                    <div className={`relative w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <div className="relative">
                      <div className={`text-5xl font-bold mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                        {stat.value.toLocaleString('pt-BR')}
                        <span>{stat.suffix}</span>
                      </div>
                      <div className="text-muted-foreground font-medium text-lg">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* História - Imagem Grande Colorida */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-background to-cyan-500/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative rounded-3xl overflow-hidden border-4 border-blue-500/30 shadow-2xl">
                <img 
                  src={teamImage} 
                  alt="Equipe Inovadora Wisdom Trading" 
                  className="relative w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-blue-500/20">
                <Rocket className="w-5 h-5 text-blue-500" />
                <span className="text-primary font-semibold">Nossa Jornada</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
                Nossa História
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p className="text-xl">
                  A Wisdom Trading nasceu da experiência e paixão de profissionais com mais de 30 anos 
                  de atuação no mercado de comércio exterior. Fundada com o propósito de facilitar e 
                  otimizar operações internacionais, nos especializamos em conectar empresas brasileiras 
                  ao mercado global.
                </p>
                <p className="text-xl">
                  Ao longo dos anos, construímos uma sólida reputação baseada em confiança, transparência 
                  e resultados. Nossa trajetória é marcada por parcerias de sucesso e pela constante busca 
                  por inovação e excelência em todos os serviços prestados.
                </p>
                <div className="flex flex-wrap gap-6 pt-6">
                  <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-cyan-500/5 rounded-xl border border-cyan-500/20">
                    <Shield className="w-6 h-6 text-cyan-500" />
                    <span className="font-bold text-cyan-600 dark:text-cyan-400">Confiança</span>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-blue-500/5 rounded-xl border border-blue-500/20">
                    <Zap className="w-6 h-6 text-blue-500" />
                    <span className="font-bold text-blue-600 dark:text-blue-400">Inovação</span>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-500/10 to-indigo-500/5 rounded-xl border border-indigo-500/20">
                    <TrendingUp className="w-6 h-6 text-indigo-500" />
                    <span className="font-bold text-indigo-600 dark:text-indigo-400">Resultados</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Comércio Global com Nova Imagem */}
      <section className="py-32 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${globalCommerceImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-cyan-900/85 to-sky-900/90"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Network className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold">Alcance Global</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Conectados ao Mundo
            </h2>
            <p className="text-2xl text-white/90 mb-12 leading-relaxed">
              Nossa rede global permite que sua empresa alcance os mercados mais importantes do planeta, 
              com suporte completo em todas as etapas do processo.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2 text-cyan-400">50+</div>
                <div className="text-white/80">Países</div>
              </div>
              <div className="p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                <Ship className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2 text-blue-400">1000+</div>
                <div className="text-white/80">Operações</div>
              </div>
              <div className="p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                <Users className="w-12 h-12 text-sky-400 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2 text-sky-400">100%</div>
                <div className="text-white/80">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores - Cards Coloridos */}
      <section className="py-32 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${portModernImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-blue-500/20">
              <Target className="w-5 h-5 text-blue-500" />
              <span className="text-primary font-semibold">Nossos Pilares</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 bg-clip-text text-transparent">
              Missão, Visão e Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam nossa atuação no mercado global
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative h-full bg-card/80 backdrop-blur-xl p-10 rounded-3xl border-2 border-cyan-500/30 group-hover:border-cyan-500/60 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-3xl"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-cyan-500/50">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Missão</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Facilitar e otimizar operações de comércio exterior, oferecendo soluções personalizadas 
                  e eficientes que conectam empresas brasileiras ao mercado global com segurança e agilidade.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative h-full bg-card/80 backdrop-blur-xl p-10 rounded-3xl border-2 border-blue-500/30 group-hover:border-blue-500/60 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-3xl"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-blue-500/50">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Visão</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Ser referência nacional em trading e comércio exterior, reconhecida pela excelência 
                  operacional, inovação e pelo impacto positivo que geramos nos negócios dos nossos clientes.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative h-full bg-card/80 backdrop-blur-xl p-10 rounded-3xl border-2 border-indigo-500/30 group-hover:border-indigo-500/60 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-t-3xl"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-indigo-500/50">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Valores</h3>
                <ul className="text-muted-foreground space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 mt-1 text-xl">▸</span>
                    <span>Integridade e transparência</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 mt-1 text-xl">▸</span>
                    <span>Excelência operacional</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 mt-1 text-xl">▸</span>
                    <span>Comprometimento com resultados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 mt-1 text-xl">▸</span>
                    <span>Inovação contínua</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 mt-1 text-xl">▸</span>
                    <span>Respeito e ética</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais - Grid Colorido */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-background to-cyan-500/5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full border border-cyan-500/20">
              <Sparkles className="w-5 h-5 text-cyan-500" />
              <span className="text-primary font-semibold">Por Que Nos Escolher</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Nossos Diferenciais
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              O que nos torna únicos no mercado de comércio exterior
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative h-full p-8 bg-card/80 backdrop-blur-xl rounded-2xl border-2 border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/50">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Experiência Consolidada</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Mais de 30 anos de atuação no mercado internacional com expertise comprovada.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative h-full p-8 bg-card/80 backdrop-blur-xl rounded-2xl border-2 border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Alcance Global</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Rede de contatos em mais de 50 países facilitando suas operações internacionais.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative h-full p-8 bg-card/80 backdrop-blur-xl rounded-2xl border-2 border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/50">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Segurança e Compliance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Processos certificados e conformidade com regulamentações internacionais.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-blue-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative h-full p-8 bg-card/80 backdrop-blur-xl rounded-2xl border-2 border-sky-500/20 group-hover:border-sky-500/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-sky-500/50">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Agilidade Operacional</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Soluções rápidas e eficientes com tecnologia de ponta e processos otimizados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Super Colorido */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-sky-600 opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <Rocket className="w-5 h-5" />
              <span className="font-semibold">Pronto para Começar?</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white drop-shadow-2xl">
              Vamos Conectar Seu Negócio ao Mundo
            </h2>
            <p className="text-2xl text-white/90 mb-12 leading-relaxed">
              Entre em contato conosco e descubra como podemos otimizar suas operações de comércio exterior
            </p>
            <a 
              href="/#contato" 
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-2xl hover:bg-white/90 transition-all duration-300 shadow-2xl hover:shadow-white/50 hover:scale-105"
            >
              <span>Fale Conosco</span>
              <Rocket className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuemSomos;
