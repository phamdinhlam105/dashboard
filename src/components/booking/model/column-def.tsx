
import { ColumnDef } from "@tanstack/react-table"
import ColumnHeader from "@/components/table/column-header"
import SelectHeader from "@/components/table/select-header"
import SelectCell from "@/components/table/select-cell"
import Link from "next/link"
import { BookingModel } from "./booking-model"


export const getBookingColumns = ({ onDelete }: { onDelete: (idRow: string) => void }): ColumnDef<BookingModel>[] => [
    {
        id: "select",
        header: ({ table }) => <SelectHeader table={table} />,
        cell: ({ row }) => <SelectCell row={row} />
    },
    {
        accessorKey: "customerName",
        header: ({ column }) => <ColumnHeader column={column} title="Tên khách" />,
        cell: ({ row }) => <Link href={`/tour/detail/${row.original.id}`} className="font-medium truncate">{row.original.customerName}</Link>
    },

    {
        accessorKey: "bookingDate",
        header: ({ column }) => <ColumnHeader column={column} title="Ngày đặt" />,
        cell: ({ row }) => <div className="font-medium text-gray-400 w-20">{row.getValue("bookingDate")}</div>
    },
    {
        accessorKey: "numberOfPerson",
        header: ({ column }) => <ColumnHeader column={column} title="Số khách" />,
        cell: ({ row }) => <div className="font-medium text-center text-gray-400 w-20">{row.getValue("numberOfPerson")}</div>
    },
    {
        accessorKey: "status",
        header: ({ column }) => <ColumnHeader column={column} title="Trạng thái" />,
        cell: ({ row }) => <div className="w-23 font-medium mx-auto">
           {row.original.status=="Hoàn thành" ? <span className="text-green-500">Hoàn thành</span> : 
            row.original.status=="Đã đặt" ? <span className="text-yellow-500">Đã đặt</span> : 
            <span className="text-red-500">Chưa đặt</span>}
        </div>
    },
    {
        accessorKey: "booking",
        header: ({ column }) => <ColumnHeader column={column} title="Đã đặt" />,
        cell: ({ row }) => <div className="w-28 font-medium flex flex-col">
            {row.original.tourId ? <span className="text-gray-400">- Tour Id: {row.original.tourId}</span> : <span className="text-gray-400">Chưa có tour</span>}
            {row.original.hotelId ? <span className="text-gray-400">- Hotel Id: {row.original.hotelId}</span> : <span className="text-gray-400">Chưa có khách sạn</span>}
        </div>
    },  
]