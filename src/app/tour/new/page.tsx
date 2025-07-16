"use client";
import Header from "@/components/header/header";
import NewTourAdditionalDetail from "@/components/tour/new-tour/tour-additional-detail";
import NewTourContent from "@/components/tour/new-tour/tour-content";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function NewTourPage() {
  const [currentTour, setCurrentTour] = useState({
    name: "",
    slug: "",
    schedule: "",
    scheduleDetail: "",
    description: "",
    startingPlace: "",
    price: "",
    thumbnail: "",
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

  const saveChange = () => {};

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
      <Button variant="default" className="w-1/4 h-10 m-4">
        Lưu thay đổi
      </Button>
    </div>
  );
}
