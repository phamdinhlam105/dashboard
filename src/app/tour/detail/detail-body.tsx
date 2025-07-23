"use client";
import {
  getTourById,
  TourRequest,
  updateTour,
} from "@/components/api/tour-api";
import { TourModel } from "@/components/tour/model/tour-model";
import NewTourAdditionalDetail from "@/components/tour/new-tour/tour-additional-detail";
import NewTourContent from "@/components/tour/new-tour/tour-content";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function TourDetailBody() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "";
  const [currentTour, setCurrentTour] = useState<TourModel>({
    id: "",
    name: "",
    slug: "",
    description: "",
    price: "",
    startingPlace: "",
    schedule: "",
    scheduleDetail: "",
    status: 1,
    tourDetail: {
      location: "",
      food: "",
      suitablePerson: "",
      idealTime: "",
      transportation: "",
      promotion: "",
    },
    images: [],
    thumbnail: "",
    createdAt: "",
    updatedAt: "",
  });

  useEffect(() => {
    const fetchTours = async () => {
      const tours = await getTourById(id);
      if (tours) {
        setCurrentTour(tours);
      } else toast.error("Không thể tải dữ liệu");
    };

    fetchTours();
  }, []);

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
    const res = await updateTour(request);
    if (res) toast.success("Cập nhật tour thành công");
    else toast.error("Cập nhật thất bại");
  };
  return (
    <div>
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
      </div>{" "}
      <Button variant="default" className="w-1/4 h-10 m-4" onClick={saveChange}>
        Lưu thay đổi
      </Button>
    </div>
  );
}
