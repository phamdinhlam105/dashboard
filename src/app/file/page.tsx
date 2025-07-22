"use client"
import { loginAuth } from "@/components/api/login-auth";
import Header from "@/components/header/header";
import FileBody from "./file-body";

export default function FilePage() {
  loginAuth();
  return (
    <>
      <Header title="Quản lý tệp" />
      <FileBody />
    </>
  );
}
