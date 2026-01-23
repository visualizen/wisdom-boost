
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { ArrowLeft, Sparkles, Save, Image as ImageIcon } from "lucide-react";
import { postsService } from "@/services/postsService";
import { supabase } from "@/integrations/supabase/client";
import RichTextEditor from "@/components/RichTextEditor";
import AIGeneratorModal from "@/components/AIGeneratorModal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PostEditor = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [aiModalOpen, setAiModalOpen] = useState(false);

    // Auth check
    useEffect(() => {
        const checkAuth = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                navigate("/admin/login");
            }
        };
        checkAuth();
    }, [navigate]);

    const [formData, setFormData] = useState({
        title: "",
        content: "",
        category: "",
        image_url: "",
        // SEO Fields
        slug: "",
        meta_description: "",
        keywords: ""
    });

    const categories = ["Tendências", "Legislação", "Logística", "Mercados", "Tecnologia"];

    useEffect(() => {
        if (id) {
            loadPost(id);
        }
    }, [id]);

    const loadPost = async (postId: string) => {
        try {
            const data = await postsService.getPost(postId);
            if (data) {
                setFormData({
                    title: data.title,
                    content: data.content || "",
                    category: data.category || "",
                    image_url: data.image_url || "",
                    slug: data.slug || "",
                    meta_description: data.meta_description || "",
                    keywords: data.keywords || ""
                });
            }
        } catch (error: any) {
            toast.error("Erro ao carregar post: " + error.message);
        }
    };

    // Auto-generate slug from title if empty
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;
        setFormData(prev => ({
            ...prev,
            title,
            slug: prev.slug || title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const postData = {
                ...formData,
                author_id: "admin", // Hardcoded for now
                canonical_url: "",
                og_image: formData.image_url
            };

            if (id) {
                await postsService.updatePost(id, postData);
                toast.success("Post atualizado com sucesso!");
            } else {
                await postsService.createPost(postData);
                toast.success("Post criado com sucesso!");
            }

            navigate("/admin");
        } catch (error: any) {
            toast.error("Erro ao salvar: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8 pb-20">
            <div className="max-w-5xl mx-auto space-y-6">
                <div className="flex flex-col sm:flex-row justify-between gap-4 items-center">
                    <Button variant="ghost" onClick={() => navigate("/admin")} className="gap-2 self-start">
                        <ArrowLeft size={18} /> Voltar
                    </Button>
                    <div className="flex gap-2 w-full sm:w-auto">
                        <Button
                            type="button"
                            variant="secondary" // Distinctive look
                            onClick={() => setAiModalOpen(true)}
                            className="gap-2 w-full sm:w-auto bg-gradient-to-r from-indigo-100 to-purple-100 hover:from-indigo-200 hover:to-purple-200 text-indigo-700 border border-indigo-200"
                        >
                            <Sparkles size={16} /> Gerar com IA
                        </Button>
                        <Button onClick={handleSubmit} disabled={loading} className="gap-2 w-full sm:w-auto">
                            <Save size={16} />
                            {loading ? "Salvando..." : "Salvar Post"}
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>{id ? "Editar Conteúdo" : "Novo Artigo"}</CardTitle>
                                <CardDescription>Escreva e formate o conteúdo principal do seu artigo.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="title">Título do Artigo</Label>
                                    <Input
                                        id="title"
                                        value={formData.title}
                                        onChange={handleTitleChange}
                                        required
                                        placeholder="Ex: Como a China está mudando o comércio global"
                                        className="text-lg font-medium"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label>Conteúdo Rico</Label>
                                    <RichTextEditor
                                        content={formData.content}
                                        onChange={(content) => setFormData(prev => ({ ...prev, content }))}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* SEO Section used to be side, now accordion below or separate? Putting below for more space */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Otimização para Buscadores (SEO)</CardTitle>
                                <CardDescription>Melhore o rankeamento do seu artigo no Google.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="slug">Slug (URL Amigável)</Label>
                                        <Input
                                            id="slug"
                                            value={formData.slug}
                                            onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                                            placeholder="como-china-muda-comercio"
                                        />
                                        <p className="text-xs text-muted-foreground">URL final: wisdom.com.br/blog/{formData.slug || '...'}</p>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="keywords">Palavras-chave (Tags)</Label>
                                        <Input
                                            id="keywords"
                                            value={formData.keywords}
                                            onChange={(e) => setFormData(prev => ({ ...prev, keywords: e.target.value }))}
                                            placeholder="importação, logística, legislação"
                                        />
                                        <p className="text-xs text-muted-foreground">Separe por vírgulas</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="meta_description">Meta Descrição</Label>
                                    <Input
                                        id="meta_description"
                                        value={formData.meta_description}
                                        onChange={(e) => setFormData(prev => ({ ...prev, meta_description: e.target.value }))}
                                        placeholder="Breve resumo do artigo que aparecerá no Google..."
                                        maxLength={160}
                                    />
                                    <p className="text-xs text-muted-foreground text-right">{formData.meta_description.length}/160 caracteres</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar Column */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Configurações</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="category">Categoria</Label>
                                    <Select
                                        value={formData.category}
                                        onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecione..." />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {categories.map((cat) => (
                                                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="image_url">Imagem de Capa (URL)</Label>
                                    <div className="flex gap-2">
                                        <Input
                                            id="image_url"
                                            value={formData.image_url}
                                            onChange={(e) => setFormData(prev => ({ ...prev, image_url: e.target.value }))}
                                            placeholder="https://..."
                                        />
                                    </div>

                                    <div className="mt-2 text-sm text-gray-500 border rounded-md p-2 bg-gray-50 min-h-[150px] flex items-center justify-center overflow-hidden">
                                        {formData.image_url ? (
                                            <img src={formData.image_url} alt="Preview" className="w-full h-auto object-cover" />
                                        ) : (
                                            <div className="text-center text-gray-400">
                                                <ImageIcon className="mx-auto mb-2 opacity-50" />
                                                <span className="text-xs">Preview da imagem</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            <AIGeneratorModal
                open={aiModalOpen}
                onOpenChange={setAiModalOpen}
            />
        </div>
    );
};

export default PostEditor;
