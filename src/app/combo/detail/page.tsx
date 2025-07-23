"use client";

import { useLoginAuth } from "@/components/api/login-auth";
import NewCombo from "@/components/combo/new/combo-content";
import { ComboModel } from "@/components/combo/model/combo-model";
import Header from "@/components/header/header";
import { useState } from "react";
import NewComboAdditionalDetail from "@/components/combo/new/combo-additional";

export default function ComboDetailPage() {
  useLoginAuth();
  const [currentCombo, setcurrentCombo] = useState<ComboModel>({
    id: "",
    name: "",
    slug: "",
    description: "",
    price: "",
    applyDate: "",
    endDate: "",
    transportation: "",
    tourId: "",
    hotelId: "",
    view: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const fetchHotel = async () => {
//       const result = await getHotelById(id);
//       if (result) {
//         setcurrentCombo(result);
//         setIsLoading(false);
//         const { roomDetails } = result;
//         setRoomDetails(roomDetails);
//       } else toast.error("Không thể tải dữ liệu");
//     };
//     fetchHotel();
//   }, []);

  const onChange = (field: string, value: string | string[]) => {
    setcurrentCombo((prev) => ({ ...prev, [field]: value }));
    setIsLoading(false);
  };
//   const saveChange = async () => {
//     const request: HotelRequest = {
//       ...currentCombo,
//     };
//     const res = await updateHotel(request);
//     if (res) toast.success("Cập nhật khách sạn thành công");
//     else toast.error("Cập nhật thất bại");
//   };

  return (
    <>
      <Header title="Chi tiết Combo" />
      {isLoading ? (
        "Đang tải dữ liệu"
      ) : (
        <div className="p-4 flex space-x-4">
          <NewCombo
            name={currentCombo.name}
            slug={currentCombo.slug}
            description={currentCombo.description}
            onChange={onChange}
          />
          <NewComboAdditionalDetail
            transportation={currentCombo.transportation}
            tourId={currentCombo.hotelId}
            hotelId={currentCombo.tourId}
            price={currentCombo.price}
            onChange={onChange}
          />
        </div>
      )}

      {/* <Button variant="default" className="w-1/4 h-10 m-4" onClick={saveChange}>
        Lưu thay đổi
      </Button> */}
    </>
  );
}
