import { ColumnDef } from "@tanstack/react-table";
import ColumnHeader from "@/components/table/column-header";
import SelectHeader from "@/components/table/select-header";
import SelectCell from "@/components/table/select-cell";
import Link from "next/link";
import { BookingModel } from "./booking-model";
import ActionCell from "@/components/table/action-cell";
import { CircleCheck, CirclePlus, UserCheck } from "lucide-react";

export const getBookingColumns = ({
  onDelete,
}: {
  onDelete: (idRow: string) => void;
}): ColumnDef<BookingModel>[] => [
  {
    id: "select",
    header: ({ table }) => <SelectHeader table={table} />,
    cell: ({ row }) => <SelectCell row={row} />,
  },
  {
    accessorKey: "customerName",
    header: ({ column }) => <ColumnHeader column={column} title="Tên khách" />,
    cell: ({ row }) => (
      <Link
        href={`/tour/detail/${row.original.id}`}
        className="font-medium w-40"
      >
        {row.original.customerName}
      </Link>
    ),
  },

  {
    accessorKey: "bookingDate",
    header: ({ column }) => <ColumnHeader column={column} title="Ngày đặt" />,
    cell: ({ row }) => (
      <div className="font-medium text-gray-400 flex justify-center">
        {row.original.bookingDate}
      </div>
    ),
  },
  {
    accessorKey: "phone",
    header: ({ column }) => (
      <ColumnHeader column={column} title="Số điện thoại" />
    ),
    cell: ({ row }) => (
      <div className="font-medium flex items-center justify-center">{row.original.phoneNumber}</div>
    ),
  },
  {
    accessorKey: "numberOfPerson",
    header: ({ column }) => <ColumnHeader column={column} title="Số khách" />,
    cell: ({ row }) => (
      <div className="font-medium text-center text-gray-400 w-fit">
        {row.getValue("numberOfPerson")}
      </div>
    ),
  },
  {
    accessorKey: "bookingItem",
    header: ({ column }) => (
      <ColumnHeader column={column} title="Các chương trình" />
    ),
    cell: ({ row }) => (
      <div className="font-medium text-sm w-80 whitespace-normal break-words">
        <p className="font-bold">Tour:</p>
        {row.original.tourName?.map((tour) => (
          <p key={tour} className="text-gray-400">
            - {tour}
          </p>
        ))}
          <p className="font-bold">Khách sạn:</p>
        {row.original.hotelName?.map((tour) => (
          <p key={tour} className="text-gray-400">
            - {tour}
          </p>
        ))}
          <p className="font-bold">Combo:</p>
        {row.original.comboName?.map((tour) => (
          <p key={tour} className="text-gray-400">
            - {tour}
          </p>
        ))}
      </div>
    ),
  },

  {
    accessorKey: "action",
    header: ({ column }) => <ColumnHeader column={column} title="Hành động" />,
    cell: ({ row }) => (
      <div className="flex justify-center font-medium items-center">
        {row.original.isFinished ? (
          <span className="text-neutral-500">
            <UserCheck />
          </span>
        ) : row.original.isOrdered ? (
          <span className="text-yellow-500">
            <CircleCheck />
          </span>
        ) : (
          <span className="text-green-500">
            <CirclePlus />
          </span>
        )}
        <ActionCell idRow={row.original.id} onDelete={onDelete} />
      </div>
    ),
  },
];
