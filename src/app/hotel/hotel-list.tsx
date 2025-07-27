"use client";

import { DataTable } from "@/components/table/data-table";
import { useEffect, useState } from "react";
import ActionsNavigation from "@/components/table/actions-navigation";
import { HotelItemListModel } from "@/components/hotel/model/hotel-model";
import { getHotelColumns } from "@/components/hotel/hotel-detail/column-def";
import { deleteHotel, getAllHotel } from "@/components/api/hotel-api";
import { toast } from "sonner";

export default function HotelList() {
  const [data, setData] = useState<HotelItemListModel[]>([]);
  const [filteredData, setFilteredData] = useState<HotelItemListModel[]>(data);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchHotels = async () => {
    const hotels = await getAllHotel();
    if (hotels) {
      setData(hotels);
      setIsLoading(false);
    } else toast.error("Không thể tải dữ liệu");
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const onDelete = async (id: string) => {
    const result = await deleteHotel(id);
    if (result) {
      toast.success("Xoá khách sạn thành công");
      await fetchHotels();
    }
    setFilteredData(filteredData.filter((d) => !selectedIds.includes(d.id)));
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
        allStatus={["1 sao", "2 sao", "3 sao", "4 sao", "5 sao"]}
        searchStatus={starFilter}
        newItemLink="/hotel/new"
      />
      {!isLoading ? (
        <DataTable
          columns={columns}
          data={filteredData}
          onDelete={onDelete}
          onSelectionChange={onRowSelectionChange}
        />
      ) : (
        "Đang tải dữ liệu"
      )}
    </div>
  );
}
