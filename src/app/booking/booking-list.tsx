"use client";

import { getAllBooking } from "@/components/api/booking-api";
import BookingAction from "@/components/booking/action/booking-action";
import { BookingModel } from "@/components/booking/model/booking-model";
import { getBookingColumns } from "@/components/booking/model/column-def";
import { DataTable } from "@/components/table/data-table";
import { useEffect, useState } from "react";

export default function BookingList() {
  const [bookings, setBookings] = useState<BookingModel[]>([]);
  const [filteredData, setFilteredData] = useState<BookingModel[]>(bookings);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllBooking();
      if (result) setBookings(result);
    };
    fetchData();
  }, []);
  useEffect(() => {
    setFilteredData(bookings);
  }, [bookings]);
  
  const handleDelete = (idRow: string) => {
    setBookings((prev) => prev.filter((booking) => booking.id !== idRow));
  };
  const onRowSelectionChange = (ids: string[]) => {
    setSelectedIds(ids);
  };

  const filterByStatus = (status: string) => {
    if (status == "") setFilteredData(bookings);
    if (status == "Hoàn thành")
      setFilteredData(bookings.filter((b) => b.isFinished));
    if (status == "Đã đặt")
      setFilteredData(bookings.filter((b) => b.isOrdered));
    if (status == "Chưa đặt")
      setFilteredData(bookings.filter((b) => !b.isOrdered));
  };

  const columns = getBookingColumns({ onDelete: handleDelete });
  return (
    <div className="p-3 w-full dark:bg-black h-full">
      <BookingAction data={bookings} filterByStatus={filterByStatus} />
      <DataTable
        columns={columns}
        data={filteredData}
        onDelete={handleDelete}
        onSelectionChange={onRowSelectionChange}
      />
    </div>
  );
}
