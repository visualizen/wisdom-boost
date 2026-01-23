import { supabase } from "@/integrations/supabase/client";

export interface BlogPost {
    id: string;
    title: string;
    content: string;
    category: string;
    image_url: string;
    created_at: string;
    updated_at: string;
    author_id: string;

    // SEO Fields
    slug: string;
    meta_description?: string;
    keywords?: string;
    canonical_url?: string;
    og_image?: string;
    featured?: boolean;
}

export const postsService = {
    getPosts: async (): Promise<BlogPost[]> => {
        const { data, error } = await supabase
            .from('posts')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data as BlogPost[];
    },

    getPost: async (id: string): Promise<BlogPost | undefined> => {
        const { data, error } = await supabase
            .from('posts')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;
        return data as BlogPost;
    },

    createPost: async (post: Omit<BlogPost, "id" | "created_at" | "updated_at">): Promise<BlogPost> => {
        const { data, error } = await supabase
            .from('posts')
            .insert(post)
            .select()
            .single();

        if (error) throw error;
        return data as BlogPost;
    },

    updatePost: async (id: string, updates: Partial<Omit<BlogPost, "id" | "created_at">>): Promise<BlogPost> => {
        const { data, error } = await supabase
            .from('posts')
            .update({ ...updates, updated_at: new Date().toISOString() })
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return data as BlogPost;
    },

    deletePost: async (id: string): Promise<void> => {
        const { error } = await supabase
            .from('posts')
            .delete()
            .eq('id', id);

        if (error) throw error;
    }
};
