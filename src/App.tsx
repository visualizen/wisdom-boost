import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Index from "./pages/Index";
import QuemSomos from "./pages/QuemSomos";
import Servicos from "./pages/Servicos";
import RepresentacaoComercial from "./pages/RepresentacaoComercial";
import RepresentacaoInternacional from "./pages/RepresentacaoInternacional";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import Fundicao from "./pages/segments/Fundicao";
import FerroAco from "./pages/segments/FerroAco";
import Quimicos from "./pages/segments/Quimicos";
import Alimenticia from "./pages/segments/Alimenticia";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/representacao-comercial" element={<RepresentacaoComercial />} />
          <Route path="/representacao-internacional" element={<RepresentacaoInternacional />} />
          <Route path="/segmentos/fundicao" element={<Fundicao />} />
          <Route path="/segmentos/ferro-aco" element={<FerroAco />} />
          <Route path="/segmentos/quimicos" element={<Quimicos />} />
          <Route path="/segmentos/alimenticia" element={<Alimenticia />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppFloat />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
