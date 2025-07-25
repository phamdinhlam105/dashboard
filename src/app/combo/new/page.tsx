"use client";

import { useLoginAuth } from "@/components/api/login-auth";
import NewCombo from "@/components/combo/new/combo-content";
import { ComboModel } from "@/components/combo/model/combo-model";
import Header from "@/components/header/header";
import { useState } from "react";
import NewComboAdditionalDetail from "@/components/combo/new/combo-additional";
import {
  addNewCombo,
  ComboRequest,
  getComboById,
} from "@/components/api/combo-api";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { parseViDateString } from "@/lib/datetime-format";

export default function NewComboPage() {
  useLoginAuth();

  const [newCombo, setNewCombo] = useState<ComboModel>({
    id: "",
    name: "",
    slug: "",
    description: "",
    applyDate: "",
    price: "",
    endDate: "",
    transportation: "",
    tourId: "",
    hotelId: "",
    view: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (field: string, value: string | string[]) => {
    setNewCombo((prev) => ({ ...prev, [field]: value }));
    setIsLoading(false);
  };
  const saveChange = async () => {
    const request: ComboRequest = {
      ...newCombo,
    };
    const startDate = parseViDateString(newCombo.applyDate) ?? new Date();
    const endDate = parseViDateString(newCombo.endDate) ?? new Date();
    if (startDate > endDate) {
      toast.error("Ngày bắt đầu ko thể sau ngày kết thúc");
      return;
    }
    const res = await addNewCombo(request);
    if (res) toast.success("Tạo combo thành công");
    else toast.error("Tạo combo thất bại");
  };

  return (
    <>
      <Header title="Tạo Combo mới" />
      {isLoading ? (
        "Đang tải dữ liệu"
      ) : (
        <div className="p-4 flex space-x-4">
          <NewCombo
            name={newCombo.name}
            slug={newCombo.slug}
            description={newCombo.description}
            onChange={onChange}
            applyDate={newCombo.applyDate}
            endDate={newCombo.endDate}
          />
          <NewComboAdditionalDetail
            transportation={newCombo.transportation}
            tourId={newCombo.tourId}
            hotelId={newCombo.hotelId}
            price={newCombo.price}
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
