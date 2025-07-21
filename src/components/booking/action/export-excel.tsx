"use client";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { BookingModel } from "../model/booking-model";
import { Button } from "@/components/ui/button";

export default function ExportWithXLSX({ data }: { data: BookingModel[] }) {
  const handleExport = () => {
    const formattedData = data.map((item, index) => ({
      STT: index + 1,
      "Tên khách": item.customerName,
      SĐT: item.phoneNumber,
      "Số lượng khách": item.numberOfPerson,
      "Ngày đặt": item.bookingDate,
      Tour: Array.isArray(item.tourName)
        ? item.tourName.join(" - \n")
        : item.tourName ?? "N/A",
      Hotel: Array.isArray(item.hotelName)
        ? item.hotelName.join(" - \n")
        : item.hotelName ?? "N/A",
      Combo: Array.isArray(item.comboName)
        ? item.comboName.join(" - \n")
        : item.comboName ?? "N/A",
    }));

    const worksheet = XLSX.utils.json_to_sheet(formattedData);

    // ✅ Tăng chiều rộng cột
    const columnWidths = [
      { wch: 5 }, // STT
      { wch: 25 }, // Tên khách
      { wch: 15 }, // SĐT
      { wch: 15 }, // Số lượng khách
      { wch: 20 }, // Ngày đặt
      { wch: 50 }, // Tour Name
      { wch: 50 }, // Hotel Name
      { wch: 50 }, // Combo Name
    ];
    worksheet["!cols"] = columnWidths;

    const workbook = XLSX.utils.book_new();

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    const dateString = `${dd}-${mm}-${yyyy}`;

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      `Danh sách ${dateString} `
    );

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    saveAs(blob, `booking ${dateString}.xlsx`);
  };

  return (
    <Button onClick={handleExport} variant="outline">
      Xuất Excel bằng SheetJS
    </Button>
  );
}
