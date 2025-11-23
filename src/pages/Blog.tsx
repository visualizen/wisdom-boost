import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Tag, ArrowRight, Newspaper } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import heroImage from "@/assets/quem-somos-hero.jpg";

const Blog = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const categories = ["Todas", "Tendências", "Legislação", "Logística", "Mercados", "Tecnologia"];

  const filteredPosts = selectedCategory === "Todas" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-cyan-900/70 to-sky-900/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_70%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full border-2 border-blue-400/30">
              <Newspaper className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-semibold text-lg">Insights & Notícias</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
              Blog Wisdom Trading
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light">
              Fique por dentro das <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">últimas tendências</span> do comércio exterior
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-gradient-primary text-white" 
                  : "border-primary/30 hover:border-primary/50"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "Todas" && featuredPosts.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-blue-500/5 via-background to-cyan-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
                Destaques
              </h2>
              <p className="text-xl text-muted-foreground">
                Os artigos mais relevantes para o seu negócio
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card 
                  key={post.id}
                  className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-xl cursor-pointer"
                  onClick={() => navigate(`/blog/${post.id}`)}
                >
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary hover:text-primary/80">
                      Ler mais
                      <ArrowRight className="ml-2 transition-transform group-hover/btn:translate-x-1" size={18} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {selectedCategory !== "Todas" && (
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
                {selectedCategory}
              </h2>
              <p className="text-xl text-muted-foreground">
                Artigos sobre {selectedCategory.toLowerCase()}
              </p>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card 
                key={post.id}
                className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary hover:text-primary/80 text-sm">
                    Ler mais
                    <ArrowRight className="ml-2 transition-transform group-hover/btn:translate-x-1" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                Nenhum artigo encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-sky-600 opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Não Perca Nenhuma Atualização
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Receba as últimas notícias e insights sobre comércio exterior diretamente no seu email
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 h-14 px-6 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:border-white"
              />
              <Button size="lg" className="h-14 px-8 bg-white text-primary hover:bg-white/90 font-bold">
                Assinar Newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
