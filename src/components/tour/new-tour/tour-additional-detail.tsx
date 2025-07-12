import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NewTourAdditionalDetail({
  description,
  startingPlace,
  price,
  tourDetail,
  onChange,
  tourDetailOnChange

}: {
  description: string;
  startingPlace: string;
  price: string;
  tourDetail: {
    location: string;
    food: string;
    suitablePerson: string;
    idealTime: string;
    transportation: string;
    promotion: string;
  };
  onChange: (field: string, value: string) => void;
  tourDetailOnChange: (field: string, value: string) => void;
}) {
  return (
    <div className="border rounded-md shadow-sm w-1/3 p-4 bg-background space-y-4">
      <h2 className="text-2xl font-bold ">Thông tin bổ sung</h2>
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
        rows={2}
      />
      <div className="flex justify-between items-center space-x-2">
        <Label htmlFor="startingPlace" className="text-md font-semibold">
          Điểm xuất phát
        </Label>
        <Input
          id="startingPlace"
          className="text-xl block w-2/3 px-3 py-2 rounded-md shadow-sm"
          value={startingPlace}
          onChange={(e) => onChange("startingPlace", e.target.value)}
        />
      </div>
      <div className="flex justify-between items-center space-x-2">
        <Label className="block text-md font-semibold">Giá</Label>
        <Input
          id="price"
          className="text-xl block w-2/3 px-3 py-2 rounded-md shadow-sm"
          value={price}
          onChange={(e) => onChange("price", e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label className="block text-md font-semibold">Địa điểm</Label>
          <Input
            id="location"
            className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
            value={tourDetail.location}
            onChange={(e) => tourDetailOnChange("location", e.target.value)}
          />
        </div>
        <div>
          <Label className="block text-md font-semibold">Thực đơn</Label>
          <Input
            id="food"
            className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
            value={tourDetail.food}
            onChange={(e) => tourDetailOnChange("food", e.target.value)}
          />
        </div>
        <div>
          <Label className="block text-md font-semibold">
            Đối tượng phù hợp
          </Label>
          <Input
            id="suitablePerson"
            className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
            value={tourDetail.suitablePerson}
            onChange={(e) => tourDetailOnChange("suitablePerson", e.target.value)}
          />
        </div>
        <div>
          <Label className="block text-md font-semibold">
            Thời gian lý tưởng
          </Label>
          <Input
            id="idealTime"
            className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
            value={tourDetail.idealTime}
            onChange={(e) => tourDetailOnChange("idealTime", e.target.value)}
          />
        </div>
        <div>
          <Label className="block text-md font-semibold">Phương tiện</Label>
          <Input
            id="transportation"
            className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
            value={tourDetail.transportation}
            onChange={(e) => tourDetailOnChange("transportation", e.target.value)}
          />
        </div>
        <div>
          <Label className="block text-md font-semibold">Khuyến mãi</Label>
          <Input
            id="promotion"
            className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
            value={tourDetail.promotion}
            onChange={(e) => tourDetailOnChange("promotion", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
