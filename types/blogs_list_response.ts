import type { BlogItem } from "./blog_item"
import type { TagItem } from "./tag_item"

export type BlogsListResponse = {
    blogs: BlogItem[],
    tags: TagItem[],
    blogs_qty: number
}