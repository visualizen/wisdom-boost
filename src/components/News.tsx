import { Newspaper, TrendingUp, Globe, Calendar, ArrowRight } from "lucide-react";

const News = () => {
  const news = [
    {
      category: "Exportação",
      title: "Brasil atinge recorde em exportações do agronegócio",
      description: "Setor registra crescimento de 15% no primeiro semestre com destaque para soja e café.",
      date: "15 Nov 2025",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Logística",
      title: "Novos corredores de exportação reduzem custos",
      description: "Infraestrutura portuária modernizada promete agilizar operações de comércio exterior.",
      date: "12 Nov 2025",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
      color: "from-cyan-500 to-sky-500"
    },
    {
      category: "Comércio Global",
      title: "Acordo comercial Brasil-UE abre novas oportunidades",
      description: "Empresas brasileiras ganham acesso facilitado ao mercado europeu com redução de tarifas.",
      date: "08 Nov 2025",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-500/5 to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full backdrop-blur-sm border border-blue-500/20">
            <Newspaper className="w-5 h-5 text-blue-500" />
            <span className="text-primary font-semibold">Fique Atualizado</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
            Notícias do Setor
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Acompanhe as últimas novidades e tendências do comércio exterior
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {news.map((item, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative h-full bg-card/80 backdrop-blur-xl rounded-3xl border-2 border-blue-500/20 group-hover:border-cyan-500/40 overflow-hidden transition-all duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                {/* Imagem */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent"></div>
                  <div className={`absolute top-4 left-4 px-4 py-2 bg-gradient-to-r ${item.color} rounded-full`}>
                    <span className="text-white font-semibold text-sm">{item.category}</span>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-8">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent group-hover:from-cyan-600 group-hover:to-sky-600 transition-all duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <button className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>Ler mais</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a 
            href="#" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-105"
          >
            <Globe className="w-5 h-5" />
            <span>Ver Todas as Notícias</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;
