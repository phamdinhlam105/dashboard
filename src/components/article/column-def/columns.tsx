
import { ColumnDef } from "@tanstack/react-table"
import ColumnHeader from "@/components/table/column-header"
import ActionCell from "@/components/table/action-cell"
import SelectHeader from "@/components/table/select-header"
import SelectCell from "@/components/table/select-cell"
import { PostItemList } from "../model/article-model"
import { PostStatus } from "@/components/api/enum"
import { formatDateTime } from "@/lib/datetime-format"
import Link from "next/link"


export const getArticleColumns = ({ onDelete }: { onDelete: (idRow: string) => void }): ColumnDef<PostItemList>[] => [
    {
        id: "select",
        header: ({ table }) => <SelectHeader table={table} />,
        cell: ({ row }) => <SelectCell row={row} />
    },
    {
        accessorKey: "title",
        header: ({ column }) => <ColumnHeader column={column} title="Tiêu đề" />
        ,
        cell: ({ row }) => <div className=" font-medium truncate"><Link href={`/news/detail?id=${row.original.id}`}>{row.getValue("title")}</Link> </div>
    },

    {
        accessorKey: "updatedAt",
        header: ({ column }) => <ColumnHeader column={column} title="Ngày tạo" />,
        cell: ({ row }) => <div className="font-medium text-gray-400 w-20">{formatDateTime(row.getValue("updatedAt"))}</div>
    },
    {
        accessorKey: "status",
        header: ({ column }) => <ColumnHeader column={column} title="Trạng thái" />,
        cell: ({ row }) => <div className="w-23 font-medium mx-auto flex justify-center">
            <p className={`px-2 bg-gray-100 rounded-md dark:bg-slate-900
            ${row.original.status === PostStatus.Published ?
                    'text-green-600' :
                    row.original.status === PostStatus.Deleted ?
                        'text-red-600' :
                        'text-yellow-600'
                }`}>{PostStatus[`${row.original.status}`]}</p>
        </div>
    },
    {
        accessorKey: "author",
        header: ({ column }) => <ColumnHeader column={column} title="Tác giả" />,
        cell: ({ row }) => <div className="w-28 font-medium">{row.getValue("author")}</div>
    },
    {
        id: "actions",
        header: () => <div className="flex justify-center w-24 text-sm">Hành động</div>,
        cell: ({ row }) => {
            return <ActionCell idRow={row.original.id} onDelete={onDelete} />
        },
    },
]