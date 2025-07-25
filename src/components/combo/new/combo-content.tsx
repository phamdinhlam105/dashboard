"use client";
import DatePicker from "@/components/date-picker/date-picker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { parseViDateString } from "@/lib/datetime-format";

export default function NewCombo({
  name,
  slug,
  description,
  onChange,
  applyDate,
  endDate,
}: {
  name: string;
  slug: string;
  description: string;
  applyDate: string;
  endDate: string;
  onChange: (field: string, value: string) => void;
}) {
  const applyDateChange = (date: Date | undefined) => {
    if (date) onChange("applyDate", date.toLocaleDateString("vi-VN"));
    else onChange("applyDate", new Date().toLocaleDateString("vi-VN"));
  };
  const endDateChange = (date: Date | undefined) => {
    if (date) onChange("endDate", date.toLocaleDateString("vi-VN"));
    else onChange("applyDate", new Date().toLocaleDateString("vi-VN"));
    console.log(applyDate + endDate);
  };
  return (
    <div className="w-2/3 space-y-3">
      <Label
        htmlFor="name"
        className="block text-xl font-semibold text-gray-700 mb-1"
      >
        Tên combo
      </Label>
      <Input
        id="name"
        required
        className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
        value={name}
        onChange={(e) => onChange("name", e.target.value)}
      />
      <Label
        htmlFor="slug"
        className="block text-xl font-semibold text-gray-700 mb-1"
      >
        Đường dẫn
      </Label>
      <Input
        id="slug"
        required
        className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
        value={slug}
        onChange={(e) => onChange("slug", e.target.value)}
      />
      <Label
        htmlFor="description"
        className="block text-xl font-semibold text-gray-700 mb-1"
      >
        Mô tả
      </Label>
      <textarea
        id="description"
        required
        className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
        value={description}
        onChange={(e) => onChange("description", e.target.value)}
      />
      <div className="flex justify-between">
        {" "}
        <Label
          htmlFor="description"
          className="block text-xl font-semibold text-gray-700 mb-1"
        >
          Ngày bắt đầu
        </Label>
        <DatePicker
          date={parseViDateString(applyDate)}
          onChange={applyDateChange}
        />
      </div>
      <div className="flex justify-between">
        <Label
          htmlFor="description"
          className="block text-xl font-semibold text-gray-700 mb-1"
        >
          Ngày kết thúc
        </Label>
        <DatePicker
          date={parseViDateString(endDate)}
          onChange={endDateChange}
        />
      </div>
    </div>
  );
}
