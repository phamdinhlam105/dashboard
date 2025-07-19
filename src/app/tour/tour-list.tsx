"use client";
import { DataTable } from "@/components/table/data-table";
import { useEffect, useState } from "react";
import ActionsNavigation from "@/components/table/actions-navigation";
import { TourItemList, TourModel } from "@/components/tour/model/tour-model";
import { TOUR_MOCK_DATA } from "@/components/tour/mock-data/tour-data";
import { getTourColumns } from "@/components/tour/tour-detail/column-def";
import { getAllTour } from "@/components/api/tour-api";
import { toast } from "sonner";

export default function TourList() {
  const [data, setData] = useState<TourItemList[]>([]);
  const [filteredData, setFilteredData] = useState<TourItemList[]>(data);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchTours = async () => {
      const tours = await getAllTour();
      if (tours) {
        setData(tours);
        setIsLoading(false);
      } else toast.error("Không thể tải dữ liệu");
    };
    fetchTours();
  }, []);
  useEffect(() => {
    setFilteredData(data);
  }, [data]);
  const onDelete = (id: string) => {
    setData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: 0 } : item))
    );
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
        onDelete={onDelete}
        allStatus={["unavailable", "available"]}
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
