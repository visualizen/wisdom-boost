import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Package, Users, FileText, Shield, TrendingUp, ClipboardCheck, CheckCircle, Sparkles, Briefcase } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import importExportImage from "@/assets/services/import-export.jpg";
import internationalRepImage from "@/assets/services/international-representation.jpg";
import fiscalConsultingImage from "@/assets/services/fiscal-consulting.jpg";
import logisticsManagementImage from "@/assets/services/logistics-management.jpg";
import tariffStudiesImage from "@/assets/services/tariff-studies.jpg";
import viabilityAnalysisImage from "@/assets/services/viability-analysis.jpg";
import heroImage from "@/assets/quem-somos-hero.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEO } from "@/components/SEO";

const Servicos = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Package,
      title: t('servicesPage.list.items.import.title'),
      description: t('servicesPage.list.items.import.desc'),
      details: t('servicesPage.list.items.import.details'),
      image: importExportImage,
      benefits: t('servicesPage.list.items.import.benefits') as unknown as string[]
    },
    {
      icon: Users,
      title: t('servicesPage.list.items.representation.title'),
      description: t('servicesPage.list.items.representation.desc'),
      details: t('servicesPage.list.items.representation.details'),
      image: internationalRepImage,
      benefits: t('servicesPage.list.items.representation.benefits') as unknown as string[]
    },
    {
      icon: FileText,
      title: t('servicesPage.list.items.consulting.title'),
      description: t('servicesPage.list.items.consulting.desc'),
      details: t('servicesPage.list.items.consulting.details'),
      image: fiscalConsultingImage,
      benefits: t('servicesPage.list.items.consulting.benefits') as unknown as string[]
    },
    {
      icon: Shield,
      title: t('servicesPage.list.items.logistics.title'),
      description: t('servicesPage.list.items.logistics.desc'),
      details: t('servicesPage.list.items.logistics.details'),
      image: logisticsManagementImage,
      benefits: t('servicesPage.list.items.logistics.benefits') as unknown as string[]
    },
    {
      icon: TrendingUp,
      title: t('servicesPage.list.items.ncm.title'),
      description: t('servicesPage.list.items.ncm.desc'),
      details: t('servicesPage.list.items.ncm.details'),
      image: tariffStudiesImage,
      benefits: t('servicesPage.list.items.ncm.benefits') as unknown as string[]
    },
    {
      icon: ClipboardCheck,
      title: t('servicesPage.list.items.viability.title'),
      description: t('servicesPage.list.items.viability.desc'),
      details: t('servicesPage.list.items.viability.details'),
      image: viabilityAnalysisImage,
      benefits: t('servicesPage.list.items.viability.benefits') as unknown as string[]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Serviços"
        description="Oferecemos soluções completas em importação, exportação, logística internacional e consultoria fiscal para otimizar seus negócios globais."
      />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[500px] pt-40 pb-16 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {/* Standardized Dark Blue Map Overlay */}
          <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-cyan-900/70 to-sky-900/80"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Briefcase className="w-4 h-4 text-cyan-300" />
              <span className="text-white font-semibold text-sm">{t('servicesPage.hero.badge')}</span>
            </div>
            {/* Added pb-2 to prevent font clipping on descenders */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-white drop-shadow-2xl pb-2">
              {t('servicesPage.hero.title')}
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 font-light">
              {t('servicesPage.hero.subtitle')} <span className="font-bold text-cyan-300">{t('servicesPage.hero.subtitleHighlight')}</span> {t('servicesPage.hero.desc')}
            </p>
          </div>
        </div>
        {/* Removed bottom fade gradient */}
      </section>

      {/* Services Detail Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative">
                  <div className={`grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image */}
                    <div className={`relative group ${!isEven ? 'lg:order-2' : ''}`}>
                      <div className="absolute -inset-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                      <div className="relative rounded-3xl overflow-hidden border-4 border-blue-500/30 shadow-2xl">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="relative w-full h-auto aspect-video object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={!isEven ? 'lg:order-1' : ''}>
                      <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-blue-500/20">
                        <service.icon className="w-5 h-5 text-primary" />
                        <span className="text-primary font-semibold">{t('servicesPage.list.badge')}</span>
                      </div>

                      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
                        {service.title}
                      </h2>

                      <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl font-bold mb-4 text-foreground">{t('servicesPage.list.detailsTitle')}</h3>
                          <p className="text-muted-foreground leading-relaxed text-lg">{service.details}</p>
                        </div>

                        <div>
                          <h3 className="text-2xl font-bold mb-4 text-foreground">{t('servicesPage.list.benefitsTitle')}</h3>
                          <ul className="space-y-3">
                            {service.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-start gap-3">
                                <CheckCircle className="text-primary shrink-0 mt-1" size={24} />
                                <span className="text-muted-foreground text-lg">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-blue-500/5 via-background to-cyan-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-blue-500/20">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">{t('servicesPage.faq.badge')}</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent pb-2">
              {t('servicesPage.faq.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('servicesPage.faq.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              <AccordionItem value="item-1" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl px-8 border-2 border-blue-500/20 group-hover:border-cyan-500/40 transition-all duration-500">
                  <AccordionTrigger className="text-left font-bold text-lg py-6 hover:text-primary transition-colors">
                    {t('servicesPage.faq.items.q1.q')}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {t('servicesPage.faq.items.q1.a')}
                  </AccordionContent>
                </div>
              </AccordionItem>

              <AccordionItem value="item-2" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl px-8 border-2 border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-500">
                  <AccordionTrigger className="text-left font-bold text-lg py-6 hover:text-primary transition-colors">
                    {t('servicesPage.faq.items.q2.q')}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {t('servicesPage.faq.items.q2.a')}
                  </AccordionContent>
                </div>
              </AccordionItem>

              <AccordionItem value="item-3" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-sky-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl px-8 border-2 border-blue-500/20 group-hover:border-sky-500/40 transition-all duration-500">
                  <AccordionTrigger className="text-left font-bold text-lg py-6 hover:text-primary transition-colors">
                    {t('servicesPage.faq.items.q3.q')}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {t('servicesPage.faq.items.q3.a')}
                  </AccordionContent>
                </div>
              </AccordionItem>

              <AccordionItem value="item-4" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-sky-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl px-8 border-2 border-blue-500/20 group-hover:border-cyan-500/40 transition-all duration-500">
                  <AccordionTrigger className="text-left font-bold text-lg py-6 hover:text-primary transition-colors">
                    {t('servicesPage.faq.items.q4.q')}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {t('servicesPage.faq.items.q4.a')}
                  </AccordionContent>
                </div>
              </AccordionItem>

              <AccordionItem value="item-5" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl px-8 border-2 border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-500">
                  <AccordionTrigger className="text-left font-bold text-lg py-6 hover:text-primary transition-colors">
                    {t('servicesPage.faq.items.q5.q')}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {t('servicesPage.faq.items.q5.a')}
                  </AccordionContent>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <ContactForm
        showServiceSelect={true}
        title={t('servicesPage.contact.title')}
        subtitle={t('servicesPage.contact.subtitle')}
      />

      <Footer />
    </div>
  );
};

export default Servicos;
