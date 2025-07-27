"use client";

import { useLoginAuth } from "@/components/api/login-auth";
import PromotionBanner from "@/components/banner/promotion-banner";
import TopBannerEdit from "@/components/banner/top-banner";
import Header from "@/components/header/header";

export default function BannerPage() {
  useLoginAuth();
  return (
    <>
      <Header title="Banner" />
      <TopBannerEdit />
      <PromotionBanner/>
    </>
  );
}
