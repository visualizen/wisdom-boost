
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";

const PostEditor = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        category: "",
        image_url: "",
    });

    const categories = ["Tendências", "Legislação", "Logística", "Mercados", "Tecnologia"];

    useEffect(() => {
        checkAuth();
        if (id) {
            loadPost(id);
        }
    }, [id]);

    const checkAuth = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
            navigate("/admin/login");
        }
    };

    const loadPost = async (postId: string) => {
        try {
            const { data, error } = await supabase
                .from('posts')
                .select('*')
                .eq('id', postId)
                .single();

            if (error) throw error;
            if (data) {
                setFormData({
                    title: data.title,
                    content: data.content || "",
                    category: data.category || "",
                    image_url: data.image_url || "",
                });
            }
        } catch (error: any) {
            toast.error("Erro ao carregar post: " + error.message);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const user = (await supabase.auth.getUser()).data.user;

            if (!user) throw new Error("Usuário não autenticado");

            const postData = {
                ...formData,
                user_id: user.id
            };

            let error;
            if (id) {
                // Update
                const response = await supabase
                    .from('posts')
                    .update(postData)
                    .eq('id', id);
                error = response.error;
            } else {
                // Create
                const response = await supabase
                    .from('posts')
                    .insert([postData]);
                error = response.error;
            }

            if (error) throw error;

            toast.success(id ? "Post atualizado!" : "Post criado!");
            navigate("/admin");
        } catch (error: any) {
            toast.error("Erro ao salvar: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto space-y-6">
                <Button variant="ghost" onClick={() => navigate("/admin")} className="gap-2">
                    <ArrowLeft size={18} /> Voltar
                </Button>

                <Card>
                    <CardHeader>
                        <CardTitle>{id ? "Editar Post" : "Novo Post"}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="title">Título</Label>
                                <Input
                                    id="title"
                                    value={formData.title}
                                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                                    required
                                    placeholder="Ex: Mudanças no Siscomex 2024"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="category">Categoria</Label>
                                <Select
                                    value={formData.category}
                                    onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecione uma categoria" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {categories.map((cat) => (
                                            <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="image_url">URL da Imagem de Capa</Label>
                                <Input
                                    id="image_url"
                                    value={formData.image_url}
                                    onChange={(e) => setFormData(prev => ({ ...prev, image_url: e.target.value }))}
                                    placeholder="https://exemplo.com/imagem.jpg"
                                />
                                {formData.image_url && (
                                    <div className="mt-2 text-sm text-gray-500">
                                        <p className="mb-1">Pré-visualização:</p>
                                        <img src={formData.image_url} alt="Preview" className="h-40 w-auto object-cover rounded-md border" />
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="content">Conteúdo</Label>
                                <Textarea
                                    id="content"
                                    className="min-h-[300px]"
                                    value={formData.content}
                                    onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                                    required
                                    placeholder="Escreva seu artigo aqui..."
                                />
                            </div>

                            <div className="flex justify-end gap-4">
                                <Button type="button" variant="outline" onClick={() => navigate("/admin")}>
                                    Cancelar
                                </Button>
                                <Button type="submit" disabled={loading}>
                                    {loading ? "Salvando..." : "Salvar Post"}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default PostEditor;
