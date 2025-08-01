"use client"
import { useLoginAuth } from "@/components/api/login-auth";
import Header from "@/components/header/header";
import FileBody from "./file-body";

export default function FilePage() {
  useLoginAuth();
  return (
    <>
      <Header title="Quản lý tệp" />
      <FileBody />
    </>
  );
}
