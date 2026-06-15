
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Sparkles, Key, Trash2, Eye, EyeOff, Check, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { aiService, AIConfig, AIProvider, ArticleResult } from "@/services/aiService";

interface AIGeneratorModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onArticleGenerated?: (result: ArticleResult) => void;
}

const AIGeneratorModal = ({ open, onOpenChange, onArticleGenerated }: AIGeneratorModalProps) => {
    const [loading, setLoading] = useState(false);
    const [showKey, setShowKey] = useState(false);
    const [keySaved, setKeySaved] = useState(false);

    const [aiConfig, setAiConfig] = useState<AIConfig>({
        provider: 'openai',
        apiKey: '',
        model: 'gpt-4o',
    });

    const [formData, setFormData] = useState({
        titulo: "",
        tamanho: "medio" as 'curto' | 'medio' | 'longo',
        estilo: "informativo",
        prompt: "",
        palavrasChave: ""
    });

    useEffect(() => {
        if (open) {
            const saved = aiService.loadConfig();
            if (saved) {
                setAiConfig(saved);
                setKeySaved(true);
            }
        }
    }, [open]);

    const handleProviderChange = (provider: AIProvider) => {
        setAiConfig(prev => ({
            ...prev,
            provider,
            model: aiService.getDefaultModel(provider),
        }));
        setKeySaved(false);
    };

    const handleSaveKey = () => {
        if (!aiConfig.apiKey.trim()) {
            toast.error("Insira uma chave de API válida");
            return;
        }
        aiService.saveConfig(aiConfig);
        setKeySaved(true);
        toast.success("Chave salva com segurança no navegador");
    };

    const handleRemoveKey = () => {
        aiService.removeConfig();
        setAiConfig(prev => ({ ...prev, apiKey: '' }));
        setKeySaved(false);
        toast.success("Chave removida");
    };

    const handleGenerate = async () => {
        if (!aiConfig.apiKey.trim()) {
            toast.error("Configure sua chave de API antes de gerar");
            return;
        }

        if (!formData.titulo.trim()) {
            toast.error("Insira pelo menos um título sugerido");
            return;
        }

        setLoading(true);
        try {
            // Save config if not saved yet
            if (!keySaved) {
                aiService.saveConfig(aiConfig);
                setKeySaved(true);
            }

            const result = await aiService.generateArticle(aiConfig, formData);

            toast.success("Artigo gerado com sucesso!");

            if (onArticleGenerated) {
                onArticleGenerated(result);
            }

            onOpenChange(false);
        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : "Erro desconhecido";
            toast.error(message);
        } finally {
            setLoading(false);
        }
    };

    const maskKey = (key: string) => {
        if (key.length <= 8) return key;
        return key.slice(0, 6) + '•'.repeat(Math.min(key.length - 10, 20)) + key.slice(-4);
    };

    const models = aiService.getModels(aiConfig.provider);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[650px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-primary">
                        <Sparkles className="w-5 h-5" />
                        Gerador de Artigos com IA
                    </DialogTitle>
                    <DialogDescription>
                        Configure sua chave de API e gere artigos completos com inteligência artificial.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 py-4">
                    {/* API Configuration Section */}
                    <div className="space-y-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                        <div className="flex items-center gap-2 mb-1">
                            <Key className="w-4 h-4 text-slate-600" />
                            <h3 className="font-semibold text-sm text-slate-700">Configuração de API</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Provedor</Label>
                                <Select
                                    value={aiConfig.provider}
                                    onValueChange={(val) => handleProviderChange(val as AIProvider)}
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="openai">OpenAI</SelectItem>
                                        <SelectItem value="anthropic">Anthropic</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label>Modelo</Label>
                                <Select
                                    value={aiConfig.model}
                                    onValueChange={(val) => setAiConfig(prev => ({ ...prev, model: val }))}
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {models.map((m) => (
                                            <SelectItem key={m.id} value={m.id}>{m.label}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Chave da API</Label>
                            <div className="flex gap-2">
                                <div className="relative flex-1">
                                    <Input
                                        type={showKey ? "text" : "password"}
                                        placeholder={aiConfig.provider === 'openai' ? 'sk-...' : 'sk-ant-...'}
                                        value={aiConfig.apiKey}
                                        onChange={(e) => {
                                            setAiConfig(prev => ({ ...prev, apiKey: e.target.value }));
                                            setKeySaved(false);
                                        }}
                                        className="pr-10 font-mono text-sm"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowKey(!showKey)}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                    >
                                        {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                                {keySaved ? (
                                    <Button variant="outline" size="icon" onClick={handleRemoveKey} className="text-red-500 hover:text-red-700 hover:bg-red-50 shrink-0">
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                ) : (
                                    <Button variant="outline" onClick={handleSaveKey} className="gap-1 shrink-0">
                                        <Check className="w-4 h-4" /> Salvar
                                    </Button>
                                )}
                            </div>
                            {keySaved && (
                                <p className="text-xs text-green-600 flex items-center gap-1">
                                    <Check className="w-3 h-3" /> Chave salva no navegador (apenas local)
                                </p>
                            )}
                            <p className="text-xs text-slate-500">
                                Sua chave fica armazenada apenas no seu navegador. Nunca é enviada ao nosso servidor.
                            </p>
                        </div>
                    </div>

                    {/* Article Configuration Section */}
                    <div className="space-y-4">
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
                                    onValueChange={(val) => setFormData(prev => ({ ...prev, tamanho: val as 'curto' | 'medio' | 'longo' }))}
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
                                className="min-h-[100px]"
                                value={formData.prompt}
                                onChange={(e) => setFormData(prev => ({ ...prev, prompt: e.target.value }))}
                            />
                        </div>
                    </div>

                    {loading && (
                        <Alert className="bg-indigo-50 border-indigo-200">
                            <Loader2 className="h-4 w-4 text-indigo-600 animate-spin" />
                            <AlertDescription className="text-indigo-700">
                                Gerando artigo com {aiConfig.provider === 'openai' ? 'OpenAI' : 'Anthropic'} ({aiConfig.model})...
                                Isso pode levar de 15 a 60 segundos.
                            </AlertDescription>
                        </Alert>
                    )}

                    <DialogFooter className="gap-2">
                        <Button variant="outline" onClick={() => onOpenChange(false)} disabled={loading}>Cancelar</Button>
                        <Button
                            onClick={handleGenerate}
                            disabled={loading || !aiConfig.apiKey.trim()}
                            className="gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 border-0"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Gerando...
                                </>
                            ) : (
                                <>
                                    <Sparkles className="w-4 h-4" />
                                    Gerar Artigo
                                </>
                            )}
                        </Button>
                    </DialogFooter>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AIGeneratorModal;
