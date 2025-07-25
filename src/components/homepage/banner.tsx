"use client";
import Image from "next/image";
import { Label } from "../ui/label";
import FileList from "../file/file-list";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { FileModel } from "../file/model/file-model";
import { Button } from "../ui/button";
import { getAllImage, getImageById } from "../api/image-api";
import { toast } from "sonner";

export default function BannerChange() {
  const [isOpenGallery, setIsOpenGallery] = useState<boolean>(false);
  const [data, setData] = useState<FileModel[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const [selectedImages, setSelectedImages] = useState<FileModel[]>([]);

  //fetch function
  const fetchImageById = async (id: string) => {
    const result = await getImageById(id);
    if (result) {
      setSelectedImages((prev) => [...prev, result]);
    } else toast.error("Tải ảnh không thành công");
  };
  const fetchData = async () => {
    const result = await getAllImage();
    if (result) {
      setData(result);
    } else toast.error("Không thể tải ảnh");
  };
  const fetchAllImages = async () => {
    const results = await Promise.all(selectedFiles.map(getImageById));
    const validResults = results.filter(Boolean);
    if (validResults.length > 0) {
      setSelectedImages(validResults);
    }
  };
  useEffect(() => {
    fetchData();
    fetchAllImages();
  }, []);

  const handleChooseFile = async (id: string, isCheck: boolean) => {
    if (isCheck) {
      if (selectedFiles.length > 3) return;
      setSelectedFiles((prev) => [...prev, id]);
      await fetchImageById(id);
    } else {
      setSelectedFiles(selectedFiles.filter((s) => s != id));
      setSelectedImages(selectedImages.filter((i) => i.id != id));
    }
  };

  return (
    <div className="rounded-lg shadow-md p-4 space-y-4">
      <div className="flex justify-between">
        <Label className="text-xl text-center">Thay đổi banner</Label>
        <Dialog open={isOpenGallery} onOpenChange={setIsOpenGallery}>
          <DialogTrigger className="p-2 border-2 rounded-lg">
            Chọn hình ảnh
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Chọn các ảnh để đưa vào gallery bài viết
              </DialogTitle>
            </DialogHeader>
            <FileList files={data} handleCheckChange={handleChooseFile} />
            <Button
              onClick={() => {
                setIsOpenGallery(false);
              }}
            >
              Chọn các ảnh trên
            </Button>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex">
        {selectedImages.map((image) => (
          <div className="relative aspect-3/2 w-full" key={image.id}>
            <Image
              src={image.url}
              alt={image.name}
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
}
