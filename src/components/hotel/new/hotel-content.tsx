"use client";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import dynamic from "next/dynamic";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown } from "lucide-react";

const RichTextEditor = dynamic(
  () => import("@/components/rich-text-editor/rich-text-editor"),
  {
    ssr: false,
  }
);

export default function NewHotelContent({
  name,
  slug,
  star,
  content,
  rule,
  onChange,
}:{
  name: string;
  slug: string;
  star: number;
  content: string;
  rule: string;
  onChange: (field: string, value: string) => void;
}) {

  return (
    <div className="w-2/3 space-y-3">
      <Label
        htmlFor="name"
        className="block text-xl font-semibold text-gray-700 mb-1"
      >
        Tên Khách Sạn
      </Label>
      <Input
        id="name"
        required
        className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
        value={name}
        onChange={(e) => onChange("name", e.target.value)}
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
      <div className="flex justify-between items-center space-x-2">
        <Select value={star.toString()} onValueChange={(e) => onChange("star", e)}>
          <SelectTrigger >
            <SelectValue className="h-10 text-md">
              {star ? `${star} sao` : "Số sao"}
              <ChevronDown className="ml-2 w-4 h-4" />
            </SelectValue>
          </SelectTrigger>
          <SelectContent align="end" className="shadow w-60 p-2 rounded-md">
            {[1, 2, 3, 4, 5].map((val) => (
              <SelectItem key={val} value={val.toString()}>
                {val} sao
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Label
        htmlFor="content"
        className="block text-xl font-semibold text-gray-700 mb-1"
      >
        Nội dung chi tiết
      </Label>
      <RichTextEditor
        data={content}
        onChange={(value: string) => onChange("content", value)}
      />
      <Label
        htmlFor="rules"
        className="block text-xl font-semibold text-gray-700 mb-1"
      >
        Nội quy khách sạn
      </Label>
      <RichTextEditor
        data={rule}
        onChange={(value: string) => onChange("rule", value)}
      />
    </div>
  );
}
