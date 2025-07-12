import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function NewPostInformation() {
  return (
    <div className="border rounded-md shadow-sm w-1/3 p-4 bg-background">
      <h2 className="text-2xl font-bold my-2">Thông tin bài viết</h2>
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
      />

      <Label htmlFor="author" className="block text-xl font-semibold mt-10">
        Tác giả
      </Label>
      <Input
        id="author"
        className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
      />

      <div className="flex justify-between items-center my-4 space-x-2">
        <Label className="block text-md font-semibold">Trạng thái</Label>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup defaultValue="draft">
              <SelectItem
                value="draft"
                className="text-yellow-300 font-semibold"
              >
                Đang soạn thảo
              </SelectItem>
              <SelectItem
                value="published"
                className="text-green-300 font-semibold"
              >
                Xuất bản
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
