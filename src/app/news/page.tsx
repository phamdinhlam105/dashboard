"use client";
import Header from "@/components/header/header";
import NewsList from "./news-list";
import { loginAuth } from "@/components/api/login-auth";

export default function NewsPage() {
  loginAuth();
  return (
    <>
      <Header title="Tin tức" />
      <NewsList />
    </>
  );
}
