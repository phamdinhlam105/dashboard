"use client";
import { useLoginAuth } from "@/components/api/login-auth";
import Header from "@/components/header/header";
import TourDetailBody from "./detail-body";
import { Suspense } from "react";

export default function TourDetailPage() {
  useLoginAuth();
  return (
    <>
      <Header title="Chi tiết tour" />
      <Suspense fallback={<div>Đang tải...</div>}>
        <TourDetailBody />
      </Suspense>
    </>
  );
}
