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

const RepresentacaoInternacional = () => {
  const [activeRegion, setActiveRegion] = useState("all");

  const benefits = [
    {
      icon: Globe,
      title: "Acesso a Mercados Globais",
      description: "Expanda suas vendas para mercados internacionais estratégicos com nossa rede de contatos estabelecida"
    },
    {
      icon: Users,
      title: "Rede Internacional Consolidada",
      description: "Conexão direta com compradores, distribuidores e importadores qualificados em diversos países"
    },
    {
      icon: Building2,
      title: "Representação Local nos Mercados",
      description: "Presença física e expertise local em cada mercado-alvo para suas operações de exportação"
    },
    {
      icon: ShieldCheck,
      title: "Conformidade Internacional",
      description: "Gestão completa de documentação de exportação, certificações e compliance regulatório de cada país"
    },
    {
      icon: TrendingUp,
      title: "Crescimento Sem Investimento Pesado",
      description: "Expanda internacionalmente sem necessidade de abrir escritórios ou estrutura própria no exterior"
    },
    {
      icon: Clock,
      title: "Entrada Rápida no Mercado",
      description: "Comece a exportar em semanas utilizando nossa infraestrutura e relacionamentos já estabelecidos"
    }
  ];

  const services = [
    {
      icon: Handshake,
      title: "Prospecção Internacional",
      description: "Identificação e abordagem de potenciais compradores internacionais para seus produtos"
    },
    {
      icon: BarChart3,
      title: "Inteligência de Mercado",
      description: "Estudos sobre viabilidade, precificação competitiva e oportunidades em cada mercado-alvo"
    },
    {
      icon: FileCheck,
      title: "Negociação e Contratos",
      description: "Condução de negociações internacionais e elaboração de contratos de exportação"
    },
    {
      icon: Package,
      title: "Suporte Logístico",
      description: "Coordenação de embarques, documentação e follow-up com compradores internacionais"
    }
  ];

  const regions = [
    {
      id: "americas",
      name: "América Latina e América do Norte",
      description: "Representação comercial em países das Américas, incluindo EUA, Canadá, México, Argentina e Chile",
      color: "emerald",
      icon: MapPin
    },
    {
      id: "europe",
      name: "Europa",
      description: "Acesso aos mercados europeus através de parceiros em países-chave da União Europeia",
      color: "blue",
      icon: MapPin
    },
    {
      id: "asia",
      name: "Ásia e Oriente Médio",
      description: "Conexões estratégicas em mercados asiáticos emergentes e países do Golfo Pérsico",
      color: "amber",
      icon: MapPin
    },
    {
      id: "africa",
      name: "África",
      description: "Representação em mercados africanos de alto potencial, especialmente países lusófonos",
      color: "orange",
      icon: MapPin
    }
  ];

  const stats = [
    { value: "15+", label: "Anos no Mercado", icon: Clock },
    { value: "40+", label: "Países Atendidos", icon: Globe },
    { value: "300+", label: "Exportações Facilitadas", icon: Package },
    { value: "98%", label: "Clientes Satisfeitos", icon: CheckCircle }
  ];

  const process = [
    {
      step: "01",
      title: "Diagnóstico e Planejamento",
      description: "Analisamos seu produto, capacidade produtiva e definimos mercados-alvo estratégicos"
    },
    {
      step: "02",
      title: "Estratégia de Entrada",
      description: "Desenvolvemos plano comercial e posicionamento competitivo para cada mercado"
    },
    {
      step: "03",
      title: "Prospecção Ativa",
      description: "Identificamos e contatamos compradores qualificados nos mercados internacionais"
    },
    {
      step: "04",
      title: "Negociação e Fechamento",
      description: "Conduzimos negociações e estruturamos contratos de exportação seguros"
    }
  ];

  const segments = [
    {
      name: "Alimentos e Bebidas",
      description: "Exportação de produtos alimentícios, bebidas, ingredientes e commodities agrícolas",
      icon: Package
    },
    {
      name: "Manufaturados",
      description: "Produtos industrializados, componentes, equipamentos e bens de capital",
      icon: Building2
    },
    {
      name: "Químicos e Farmacêuticos",
      description: "Produtos químicos industriais, especialidades químicas e produtos farmacêuticos",
      icon: ShieldCheck
    },
    {
      name: "Têxteis e Calçados",
      description: "Produtos têxteis, confecções, calçados e acessórios de moda",
      icon: Package
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
              Representação Comercial Internacional
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-title bg-clip-text text-transparent leading-tight">
              Leve Seus Produtos para o Mundo
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Expanda sua empresa para mercados internacionais com um parceiro experiente. Representamos empresas brasileiras que desejam exportar e conquistar clientes globais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary text-lg px-8 py-6 group">
                <a href="#contact">Comece a Exportar</a>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Link to="/contato">Agende uma Consultoria</Link>
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
              Por Que Escolher a Wisdom Trading
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-title bg-clip-text text-transparent">
              Sua Vantagem Competitiva Internacional
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conquiste mercados globais com um parceiro que entende tanto as necessidades da sua empresa quanto as complexidades de cada mercado internacional
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
              Nossos Serviços
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-title bg-clip-text text-transparent">
              Representação Comercial Completa
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Suporte integral para o desenvolvimento do seu negócio em mercados internacionais
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

      {/* Regions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Globe className="mr-2 h-4 w-4" />
              Mercados Internacionais
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-title bg-clip-text text-transparent">
              Presença Global Estabelecida
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Rede de contatos e expertise em mercados estratégicos ao redor do mundo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {regions.map((region) => (
              <Card 
                key={region.id} 
                className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg cursor-pointer group"
                onClick={() => setActiveRegion(region.id)}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className={`h-12 w-12 rounded-lg bg-${region.color}-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <region.icon className={`h-6 w-6 text-${region.color}-500`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{region.name}</h3>
                      <p className="text-muted-foreground">{region.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Map Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <MapPin className="mr-2 h-4 w-4" />
              Mapa de Presença Global
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-title bg-clip-text text-transparent">
              Nossa Rede Internacional
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore nosso mapa interativo e descubra onde a Wisdom Trading tem presença estabelecida e parceiros comerciais ao redor do mundo
            </p>
          </div>

          <GlobalPresenceMap />

          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-border/50 bg-card text-center">
              <CardContent className="p-6">
                <Globe className="h-10 w-10 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold bg-gradient-title bg-clip-text text-transparent mb-2">40+</div>
                <div className="text-muted-foreground">Países Atendidos</div>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card text-center">
              <CardContent className="p-6">
                <Users className="h-10 w-10 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold bg-gradient-title bg-clip-text text-transparent mb-2">24</div>
                <div className="text-muted-foreground">Parceiros Estratégicos</div>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card text-center">
              <CardContent className="p-6">
                <MapPin className="h-10 w-10 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold bg-gradient-title bg-clip-text text-transparent mb-2">6</div>
                <div className="text-muted-foreground">Continentes</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Segments Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Building2 className="mr-2 h-4 w-4" />
              Segmentos Atendidos
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-title bg-clip-text text-transparent">
              Experiência em Diversos Setores
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conhecimento especializado para representar produtos brasileiros em mercados globais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {segments.map((segment, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-card">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <segment.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{segment.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{segment.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <ArrowRight className="mr-2 h-4 w-4" />
              Como Funciona
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-title bg-clip-text text-transparent">
              Seu Caminho para o Sucesso Internacional
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Processo comprovado em 4 etapas para estabelecer sua presença em mercados globais
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
            Pronto para Conquistar Mercados Internacionais?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Vamos conversar sobre como podemos acelerar o crescimento das suas exportações com nossos serviços de representação comercial internacional
          </p>
          <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 group border-0">
            <a href="#contact">Comece Hoje Mesmo</a>
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
                Entre em Contato
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-title bg-clip-text text-transparent">
                Inicie Sua Jornada Internacional
              </h2>
              <p className="text-xl text-muted-foreground">
                Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas
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

export default RepresentacaoInternacional;
