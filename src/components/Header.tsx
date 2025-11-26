import { useState, useEffect } from "react";
import { Menu, X, TrendingUp } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import wisdomLogo from "@/assets/wisdom-logo.png";
interface CurrencyRate {
  bid: string;
  name: string;
}
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [usdRate, setUsdRate] = useState<CurrencyRate | null>(null);
  const [eurRate, setEurRate] = useState<CurrencyRate | null>(null);
  const [gbpRate, setGbpRate] = useState<CurrencyRate | null>(null);
  const location = useLocation();
  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL');
        const data = await response.json();
        setUsdRate({
          bid: data.USDBRL.bid,
          name: 'USD'
        });
        setEurRate({
          bid: data.EURBRL.bid,
          name: 'EUR'
        });
        setGbpRate({
          bid: data.GBPBRL.bid,
          name: 'GBP'
        });
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
    label: "Página Inicial",
    href: "/",
    isRoute: true
  }, {
    label: "Quem Somos",
    href: "/quem-somos",
    isRoute: true
  }, {
    label: "Serviços",
    href: "/servicos",
    isRoute: true
  }, {
    label: "Representação Comercial",
    href: "/representacao-comercial",
    isRoute: true
  }, {
    label: "Blog",
    href: "/blog",
    isRoute: true
  }, {
    label: "Contato",
    href: "/contato",
    isRoute: true
  }];
  return <header className="fixed top-0 w-full z-50 animate-fade-in">
      {/* Barra de Cotações */}
      <div className="bg-gradient-primary text-white py-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-4 sm:gap-6 text-sm">
          <TrendingUp size={16} className="hidden sm:inline" />
          {usdRate && <div className="flex items-center gap-2">
              <span className="font-semibold">USD:</span>
              <span>R$ {parseFloat(usdRate.bid).toFixed(2)}</span>
            </div>}
          <div className="hidden sm:inline text-white/50">|</div>
          {eurRate && <div className="flex items-center gap-2">
              <span className="font-semibold">EUR:</span>
              <span>R$ {parseFloat(eurRate.bid).toFixed(2)}</span>
            </div>}
          <div className="hidden sm:inline text-white/50">|</div>
          {gbpRate && <div className="flex items-center gap-2">
              <span className="font-semibold">GBP:</span>
              <span>R$ {parseFloat(gbpRate.bid).toFixed(2)}</span>
            </div>}
        </div>
      </div>
      
      {/* Header Principal */}
      <div className="bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src={wisdomLogo} alt="Wisdom Trading" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => item.isRoute ? <Link key={item.label} to={item.href} className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
                  {item.label}
                </Link> : <a key={item.label} href={location.pathname === "/" ? item.href : `/${item.href}`} className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
                  {item.label}
                </a>)}
            <Link to="/contato">
              <Button variant="default" size="lg" className="bg-gradient-primary">
                Fale Conosco
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
                Fale Conosco
              </Button>
            </Link>
          </nav>}
        </div>
      </div>
    </header>;
};
export default Header;