"use client";
import { DataTable } from "@/components/table/data-table";
import { useEffect, useState } from "react";
import ActionsNavigation from "@/components/table/actions-navigation";
import { TourItemList } from "@/components/tour/model/tour-model";
import { getTourColumns } from "@/components/tour/tour-detail/column-def";
import { deleteTour, getAllTour } from "@/components/api/tour-api";
import { toast } from "sonner";

export default function TourList() {
  const [data, setData] = useState<TourItemList[]>([]);
  const [filteredData, setFilteredData] = useState<TourItemList[]>(data);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchTours = async () => {
    const tours = await getAllTour();
    if (tours) {
      setData(tours);
      setIsLoading(false);
    } else toast.error("Không thể tải dữ liệu");
  };

  useEffect(() => {
    fetchTours();
  }, []);
  useEffect(() => {
    setFilteredData(data);
  }, [data]);
  const onDelete = async (id: string) => {
    const result = await deleteTour(id);
    if (result) {
      toast.success("Đã xoá tour thành công");
      await fetchTours();
    }
    setFilteredData(filteredData.filter((d) => !selectedIds.includes(d.id)));
  };

  const searchTitle = (search: string) => {
    const lowerSearch = search.toLowerCase();
    setFilteredData(
      data.filter((item) => item.name.toLowerCase().includes(lowerSearch))
    );
  };

  const statusFilter = (selectedStatus: number) => {
    setFilteredData(data.filter((item) => item.status == selectedStatus));
  };

  const onSelectionChange = (ids: string[]) => {
    setSelectedIds(ids);
  };

  const columns = getTourColumns({ onDelete });
  return (
    <div className="p-3 w-full dark:bg-black h-full">
      <ActionsNavigation
        searchTitle={searchTitle}
        allStatus={["Ngưng hoạt động", "Đang hoạt động"]}
        searchStatus={statusFilter}
        newItemLink="/tour/new"
      />
      {isLoading ? (
        "Đang tải dữ liệu"
      ) : (
        <DataTable
          columns={columns}
          data={filteredData}
          onDelete={onDelete}
          onSelectionChange={onSelectionChange}
        />
      )}
    </div>
  );
}
