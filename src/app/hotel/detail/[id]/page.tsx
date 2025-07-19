"use client";
import {
  getHotelById,
  HotelRequest,
  updateHotel,
} from "@/components/api/hotel-api";
import Header from "@/components/header/header";
import { HotelModel } from "@/components/hotel/model/hotel-model";
import NewHotelAdditionalDetail from "@/components/hotel/new/hotel-additional-detail";
import NewHotelContent from "@/components/hotel/new/hotel-content";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function HotelDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [currentHotel, setCurrentHotel] = useState<HotelModel>({
    id: "",
    name: "",
    slug: "",
    description: "",
    address: "",
    price: "",
    type: "",
    star: 4,
    ultilities: "",
    rule: "",
    content: "",
    images: [],
    status: 1,
    thumbnail: "",
    createdAt: "",
    updatedAt: "",
    roomDetails: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHotel = async () => {
      const tours = await getHotelById(id);
      if (tours) {
        setCurrentHotel(tours);
        setIsLoading(false)
      }
      else
        toast.error("Không thể tải dữ liệu")
    };
    fetchHotel();
  }, []);

  const onChange = (field: string, value: string | string[]) => {
    setCurrentHotel((prev) => ({ ...prev, [field]: value }));
  };
  const saveChange = async () => {
    const request: HotelRequest = {
      ...currentHotel,
    };

    const res = await updateHotel(request);
    if (res) toast.success("Cập nhật khách sạn thành công");
    else toast.error("Cập nhật thất bại");
  };

  return (
    <>
      <Header title="Chi tiết khách sạn" />
      {isLoading ? (
        "Đang tải dữ liệu"
      ) : (
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
      )}

      <Button variant="default" className="w-1/4 h-10 m-4" onClick={saveChange}>
        Lưu thay đổi
      </Button>
    </>
  );
}
