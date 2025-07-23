"use client";
import Header from "@/components/header/header";
import ComboList from "./combo-list";
import { useLoginAuth } from "@/components/api/login-auth";

export default function ComboPage() {
  useLoginAuth();
  return (
    <>
      <Header title="Combo" />
      <ComboList />
    </>
  );
}
