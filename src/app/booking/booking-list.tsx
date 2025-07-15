"use client";

import BookingAction from "@/components/booking/action/booking-action";
import { BOOKING_MOCK_DATA } from "@/components/booking/mock-data/booking-data";
import { BookingModel } from "@/components/booking/model/booking-model";
import { getBookingColumns } from "@/components/booking/model/column-def";
import { DataTable } from "@/components/table/data-table";
import { useState } from "react";

export default function BookingList() {
  const [bookings, setBookings] = useState<BookingModel[]>(BOOKING_MOCK_DATA);
  const [filteredData, setFilteredData] = useState<BookingModel[]>(bookings);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const handleDelete = (idRow: string) => {
    setBookings((prev) => prev.filter((booking) => booking.id !== idRow));
  };
  const onRowSelectionChange = (ids: string[]) => {
    setSelectedIds(ids);
  };

  const filterByStatus = (status: string) => {
    if(status=='')
        setFilteredData(bookings);
    else
        setFilteredData(bookings.filter((b) => b.status == status));
    };

  const columns = getBookingColumns({ onDelete: handleDelete });
  return (
    <div className="p-3 w-full dark:bg-black h-full">
      <BookingAction data={BOOKING_MOCK_DATA} filterByStatus={filterByStatus}/>
      <DataTable
        columns={columns}
        data={filteredData}
        onDelete={handleDelete}
        onSelectionChange={onRowSelectionChange}
      />
    </div>
  );
}
