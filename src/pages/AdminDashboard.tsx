
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash2, Edit } from "lucide-react";
import { toast } from "sonner";
import { postsService, BlogPost } from "@/services/postsService";
import { supabase } from "@/integrations/supabase/client";

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        checkAuth();
        fetchPosts();
    }, []);

    const checkAuth = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
            navigate("/admin/login");
        }
    };

    const fetchPosts = async () => {
        try {
            const data = await postsService.getPosts();
            setPosts(data);
        } catch (error: any) {
            toast.error("Erro ao carregar posts: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Tem certeza que deseja excluir este post?")) return;

        try {
            await postsService.deletePost(id);
            toast.success("Post excluído com sucesso!");
            fetchPosts();
        } catch (error: any) {
            toast.error("Erro ao excluir: " + error.message);
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate("/admin/login");
    };

    if (loading) return <div className="flex h-screen items-center justify-center">Carregando...</div>;

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-5xl mx-auto space-y-8">
                <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-sm">
                    <h1 className="text-3xl font-bold text-gray-900">Painel Administrativo</h1>
                    <div className="space-x-4">
                        <Button onClick={() => navigate("/admin/posts/new")} className="gap-2">
                            <Plus size={18} /> Novo Post
                        </Button>
                        <Button variant="outline" onClick={handleLogout}>Sair</Button>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Meus Posts</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {posts.length === 0 ? (
                            <p className="text-gray-500 text-center py-8">Nenhum post encontrado. Crie o primeiro!</p>
                        ) : (
                            <div className="space-y-4">
                                {posts.map((post) => (
                                    <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                                        <div>
                                            <h3 className="font-semibold text-lg">{post.title}</h3>
                                            <p className="text-sm text-gray-500">
                                                {post.category} • {new Date(post.created_at).toLocaleDateString('pt-BR')}
                                            </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button variant="ghost" size="icon" onClick={() => navigate(`/admin/posts/${post.id}`)}>
                                                <Edit size={18} className="text-blue-600" />
                                            </Button>
                                            <Button variant="ghost" size="icon" onClick={() => handleDelete(post.id)}>
                                                <Trash2 size={18} className="text-red-600" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AdminDashboard;
