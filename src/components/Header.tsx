import { useState, useEffect } from "react";
import { Menu, X, TrendingUp, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import wisdomLogo from "@/assets/wisdom-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CurrencyRate {
  bid: string;
  name: string;
  pctChange?: string;
}
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [usdRate, setUsdRate] = useState<CurrencyRate | null>(null);
  const [eurRate, setEurRate] = useState<CurrencyRate | null>(null);
  const [gbpRate, setGbpRate] = useState<CurrencyRate | null>(null);
  const [cnyRate, setCnyRate] = useState<CurrencyRate | null>(null);
  const [jpyRate, setJpyRate] = useState<CurrencyRate | null>(null);
  const [cadRate, setCadRate] = useState<CurrencyRate | null>(null);
  const [audRate, setAudRate] = useState<CurrencyRate | null>(null);
  const [chfRate, setChfRate] = useState<CurrencyRate | null>(null);
  const [btcRate, setBtcRate] = useState<CurrencyRate | null>(null);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,CNY-BRL,JPY-BRL,CAD-BRL,AUD-BRL,CHF-BRL,BTC-BRL');
        const data = await response.json();
        setUsdRate({ bid: data.USDBRL.bid, name: 'USD', pctChange: data.USDBRL.pctChange });
        setEurRate({ bid: data.EURBRL.bid, name: 'EUR', pctChange: data.EURBRL.pctChange });
        setGbpRate({ bid: data.GBPBRL.bid, name: 'GBP', pctChange: data.GBPBRL.pctChange });
        setCnyRate({ bid: data.CNYBRL.bid, name: 'CNY', pctChange: data.CNYBRL.pctChange });
        setJpyRate({ bid: data.JPYBRL.bid, name: 'JPY', pctChange: data.JPYBRL.pctChange });
        setCadRate({ bid: data.CADBRL.bid, name: 'CAD', pctChange: data.CADBRL.pctChange });
        setAudRate({ bid: data.AUDBRL.bid, name: 'AUD', pctChange: data.AUDBRL.pctChange });
        setChfRate({ bid: data.CHFBRL.bid, name: 'CHF', pctChange: data.CHFBRL.pctChange });
        setBtcRate({ bid: data.BTCBRL.bid, name: 'BTC', pctChange: data.BTCBRL.pctChange });
      } catch (error) {
        console.error('Erro ao buscar cotações:', error);
      }
    };
    fetchRates();
    // Atualiza a cada 5 minutos
    const interval = setInterval(fetchRates, 300000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [{
    label: t('header.home'),
    href: "/",
    isRoute: true
  }, {
    label: t('header.about'),
    href: "/quem-somos",
    isRoute: true
  }, {
    label: t('header.services'),
    href: "/servicos",
    isRoute: true
  }, {
    label: t('header.representation'),
    href: "/representacao-comercial",
    isRoute: true
  }, {
    label: t('header.export'),
    href: "/representacao-internacional",
    isRoute: true
  }, {
    label: t('header.blog'),
    href: "/blog",
    isRoute: true
  }, {
    label: t('header.contact'),
    href: "/contato",
    isRoute: true
  }];

  return <header className="fixed top-0 w-full z-50 animate-fade-in">
    {/* Barra de Cotações */}
    <div className="bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#0f172a] text-white border-b border-white/10 overflow-hidden relative h-10 flex items-center">
      <div className="flex animate-scroll-infinite whitespace-nowrap hover:pause">
        {/* Primeira cópia da lista */}
        <div className="flex items-center gap-8 px-4">
          <TrendingUp size={16} className="text-blue-400" />

          {[usdRate, eurRate, gbpRate, cnyRate, jpyRate, cadRate, audRate, chfRate, btcRate].map((rate, index) => (
            rate && (
              <div key={`${rate.name}-${index}`} className="flex items-center gap-2 text-sm">
                <span className="font-bold text-blue-200">{rate.name}:</span>
                <span className="text-gray-100">R$ {parseFloat(rate.bid).toFixed(index === 8 ? 0 : 2)}</span>
                <span className={`${parseFloat(rate.pctChange || "0") >= 0 ? "text-green-400" : "text-red-400"} text-xs ml-1`}>
                  {parseFloat(rate.pctChange || "0") >= 0 ? "▲" : "▼"} {rate.pctChange}%
                </span>
                <div className="h-3 w-px bg-white/20 ml-6"></div>
              </div>
            )
          ))}
        </div>

        {/* Segunda cópia da lista para loop infinito */}
        <div className="flex items-center gap-8 px-4">
          <TrendingUp size={16} className="text-blue-400" />

          {[usdRate, eurRate, gbpRate, cnyRate, jpyRate, cadRate, audRate, chfRate, btcRate].map((rate, index) => (
            rate && (
              <div key={`copy-${rate.name}-${index}`} className="flex items-center gap-2 text-sm">
                <span className="font-bold text-blue-200">{rate.name}:</span>
                <span className="text-gray-100">R$ {parseFloat(rate.bid).toFixed(index === 8 ? 0 : 2)}</span>
                <span className={`${parseFloat(rate.pctChange || "0") >= 0 ? "text-green-400" : "text-red-400"} text-xs ml-1`}>
                  {parseFloat(rate.pctChange || "0") >= 0 ? "▲" : "▼"} {rate.pctChange}%
                </span>
                <div className="h-3 w-px bg-white/20 ml-6"></div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>

    {/* Header Principal */}
    <div className="bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src={wisdomLogo} alt="Wisdom Trading" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map(item => item.isRoute ? <Link key={item.label} to={item.href} className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm lg:text-base">
              {item.label}
            </Link> : <a key={item.label} href={location.pathname === "/" ? item.href : `/${item.href}`} className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm lg:text-base">
              {item.label}
            </a>)}

            <div className="pl-4 border-l border-border flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full w-9 h-9">
                    <Globe size={18} />
                    <span className="sr-only">Mudar idioma</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setLanguage('pt')} className={language === 'pt' ? 'bg-accent' : ''}>
                    🇧🇷 Português
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage('en')} className={language === 'en' ? 'bg-accent' : ''}>
                    🇺🇸 English
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage('es')} className={language === 'es' ? 'bg-accent' : ''}>
                    🇪🇸 Español
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/contato">
                <Button variant="default" size="lg" className="bg-gradient-primary rounded-full px-6 py-5 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                  {t('header.cta')}
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full w-9 h-9">
                  <Globe size={18} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('pt')} className={language === 'pt' ? 'bg-accent' : ''}>
                  🇧🇷 PT
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')} className={language === 'en' ? 'bg-accent' : ''}>
                  🇺🇸 EN
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('es')} className={language === 'es' ? 'bg-accent' : ''}>
                  🇪🇸 ES
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden py-4 animate-fade-in-up">
          {navItems.map(item => item.isRoute ? <Link key={item.label} to={item.href} className="block py-3 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
            {item.label}
          </Link> : <a key={item.label} href={location.pathname === "/" ? item.href : `/${item.href}`} className="block py-3 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
            {item.label}
          </a>)}
          <Link to="/contato">
            <Button variant="default" className="w-full mt-4 bg-gradient-primary" onClick={() => setIsMenuOpen(false)}>
              {t('header.cta')}
            </Button>
          </Link>
        </nav>}
      </div>
    </div>
  </header>;
};
export default Header;