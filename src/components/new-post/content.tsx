"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import dynamic from "next/dynamic";

const RichTextEditor = dynamic(
  () => import("@/components/rich-text-editor/rich-text-editor"),
  {
    ssr: false,
  }
);

export default function NewPostContent({
  title,
  slug,
  content,
  onChange,
}: {
  title: string;
  slug: string;
  content: string;
  onChange: (field: string, value: string) => void;
}) {
  return (
    <div className="w-2/3 space-y-3">
      <Label
        htmlFor="title"
        className="block text-xl font-semibold text-gray-700 mb-1"
      >
        Tiêu đề
      </Label>
      <Input
        id="title"
        required
        className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
        value={title}
        onChange={(e) => onChange("title", e.target.value)}
      />
      <Label
        htmlFor="slug"
        className="block text-xl font-semibold text-gray-700 mb-1"
      >
        Đường dẫn
      </Label>
      <Input
        id="slug"
        required
        className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
        value={slug}
        onChange={(e) => onChange("slug", e.target.value)}
      />
      <Label
        htmlFor="content"
        className="block text-xl font-semibold text-gray-700 mb-1"
      >
        Nội dung
      </Label>
      <RichTextEditor
        data={content}
        onChange={(value: string) => onChange("content", value)}
      />
    </div>
  );
}
