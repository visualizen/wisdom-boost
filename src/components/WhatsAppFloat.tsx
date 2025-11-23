import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostrar o botão após um pequeno delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const phoneNumber = "5547988776655";
    const message = "Olá! Gostaria de saber mais sobre os serviços da Wisdom Trading.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 group transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      aria-label="Fale conosco no WhatsApp"
    >
      {/* Glow effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse" />
      
      {/* Botão principal */}
      <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300 group-hover:scale-110">
        <MessageCircle size={32} className="animate-pulse" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-background border-2 border-green-500/30 text-foreground px-4 py-2 rounded-lg shadow-lg">
          <span className="font-semibold">Fale conosco!</span>
        </div>
      </div>

      {/* Indicador de notificação */}
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-background animate-ping" />
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-background" />
    </button>
  );
};

export default WhatsAppFloat;
