import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Briefcase, Mail, ArrowRight } from "lucide-react";
import heroImage from "@/assets/quem-somos-team.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const CAREERS_EMAIL = "trabalheconosco@wisdomtrading.com.br";

const TrabalheConosco = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={t("careersPage.seoTitle")}
        description={t("careersPage.seoDescription")}
      />
      <Header />

      <section className="relative min-h-[520px] pt-40 pb-16 flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-blue-950/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-slate-900/80 to-blue-900/75" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Briefcase className="w-4 h-4 text-cyan-300" />
              <span className="text-white font-semibold text-sm">{t("careersPage.heroBadge")}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl leading-tight pb-2">
              {t("careersPage.heroTitle")}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
              {t("careersPage.heroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 pb-2 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
              {t("careersPage.introTitle")}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              {t("careersPage.introText")}
            </p>
            <p className="text-muted-foreground mb-6">
              {t("careersPage.emailLabel")}{" "}
              <a href={`mailto:${CAREERS_EMAIL}`} className="font-semibold text-primary hover:underline">
                {CAREERS_EMAIL}
              </a>
            </p>
            <Button asChild size="lg" className="bg-gradient-primary text-white px-8 py-6 text-base shadow-lg">
              <a href={`mailto:${CAREERS_EMAIL}?subject=Curriculo%20-%20Trabalhe%20Conosco`}>
                {t("careersPage.button")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrabalheConosco;
