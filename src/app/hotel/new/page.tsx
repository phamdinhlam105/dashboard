"use client";
import { addNewHotel, HotelRequest } from "@/components/api/hotel-api";
import Header from "@/components/header/header";
import { HotelModel } from "@/components/hotel/model/hotel-model";
import NewHotelAdditionalDetail from "@/components/hotel/new/hotel-additional-detail";
import NewHotelContent from "@/components/hotel/new/hotel-content";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export default function NewHotelPage() {
  const [newHotel, setNewHotel] = useState<HotelModel>({
    id: "",
    name: "",
    slug: "",
    type: "",
    star: 4,
    createdAt: "",
    updatedAt: "",
    isAvailable:true,
    description: "",
    content: "",
    price: "",
    address: "",
    ultilities: "",
    thumbnail: "",
    rule: "",
    images: [],
    roomDetails: [],
  });

  const onChange = (field: string, value: string | string[]) => {
    setNewHotel((prev) => ({ ...prev, [field]: value }));
  };

  const saveChange = async () => {
    const request:HotelRequest={
      ...newHotel,
    }
    const res = await addNewHotel(request);
    if(res)
      toast.success("Thêm khách sạn thành công")
    else
      toast.error("Thêm khách sạn thất bại")
  };

  return (
    <>
      <Header title="Khách sạn mới" />
      <div className="p-4 flex space-x-4">
        <NewHotelContent
          name={newHotel.name}
          slug={newHotel.slug}
          star={newHotel.star}
          content={newHotel.content}
          rule={newHotel.rule}
          onChange={onChange}
        />
        <NewHotelAdditionalDetail
          description={newHotel.description}
          images={newHotel.images}
          thumbnail={newHotel.thumbnail}
          address={newHotel.address}
          ultilities={newHotel.ultilities}
          price={newHotel.price}
          roomDetails={newHotel.roomDetails}
          onChange={onChange}
        />
      </div>
      <Button variant="default" className="w-1/4 h-10 m-4" onClick={saveChange}>
        Lưu thay đổi
      </Button>
    </>
  );
}
