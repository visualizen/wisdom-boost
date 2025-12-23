import { useState, useEffect } from "react";
import { FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FloatingActionMenu = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosed, setIsClosed] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isClosed) return;

        // Timer: show after 60 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 60000);

        // Scroll: show after 15% of page
        const handleScroll = () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            if (scrollPercent >= 15) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isClosed]);

    const handleClose = () => {
        setIsClosed(true);
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in-up">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-full p-2 flex items-center gap-2 pr-2">

                {/* Orçamento - Primary Action */}
                <Button
                    onClick={() => navigate('/contato')}
                    className="rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-lg shadow-blue-500/25 px-8 py-4 h-auto"
                >
                    <FileText size={18} className="mr-2" />
                    <span className="hidden sm:inline">Solicitar Consultoria</span>
                    <span className="sm:hidden">Consultoria</span>
                </Button>

                <div className="w-px h-8 bg-white/20 mx-1" />

                {/* Close */}
                <button
                    onClick={handleClose}
                    className="p-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors rounded-full"
                    aria-label="Fechar"
                >
                    <X size={16} />
                </button>
            </div>
        </div>
    );
};

export default FloatingActionMenu;
