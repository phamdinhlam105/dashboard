import { ColumnDef } from "@tanstack/react-table";
import ColumnHeader from "@/components/table/column-header";
import SelectHeader from "@/components/table/select-header";
import SelectCell from "@/components/table/select-cell";
import Link from "next/link";
import { BookingModel } from "./booking-model";

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
        className="font-medium truncate"
      >
        {row.original.customerName}
      </Link>
    ),
  },

  {
    accessorKey: "bookingDate",
    header: ({ column }) => <ColumnHeader column={column} title="Ngày đặt" />,
    cell: ({ row }) => (
      <div className="font-medium text-gray-400 w-20">
        {row.getValue("bookingDate")}
      </div>
    ),
  },
  {
    accessorKey: "numberOfPerson",
    header: ({ column }) => <ColumnHeader column={column} title="Số khách" />,
    cell: ({ row }) => (
      <div className="font-medium text-center text-gray-400 w-20">
        {row.getValue("numberOfPerson")}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => <ColumnHeader column={column} title="Trạng thái" />,
    cell: ({ row }) => (
      <div className="w-23 font-medium mx-auto">
        {row.original.isFinished ? (
          <span className="text-green-500">Hoàn thành</span>
        ) : row.original.isOrdered ? (
          <span className="text-yellow-500">Đã đặt</span>
        ) : (
          <span className="text-red-500">Chưa đặt</span>
        )}
      </div>
    ),
  },
  {
    accessorKey: "tourBooking",
    header: ({ column }) => <ColumnHeader column={column} title="Tour" />,
    cell: ({ row }) => (
      <div className="w-28 font-medium flex flex-col">
        {row.original.tourName?.map((tour) => (
          <span key={tour} className="text-gray-400 truncate w-40">
            - {tour}
          </span>
        ))}
        {row.original.tourName?.length == 0 && (
          <span className="text-gray-400">Không có tour</span>
        )}
      </div>
    ),
  },
  {
    accessorKey: "hotelBooking",
    header: ({ column }) => <ColumnHeader column={column} title="Khách sạn" />,
    cell: ({ row }) => (
      <div className="w-28 font-medium flex flex-col">
        {row.original.hotelName?.map((tour) => (
          <span key={tour} className="text-gray-400 truncate w-40">
            - {tour}
          </span>
        ))}
        {row.original.hotelName?.length == 0 && (
          <span className="text-gray-400">Không có khách san</span>
        )}
      </div>
    ),
  },
  {
    accessorKey: "comboBooking",
    header: ({ column }) => <ColumnHeader column={column} title="Combo" />,
    cell: ({ row }) => (
      <div className="w-28 font-medium flex flex-col">
        {row.original.comboName?.map((tour) => (
          <span key={tour} className="text-gray-400 truncate w-40">
            - {tour}
          </span>
        ))}
        {row.original.comboName?.length == 0 && (
          <span className="text-gray-400">Không có combo</span>
        )}
      </div>
    ),
  },
];
