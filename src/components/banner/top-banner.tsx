"use client";

import { useEffect, useState } from "react";
import { BannerModel } from "./banner-model/banner-model";
import Image from "next/image";
import FileList from "@/components/file/file-list";
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
import { updateBanner } from "../api/banner-api";

export default function TopBannerEdit() {
  const [isUsingBanner, setIsUsingBanner] = useState<BannerModel>({
    id: "",
    name: "",
    images: [],
    IsUsing: true,
    responsiveImages: [],
    type: "top",
  });
  const [isDesktopDialogOpen, setIsDesktopDialogOpen] =
    useState<boolean>(false);
  const [isResponsiveDialogOpen, setIsResponsiveDialogOpen] =
    useState<boolean>(false);
  const [data, setData] = useState<FileModel[]>([]);
  const [selectedDesktopFiles, setSelectedDesktopFiles] = useState<string[]>(
    isUsingBanner?.images
  );
  const [selectedResponsiveFiles, setSelectedResponsiveFiles] = useState<
    string[]
  >(isUsingBanner?.responsiveImages);

  const [selectedDesktopImages, setSelectedDesktopImages] = useState<
    FileModel[]
  >([]);
  const [selectedResponsiveImages, setSelectedResponsiveImages] = useState<
    FileModel[]
  >([]);

  //fetch
  const fetchData = async () => {
    const result = await getAllImage();
    if (result) {
      setData(result);
    } else toast.error("Không thể tải ảnh");
  };

  //use effect
  useEffect(() => {
    fetchData();
    setSelectedDesktopFiles(isUsingBanner?.images);
    setSelectedResponsiveFiles(isUsingBanner?.responsiveImages);
  }, [isUsingBanner]);

  useEffect(() => {
    setSelectedDesktopImages(
      data.filter((d) => selectedDesktopFiles.includes(d.id))
    );
    setSelectedResponsiveImages(
      data.filter((d) => selectedResponsiveFiles.includes(d.id))
    );
  }, [isUsingBanner]);

  //function
  const onChange = (field: string, value: string[]) => {
    if (field === "desktop")
      setIsUsingBanner((prev) => ({ ...prev, images: value }));
    if (field === "responsive")
      setIsUsingBanner((prev) => ({ ...prev, responsiveImages: value }));
  };

  const handleChooseDesktopFile = async (id: string, isCheck: boolean) => {
    if (isCheck) {
      const checkedImages = data.findLast((d) => d.id === id);
      if (checkedImages) {
        setSelectedDesktopFiles((prev) => [...prev, id]);
        setSelectedDesktopImages((prev) => [...prev, checkedImages]);
      }
    } else {
      setSelectedDesktopFiles(selectedDesktopFiles.filter((s) => s != id));
      setSelectedDesktopImages(selectedDesktopImages.filter((i) => i.id != id));
    }
  };

  const handleChooseResponsiveFile = async (id: string, isCheck: boolean) => {
    if (isCheck) {
      const checkedImages = data.findLast((d) => d.id === id);
      if (checkedImages) {
        setSelectedResponsiveFiles((prev) => [...prev, id]);
        setSelectedResponsiveImages((prev) => [...prev, checkedImages]);
      }
    } else {
      setSelectedResponsiveFiles(
        selectedResponsiveFiles.filter((s) => s != id)
      );
      setSelectedResponsiveImages(
        selectedResponsiveImages.filter((i) => i.id != id)
      );
    }
  };

  const handleSaveChange = async () => {
    setIsUsingBanner((prev) => ({
      ...prev,
      images: selectedDesktopFiles,
      responsiveImages: selectedResponsiveFiles,
    }));
    const result = await updateBanner(isUsingBanner);
    if (result) toast.success("Lưu thay đổi thành công");
  };
  return (
    <div className="p-4 w-full dark:bg-black h-full space-y-4">
      <div className="space-y-4">
        <h2 className="font-bold uppercase text-2xl text-center">
          Thay đổi Top Banner
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-md shadow-md">
            <h3 className="font-medium mb-4 text-xl">Desktop</h3>
            <Carousel>
              <CarouselContent>
                {selectedDesktopImages.map((b) => (
                  <CarouselItem
                    className="relative aspect-2/1 w-3/4"
                    key={b.id}
                  >
                    <Image src={b.url} fill alt={b.name} unoptimized />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <Dialog
              open={isDesktopDialogOpen}
              onOpenChange={setIsDesktopDialogOpen}
            >
              <DialogTrigger className="border-1 rounded-lg p-2 hover:bg-gray-200">
                Chọn hình ảnh cho banner desktop
              </DialogTrigger>
              <DialogContent className="w-full">
                <DialogHeader>
                  <DialogHeader>
                    <DialogTitle>Chọn các ảnh cho banner</DialogTitle>
                  </DialogHeader>
                </DialogHeader>
                <FileList
                  files={data}
                  handleCheckChange={handleChooseDesktopFile}
                  checkedFiles={selectedDesktopFiles}
                  showUrl={false}
                />
                <Button
                  onClick={() => {
                    onChange("desktop", selectedDesktopFiles);
                    setIsDesktopDialogOpen(false);
                  }}
                >
                  Chọn các ảnh trên
                </Button>
              </DialogContent>
            </Dialog>
          </div>
          <div className="p-4 rounded-md shadow-md">
            <h3 className="font-medium mb-4 text-xl">Mobile</h3>
            <Carousel>
              <CarouselContent>
                {selectedResponsiveImages.map((b) => (
                  <CarouselItem
                    className="relative aspect-2/1 w-3/4"
                    key={b.id}
                  >
                    <Image src={b.url} fill alt={b.name} unoptimized />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <Dialog
              open={isResponsiveDialogOpen}
              onOpenChange={setIsResponsiveDialogOpen}
            >
              <DialogTrigger className="border-1 rounded-lg p-2 hover:bg-gray-200">
                Chọn hình ảnh cho banner mobile
              </DialogTrigger>
              <DialogContent className="w-full">
                <DialogHeader>
                  <DialogHeader>
                    <DialogTitle>Chọn các ảnh cho banner</DialogTitle>
                  </DialogHeader>
                </DialogHeader>
                <FileList
                  files={data}
                  handleCheckChange={handleChooseResponsiveFile}
                  checkedFiles={selectedResponsiveFiles}
                  showUrl={false}
                />
                <Button
                  onClick={() => {
                    onChange("responsive", selectedResponsiveFiles);
                    setIsResponsiveDialogOpen(false);
                  }}
                >
                  Chọn các ảnh trên
                </Button>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <div>
        <Button variant="default" onClick={handleSaveChange}>
          Lưu thay đổi
        </Button>
      </div>
    </div>
  );
}
