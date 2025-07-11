"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import RoomDetail from "./room-detail";
import { Button } from "@/components/ui/button";
import { RefreshCcwIcon } from "lucide-react";

export default function NewHotelAdditionalDetail({
  description,
  address,
  ultilities,
  price,
  roomDetails,
  onChange,
}: {
  description: string;
  address: string;
  price: string;
  ultilities: string;
  roomDetails: {
    id: string;
    name: string;
    capacity: string;
    included: string;
    price: string;
  }[];
  onChange: (field: string, value: string) => void;
}) {
  const [roomNumber, setRoomNumber] = useState(roomDetails.length || 0);
  const [draftRooms, setDraftRooms] = useState(roomDetails);

  useEffect(() => {
    const currentCount = draftRooms.length;
    const updated = [...draftRooms];

    if (roomNumber > currentCount) {
      for (let i = currentCount; i < roomNumber; i++) {
        updated.push({
          id: (i + 1).toString(),
          name: "",
          capacity: "",
          included: "",
          price: "",
        });
      }
    } else if (roomNumber < currentCount) {
      updated.splice(roomNumber); // cắt bớt
    }

    setDraftRooms(updated);
  }, [roomNumber]);

  const handleRoomRefresh = () => {
    setDraftRooms(roomDetails);
    setRoomNumber(roomDetails.length);
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
      <RoomDetail roomNumber={roomNumber} roomDetails={draftRooms} />
    </div>
  );
}
