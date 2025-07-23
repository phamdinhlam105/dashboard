"use client";

import Header from "@/components/header/header";
import { Suspense } from "react";
import { useLoginAuth } from "@/components/api/login-auth";
import PostDetailBody from "./detail-body";

export default function PostDetailPage() {
  useLoginAuth();
  return (
    <>
      <Header title="Tin tức mới" />
      <Suspense fallback={<div>Đang tải...</div>}>
        <PostDetailBody />
      </Suspense>
      ;
    </>
  );
}
