"use client";

import { useLoginAuth } from "@/components/api/login-auth";
import NewCombo from "@/components/combo/new/combo-content";
import { ComboModel } from "@/components/combo/model/combo-model";
import Header from "@/components/header/header";
import { useEffect, useState } from "react";
import NewComboAdditionalDetail from "@/components/combo/new/combo-additional";
import {
  addNewCombo,
  ComboRequest,
  getComboById,
} from "@/components/api/combo-api";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function ComboDetailBody() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "";
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

  useEffect(() => {
    const fetchCombo = async () => {
      const result = await getComboById(id);
      if (result) {
        setcurrentCombo(result);
        setIsLoading(false);
      } else toast.error("Không thể tải dữ liệu");
    };
    fetchCombo();
  }, []);

  const onChange = (field: string, value: string | string[]) => {
    setcurrentCombo((prev) => ({ ...prev, [field]: value }));
    setIsLoading(false);
  };
  const saveChange = async () => {
    const request: ComboRequest = {
      ...currentCombo,
    };
    const res = await addNewCombo(request);
    if (res) toast.success("Cập nhật khách sạn thành công");
    else toast.error("Cập nhật thất bại");
  };

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
            applyDate={currentCombo.applyDate}
            endDate={currentCombo.endDate}
          />
          <NewComboAdditionalDetail
            transportation={currentCombo.transportation}
            tourId={currentCombo.tourId}
            hotelId={currentCombo.hotelId}
            price={currentCombo.price}
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
