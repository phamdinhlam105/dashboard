import { ColumnDef } from "@tanstack/react-table";
import ColumnHeader from "@/components/table/column-header";
import ActionCell from "@/components/table/action-cell";
import SelectHeader from "@/components/table/select-header";
import SelectCell from "@/components/table/select-cell";
import { formatDateOnly } from "@/lib/datetime-format";
import Link from "next/link";
import { ComboItemList } from "../model/combo-model";

export const getComboColumns = ({
  onDelete,
}: {
  onDelete: (idRow: string) => void;
}): ColumnDef<ComboItemList>[] => [
  {
    id: "select",
    header: ({ table }) => <SelectHeader table={table} />,
    cell: ({ row }) => <SelectCell row={row} />,
  },
  {
    accessorKey: "name",
    header: ({ column }) => <ColumnHeader column={column} title="Tên combo" />,
    cell: ({ row }) => (
      <div className=" font-medium truncate">
        <Link href={`/news/combo?id=${row.original.id}`}>
          {row.original.name}
        </Link>{" "}
      </div>
    ),
  },

  {
    accessorKey: "dateApply",
    header: ({ column }) => (
      <ColumnHeader column={column} title="Ngày áp dụng" />
    ),
    cell: ({ row }) => (
      <div className="font-medium text-gray-400 w-20">
        {formatDateOnly(new Date(row.original.applyDate))} -
        {formatDateOnly(new Date(row.original.endDate))}{" "}
      </div>
    ),
  },
  {
    accessorKey: "hotel",
    header: ({ column }) => <ColumnHeader column={column} title="Khách sạn" />,
    cell: ({ row }) => (
      <div className="w-23 font-medium mx-auto flex justify-center">
        {row.original.hotelId ? row.original.hotelName : "Không có khách sạn"}
      </div>
    ),
  },
  {
    accessorKey: "tour",
    header: ({ column }) => <ColumnHeader column={column} title="Tour" />,
    cell: ({ row }) => (
      <div className="w-28 font-medium">
        {row.original.tourId ? row.original.tourName : "Không có tour"}
      </div>
    ),
  },
  {
    id: "actions",
    header: () => (
      <div className="flex justify-center w-24 text-sm">Hành động</div>
    ),
    cell: ({ row }) => {
      return <ActionCell idRow={row.original.id} onDelete={onDelete} />;
    },
  },
];
