"use client";
import Header from "@/components/header/header";
import { TOUR_MOCK_DATA } from "@/components/tour/mock-data/tour-data";
import NewTourAdditionalDetail from "@/components/tour/new-tour/tour-additional-detail";
import NewTourContent from "@/components/tour/new-tour/tour-content";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function TourDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [currentTour, setCurrentTour] = useState(TOUR_MOCK_DATA.findLast(tour => tour.id === id)|| TOUR_MOCK_DATA[0]);
  const onChange = (field: string, value: string) => {
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

  return (
    <>
      <Header title="Chi tiết tour" />
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
      <Button variant="default" className="w-1/4 h-10 m-4">
        Lưu thay đổi
      </Button>
    </>
  );
}
