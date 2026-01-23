
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);


    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        console.log("Tentando login com:", trimmedEmail);

        const { data, error } = await supabase.auth.signInWithPassword({
            email: trimmedEmail,
            password: trimmedPassword,
        });

        if (error) {
            console.error("Erro detalhado do Supabase:", error);
            console.error("Status:", error.status);
            console.error("Nome:", error.name);
            console.error("Msg:", error.message);
            toast.error(`Erro: ${error.message}`);
            setLoading(false);
        } else {
            console.log("Login sucesso!", data);
            toast.success("Login realizado com sucesso!");
            navigate("/admin");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl text-center">Wisdom Admin</CardTitle>
                    <CardDescription className="text-center">
                        Entre para gerenciar o conteúdo
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="seu@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium">Senha</label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="******"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? "Entrando..." : "Entrar"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
