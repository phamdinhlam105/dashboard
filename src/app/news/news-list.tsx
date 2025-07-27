"use client";
import { DataTable } from "@/components/table/data-table";
import { getArticleColumns } from "@/components/article/column-def/columns";
import { useEffect, useState } from "react";
import ActionsNavigation from "@/components/table/actions-navigation";
import { PostItemList } from "@/components/article/model/article-model";
import { deletePost, getAllPost } from "@/components/api/post-api";
import { toast } from "sonner";

export default function NewsList() {
  const [data, setData] = useState<PostItemList[]>([]);
  const [filteredData, setFilteredData] = useState<PostItemList[]>(data);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fecthPost = async () => {
    const result = await getAllPost();
    if (result) {
      setData(result);
      setIsLoading(false);
    } else toast.error("Không thể tải dữ liệu");
  };

  useEffect(() => {
    fecthPost();
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const onDelete = async (id: string) => {
    const result = await deletePost(id);
    if (result) {
      toast.success("Xoá bài viết thành công");
      await fecthPost();
    }
    setFilteredData(filteredData.filter(d=>!selectedIds.includes(d.id)))
  };

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
        allStatus={["Bản thảo", "Đã xuất bản", "Đã xoá"]}
        searchStatus={statusFilter}
        newItemLink="/news/new"
      />
      {isLoading ? (
        "Đang tải dữ liệu"
      ) : (
        <DataTable
          columns={columns}
          data={filteredData}
          onDelete={onDelete}
          onSelectionChange={onRowSelectionChange}
        />
      )}
    </div>
  );
}
