"use client";
import Header from "@/components/header/header";
import { HotelModel } from "@/components/hotel/model/hotel-model";
import NewHotelAdditionalDetail from "@/components/hotel/new/hotel-additional-detail";
import NewHotelContent from "@/components/hotel/new/hotel-content";
import { useState } from "react";

export default function NewHotelPage() {
  const [newHotel, setNewHotel] = useState<HotelModel>({
    id: "",
    name: "",
    slug: "",
    type: "",
    star: 4,
    createdAt: "",
    updatedAt: "",
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
    </>
  );
}
