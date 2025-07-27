import { Row } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";

interface SelectCellProps<TData> {
    row: Row<TData>
}

export default function SelectCell<TData>({row}:SelectCellProps<TData>){

    return (
        <div className="items-center flex justify-between">
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        </div>
    )
}
