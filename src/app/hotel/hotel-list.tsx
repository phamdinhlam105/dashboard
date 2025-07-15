"use client";

import { DataTable } from "@/components/table/data-table";
import { useState } from "react";
import ActionsNavigation from "@/components/table/actions-navigation";
import { HOTEL_MOCK_DATA } from "@/components/hotel/mock-data/hotel-data";
import { HotelModel } from "@/components/hotel/model/hotel-model";
import { getHotelColumns } from "@/components/hotel/hotel-detail/column-def";

export default function HotelList() {
  const [data, setData] = useState(HOTEL_MOCK_DATA);
  const [filteredData, setFilteredData] =
    useState<HotelModel[]>(HOTEL_MOCK_DATA);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
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

  const statusFilter = (selectedStatus: string) => {
    const lowerSearch = selectedStatus.toLowerCase();
    setFilteredData(
      data.filter((item) =>
        item.star.toString().toLowerCase().includes(lowerSearch)
      )
    );
  };
  const onRowSelectionChange = (ids: string[]) => {
    setSelectedIds(ids);
  };

  const columns = getHotelColumns({ onDelete });
  return (
    <div className="p-3 w-full dark:bg-black h-full">
      <ActionsNavigation
        searchTitle={searchTitle}
        onDelete={onDelete}
        allStatus={["1", "2", "3", "4", "5"]}
        searchStatus={statusFilter}
        newItemLink="/hotel/new"
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
