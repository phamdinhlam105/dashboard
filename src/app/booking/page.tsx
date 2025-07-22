"use client";
import Header from "@/components/header/header";
import BookingList from "./booking-list";
import { loginAuth } from "@/components/api/login-auth";

export default function BookingPage() {
  loginAuth();
  return (
    <>
      <Header title="Danh sách đặt tour" />
      <BookingList />
    </>
  );
}
