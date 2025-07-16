"use client";
import Header from "@/components/header/header";
import { HOTEL_MOCK_DATA } from "@/components/hotel/mock-data/hotel-data";
import NewHotelAdditionalDetail from "@/components/hotel/new/hotel-additional-detail";
import NewHotelContent from "@/components/hotel/new/hotel-content";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function HotelDetailPage() {

      const params = useParams();
      const id = params.id as string;
      const [currentHotel, setCurrentHotel] = useState(HOTEL_MOCK_DATA.findLast(hotel => hotel.id === id)|| HOTEL_MOCK_DATA[0]);
      const onChange = (field: string, value: string | string[]) => {
        setCurrentHotel((prev) => ({ ...prev, [field]: value }));
      };
  return (
    <>
      <Header title="Chi tiết khách sạn" />
      <div className="p-4 flex space-x-4">
        <NewHotelContent 
          name={currentHotel.name}
          slug={currentHotel.slug}
          star={currentHotel.star}
          content={currentHotel.content}
          rule={currentHotel.rule}
          onChange={onChange}
        />
        <NewHotelAdditionalDetail 
          description={currentHotel.description}
          images={currentHotel.images}
          thumbnail={currentHotel.thumbnail}
          address={currentHotel.address}
          ultilities={currentHotel.ultilities}
          price={currentHotel.price}
          roomDetails={currentHotel.roomDetails}
          onChange={onChange}
        />
      </div>
    </>
  );
}
