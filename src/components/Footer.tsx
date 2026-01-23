import { Facebook, Instagram, Linkedin, MapPin, Mail } from "lucide-react";
import wisdomLogo from "@/assets/wisdom-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="mb-6">
              <img src={wisdomLogo} alt="Wisdom Trading" className="h-16 w-auto brightness-0 invert" />
            </div>
            <p className="text-background/70 leading-relaxed">
              {t('footer.aboutText')}
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/wisdomcomex" target="_blank" rel="noopener noreferrer" className="bg-background/10 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/wisdom.trading_/" target="_blank" rel="noopener noreferrer" className="bg-background/10 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/wisdomcomex/" target="_blank" rel="noopener noreferrer" className="bg-background/10 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              {t('header.contact')}
            </h4>
            <div className="space-y-4 text-background/70">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 flex-shrink-0 text-primary" size={18} />
                <p>
                  Rua Joinville, 304, Sala 302<br />
                  Edifício Athon - Centro<br />
                  88301-410 - Itajaí, SC
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="flex-shrink-0 text-primary" size={18} />
                <a href="mailto:contato@wisdomtrading.com.br" className="hover:text-white transition-colors">
                  contato@wisdomtrading.com.br
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-3 text-background/70">
              <li><a href="/quem-somos" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span>{t('header.about')}</a></li>
              <li><a href="/servicos" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span>{t('header.services')}</a></li>
              <li><a href="/blog" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span>{t('header.blog')}</a></li>
              <li><a href="/contato" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span>{t('header.contact')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              {t('footer.legal')}
            </h4>
            <ul className="space-y-3 text-background/70">
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.privacy')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.terms')}</a></li>
            </ul>
            <div className="mt-6 pt-6 border-t border-background/10">
              <p className="text-sm text-background/50">
                CNPJ: 30.310.187/0001-90
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/50 text-sm">
          <p>{t('footer.copyright').replace('2024', new Date().getFullYear().toString())}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
