"use client";
import { useLoginAuth } from "@/components/api/login-auth";
import Header from "@/components/header/header";
import HotelList from "./hotel-list";

export default function HotelPage() {
  useLoginAuth();
  return (
    <>
      <Header title="Khách sạn" />
      <HotelList />
    </>
  );
}
