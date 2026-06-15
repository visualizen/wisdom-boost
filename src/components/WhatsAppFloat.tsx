import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  useEffect(() => {
    if (isAdminRoute) return;

    setIsVisible(false);

    const isMobile = window.matchMedia("(max-width: 639px)").matches;

    if (isMobile) {
      const handleScroll = () => {
        if (window.scrollY > window.innerHeight * 0.75) {
          setIsVisible(true);
          window.removeEventListener("scroll", handleScroll);
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isAdminRoute, location.pathname]);

  const handleClick = () => {
    const whatsappUrl = "https://wa.me/5547996256869";
    window.open(whatsappUrl, "_blank");
  };

  if (isAdminRoute) return null;

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-4 right-4 z-50 group transition-all duration-500 sm:bottom-6 sm:right-6 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      aria-label="Fale conosco no WhatsApp"
    >
      {/* Glow effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse" />

      {/* Botão principal */}
      <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full p-3 shadow-2xl transition-all duration-300 group-hover:scale-110 sm:p-4">
        <MessageCircle className="h-7 w-7 animate-pulse sm:h-8 sm:w-8" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 hidden -translate-y-1/2 whitespace-nowrap opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100 sm:block">
        <div className="bg-background border-2 border-green-500/30 text-foreground px-4 py-2 rounded-lg shadow-lg">
          <span className="font-semibold">Fale conosco!</span>
        </div>
      </div>

      {/* Indicador de notificação */}
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-background animate-ping sm:h-4 sm:w-4" />
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-background sm:h-4 sm:w-4" />
    </button>
  );
};

export default WhatsAppFloat;
