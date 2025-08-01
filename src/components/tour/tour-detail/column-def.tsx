import { ColumnDef } from "@tanstack/react-table";
import ColumnHeader from "@/components/table/column-header";
import ActionCell from "@/components/table/action-cell";
import SelectHeader from "@/components/table/select-header";
import SelectCell from "@/components/table/select-cell";
import { TourItemList } from "../model/tour-model";
import Link from "next/link";
import { formatDateTime } from "@/lib/datetime-format";

export const getTourColumns = ({
  onDelete,
}: {
  onDelete: (idRow: string) => void;
}): ColumnDef<TourItemList>[] => [
  {
    id: "select",
    header: ({ table }) => <SelectHeader table={table} />,
    cell: ({ row }) => <SelectCell row={row} />,
  },
  {
    accessorKey: "name",
    header: ({ column }) => <ColumnHeader column={column} title="Tên tour" />,
    cell: ({ row }) => (
      <Link
        href={`/tour/detail?id=${row.original.id}`}
        className="font-medium truncate"
      >
        {row.getValue("name")}
      </Link>
    ),
  },

  {
    accessorKey: "updatedAt",
    header: ({ column }) => (
      <ColumnHeader column={column} title="Cập nhật" />
    ),
    cell: ({ row }) => (
      <div className="font-medium text-sm text-gray-400 flex justify-center">
        {formatDateTime(row.getValue("updatedAt"))}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => <ColumnHeader column={column} title="Trạng thái" />,
    cell: ({ row }) => (
      <div className="w-23 font-medium mx-auto flex justify-center">
        <p
          className={`px-2 bg-gray-100 rounded-md dark:bg-slate-900
            ${row.original.status == 1 ? "text-green-600" : "text-red-600"}
                `}
        >
          {row.original.status == 1 ? "Đang hoạt động" : "Dừng hoạt động"}
        </p>
      </div>
    ),
  },
  {
    accessorKey: "price",
    header: ({ column }) => <ColumnHeader column={column} title="Giá" />,
    cell: ({ row }) => (
      <div className="flex justify-end font-medium">
        {parseInt(row.original.price).toLocaleString("vi-VN")}
      </div>
    ),
  },
  {
    id: "actions",
    header: () => (
      <div className="flex justify-center w-24 text-sm">Hành động</div>
    ),
    cell: ({ row }) => {
      return (
        <div className="flex justify-center">
          <ActionCell idRow={row.original.id} onDelete={onDelete} />
        </div>
      );
    },
  },
];
