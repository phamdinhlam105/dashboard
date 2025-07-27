"use client";
import { useEffect, useState } from "react";
import { BannerModel } from "./banner-model/banner-model";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { FileModel } from "../file/model/file-model";
import { getAllImage } from "../api/image-api";
import { toast } from "sonner";
import { getCurrentPromotionBanner, updateBanner } from "../api/banner-api";
import Image from "next/image";
import FileList from "@/components/file/file-list";

export default function PromotionBanner() {
  const [isUsingBanner, setIsUsingBanner] = useState<BannerModel>({
    id: "",
    name: "",
    images: [],
    IsUsing: true,
    responsiveImages: [],
    type: "promotion",
  });
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [data, setData] = useState<FileModel[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<string[]>(
    isUsingBanner?.images
  );
  const [selectedImages, setSelectedImages] = useState<FileModel[]>([]);

  //fetch
  const fetchData = async () => {
    const result = await getAllImage();
    if (result) {
      setData(result);
    } else toast.error("Không thể tải ảnh");
  };
  const fetchBanner = async () => {
    const result = await getCurrentPromotionBanner();
    if (result) setIsUsingBanner(result);
    else toast.error("Tải banner thất bại");
  };

  //use effect
  useEffect(() => {
    fetchBanner();
  }, []);
  useEffect(() => {
    fetchData();
    setSelectedFiles(isUsingBanner?.images);
  }, [isUsingBanner]);

  useEffect(() => {
    setSelectedImages(data.filter((d) => selectedFiles.includes(d.id)));
  }, [isUsingBanner]);

  //function
  const onChange = (field: string, value: string[]) => {
    if (field === "") setIsUsingBanner((prev) => ({ ...prev, images: value }));
    if (field === "responsive")
      setIsUsingBanner((prev) => ({ ...prev, responsiveImages: value }));
  };

  const handleChooseFile = async (id: string, isCheck: boolean) => {
    if (isCheck) {
      const checkedImages = data.findLast((d) => d.id === id);
      if (checkedImages) {
        setSelectedFiles((prev) => [...prev, id]);
        setSelectedImages((prev) => [...prev, checkedImages]);
      }
    } else {
      setSelectedFiles(selectedFiles.filter((s) => s != id));
      setSelectedImages(selectedImages.filter((i) => i.id != id));
    }
  };

  const handleSaveChange = async () => {
    setIsUsingBanner((prev) => ({
      ...prev,
      images: selectedFiles,
    }));
    const result = await updateBanner(isUsingBanner);
    if (result) toast.success("Lưu thay đổi thành công");
  };
  return (
    <div className="p-4 w-full dark:bg-black h-full space-y-4">
      <h2 className="font-bold uppercase text-2xl text-center">
        Thay đổi Promotion Banner
      </h2>
      <div className="p-4 rounded-md shadow-md px-[20%]">
        <h3 className="font-medium mb-4 text-xl"></h3>
        <Carousel>
          <CarouselContent>
            {selectedImages.map((b) => (
              <CarouselItem className="relative aspect-2/1 w-3/4" key={b.id}>
                <Image src={b.url} fill alt={b.name} unoptimized />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger className="border-1 rounded-lg p-2 hover:bg-gray-200">
            Chọn hình ảnh cho banner
          </DialogTrigger>
          <DialogContent className="w-full">
            <DialogHeader>
              <DialogHeader>
                <DialogTitle>Chọn các ảnh cho banner</DialogTitle>
              </DialogHeader>
            </DialogHeader>
            <FileList
              files={data}
              handleCheckChange={handleChooseFile}
              checkedFiles={selectedFiles}
              showUrl={false}
            />
            <Button
              onClick={() => {
                onChange("", selectedFiles);
                setIsDialogOpen(false);
              }}
            >
              Chọn các ảnh trên
            </Button>
          </DialogContent>
        </Dialog>
      </div>
      <div>
        <Button variant="default" onClick={handleSaveChange}>
          Lưu thay đổi
        </Button>
      </div>
    </div>
  );
}
