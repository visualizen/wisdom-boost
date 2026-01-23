
-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create posts table
create table if not exists public.posts (
    id uuid default uuid_generate_v4() primary key,
    title text not null,
    content text,
    category text,
    image_url text,
    author_id text default 'admin',
    slug text,
    meta_description text,
    keywords text,
    canonical_url text,
    og_image text,
    featured boolean default false,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.posts enable row level security;

-- Create policies
create policy "Public posts are viewable by everyone"
    on public.posts for select
    using (true);

create policy "Authenticated users can insert posts"
    on public.posts for insert
    with check (auth.role() = 'authenticated');

create policy "Authenticated users can update posts"
    on public.posts for update
    using (auth.role() = 'authenticated');

create policy "Authenticated users can delete posts"
    on public.posts for delete
    using (auth.role() = 'authenticated');

-- Create storage bucket for blog images
insert into storage.buckets (id, name, public) 
values ('blog-images', 'blog-images', true)
on conflict (id) do nothing;

create policy "Blog images are viewable by everyone"
    on storage.objects for select
    using ( bucket_id = 'blog-images' );

create policy "Authenticated users can upload blog images"
    on storage.objects for insert
    with check ( bucket_id = 'blog-images' and auth.role() = 'authenticated' );

create policy "Authenticated users can update blog images"
    on storage.objects for update
    using ( bucket_id = 'blog-images' and auth.role() = 'authenticated' );

create policy "Authenticated users can delete blog images"
    on storage.objects for delete
    using ( bucket_id = 'blog-images' and auth.role() = 'authenticated' );
