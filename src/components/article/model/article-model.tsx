import { PostStatus } from "@/components/api/enum";

export interface Article {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  status: PostStatus;
  author: string;
}
