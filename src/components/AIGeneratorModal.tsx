
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { emailService } from "@/services/emailService";
import { toast } from "sonner";
import { Sparkles, MessageSquare, AlertTriangle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface AIGeneratorModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const AIGeneratorModal = ({ open, onOpenChange }: AIGeneratorModalProps) => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<"idle" | "success">("idle");
    const [formData, setFormData] = useState({
        titulo: "",
        tamanho: "medio",
        estilo: "informativo",
        prompt: "",
        palavrasChave: ""
    });

    const handleGenerate = async () => {
        setLoading(true);
        try {
            await emailService.sendAIRequestNotification(formData);
            setResult("success");
            toast.success("Solicitação enviada com sucesso!");
        } catch (error) {
            toast.error("Erro ao processar solicitação");
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setResult("idle");
        setFormData({
            titulo: "",
            tamanho: "medio",
            estilo: "informativo",
            prompt: "",
            palavrasChave: ""
        });
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-primary">
                        <Sparkles className="w-5 h-5" />
                        Gerador de Artigos com IA
                    </DialogTitle>
                    <DialogDescription>
                        Configure os detalhes para que nossa IA gere o rascunho ideal para você.
                    </DialogDescription>
                </DialogHeader>

                {result === "success" ? (
                    <div className="space-y-6 py-4">
                        <Alert className="bg-blue-50 border-blue-200">
                            <Sparkles className="h-5 w-5 text-blue-600" />
                            <AlertTitle className="text-blue-800 font-semibold mb-2">Essa funcionalidade está disponível!<br />Entre em contato para ativar.</AlertTitle>
                            <AlertDescription className="text-blue-700">
                                <p className="mb-4">
                                    Essa funcionalidade de Geração de Posts com IA ainda não está ativa, mas traria grandes benefícios:
                                </p>
                                <ul className="list-disc pl-5 mb-4 space-y-1 text-sm">
                                    <li><strong>Economia de Tempo:</strong> Crie rascunhos completos em segundos.</li>
                                    <li><strong>Qualidade Profissional:</strong> Textos bem estruturados e persuasivos.</li>
                                    <li><strong>Otimização SEO:</strong> Conteúdo focado em rankear no Google.</li>
                                </ul>
                                <p className="font-medium">
                                    Para implementar essa tecnologia no seu projeto, entre em contato:
                                </p>
                                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                                    <a
                                        href="https://wa.me/+5547984028961"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors font-medium text-sm"
                                    >
                                        <MessageSquare className="w-4 h-4" />
                                        Falar com João Vitor no WhatsApp
                                    </a>
                                </div>
                            </AlertDescription>
                        </Alert>
                        <DialogFooter>
                            <Button onClick={handleReset}>Fechar</Button>
                        </DialogFooter>
                    </div>
                ) : (
                    <div className="space-y-4 py-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="titulo">Título Sugerido</Label>
                                <Input
                                    id="titulo"
                                    placeholder="Ex: O futuro da logística..."
                                    value={formData.titulo}
                                    onChange={(e) => setFormData(prev => ({ ...prev, titulo: e.target.value }))}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="tamanho">Tamanho Aproximado</Label>
                                <Select
                                    value={formData.tamanho}
                                    onValueChange={(val) => setFormData(prev => ({ ...prev, tamanho: val }))}
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="curto">Curto (~500 palavras)</SelectItem>
                                        <SelectItem value="medio">Médio (~1000 palavras)</SelectItem>
                                        <SelectItem value="longo">Longo (~2000 palavras)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="estilo">Estilo de Escrita</Label>
                                <Select
                                    value={formData.estilo}
                                    onValueChange={(val) => setFormData(prev => ({ ...prev, estilo: val }))}
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="informativo">Informativo / Objetivo</SelectItem>
                                        <SelectItem value="persuasivo">Persuasivo / Vendas</SelectItem>
                                        <SelectItem value="tecnico">Técnico / Especializado</SelectItem>
                                        <SelectItem value="descontraido">Descontraído / Blog</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="keywords">Palavras-chave (SEO)</Label>
                                <Input
                                    id="keywords"
                                    placeholder="logística, importação, china"
                                    value={formData.palavrasChave}
                                    onChange={(e) => setFormData(prev => ({ ...prev, palavrasChave: e.target.value }))}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="prompt">Instruções Adicionais (Prompt)</Label>
                            <Textarea
                                id="prompt"
                                placeholder="Descreva o que você gostaria que a IA focasse, público alvo, tom de voz, etc..."
                                className="min-h-[120px]"
                                value={formData.prompt}
                                onChange={(e) => setFormData(prev => ({ ...prev, prompt: e.target.value }))}
                            />
                        </div>

                        <DialogFooter className="gap-2">
                            <Button variant="outline" onClick={() => onOpenChange(false)}>Cancelar</Button>
                            <Button onClick={handleGenerate} disabled={loading} className="gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 border-0">
                                {loading ? "Processando..." : (
                                    <>
                                        <Sparkles className="w-4 h-4" />
                                        Gerar Artigo
                                    </>
                                )}
                            </Button>
                        </DialogFooter>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default AIGeneratorModal;
