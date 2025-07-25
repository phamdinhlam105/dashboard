"use client";

import { useLoginAuth } from "@/components/api/login-auth";
import Header from "@/components/header/header";
import ComboDetailBody from "./combo-body";
import { Suspense } from "react";

export default function ComboDetailPage() {
  useLoginAuth();
  return (
    <>
      <Header title="Chi tiết Combo" />
      <Suspense fallback={<div>Đang tải...</div>}>
        <ComboDetailBody />
      </Suspense>
    </>
  );
}
