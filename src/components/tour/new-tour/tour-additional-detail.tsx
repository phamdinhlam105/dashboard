"use client";
import ChooseFile from "@/components/file/choose-file/choose-file";
import FileList from "@/components/file/file-list";
import { FILE_MOCK_DATA } from "@/components/file/mock-data/file-data";
import { FileModel } from "@/components/file/model/file-model";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useState } from "react";

export default function NewTourAdditionalDetail({
  description,
  startingPlace,
  price,
  tourDetail,
  thumbnail,
  images,
  onChange,
  tourDetailOnChange,
}: {
  description: string;
  startingPlace: string;
  price: string;
  thumbnail: string;
  images: string[];
  tourDetail: {
    location: string;
    food: string;
    suitablePerson: string;
    idealTime: string;
    transportation: string;
    promotion: string;
  };
  onChange: (field: string, value: string | string[]) => void;
  tourDetailOnChange: (field: string, value: string) => void;
}) {
  const [gallery, setGallery] = useState<FileModel[]>(
    FILE_MOCK_DATA.filter((i) => images.includes(i.url))
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenGallery, setIsOpenGallery] = useState<boolean>(false);

  return (
    <div className="border rounded-md shadow-sm w-1/3 p-4 bg-background space-y-4">
      <h2 className="text-2xl font-bold ">Thông tin bổ sung</h2>
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
        rows={2}
      />
      <div className="flex justify-between items-center space-x-2">
        <Label htmlFor="startingPlace" className="text-md font-semibold">
          Điểm xuất phát
        </Label>
        <Input
          id="startingPlace"
          className="text-xl block w-2/3 px-3 py-2 rounded-md shadow-sm"
          value={startingPlace}
          onChange={(e) => onChange("startingPlace", e.target.value)}
        />
      </div>
      <div className="flex justify-between items-center space-x-2">
        <Label className="block text-md font-semibold">Giá</Label>
        <Input
          id="price"
          className="text-xl block w-2/3 px-3 py-2 rounded-md shadow-sm"
          value={price}
          onChange={(e) => onChange("price", e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label className="block text-md font-semibold">Địa điểm</Label>
          <Input
            id="location"
            className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
            value={tourDetail.location}
            onChange={(e) => tourDetailOnChange("location", e.target.value)}
          />
        </div>
        <div>
          <Label className="block text-md font-semibold">Thực đơn</Label>
          <Input
            id="food"
            className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
            value={tourDetail.food}
            onChange={(e) => tourDetailOnChange("food", e.target.value)}
          />
        </div>
        <div>
          <Label className="block text-md font-semibold">
            Đối tượng phù hợp
          </Label>
          <Input
            id="suitablePerson"
            className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
            value={tourDetail.suitablePerson}
            onChange={(e) =>
              tourDetailOnChange("suitablePerson", e.target.value)
            }
          />
        </div>
        <div>
          <Label className="block text-md font-semibold">
            Thời gian lý tưởng
          </Label>
          <Input
            id="idealTime"
            className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
            value={tourDetail.idealTime}
            onChange={(e) => tourDetailOnChange("idealTime", e.target.value)}
          />
        </div>
        <div>
          <Label className="block text-md font-semibold">Phương tiện</Label>
          <Input
            id="transportation"
            className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
            value={tourDetail.transportation}
            onChange={(e) =>
              tourDetailOnChange("transportation", e.target.value)
            }
          />
        </div>
        <div>
          <Label className="block text-md font-semibold">Khuyến mãi</Label>
          <Input
            id="promotion"
            className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
            value={tourDetail.promotion}
            onChange={(e) => tourDetailOnChange("promotion", e.target.value)}
          />
        </div>
      </div>
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
      <div className="space-y-2">
        <Label className="block text-md font-semibold">Gallery</Label>
        <Dialog open={isOpenGallery} onOpenChange={setIsOpenGallery}>
          <DialogTrigger>Chọn hình ảnh</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Chọn các ảnh để đưa vào gallery bài viết</DialogTitle>
            </DialogHeader>
            <FileList
              files={FILE_MOCK_DATA}
              selectedFiles={gallery}
              setSelectedFiles={setGallery}
            />
            <Button
              onClick={() => {
                onChange(
                  "images",
                  gallery.map((g) => g.url)
                );
                setIsOpenGallery(false);
              }}
            >
              Chọn các ảnh trên
            </Button>
          </DialogContent>
        </Dialog>
        {images && images.length > 0 ? (
          <div className="grid grid-cols-2 gap-2 rounded-md shadow-md p-2">
            {images.map((i, idx) => (
              <div key={idx} className="relative aspect-1/1 w-full">
                <Image fill alt="thumbnail" src={i} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">Chưa có ảnh</p>
        )}
      </div>
    </div>
  );
}
