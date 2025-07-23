import { Table } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";

interface SelectHeaderProps<TData> {
  table: Table<TData>;
}

export default function SelectHeader<TData>({
  table,
}: SelectHeaderProps<TData>) {
  return (
    <div className="w-8 items-center flex justify-between">
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    </div>
  );
}
