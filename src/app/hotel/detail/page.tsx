"use client";
import { useLoginAuth } from "@/components/api/login-auth";
import Header from "@/components/header/header";
import HotelDetailBody from "./detail-body";
import { Suspense } from "react";

export default function HotelDetailPage() {
  useLoginAuth();
  return (
    <>
      <Header title="Chi tiết khách sạn" />
      <Suspense fallback={<div>Đang tải...</div>}>
        <HotelDetailBody />
      </Suspense>
    </>
  );
}
