"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import RoomDetail from "./room-detail";
import { Button } from "@/components/ui/button";
import { RefreshCcwIcon } from "lucide-react";
import { FileModel } from "@/components/file/model/file-model";
import ChooseFile from "@/components/file/choose-file/choose-file";
import FileList from "@/components/file/file-list";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { toast } from "sonner";
import { getAllImage, getImageById } from "@/components/api/image-api";
import { RoomDetailRequest } from "@/components/api/hotel-api";

export default function NewHotelAdditionalDetail({
  description,
  address,
  ultilities,
  price,
  thumbnail,
  images,
  roomDetails,
  onChange,
  roomOnChange,
  refreshRoom,
}: {
  description: string;
  address: string;
  price: string;
  ultilities: string;
  thumbnail: string;
  images: string[];
  roomOnChange: (rooms: RoomDetailRequest[]) => void;
  refreshRoom: (rooms: RoomDetailRequest[]) => void;
  roomDetails: RoomDetailRequest[];
  onChange: (field: string, value: string | string[]) => void;
}) {
  const [roomNumber, setRoomNumber] = useState(roomDetails.length || 0);
  const [draftRooms, setDraftRooms] = useState(roomDetails);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenGallery, setIsOpenGallery] = useState<boolean>(false);
  const [data, setData] = useState<FileModel[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<string[]>(images);
  const [selectedImages, setSelectedImages] = useState<FileModel[]>([]);
  //fetch function

  const fetchData = async () => {
    const result = await getAllImage();
    if (result) {
      setData(result);
    } else toast.error("Không thể tải ảnh");
  };

  //use effect
  useEffect(() => {
    const currentCount = draftRooms.length;
    const updated = [...draftRooms];
    if (roomNumber > currentCount) {
      for (let i = currentCount; i < roomNumber; i++) {
        updated.push({
          name: "",
          capacity: "",
          included: "",
          price: "",
        });
      }
    } else if (roomNumber < currentCount) {
      updated.splice(roomNumber);
    }
    setDraftRooms(updated);
  }, [roomNumber]);

  useEffect(() => {
    fetchData();
    setSelectedFiles(images);
  }, [images]);

  useEffect(() => {
    setSelectedImages(data.filter((d) => selectedFiles.includes(d.id)));
  }, [data]);

  //handle action
  const handleRoomRefresh = () => {
    setDraftRooms(roomDetails);
    refreshRoom(draftRooms);
    setRoomNumber(roomDetails.length);
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

  return (
    <div className="border rounded-md shadow-sm w-1/3 p-4 bg-background space-y-4">
      <h2 className="text-2xl font-bold ">Thông tin bổ sung</h2>
      <Label
        htmlFor="description"
        className="block text-xl font-semibold text-gray-700"
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
      <Label htmlFor="startingPlace" className="text-md font-semibold">
        Các tiện ích
      </Label>
      <Input
        id="startingPlace"
        className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
        value={ultilities}
        onChange={(e) => onChange("ultilities", e.target.value)}
      />
      <Label htmlFor="address" className="text-md font-semibold">
        Địa chỉ
      </Label>
      <Input
        id="address"
        className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
        value={address}
        onChange={(e) => onChange("address", e.target.value)}
      />
      <div className="flex justify-between items-center space-x-2">
        <Label className="block text-md font-semibold">Giá</Label>
        <Input
          id="price"
          className="text-xl block w-2/3 px-3 py-2 rounded-md shadow-sm"
          value={price}
          onChange={(e) => onChange("price", e.target.value)}
        />
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
            <Image alt="thumbnail" src={thumbnail} fill unoptimized />
          ) : (
            <p className="text-gray-400">Chưa có ảnh</p>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <Label className="block text-md font-semibold">Gallery</Label>
        <Dialog open={isOpenGallery} onOpenChange={setIsOpenGallery}>
          <DialogTrigger className="border-1 rounded-lg p-2 hover:bg-gray-200">
            Chọn hình ảnh
          </DialogTrigger>
          <DialogContent className="w-full">
            <DialogHeader>
              <DialogHeader>
                <DialogTitle>
                  Chọn các ảnh để đưa vào gallery bài viết
                </DialogTitle>
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
                onChange("images", selectedFiles);
                setIsOpenGallery(false);
              }}
            >
              Chọn các ảnh trên
            </Button>
          </DialogContent>
        </Dialog>
        {selectedImages && selectedImages.length > 0 ? (
          <div className="grid grid-cols-2 gap-2 rounded-md shadow-md p-2">
            {selectedImages.map((i, idx) => (
              <div key={idx} className="relative aspect-1/1 w-full">
                <Image fill alt="thumbnail" src={i.url} unoptimized />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">Chưa có ảnh</p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <Label className="block text-md font-semibold">Số phòng</Label>
        <Button
          type="button"
          variant="ghost"
          onClick={handleRoomRefresh}
          className="text-sm ml-2"
        >
          <RefreshCcwIcon />
        </Button>
        <div className="flex items-center space-x-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => setRoomNumber((prev) => Math.max(prev - 1, 0))}
            className="w-10 h-10 text-xl p-0"
          >
            −
          </Button>
          <span className="text-xl font-semibold w-8 text-center">
            {roomNumber}
          </span>
          <Button
            type="button"
            variant="outline"
            onClick={() => setRoomNumber((prev) => prev + 1)}
            className="w-10 h-10 text-xl p-0"
          >
            +
          </Button>
        </div>
      </div>
      <RoomDetail
        roomNumber={roomNumber}
        roomDetails={draftRooms}
        onRoomDetailsChange={roomOnChange}
      />
    </div>
  );
}
