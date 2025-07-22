"use client";
import { loginAuth } from "@/components/api/login-auth";
import Header from "@/components/header/header";
import HotelList from "./hotel-list";

export default function HotelPage() {
  loginAuth();
  return (
    <>
      <Header title="Khách sạn" />
      <HotelList />
    </>
  );
}
