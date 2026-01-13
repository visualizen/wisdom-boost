import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Clock, Globe, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEO } from "@/components/SEO";

const Contato = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contato"
        description="Entre em contato com a Wisdom Trading. Estamos prontos para atender suas necessidades em comércio exterior."
      />
      <Header />

      {/* Hero Section - Standardized */}
      {/* Hero Section - Standardized */}
      <section className="relative min-h-[500px] pt-40 pb-16 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/contact-hero.jpg')" }}
        >
          {/* Standardized Dark Blue Map Overlay */}
          <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-cyan-900/70 to-sky-900/80"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl animate-fade-in-up pb-2">
              {t('contactPage.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 animate-fade-in-up font-light" style={{ animationDelay: "0.2s" }}>
              {t('contactPage.hero.subtitle')} <span className="font-bold text-cyan-300">{t('contactPage.hero.subtitleHighlight')}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Additional Contact Info */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">{t('contactPage.info.email')}</h3>
              <p className="text-muted-foreground text-sm">contato@wisdomtrading.com.br</p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">{t('contactPage.info.phone')}</h3>
              <p className="text-muted-foreground text-sm">+55 (47) 99625-6869</p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">{t('contactPage.info.location')}</h3>
              <p className="text-muted-foreground text-sm">Rua Joinville, 304, Sala 302</p>
              <p className="text-muted-foreground text-sm">Edifício Athon - Centro</p>
              <p className="text-muted-foreground text-sm">Itajaí - SC, 88301-410</p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">{t('contactPage.info.hours')}</h3>
              <p className="text-muted-foreground text-sm">{t('contactPage.info.hoursValue')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
              {t('contactPage.map.title')}
            </h2>
            <p className="text-muted-foreground">
              {t('contactPage.map.subtitle')}
            </p>
          </div>

          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-lg border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.1568261386766!2d-48.66578052358825!3d-26.90647899264878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8ca1cd962779b%3A0xc3c9451457890e0c!2sR.%20Joinville%2C%20304%20-%20Centro%2C%20Itaja%C3%AD%20-%20SC%2C%2088301-410!5e0!3m2!1spt-BR!2sbr!4v1711234567890!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Wisdom Trading"
            />
          </div>
        </div>
      </section>

      <ContactForm />

      <Footer />
    </div>
  );
};

export default Contato;
