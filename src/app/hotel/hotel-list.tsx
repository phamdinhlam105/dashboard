"use client";

import { DataTable } from "@/components/table/data-table";
import { useEffect, useState } from "react";
import ActionsNavigation from "@/components/table/actions-navigation";
import { HOTEL_MOCK_DATA } from "@/components/hotel/mock-data/hotel-data";
import { HotelModel } from "@/components/hotel/model/hotel-model";
import { getHotelColumns } from "@/components/hotel/hotel-detail/column-def";
import { getAllHotel } from "@/components/api/hotel-api";

export default function HotelList() {
  const [data, setData] = useState(HOTEL_MOCK_DATA);
  const [filteredData, setFilteredData] =
    useState<HotelModel[]>(HOTEL_MOCK_DATA);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  useEffect(() => {
    const fetchHotels = async () => {
      const tours = await getAllHotel();
      if (tours) setData(tours);
    };
    fetchHotels();
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

  const starFilter = (star: number) => {
    setFilteredData(data.filter((item) => item.star == star + 1));
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
        allStatus={["1 sao", "2 sao", "3 sao", "4 sao", "5 sao"]}
        searchStatus={starFilter}
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
