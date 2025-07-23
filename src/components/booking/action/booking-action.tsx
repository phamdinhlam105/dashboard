import { BookingModel } from "../model/booking-model";
import ExportWithXLSX from "./export-excel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function BookingAction({
  data,
  filterByStatus,
}: {
  data: BookingModel[];
  filterByStatus: (status: string) => void;
}) {
  return (
    <div className="p-4 flex space-x-4">
      <ExportWithXLSX data={data} />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="p-4">
            Bộ lọc
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="bottom"
          align="start"
          className="shadow-md rounded-md"
        >
          <div className="flex flex-col items-start">
            {["Hoàn thành", "Đã đặt", "Chưa đặt"].map((item) => (
              <Button
                variant="ghost"
                className="w-full"
                key={item}
                onClick={() => filterByStatus(item)}
              >
                {item}
              </Button>
            ))}
            <Button
              variant="ghost"
              className="w-full"
              onClick={() => filterByStatus("")}
            >
              Mặc định
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
