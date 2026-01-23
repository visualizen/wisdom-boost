import tradeNewsImg from "@/assets/blog/trade-news.jpg";
import digitalCustomsImg from "@/assets/blog/digital-customs.jpg";
import sustainableTradeImg from "@/assets/blog/sustainable-trade.jpg";
import asianMarketsImg from "@/assets/blog/asian-markets.jpg";
import taxReformImg from "@/assets/blog/tax-reform.jpg";
import ecommerceGlobalImg from "@/assets/blog/ecommerce-global.jpg";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
  author: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [];

export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getRelatedPosts = (currentPost: BlogPost, limit: number = 3): BlogPost[] => {
  return blogPosts
    .filter(post =>
      post.id !== currentPost.id &&
      (post.category === currentPost.category ||
        post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
};
