"use client";
import Header from "@/components/header/header";
import BookingList from "./booking-list";
import { useLoginAuth } from "@/components/api/login-auth";

export default function BookingPage() {
  useLoginAuth();
  return (
    <>
      <Header title="Danh sách đặt tour" />
      <BookingList />
    </>
  );
}
