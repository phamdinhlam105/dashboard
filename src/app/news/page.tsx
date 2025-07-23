"use client";
import Header from "@/components/header/header";
import NewsList from "./news-list";
import { useLoginAuth } from "@/components/api/login-auth";

export default function NewsPage() {
  useLoginAuth();
  return (
    <>
      <Header title="Tin tức" />
      <NewsList />
    </>
  );
}
