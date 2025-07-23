"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NewCombo({
  name,
  slug,
  description,
  onChange,
}: {
  name: string;
  slug: string;
  description: string;
  onChange: (field: string, value: string) => void;
}) {
  return (
    <div className="w-2/3 space-y-3">
      <Label
        htmlFor="name"
        className="block text-xl font-semibold text-gray-700 mb-1"
      >
        Tên combo
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
      <Label
        htmlFor="description"
        className="block text-xl font-semibold text-gray-700 mb-1"
      >
        Mô tả
      </Label>
      <textarea
        id="description"
        required
        className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
        value={description}
        onChange={(e) => onChange("description", e.target.value)}
      />
      <div className="flex justify-between">
        {" "}
        <Label
          htmlFor="description"
          className="block text-xl font-semibold text-gray-700 mb-1"
        >
          Ngày bắt đầu
        </Label>
        
      </div>
      <div className="flex justify-between">
        <Label
          htmlFor="description"
          className="block text-xl font-semibold text-gray-700 mb-1"
        >
          Ngày kết thúc
        </Label>
      </div>
    </div>
  );
}
