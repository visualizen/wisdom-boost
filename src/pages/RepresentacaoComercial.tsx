import { useState } from "react";
import { Building2, Globe, TrendingUp, Users, ShieldCheck, Clock, CheckCircle, ArrowRight, BarChart3, Handshake, FileCheck, Package, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/ContactForm";
import GlobalPresenceMap from "@/components/GlobalPresenceMap";
import { Link } from "react-router-dom";

const RepresentacaoComercial = () => {
  const [activeSegment, setActiveSegment] = useState("all");

  const benefits = [
    {
      icon: Building2,
      title: "Presença Local Estabelecida",
      description: "Representação física no Brasil com infraestrutura completa para suas operações comerciais"
    },
    {
      icon: Users,
      title: "Rede de Contatos Consolidada",
      description: "Acesso imediato a network de distribuidores, compradores e parceiros estratégicos brasileiros"
    },
    {
      icon: Globe,
      title: "Conhecimento do Mercado",
      description: "Expertise profunda sobre regulamentações, cultura de negócios e oportunidades no Brasil"
    },
    {
      icon: ShieldCheck,
      title: "Conformidade Garantida",
      description: "Gestão completa de documentação, certificações e compliance com legislação brasileira"
    },
    {
      icon: TrendingUp,
      title: "Expansão Sem Riscos",
      description: "Teste o mercado brasileiro sem necessidade de investimento em estrutura própria"
    },
    {
      icon: Clock,
      title: "Time-to-Market Acelerado",
      description: "Entre no mercado brasileiro em semanas, não anos, com nossa estrutura pronta"
    }
  ];

  const services = [
    {
      icon: Handshake,
      title: "Prospecção de Clientes",
      description: "Identificação e abordagem de potenciais compradores alinhados ao seu produto"
    },
    {
      icon: BarChart3,
      title: "Análise de Mercado",
      description: "Estudos detalhados sobre viabilidade, precificação e posicionamento competitivo"
    },
    {
      icon: FileCheck,
      title: "Negociação Comercial",
      description: "Condução de negociações, elaboração de propostas e fechamento de contratos"
    },
    {
      icon: Package,
      title: "Gestão de Operações",
      description: "Acompanhamento de pedidos, logística e suporte pós-venda aos clientes brasileiros"
    }
  ];

  const segments = [
    {
      id: "chemicals",
      name: "Químicos & Petroquímicos",
      description: "Representação para fabricantes de químicos industriais, especialidades e commodities",
      color: "purple"
    },
    {
      id: "metals",
      name: "Metais & Siderurgia",
      description: "Conexão com indústrias brasileiras de aço, alumínio e metais não-ferrosos",
      color: "slate"
    },
    {
      id: "food",
      name: "Alimentos & Bebidas",
      description: "Entrada no mercado brasileiro de ingredientes, aditivos e produtos alimentícios",
      color: "emerald"
    },
    {
      id: "machinery",
      name: "Máquinas & Equipamentos",
      description: "Representação de fabricantes de equipamentos industriais e maquinário",
      color: "amber"
    }
  ];

  const stats = [
    { value: "15+", label: "Anos de Experiência", icon: Clock },
    { value: "200+", label: "Empresas Representadas", icon: Building2 },
    { value: "500+", label: "Negócios Fechados", icon: Handshake },
    { value: "95%", label: "Taxa de Satisfação", icon: CheckCircle }
  ];

  const process = [
    {
      step: "01",
      title: "Análise Inicial",
      description: "Avaliamos seu produto, mercado-alvo e objetivos no Brasil"
    },
    {
      step: "02",
      title: "Estratégia Comercial",
      description: "Desenvolvemos plano de entrada e posicionamento no mercado"
    },
    {
      step: "03",
      title: "Prospecção Ativa",
      description: "Identificamos e contatamos potenciais compradores qualificados"
    },
    {
      step: "04",
      title: "Negociação & Fechamento",
      description: "Conduzimos negociações até o fechamento dos contratos"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-primary-light/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-base px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Globe className="mr-2 h-4 w-4" />
              Commercial Representation in Brazil
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-title bg-clip-text text-transparent leading-tight">
              Your Gateway to the Brazilian Market
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Expand your business in Brazil with a trusted local partner. We represent international companies seeking commercial presence in one of the world's largest markets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary text-lg px-8 py-6 group">
                <a href="#contact">Start Your Expansion</a>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Link to="/contato">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-4xl font-bold bg-gradient-title bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <ShieldCheck className="mr-2 h-4 w-4" />
              Why Wisdom Trading
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-title bg-clip-text text-transparent">
              Your Strategic Advantage in Brazil
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Navigate the Brazilian market complexity with a partner who understands both your business needs and local market dynamics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Package className="mr-2 h-4 w-4" />
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-title bg-clip-text text-transparent">
              Complete Commercial Representation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end support for your business development in Brazil
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-card">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Segments Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Building2 className="mr-2 h-4 w-4" />
              Industries We Serve
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-title bg-clip-text text-transparent">
              Specialized Market Knowledge
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep expertise across key industrial segments in the Brazilian market
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {segments.map((segment) => (
              <Card 
                key={segment.id} 
                className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg cursor-pointer group"
                onClick={() => setActiveSegment(segment.id)}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className={`h-12 w-12 rounded-lg bg-${segment.color}-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Building2 className={`h-6 w-6 text-${segment.color}-500`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{segment.name}</h3>
                      <p className="text-muted-foreground">{segment.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Network Map Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <MapPin className="mr-2 h-4 w-4" />
              Global Network Map
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-title bg-clip-text text-transparent">
              Our International Presence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our interactive map and discover where Wisdom Trading has established presence and commercial partners worldwide
            </p>
          </div>

          <GlobalPresenceMap />

          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-border/50 bg-card text-center">
              <CardContent className="p-6">
                <Globe className="h-10 w-10 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold bg-gradient-title bg-clip-text text-transparent mb-2">40+</div>
                <div className="text-muted-foreground">Countries Served</div>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card text-center">
              <CardContent className="p-6">
                <Users className="h-10 w-10 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold bg-gradient-title bg-clip-text text-transparent mb-2">24</div>
                <div className="text-muted-foreground">Strategic Partners</div>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card text-center">
              <CardContent className="p-6">
                <MapPin className="h-10 w-10 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold bg-gradient-title bg-clip-text text-transparent mb-2">6</div>
                <div className="text-muted-foreground">Continents</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <ArrowRight className="mr-2 h-4 w-4" />
              How It Works
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-title bg-clip-text text-transparent">
              Your Path to Brazilian Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven 4-step process to establish your presence in Brazil
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="text-6xl font-bold text-primary/20 mb-4">{item.step}</div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
                {index < process.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 h-6 w-6 text-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Enter the Brazilian Market?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how we can accelerate your business growth in Brazil with our proven commercial representation services
          </p>
          <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 group border-0">
            <a href="#contact">Get Started Today</a>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                <Users className="mr-2 h-4 w-4" />
                Contact Us
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-title bg-clip-text text-transparent">
                Let's Start Your Brazilian Journey
              </h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and our team will contact you within 24 hours
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RepresentacaoComercial;
