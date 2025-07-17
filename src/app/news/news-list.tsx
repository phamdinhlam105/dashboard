"use client";
import { ARTICLE_LIST } from "@/components/article/constants/article.constants";
import { DataTable } from "@/components/table/data-table";
import { getArticleColumns } from "@/components/article/column-def/columns";
import { useState } from "react";
import ActionsNavigation from "@/components/table/actions-navigation";
import { Article } from "@/components/article/model/article-model";
import { PostStatus } from "@/components/api/enum";

export default function NewsList() {
  const [data, setData] = useState(ARTICLE_LIST);
  const [filteredData, setFilteredData] = useState<Article[]>(ARTICLE_LIST);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const onDelete = (id: string) => {};

  const searchTitle = (search: string) => {
    const lowerSearch = search.toLowerCase();
    setFilteredData(
      data.filter((item) => item.title.toLowerCase().includes(lowerSearch))
    );
  };

  const statusFilter = (selectedStatus: number) => {
    
    setFilteredData(data.filter((item) => item.status == selectedStatus));
  };
  const onRowSelectionChange = (ids: string[]) => {
    setSelectedIds(ids);
  };

  const columns = getArticleColumns({ onDelete });
  return (
    <div className="p-3 w-full dark:bg-black h-full">
      <ActionsNavigation
        searchTitle={searchTitle}
        onDelete={onDelete}
        allStatus={["Bản thảo","Đã xuất bản","Đã xoá"]}
        searchStatus={statusFilter}
        newItemLink="/news/new"
      />
      <DataTable
        columns={columns}
        data={filteredData}
        onDelete={onDelete}
        onSelectionChange={onRowSelectionChange}
      />
    </div>
  );
}
