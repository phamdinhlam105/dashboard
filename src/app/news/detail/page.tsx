"use client";

import {
  getPostById,
  PostRequest,
  updatePost,
} from "@/components/api/post-api";
import { Article } from "@/components/article/model/article-model";
import Header from "@/components/header/header";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import NewPostContent from "@/components/new-post/content";
import NewPostInformation from "@/components/new-post/post-infor";
import { PostStatus } from "@/components/api/enum";
import { loginAuth } from "@/components/api/login-auth";

export default function PostDetailPage() {
  loginAuth();
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "";

  const [currentPost, setCurrentPost] = useState<Article>({
    id: "",
    title: "",
    slug: "",
    content: "",
    description: "",
    createdAt: "",
    updatedAt: "",
    status: PostStatus.Draft,
    author: "",
    thumbnail: "",
    view: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPostById(id);
      if (post) {
        setCurrentPost(post);
        setIsLoading(false);
      } else toast.error("Tải dữ liệu thất bại");
    };
    fetchPost();
  }, []);

  const onChange = (field: string, value: string | number) => {
    setCurrentPost((prev) => ({ ...prev, [field]: value }));
  };

  const saveChange = async () => {
    const request: PostRequest = {
      ...currentPost,
    };

    const res = await updatePost(request);
    if (res) toast.success("Cập nhật bài viết thành công");
    else toast.error("Cập nhật thất bại");
  };

  return (
    <>
      <Header title="Tin tức mới" />
      <div className="p-4 w-full dark:bg-black h-full space-y-4">
        {isLoading ? (
          "Đang tải dữ liệu"
        ) : (
          <div className="flex space-x-6">
            <NewPostContent
              content={currentPost.content}
              title={currentPost.title}
              slug={currentPost.slug}
              onChange={onChange}
            />
            <NewPostInformation
              author={currentPost.author}
              description={currentPost.description}
              status={currentPost.status}
              thumbnail={currentPost.thumbnail}
              onChange={onChange}
            />
          </div>
        )}
        <Button onClick={saveChange}>Lưu thay đổi</Button>
      </div>
    </>
  );
}
