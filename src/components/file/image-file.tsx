"use client";

import Image from "next/image";
import { Checkbox } from "../ui/checkbox";
import { FileModel } from "./model/file-model";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { deleteImage, ImageRequest, updateImage } from "../api/image-api";
import { toast } from "sonner";
import { Label } from "../ui/label";
import { Settings, X } from "lucide-react";

export default function ImageFile({
  file,
  handleCheckChange,
  isChecked,
  showUrl = true,
}: {
  file: FileModel;
  handleCheckChange: (id: string, isCheck: boolean) => void;
  isChecked: boolean;
  showUrl?: boolean;
}) {
  const [currentFile, setCurrentFile] = useState<FileModel>(file);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setCurrentFile(file);
  }, []);
  const handleSaveChange = async () => {
    const request: ImageRequest = currentFile;
    const result = await updateImage(request);
    if (result) {
      setCurrentFile(result);
      toast.success("Thay đổi thông tin thành công");
      setIsOpen(false);
    }
  };
  const handleDelete = async () => {
    const result = await deleteImage(currentFile.id);
    if (result) toast.success("Xoá ảnh thành công");
  };
  return (
    <div className="w-full rounded-lg shadow-sm">
      <div className="relative w-full aspect-[3/2]">
        <Image alt={file.name} src={file.url} fill unoptimized />
        <Checkbox
          checked={isChecked}
          onCheckedChange={(checked) => {
            const isChecked = checked === true;
            handleCheckChange(file.id, isChecked);
          }}
          className=" h-5 w-5 absolute right-1 top-1 z-10 bg-white"
        ></Checkbox>
      </div>
      <div className="bg-accent w-full rounded-b-md p-2 space-y-2 px-2">
        <p className="text-sm">
          <span className="font-bold">Tên ảnh: </span>
          {file.name}
        </p>
        {showUrl ? <p className="break-all text-xs">{file.url}</p> : undefined}
        <div className="flex justify-between space-x-2 items-stretch">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger className="hover:bg-gray-200 p-2 rounded-md">
              <Settings/>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Sửa thông tin ảnh</DialogTitle>
              <div className="space-y-4">
                <div className="relative aspect-3/2 w-full">
                  <Image src={currentFile.url} alt="chỉnh sửa" fill />
                </div>
                <div className="flex">
                  <Label>Tên ảnh:</Label>
                  <Input
                    value={currentFile?.name}
                    onChange={(e) =>
                      setCurrentFile((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                  />
                </div>
                <Button variant="outline" onClick={handleSaveChange}>
                  Lưu thông tin
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <Button
            variant="destructive"
            onClick={handleDelete}
          >
            <X/>
          </Button>
        </div>
      </div>
    </div>
  );
}
