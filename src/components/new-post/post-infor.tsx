"use client"
import { useState } from "react";
import { PostStatus } from "../api/enum";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ChooseFile from "../file/choose-file/choose-file";
import Image from "next/image";

export default function NewPostInformation({
  description,
  author,
  status,
  onChange,
  thumbnail
}: {
  description: string;
  author: string;
  status: PostStatus;
  thumbnail:string;
  onChange: (field: string, value: string) => void;
}) {
  
    const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="border rounded-md shadow-sm w-1/3 p-4 bg-background">
      <h2 className="text-2xl font-bold my-2">Thông tin bài viết</h2>
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

      <Label htmlFor="author" className="block text-xl font-semibold mt-10">
        Tác giả
      </Label>
      <Input
        id="author"
        className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
        value={author}
        onChange={(e) => onChange("author", e.target.value)}
      />

      <div className="flex justify-between items-center my-4 space-x-2">
        <Label className="block text-md font-semibold">Trạng thái</Label>
        <Select onValueChange={(e) => onChange("status", e)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup defaultValue={status}>
              <SelectItem
                value="draft"
                className="text-yellow-300 font-semibold"
              >
                Đang soạn thảo
              </SelectItem>
              <SelectItem
                value="published"
                className="text-green-300 font-semibold"
              >
                Xuất bản
              </SelectItem>
              <SelectItem
                value="deleted"
                className="text-green-300 font-semibold"
              >
                Đã xoá
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div>
          <Label className="block text-md font-semibold">Thumbnail</Label>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger className="border-1 rounded-lg p-2 hover:bg-gray-200">
              Chọn hình ảnh
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Chọn một ảnh cho thumbnail</DialogTitle>
              </DialogHeader>
              <div>
                <ChooseFile onChange={onChange} setIsOpen={setIsOpen} />
              </div>
            </DialogContent>
          </Dialog>
          <div className="relative w-full aspect-3/2 rounded-lg shadow-md p-2">
            {thumbnail ? (
              <Image alt="thumbnail" src={thumbnail} fill />
            ) : (
              <p className="text-gray-400">Chưa có ảnh</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
