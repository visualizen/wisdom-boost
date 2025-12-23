
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Tag, Share2, ArrowRight } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { blogPosts, getRelatedPosts, BlogPost } from "@/data/blogPosts";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const BlogPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [post, setPost] = useState<BlogPost | undefined>();
  const [loading, setLoading] = useState(true);

  const categoryKeys: Record<string, string> = {
    "Todas": "all",
    "Tendências": "trends",
    "Legislação": "legislation",
    "Logística": "logistics",
    "Mercados": "markets",
    "Tecnologia": "technology",
    "Geral": "all" // Fallback for default
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      loadPost(id);
    }
  }, [id]);

  const loadPost = async (postId: string) => {
    console.log("Loading post:", postId);

    // 1. Check static posts first (fallback)
    const staticPost = blogPosts.find(p => p.id === postId);
    if (staticPost) {
      console.log("Found static post:", staticPost.title);
      setPost(staticPost);
      setLoading(false);
      return;
    }

    // 2. Fetch from Supabase
    try {
      console.log("Fetching from Supabase...");
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', postId)
        .maybeSingle(); // Changed from single() to maybeSingle() to avoid errors if not found

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      if (data) {
        console.log("Found Supabase post:", data.title);
        setPost({
          id: data.id,
          title: data.title,
          excerpt: "",
          content: data.content,
          image: data.image_url || "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
          category: data.category || "Geral",
          date: new Date(data.created_at).toLocaleDateString('pt-BR'),
          readTime: "5 min",
          featured: false,
          author: "Equipe Wisdom",
          tags: []
        });
      } else {
        console.log("Post not found in Supabase");
      }
    } catch (error) {
      console.error("Error loading post:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">{t('blogPage.loading')}</div>;
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">{t('blogPage.notFound')}</h1>
        <Button onClick={() => navigate("/blog")}>{t('blogPage.backToBlog')}</Button>
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Article Header */}
      <section className="relative h-[50vh] min-h-[500px] flex items-center pt-40 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              className="text-slate-600 hover:text-primary mb-6 p-0 hover:bg-transparent"
              onClick={() => navigate("/blog")}
            >
              <ArrowLeft className="mr-2" size={20} />
              {t('blogPage.backToBlog')}
            </Button>

            <div className="flex items-center gap-4 mb-4">
              <span className="px-4 py-1.5 bg-primary text-white text-sm font-semibold rounded-full shadow-lg shadow-primary/20">
                {t(`blogPage.categories.${categoryKeys[post.category] || 'all'}` as any)}
              </span>
              <span className="text-slate-600 flex items-center gap-2 text-sm">
                <Clock size={14} />
                {post.readTime} {t('blogPage.readTime')}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-blue-950 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold border border-primary/20">
                  W
                </div>
                <div>
                  <p className="text-slate-800 font-medium text-sm">{post.author}</p>
                  <p className="text-xs">{post.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex gap-12">
            <div className="flex-1">
              <div
                className="prose prose-lg dark:prose-invert max-w-none 
                  prose-headings:font-bold prose-headings:text-foreground
                  prose-p:text-muted-foreground prose-p:leading-relaxed
                  prose-li:text-muted-foreground
                  prose-strong:text-foreground
                  marker:text-primary"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag) => (
                    <div key={tag} className="flex items-center gap-1 px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                      <Tag size={14} />
                      {tag}
                    </div>
                  ))}
                </div>

                {/* Share */}
                <div className="flex items-center justify-between p-6 bg-secondary/20 rounded-2xl border border-secondary">
                  <div>
                    <h3 className="font-bold mb-1">{t('blogPage.share.title')}</h3>
                    <p className="text-sm text-muted-foreground">{t('blogPage.share.subtitle')}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-white hover:border-primary transition-colors">
                      <Share2 size={18} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-24 bg-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('blogPage.related.title')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card
                  key={relatedPost.id}
                  className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
                  onClick={() => navigate(`/blog/${relatedPost.id}`)}
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                        {t(`blogPage.categories.${categoryKeys[relatedPost.category] || 'all'}` as any)}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{relatedPost.date}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary hover:text-primary/80 text-sm mt-2">
                      {t('blogPage.readMore')}
                      <ArrowRight className="ml-2 transition-transform group-hover/btn:translate-x-1" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPostPage;
