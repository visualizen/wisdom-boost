
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Newspaper } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { blogPosts as initialStaticPosts, BlogPost } from "@/data/blogPosts";
import heroImage from "@/assets/quem-somos-hero.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEO } from "@/components/SEO";

const Blog = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [dbPosts, setDbPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = ["Todas", "Tendências", "Legislação", "Logística", "Mercados", "Tecnologia"];

  const categoryKeys: Record<string, string> = {
    "Todas": "all",
    "Tendências": "trends",
    "Legislação": "legislation",
    "Logística": "logistics",
    "Mercados": "markets",
    "Tecnologia": "technology"
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Error fetching posts:", error);
      }

      if (data && data.length > 0) {
        const mappedPosts: BlogPost[] = data.map(post => ({
          id: post.id,
          title: post.title,
          excerpt: post.content ? post.content.substring(0, 150) + "..." : "",
          content: post.content,
          image: post.image_url || "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
          category: post.category || "Geral",
          date: new Date(post.created_at).toLocaleDateString('pt-BR'),
          readTime: "5 min",
          featured: false,
          author: "Equipe Wisdom",
          tags: []
        }));
        setDbPosts(mappedPosts);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Combine static and DB posts, prioritizing DB posts but keeping static ones as fallback content
  // If there are DB posts, we could choose to hide static ones, but for now let's mix them or
  // just show static if DB is empty to make the site look populated.
  const allPosts = dbPosts.length > 0 ? [...dbPosts, ...initialStaticPosts] : initialStaticPosts;

  const filteredPosts = selectedCategory === "Todas"
    ? allPosts
    : allPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = allPosts.filter(post => post.featured);
  // If no posts are marked as featured in DB, just pick the first one
  const displayFeatured = featuredPosts.length > 0 ? featuredPosts : [allPosts[0]];

  const regularPosts = filteredPosts.filter(post => !displayFeatured.includes(post));

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blog"
        description="Fique por dentro das novidades, tendências e atualizações do mercado de comércio exterior em nosso blog."
      />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {/* Darker Elegant Navy Overlay */}
          <div className="absolute inset-0 bg-blue-950/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-slate-900/80 to-blue-900/80"></div>
          {/* Subtle radial highlight */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_60%)]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full border-2 border-blue-400/30">
              <Newspaper className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-semibold text-lg">{t('blogPage.hero.badge')}</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl animate-fade-in-up">
              {t('blogPage.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {t('blogPage.hero.subtitle')} <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{t('blogPage.hero.subtitleHighlight')}</span> {t('blogPage.hero.desc')}
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
                {t(`blogPage.categories.${categoryKeys[category]}` as any)}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "Todas" && displayFeatured.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-blue-500/5 via-background to-cyan-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
                {t('blogPage.featured.title')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('blogPage.featured.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {displayFeatured.map((post) => (
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
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary hover:text-primary/80">
                      {t('blogPage.readMore')}
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
                {t(`blogPage.categories.${categoryKeys[selectedCategory]}` as any)}
              </h2>
              <p className="text-xl text-muted-foreground">
                Artigos sobre {t(`blogPage.categories.${categoryKeys[selectedCategory]}` as any).toLowerCase()}
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
                    {t('blogPage.readMore')}
                    <ArrowRight className="ml-2 transition-transform group-hover/btn:translate-x-1" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                {t('blogPage.notFound')}
              </p>
            </div>
          )}
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default Blog;
