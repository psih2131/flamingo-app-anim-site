import type { BlogArticle } from "./blog_article"

export type BlogItem = {
    id: number,
    dsc: string,
    slug: string,
    tags: string[],
    title: string,
    article?: BlogArticle,
    published_at: string,
    hero_image_url: string
}