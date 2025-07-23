"use client";

import { PostStatus } from "@/components/api/enum";
import { useLoginAuth } from "@/components/api/login-auth";
import { addNewPost, PostRequest } from "@/components/api/post-api";
import { Article } from "@/components/article/model/article-model";
import Header from "@/components/header/header";
import NewPostContent from "@/components/new-post/content";
import NewPostInformation from "@/components/new-post/post-infor";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export default function NewPostPage() {
  useLoginAuth();
  const [newPost, setNewPost] = useState<Article>({
    id: "",
    title: "",
    slug: "",
    content: "",
    author: "",
    description: "",
    thumbnail: "",
    view: 0,
    status: PostStatus.Draft,
    updatedAt: "",
    createdAt: "",
  });
  const onChange = (field: string, value: string | PostStatus) => {
    setNewPost((prev) => ({
      ...prev,
      [field]: field === "status" ? Number(value) : value,
    }));
  };

  const saveChange = async () => {
    const request: PostRequest = {
      ...newPost,
    };

    const res = await addNewPost(request);
    if (res) toast.success("Tạo bài viết thành công");
    else toast.error("Tạo bài viết thất bại");
  };

  return (
    <>
      <Header title="Tin tức mới" />
      <div className="p-4 w-full dark:bg-black h-full space-y-4">
        <div className="flex space-x-6">
          <NewPostContent
            content={newPost.content}
            title={newPost.title}
            slug={newPost.slug}
            onChange={onChange}
          />
          <NewPostInformation
            author={newPost.author}
            description={newPost.description}
            status={newPost.status}
            thumbnail={newPost.thumbnail}
            onChange={onChange}
          />
        </div>
        <Button onClick={saveChange}>Tạo bài viết</Button>
      </div>
    </>
  );
}
