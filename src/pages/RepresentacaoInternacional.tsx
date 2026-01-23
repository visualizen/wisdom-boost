import { useState } from "react";
import { Building2, Globe, TrendingUp, Users, ShieldCheck, Clock, CheckCircle, ArrowRight, BarChart3, Handshake, FileCheck, Package, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/ContactForm";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEO } from "@/components/SEO";

const RepresentacaoInternacional = () => {
  const [activeRegion, setActiveRegion] = useState("all");
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Globe,
      title: t('internationalPage.benefits.items.access.title'),
      description: t('internationalPage.benefits.items.access.desc')
    },
    {
      icon: Users,
      title: t('internationalPage.benefits.items.network.title'),
      description: t('internationalPage.benefits.items.network.desc')
    },
    {
      icon: Building2,
      title: t('internationalPage.benefits.items.localRep.title'),
      description: t('internationalPage.benefits.items.localRep.desc')
    },
    {
      icon: ShieldCheck,
      title: t('internationalPage.benefits.items.compliance.title'),
      description: t('internationalPage.benefits.items.compliance.desc')
    },
    {
      icon: TrendingUp,
      title: t('internationalPage.benefits.items.growth.title'),
      description: t('internationalPage.benefits.items.growth.desc')
    },
    {
      icon: Clock,
      title: t('internationalPage.benefits.items.speed.title'),
      description: t('internationalPage.benefits.items.speed.desc')
    }
  ];

  const services = [
    {
      icon: Handshake,
      title: t('internationalPage.services.items.prospecting.title'),
      description: t('internationalPage.services.items.prospecting.desc')
    },
    {
      icon: BarChart3,
      title: t('internationalPage.services.items.intelligence.title'),
      description: t('internationalPage.services.items.intelligence.desc')
    },
    {
      icon: FileCheck,
      title: t('internationalPage.services.items.negotiation.title'),
      description: t('internationalPage.services.items.negotiation.desc')
    },
    {
      icon: Package,
      title: t('internationalPage.services.items.logistics.title'),
      description: t('internationalPage.services.items.logistics.desc')
    }
  ];

  const regions = [
    {
      id: "americas",
      name: t('internationalPage.regions.items.americas.name'),
      description: t('internationalPage.regions.items.americas.desc'),
      color: "emerald",
      icon: MapPin
    },
    {
      id: "europe",
      name: t('internationalPage.regions.items.europe.name'),
      description: t('internationalPage.regions.items.europe.desc'),
      color: "blue",
      icon: MapPin
    },
    {
      id: "asia",
      name: t('internationalPage.regions.items.asia.name'),
      description: t('internationalPage.regions.items.asia.desc'),
      color: "amber",
      icon: MapPin
    },
    {
      id: "africa",
      name: t('internationalPage.regions.items.africa.name'),
      description: t('internationalPage.regions.items.africa.desc'),
      color: "orange",
      icon: MapPin
    }
  ];

  const stats = [
    { value: "15+", label: t('internationalPage.stats.years'), icon: Clock },
    { value: "40+", label: t('internationalPage.stats.countries'), icon: Globe },
    { value: "300+", label: t('internationalPage.stats.exports'), icon: Package },
    { value: "98%", label: t('internationalPage.stats.satisfaction'), icon: CheckCircle }
  ];

  const process = [
    {
      step: "01",
      title: t('internationalPage.process.steps.diagnosis.title'),
      description: t('internationalPage.process.steps.diagnosis.desc')
    },
    {
      step: "02",
      title: t('internationalPage.process.steps.strategy.title'),
      description: t('internationalPage.process.steps.strategy.desc')
    },
    {
      step: "03",
      title: t('internationalPage.process.steps.prospecting.title'),
      description: t('internationalPage.process.steps.prospecting.desc')
    },
    {
      step: "04",
      title: t('internationalPage.process.steps.negotiation.title'),
      description: t('internationalPage.process.steps.negotiation.desc')
    }
  ];

  const segments = [
    {
      name: t('internationalPage.segments.items.food.name'),
      description: t('internationalPage.segments.items.food.desc'),
      icon: Package
    },
    {
      name: t('internationalPage.segments.items.manufactured.name'),
      description: t('internationalPage.segments.items.manufactured.desc'),
      icon: Building2
    },
    {
      name: t('internationalPage.segments.items.chemicals.name'),
      description: t('internationalPage.segments.items.chemicals.desc'),
      icon: ShieldCheck
    },
    {
      name: t('internationalPage.segments.items.textiles.name'),
      description: t('internationalPage.segments.items.textiles.desc'),
      icon: Package
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Representação Internacional"
        description="Expandimos sua presença global com nossa rede de parceiros e conhecimento em mercados internacionais."
      />
      <Header />

      {/* Hero Section */}
      {/* Hero Section - Standardized */}
      {/* Hero Section - Standardized */}
      <section className="relative min-h-[500px] pt-40 pb-16 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/representation-hero.jpg')" }}
        >
          {/* Standardized Dark Blue Map Overlay */}
          <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-cyan-900/70 to-sky-900/80"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Globe className="mr-2 h-4 w-4 text-cyan-300" />
              <span className="text-white font-medium text-sm">{t('internationalPage.hero.badge')}</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl animate-fade-in-up leading-tight pb-2">
              {t('internationalPage.hero.title')}
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in-up font-light" style={{ animationDelay: "0.2s" }}>
              {t('internationalPage.hero.subtitle')} <span className="font-bold text-cyan-300">{t('internationalPage.hero.subtitleHighlight')}</span>. {t('internationalPage.hero.desc')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white rounded-full text-lg px-8 py-6 shadow-lg shadow-sky-500/20 border-0 transition-all duration-300 transform hover:-translate-y-1">
                <a href="#contact" className="flex items-center">
                  {t('internationalPage.hero.cta')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 rounded-full text-lg px-8 py-6">
                <Link to="/contato">{t('internationalPage.hero.schedule')}</Link>
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
                <div className="text-4xl font-bold bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent mb-2">
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
              {t('internationalPage.benefits.badge')}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 pb-2 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
              {t('internationalPage.benefits.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('internationalPage.benefits.subtitle')}
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
              {t('internationalPage.services.badge')}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 pb-2 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
              {t('internationalPage.services.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('internationalPage.services.subtitle')}
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
              {t('internationalPage.regions.badge')}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 pb-2 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
              {t('internationalPage.regions.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('internationalPage.regions.subtitle')}
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

      {/* Segments Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Building2 className="mr-2 h-4 w-4" />
              {t('internationalPage.segments.badge')}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 pb-2 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
              {t('internationalPage.segments.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('internationalPage.segments.subtitle')}
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
              {t('internationalPage.process.badge')}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 pb-2 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
              {t('internationalPage.process.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('internationalPage.process.subtitle')}
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
            {t('internationalPage.cta.title')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t('internationalPage.cta.desc')}
          </p>
          <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 group border-0">
            <a href="#contact">{t('internationalPage.cta.button')}</a>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm
        title={t('internationalPage.contact.title')}
        subtitle={t('internationalPage.contact.subtitle')}
      />

      <Footer />
    </div>
  );
};

export default RepresentacaoInternacional;
