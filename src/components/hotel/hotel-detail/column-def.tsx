
import { ColumnDef } from "@tanstack/react-table"
import ColumnHeader from "@/components/table/column-header"
import ActionCell from "@/components/table/action-cell"
import SelectHeader from "@/components/table/select-header"
import SelectCell from "@/components/table/select-cell"
import { HotelItemListModel } from "../model/hotel-model"
import Link from "next/link"
import { formatDateTime } from "@/lib/datetime-format"


export const getHotelColumns = ({ onDelete }: { onDelete: (idRow: string) => void }): ColumnDef<HotelItemListModel>[] => [
    {
        id: "select",
        header: ({ table }) => <SelectHeader table={table} />,
        cell: ({ row }) => <SelectCell row={row} />
    },
    {
        accessorKey: "name",
        header: ({ column }) => <ColumnHeader column={column} title="Tên khách sạn" />,
        cell: ({ row }) => <Link href={`/hotel/detail/${row.original.id}`} className="font-medium truncate">{row.getValue("name")}</Link>
    },

    {
        accessorKey: "updatedAt",
        header: ({ column }) => <ColumnHeader column={column} title="Ngày cập nhật" />,
        cell: ({ row }) => <div className="font-medium text-gray-400 w-20">{formatDateTime(row.getValue("updatedAt"))}</div>
    },
    {
        accessorKey: "star",
        header: ({ column }) => <ColumnHeader column={column} title="Sao" />,
        cell: ({ row }) => <div className="w-23 font-medium mx-auto flex justify-center">
           <div className="font-medium text-gray-400 w-20 text-center">{row.getValue("star")}</div>
        </div>
    },
    {
        accessorKey: "price",
        header: ({ column }) => <ColumnHeader column={column} title="Giá" />,
        cell: ({ row }) => <div className="w-28 font-medium text-center">{row.getValue("price")}</div>
    },  
    {
        accessorKey: "roomNumber",
        header: ({ column }) => <ColumnHeader column={column} title="Số phòng" />,
        cell: ({ row }) => <div className="w-28 font-medium text-center">{row.original.roomCount}</div>
    },
    {
        id: "actions",
        header: () => <div className="flex justify-center w-24 text-sm">Hành động</div>,
        cell: ({ row }) => {
            return <ActionCell idRow={row.original.id} onDelete={onDelete} />
        },
    },
]