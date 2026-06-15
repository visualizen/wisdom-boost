import { useEffect, useState } from "react";
import { Newspaper, Globe, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { postsService } from "@/services/postsService";
import fallbackImage from "@/assets/blog/trade-news.jpg";

interface NewsPost {
  id: string;
  category: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

const News = () => {
  const { t } = useLanguage();
  const [news, setNews] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const posts = await postsService.getPosts();
        setNews(
          posts.slice(0, 3).map((post) => {
            const textExcerpt = (post.meta_description || post.content || "")
              .replace(/<[^>]*>?/gm, "")
              .trim();

            return {
              id: post.id,
              category: post.category || "Blog",
              title: post.title,
              description: textExcerpt.length > 150 ? `${textExcerpt.slice(0, 150)}...` : textExcerpt,
              date: new Date(post.created_at).toLocaleDateString("pt-BR"),
              image: post.image_url || fallbackImage,
            };
          }),
        );
      } catch (error) {
        console.error("Erro ao carregar notícias:", error);
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-500/5 to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.05),transparent_50%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full backdrop-blur-sm border border-blue-500/20">
            <Newspaper className="w-5 h-5 text-blue-500" />
            <span className="text-primary font-semibold">{t('news.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
            {t('news.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('news.subtitle')}
          </p>
        </div>

        {loading ? (
          <div className="text-center text-muted-foreground">{t('blogPage.loading')}</div>
        ) : news.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {news.map((item) => (
              <Link key={item.id} to={`/blog/${item.id}`} className="group relative block">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative h-full bg-card/80 backdrop-blur-xl rounded-3xl border-2 border-blue-500/20 group-hover:border-white/40 overflow-hidden transition-all duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/20 group-hover:-translate-y-2">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent"></div>
                    <div className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                      <span className="text-white font-semibold text-sm">{item.category}</span>
                    </div>
                  </div>

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

                    <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                      <span>{t('news.readMore')}</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto rounded-2xl border border-blue-500/20 bg-card/80 p-8 text-center text-muted-foreground">
            {t('blogPage.notFound')}
          </div>
        )}

        <div className="text-center mt-16">
          <Link
            to="/blog"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-105"
          >
            <Globe className="w-5 h-5" />
            <span>{t('news.viewAll')}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;
