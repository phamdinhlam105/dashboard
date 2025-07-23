"use client";
import { DataTable } from "@/components/table/data-table";
import { useEffect, useState } from "react";
import ActionsNavigation from "@/components/table/actions-navigation";
import { ComboItemList } from "@/components/combo/model/combo-model";
import { getComboColumns } from "@/components/combo/column-def/combo-column";

export default function ComboList() {
  const [data, setData] = useState<ComboItemList[]>([]);
  const [filteredData, setFilteredData] = useState<ComboItemList[]>(data);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
//   useEffect(() => {
//     const fetchTours = async () => {
//       const tours = await getAllTour();
//       if (tours) {
//         setData(tours);
//         setIsLoading(false);
//       } else toast.error("Không thể tải dữ liệu");
//     };
//     fetchTours();
//   }, []);
  useEffect(() => {
    setFilteredData(data);
    setIsLoading(false)
  }, [data]);
  const onDelete = (id: string) => {
    setData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: 0 } : item))
    );
    setData(data.filter(d=>!selectedIds.includes(d.id)))
  };

  const searchTitle = (search: string) => {
    const lowerSearch = search.toLowerCase();
    setFilteredData(
      data.filter((item) => item.name.toLowerCase().includes(lowerSearch))
    );
  };

  const statusFilter = (selectedStatus: number) => {
    if (selectedStatus == 1)
      setFilteredData(
        data.filter(
          (item) =>
            new Date(item.applyDate) <= new Date() &&
            new Date(item.endDate) >= new Date()
        )
      );
  };

  const onSelectionChange = (ids: string[]) => {
    setSelectedIds(ids);
  };

  const columns = getComboColumns({ onDelete });
  return (
    <div className="p-3 w-full dark:bg-black h-full">
      <ActionsNavigation
        searchTitle={searchTitle}
        allStatus={["unavailable", "available"]}
        searchStatus={statusFilter}
        newItemLink="/combo/new"
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
