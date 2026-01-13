import { useState } from "react";
import { Building2, Globe, TrendingUp, Users, ShieldCheck, Clock, CheckCircle, ArrowRight, BarChart3, Handshake, FileCheck, Package } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/ContactForm";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEO } from "@/components/SEO";

const RepresentacaoComercial = () => {
  const [activeSegment, setActiveSegment] = useState("all");
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Building2,
      title: t('commercialPage.benefits.items.localPresence.title'),
      description: t('commercialPage.benefits.items.localPresence.desc')
    },
    {
      icon: Users,
      title: t('commercialPage.benefits.items.network.title'),
      description: t('commercialPage.benefits.items.network.desc')
    },
    {
      icon: Globe,
      title: t('commercialPage.benefits.items.marketKnowledge.title'),
      description: t('commercialPage.benefits.items.marketKnowledge.desc')
    },
    {
      icon: ShieldCheck,
      title: t('commercialPage.benefits.items.compliance.title'),
      description: t('commercialPage.benefits.items.compliance.desc')
    },
    {
      icon: TrendingUp,
      title: t('commercialPage.benefits.items.expansion.title'),
      description: t('commercialPage.benefits.items.expansion.desc')
    },
    {
      icon: Clock,
      title: t('commercialPage.benefits.items.timeToMarket.title'),
      description: t('commercialPage.benefits.items.timeToMarket.desc')
    }
  ];

  const services = [
    {
      icon: Handshake,
      title: t('commercialPage.services.items.prospecting.title'),
      description: t('commercialPage.services.items.prospecting.desc')
    },
    {
      icon: BarChart3,
      title: t('commercialPage.services.items.analysis.title'),
      description: t('commercialPage.services.items.analysis.desc')
    },
    {
      icon: FileCheck,
      title: t('commercialPage.services.items.negotiation.title'),
      description: t('commercialPage.services.items.negotiation.desc')
    },
    {
      icon: Package,
      title: t('commercialPage.services.items.management.title'),
      description: t('commercialPage.services.items.management.desc')
    }
  ];

  const segments = [
    {
      id: "chemicals",
      name: t('commercialPage.segments.items.chemicals.name'),
      description: t('commercialPage.segments.items.chemicals.desc'),
      color: "purple"
    },
    {
      id: "metals",
      name: t('commercialPage.segments.items.metals.name'),
      description: t('commercialPage.segments.items.metals.desc'),
      color: "slate"
    },
    {
      id: "food",
      name: t('commercialPage.segments.items.food.name'),
      description: t('commercialPage.segments.items.food.desc'),
      color: "emerald"
    },
    {
      id: "machinery",
      name: t('commercialPage.segments.items.machinery.name'),
      description: t('commercialPage.segments.items.machinery.desc'),
      color: "amber"
    }
  ];

  const stats = [
    { value: "15+", label: t('commercialPage.stats.experience'), icon: Clock },
    { value: "200+", label: t('commercialPage.stats.represented'), icon: Building2 },
    { value: "500+", label: t('commercialPage.stats.deals'), icon: Handshake },
    { value: "95%", label: t('commercialPage.stats.satisfaction'), icon: CheckCircle }
  ];

  const process = [
    {
      step: "01",
      title: t('commercialPage.process.steps.analysis.title'),
      description: t('commercialPage.process.steps.analysis.desc')
    },
    {
      step: "02",
      title: t('commercialPage.process.steps.strategy.title'),
      description: t('commercialPage.process.steps.strategy.desc')
    },
    {
      step: "03",
      title: t('commercialPage.process.steps.prospecting.title'),
      description: t('commercialPage.process.steps.prospecting.desc')
    },
    {
      step: "04",
      title: t('commercialPage.process.steps.negotiation.title'),
      description: t('commercialPage.process.steps.negotiation.desc')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Representação Comercial"
        description="Potencialize suas vendas no mercado brasileiro com nossa representação comercial estratégica e especializada."
      />
      <Header />

      {/* Hero Section */}
      {/* Hero Section - Standardized */}
      <section className="relative min-h-[500px] pt-40 pb-16 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/brazil-market-hero.jpg')" }}
        >
          {/* Standardized Dark Blue Map Overlay */}
          <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-cyan-900/70 to-sky-900/80"></div>
        </div>


        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Globe className="mr-2 h-4 w-4 text-cyan-300" />
              <span className="text-white font-medium text-sm">{t('commercialPage.hero.badge')}</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl animate-fade-in-up leading-tight pb-2">
              {t('commercialPage.hero.title')}
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in-up font-light" style={{ animationDelay: "0.2s" }}>
              {t('commercialPage.hero.subtitle')} <span className="font-bold text-cyan-300">{t('commercialPage.hero.subtitleHighlight')}</span>. {t('commercialPage.hero.desc')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white rounded-full text-lg px-8 py-6 shadow-lg shadow-sky-500/20 border-0 transition-all duration-300 transform hover:-translate-y-1">
                <a href="#contact">{t('commercialPage.hero.cta')}</a>
                <ArrowRight className="ml-2 h-5 w-5 hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 rounded-full text-lg px-8 py-6">
                <Link to="/contato">{t('commercialPage.hero.schedule')}</Link>
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
              {t('commercialPage.benefits.badge')}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-title bg-clip-text text-transparent">
              {t('commercialPage.benefits.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('commercialPage.benefits.subtitle')}
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
              {t('commercialPage.services.badge')}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-title bg-clip-text text-transparent">
              {t('commercialPage.services.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('commercialPage.services.subtitle')}
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
              {t('commercialPage.segments.badge')}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-title bg-clip-text text-transparent">
              {t('commercialPage.segments.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('commercialPage.segments.subtitle')}
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

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <ArrowRight className="mr-2 h-4 w-4" />
              {t('commercialPage.process.badge')}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-title bg-clip-text text-transparent">
              {t('commercialPage.process.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('commercialPage.process.subtitle')}
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
            {t('commercialPage.cta.title')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t('commercialPage.cta.desc')}
          </p>
          <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 group border-0">
            <a href="#contact">{t('commercialPage.cta.button')}</a>
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
                {t('commercialPage.contact.badge')}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-title bg-clip-text text-transparent">
                {t('commercialPage.contact.title')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('commercialPage.contact.subtitle')}
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
