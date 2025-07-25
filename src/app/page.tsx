"use client";
import { useLoginAuth } from "@/components/api/login-auth";
import Header from "@/components/header/header";
import BannerChange from "@/components/homepage/banner";

export default function Home() {
  useLoginAuth();
  return (
    <>
      <Header title={"Trang chủ"} />
      <div className="p-4">
        <BannerChange />
      </div>
    </>
  );
}
