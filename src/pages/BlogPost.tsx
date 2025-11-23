import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Tag, ArrowLeft, Share2, Facebook, Linkedin, ArrowRight } from "lucide-react";
import { getBlogPostById, getRelatedPosts } from "@/data/blogPosts";
import { useToast } from "@/hooks/use-toast";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const post = id ? getBlogPostById(id) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Header />
        <div className="text-center py-32">
          <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
          <Button onClick={() => navigate("/blog")}>Voltar ao Blog</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post);
  const currentUrl = window.location.href;
  
  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(`${post.title}\n\n${currentUrl}`);
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, "_blank");
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`, "_blank");
  };

  const shareOnTwitter = () => {
    const text = encodeURIComponent(post.title);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(currentUrl)}`, "_blank");
  };

  const copyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    toast({
      title: "Link copiado!",
      description: "O link do artigo foi copiado para a área de transferência.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Back Button */}
      <div className="pt-32 pb-8 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/blog")}
            className="group"
          >
            <ArrowLeft className="mr-2 transition-transform group-hover:-translate-x-1" size={18} />
            Voltar ao Blog
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
      </div>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Article Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-full">
                {post.category}
              </span>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between border-y border-border py-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Escrito por</p>
                <p className="font-semibold">{post.author}</p>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={shareOnWhatsApp}
                  className="gap-2"
                >
                  <Share2 size={16} />
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={shareOnFacebook}
                  title="Compartilhar no Facebook"
                >
                  <Facebook size={16} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={shareOnLinkedIn}
                  title="Compartilhar no LinkedIn"
                >
                  <Linkedin size={16} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={shareOnTwitter}
                  title="Compartilhar no X (Twitter)"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyLink}
                >
                  Copiar Link
                </Button>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div 
            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:bg-gradient-to-r prose-headings:from-primary-light prose-headings:via-primary prose-headings:to-primary-dark prose-headings:bg-clip-text prose-headings:text-transparent prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag size={20} className="text-primary" />
              <span className="font-semibold mr-2">Tags:</span>
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-secondary text-sm rounded-full hover:bg-secondary/80 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share Again */}
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl border border-blue-500/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Gostou deste artigo?</h3>
              <p className="text-muted-foreground mb-6">Compartilhe com sua rede e ajude outras pessoas!</p>
              <div className="flex justify-center gap-3">
                <Button onClick={shareOnWhatsApp} className="bg-gradient-primary">
                  <Share2 className="mr-2" size={18} />
                  Compartilhar
                </Button>
                <Button variant="outline" onClick={copyLink}>
                  Copiar Link
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
                Artigos Relacionados
              </h2>
              <p className="text-xl text-muted-foreground">
                Continue aprendendo sobre comércio exterior
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <Card 
                  key={relatedPost.id}
                  className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
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
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{relatedPost.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary hover:text-primary/80 text-sm">
                      Ler mais
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

export default BlogPost;
