import type { BlogItem } from "./blog_item"
import type { TagItem } from "./tag_item"

export type BlogItemResponse = {
    blog: BlogItem,
    tags: TagItem[],
    related_blogs: BlogItem[]
}