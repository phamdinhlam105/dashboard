"use client";
import { getAllHotel } from "@/components/api/hotel-api";
import { getAllTour } from "@/components/api/tour-api";
import { HotelItemListModel } from "@/components/hotel/model/hotel-model";
import { TourItemList } from "@/components/tour/model/tour-model";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function NewComboAdditionalDetail({
  tourId,
  hotelId,
  price,
  transportation,
  onChange,
}: {
  tourId?: string;
  hotelId?: string;
  price: string;
  transportation: string;
  onChange: (field: string, value: string) => void;
}) {
  const [tourList, setTourList] = useState<TourItemList[]>([]);
  const [hotelList, setHotelList] = useState<HotelItemListModel[]>([]);
  const [selectedTour, setSelectedTour] = useState<TourItemList>();
  const [selectedHotel, setSelectedHotel] = useState<HotelItemListModel>();

  const fetchTour = async () => {
    const result = await getAllTour();
    if (result) setTourList(result);
    else toast.error("Không thể tải tour");
  };
  const fetchHotel = async () => {
    const result = await getAllHotel();
    if (result) setHotelList(result);
    else toast.error("Không thể tải khách sạn");
  };
  useEffect(() => {
    fetchTour();
    fetchHotel();
  }, []);
  useEffect(() => {
    setSelectedHotel(hotelList.findLast((h) => h.id === hotelId));
  }, [hotelId]);
  useEffect(() => {
    setSelectedTour(tourList.findLast((h) => h.id === tourId));
  }, [tourId]);

  return (
    <div className="border rounded-md shadow-sm w-1/3 p-4 bg-background space-y-4">
      <Label
        htmlFor="transportation"
        className="block text-xl font-semibold text-gray-700 mb-1"
      >
        Phương tiện
      </Label>
      <Input
        id="transportation"
        required
        className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
        value={transportation}
        onChange={(e) => onChange("transportation", e.target.value)}
      />
      <Label
        htmlFor="price"
        className="block text-xl font-semibold text-gray-700 mb-1"
      >
        Giá
      </Label>
      <Input
        id="price"
        required
        className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
        value={price}
        onChange={(e) => onChange("price", e.target.value)}
      />
      <div className="flex justify-between">
        <Label
          htmlFor="tour"
          className="block text-xl font-semibold text-gray-700 mb-1"
        >
          Chọn tour:
        </Label>
        <Select
          defaultValue={selectedTour?.id}
          onValueChange={(e) => onChange("tourId", e)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue
              placeholder={
                tourId || tourId == "0" ? selectedTour?.name : "Chưa chọn tour"
              }
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="0">Không chọn tour</SelectItem>
              {tourList.map((t) => (
                <SelectItem value={t.id} key={t.id} className=" font-semibold">
                  {t.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-between">
        <Label
          htmlFor="hotel"
          className="block text-xl font-semibold text-gray-700 mb-1"
        >
          Chọn khách sạn:
        </Label>
        <Select
          defaultValue={selectedHotel?.id}
          onValueChange={(e) => onChange("hotelId", e)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue
              placeholder={
                (hotelId || hotelId) == "0"
                  ? selectedHotel?.name
                  : "Chưa chọn khách sạn"
              }
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="0">Không chọn khách sạn</SelectItem>
              {hotelList.map((t) => (
                <SelectItem value={t.id} key={t.id} className=" font-semibold">
                  {t.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
