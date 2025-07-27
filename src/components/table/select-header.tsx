import { Table } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";

interface SelectHeaderProps<TData> {
  table: Table<TData>;
}

export default function SelectHeader<TData>({
  table,
}: SelectHeaderProps<TData>) {
  return (
    <div className="flex justify-between items-center">
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    </div>
  );
}
