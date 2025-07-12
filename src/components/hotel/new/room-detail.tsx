"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Room = {
  id: string;
  name: string;
  capacity: string;
  included: string;
  price: string;
};

export default function RoomDetail({
  roomNumber,
  roomDetails,
}: {
  roomNumber: number;
  roomDetails: Room[];
}) {
  const [rooms, setRooms] = useState<Room[]>([]);

  // Cập nhật lại danh sách rooms mỗi khi roomNumber thay đổi
 useEffect(() => {
  const currentCount = roomDetails.length;
  const newRooms: Room[] = [...roomDetails];

  if (roomNumber > currentCount) {
    for (let i = currentCount; i < roomNumber; i++) {
      newRooms.push({
        id: (i + 1).toString(), 
        name: "",
        capacity: "",
        included: "",
        price: "0",
      });
    }
  }

  setRooms(newRooms);
}, [roomNumber, roomDetails]);

  const handleChange = (
    index: number,
    field: keyof Room,
    value: string | number
  ) => {
    const updated = [...rooms];
    updated[index] = {
      ...updated[index],
      [field]: value,
    } as Room; // ✅ ép kiểu toàn bộ object về Room
    setRooms(updated);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Chi tiết phòng</h2>
      <div className="max-h-[600px] overflow-y-auto space-y-4 pr-2">
        {rooms.map((room, index) => (
          <div
            key={room.id}
            className="border border-gray-300 rounded-lg p-4 shadow-sm space-y-4"
          >
            <h3 className="text-lg font-semibold">Phòng {room.id}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Tên phòng</Label>
                <Input
                  value={room.name}
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                  placeholder="Nhập tên phòng"
                />
              </div>

              <div>
                <Label>Sức chứa</Label>
                <Input
                  value={room.capacity}
                  onChange={(e) =>
                    handleChange(index, "capacity", e.target.value)
                  }
                  placeholder="Sức chứa tối đa"
                />
              </div>

              <div className="md:col-span-2">
                <Label>Tiện ích</Label>
                <Input
                  value={room.included}
                  onChange={(e) =>
                    handleChange(index, "included", e.target.value)
                  }
                  placeholder="VD: Wifi, TV, Máy lạnh"
                />
              </div>

              <div className="md:col-span-2 md:w-1/2">
                <Label>Giá (VNĐ)</Label>
                <Input
                  value={room.price}
                  onChange={(e) => handleChange(index, "price", e.target.value)}
                  placeholder="Nhập giá phòng"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
