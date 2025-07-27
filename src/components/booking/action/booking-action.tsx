import { BookingModel } from "../model/booking-model";
import ExportWithXLSX from "./export-excel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { CircleCheck, CirclePlus, UserCheck } from "lucide-react";

export default function BookingAction({
  data,
  bookingExport,
  filterByStatus,
}: {
  data: BookingModel[];
  filterByStatus: (status: string) => void;
  bookingExport: () => void;
}) {
  return (
    <div className="p-4 flex space-x-4">
      <ExportWithXLSX data={data} bookingExport={bookingExport} />
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
                className="w-full flex justify-start"
                key={item}
                onClick={() => filterByStatus(item)}
              >
                {item == "Hoàn thành" && <UserCheck  className="text-neutral-500"/>}
                {item == "Đã đặt" && <CircleCheck  className="text-yellow-500"/>}
                {item == "Chưa đặt" && <CirclePlus className="text-green-500"/>}
                <p>{item}</p>
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
