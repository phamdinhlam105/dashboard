"use client";
import { loginAuth } from "@/components/api/login-auth";
import { addNewTour, TourRequest } from "@/components/api/tour-api";
import Header from "@/components/header/header";
import NewTourAdditionalDetail from "@/components/tour/new-tour/tour-additional-detail";
import NewTourContent from "@/components/tour/new-tour/tour-content";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export default function NewTourPage() {
  loginAuth();
  const [currentTour, setCurrentTour] = useState({
    name: "",
    slug: "",
    schedule: "",
    scheduleDetail: "",
    description: "",
    startingPlace: "",
    price: "",
    thumbnail: "",
    status:1,
    images: [],
    tourDetail: {
      location: "",
      food: "",
      suitablePerson: "",
      idealTime: "",
      transportation: "",
      promotion: "",
    },
  });
  const onChange = (field: string, value: string | string[]) => {
    setCurrentTour((prev) => ({ ...prev, [field]: value }));
  };
  const onTourDetailChange = (field: string, value: string) => {
    setCurrentTour((prev) => ({
      ...prev,
      tourDetail: {
        ...prev.tourDetail,
        [field]: value,
      },
    }));
  };

  const saveChange = async () => {
    const {
      location,
      food,
      suitablePerson,
      idealTime,
      transportation,
      promotion,
    } = currentTour.tourDetail;

    const request: TourRequest = {
      ...currentTour,
      location,
      food,
      suitablePerson,
      idealTime,
      transportation,
      promotion,
    };
    const res = await addNewTour(request);
    if (res) toast.success("Tạo tour mới thành công");
    else toast.error("Tạo mới không thành công");
  };

  return (
    <div>
      <Header title="Tour mới" />
      <div className="p-4 flex space-x-4">
        <NewTourContent
          name={currentTour.name}
          slug={currentTour.slug}
          schedule={currentTour.schedule}
          scheduleDetail={currentTour.scheduleDetail}
          onChange={onChange}
        />
        <NewTourAdditionalDetail
          thumbnail={currentTour.thumbnail}
          images={currentTour.images}
          description={currentTour.description}
          startingPlace={currentTour.startingPlace}
          price={currentTour.price}
          tourDetail={currentTour.tourDetail}
          onChange={onChange}
          tourDetailOnChange={onTourDetailChange}
        />
      </div>
      <Button variant="default" className="w-1/4 h-10 m-4" onClick={saveChange}>
        Lưu thay đổi
      </Button>
    </div>
  );
}
