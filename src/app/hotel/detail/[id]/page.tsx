"use client";
import { getHotelById, HotelRequest, updateHotel } from "@/components/api/hotel-api";
import Header from "@/components/header/header";
import { HOTEL_MOCK_DATA } from "@/components/hotel/mock-data/hotel-data";
import NewHotelAdditionalDetail from "@/components/hotel/new/hotel-additional-detail";
import NewHotelContent from "@/components/hotel/new/hotel-content";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function HotelDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [currentHotel, setCurrentHotel] = useState(
    HOTEL_MOCK_DATA.findLast((hotel) => hotel.id === id) || HOTEL_MOCK_DATA[0]
  );

  useEffect(() => {
    const fetchHotel = async () => {
      const tours = await getHotelById(id);
      if (tours) setCurrentHotel(tours);
    };
    fetchHotel();
  }, []);

  const onChange = (field: string, value: string | string[]) => {
    setCurrentHotel((prev) => ({ ...prev, [field]: value }));
  };
  const saveChange = async()=>{

    const request:HotelRequest={
      ...currentHotel,
    }

    const res = await updateHotel(request);
    if(res)
      toast.success("Cập nhật khách sạn thành công")
    else
      toast.error("Cập nhật thất bại")
  }

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
        <Button variant="default" className="w-1/4 h-10 m-4" onClick={saveChange}>
        Lưu thay đổi
      </Button>
    </>
  );
}
