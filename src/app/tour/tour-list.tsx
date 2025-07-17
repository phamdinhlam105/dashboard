"use client";
import { DataTable } from "@/components/table/data-table";
import { useEffect, useState } from "react";
import ActionsNavigation from "@/components/table/actions-navigation";
import { TourModel } from "@/components/tour/model/tour-model";
import { TOUR_MOCK_DATA } from "@/components/tour/mock-data/tour-data";
import { getTourColumns } from "@/components/tour/tour-detail/column-def";
import { getAllTour } from "@/components/api/tour-api";

export default function TourList() {
  const [data, setData] = useState(TOUR_MOCK_DATA);
  const [filteredData, setFilteredData] = useState<TourModel[]>(TOUR_MOCK_DATA);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  useEffect(() => {
    const fetchTours = async () => {
      const tours = await getAllTour();
      if (tours) setData(tours);
    };

    fetchTours();
  }, []);
  const onDelete = (id: string) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "deleted" } : item
      )
    );
  };

  const searchTitle = (search: string) => {
    const lowerSearch = search.toLowerCase();
    setFilteredData(
      data.filter((item) => item.name.toLowerCase().includes(lowerSearch))
    );
  };

  const statusFilter = (selectedStatus: number) => {
    const available = selectedStatus === 1;
    setFilteredData(data.filter((item) => item.isAvailable == available));
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
      <DataTable
        columns={columns}
        data={filteredData}
        onDelete={onDelete}
        onSelectionChange={onSelectionChange}
      />
    </div>
  );
}
