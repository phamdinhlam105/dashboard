"use client";
import Header from "@/components/header/header";
import NewTourAdditionalDetail from "@/components/tour/new-tour/tour-additional-detail";
import NewTourContent from "@/components/tour/new-tour/tour-content";
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
      tourDetail: {
        location: "",
        food: "",
        suitablePerson: "",
        idealTime: "",
        transportation: "",
        promotion: "",
      },
    });
    const onChange = (field: string, value: string) => {
      setCurrentTour((prev) => ({ ...prev, [field]: value }));
    };
    const onTourDetailChange = (
      field: string,
      value: string
    ) => {
      setCurrentTour((prev) => ({
        ...prev,
        tourDetail: {
          ...prev.tourDetail,
          [field]: value,
        },
      }));
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
          description={currentTour.description}
          startingPlace={currentTour.startingPlace}
          price={currentTour.price}
          tourDetail={currentTour.tourDetail}
          onChange={onChange}
          tourDetailOnChange={onTourDetailChange}
        />
      </div>
    </div>
  );
}
