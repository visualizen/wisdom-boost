
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Clock, TrendingUp, Search, PenTool, MessageCircle } from "lucide-react";

interface AIGeneratorModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const WHATSAPP_NUMBER = "5547984028961";
const WHATSAPP_MESSAGE = encodeURIComponent(
    "Olá! Tenho interesse em ativar a funcionalidade de Geração de Artigos com IA no meu painel administrativo. Gostaria de saber mais sobre como funciona e os valores."
);

const benefits = [
    {
        icon: Clock,
        title: "Economize Horas",
        description: "Gere rascunhos completos de artigos em menos de 1 minuto, prontos para revisão e publicação.",
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: Search,
        title: "SEO Otimizado",
        description: "Artigos estruturados com palavras-chave, meta descriptions e headings otimizados para Google.",
        color: "from-emerald-500 to-teal-500",
    },
    {
        icon: PenTool,
        title: "Múltiplos Estilos",
        description: "Escolha entre informativo, persuasivo, técnico ou descontraído. A IA adapta o tom para seu público.",
        color: "from-violet-500 to-purple-500",
    },
    {
        icon: Zap,
        title: "Tecnologia de Ponta",
        description: "Powered by GPT-4o e Claude — os modelos de IA mais avançados do mercado.",
        color: "from-amber-500 to-orange-500",
    },
    {
        icon: TrendingUp,
        title: "Mais Conteúdo, Mais Tráfego",
        description: "Publique com consistência e atraia mais visitantes orgânicos para o seu site.",
        color: "from-pink-500 to-rose-500",
    },
];

const AIGeneratorModal = ({ open, onOpenChange }: AIGeneratorModalProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[580px] max-h-[90vh] overflow-y-auto p-0 border-0 bg-transparent shadow-none">
                <div className="rounded-2xl overflow-hidden">
                    {/* Hero Header */}
                    <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-6 pt-8 pb-10 text-center">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.1),transparent_40%)]" />

                        <div className="relative z-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-4 mx-auto">
                                <Sparkles className="w-8 h-8 text-white" />
                            </div>
                            <DialogHeader className="space-y-2">
                                <DialogTitle className="text-2xl font-bold text-white">
                                    Geração de Artigos com IA
                                </DialogTitle>
                            </DialogHeader>
                            <p className="text-white/85 text-sm mt-2 max-w-sm mx-auto leading-relaxed">
                                Crie artigos profissionais, otimizados para SEO, em segundos.
                                Direto do seu painel administrativo.
                            </p>
                        </div>
                    </div>

                    {/* Benefits */}
                    <div className="bg-white px-6 py-6 space-y-3">
                        {benefits.map((benefit, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                            >
                                <div className={`shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                                    <benefit.icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 text-sm">{benefit.title}</h4>
                                    <p className="text-slate-500 text-xs leading-relaxed mt-0.5">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Footer */}
                    <div className="bg-slate-50 border-t border-slate-100 px-6 py-5">
                        <p className="text-center text-slate-600 text-xs mb-4 leading-relaxed">
                            Essa é uma função exclusiva para projetos e sistemas personalizados.
                            <br />
                            Para ativar essa funcionalidade, entre em contato com o desenvolvedor.
                        </p>
                        <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <Button className="w-full h-12 gap-2 rounded-xl text-base font-semibold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg shadow-green-500/25 border-0 transition-all hover:shadow-xl hover:shadow-green-500/30 hover:scale-[1.02]">
                                <MessageCircle className="w-5 h-5" />
                                Ativar Funcionalidade
                            </Button>
                        </a>
                        <p className="text-center text-slate-400 text-[10px] mt-3">
                            Desenvolvido por Visualizen • Sistemas Inteligentes
                        </p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AIGeneratorModal;
