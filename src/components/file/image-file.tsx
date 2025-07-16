import Image from "next/image";
import { Checkbox } from "../ui/checkbox";
import { FileModel } from "./model/file-model";

export default function ImageFile({
  file,
  handleCheckChange,
}: {
  file: FileModel;
  handleCheckChange: (file: FileModel, isCheck: boolean) => void;
}) {
  return (
    <div className="w-full rounded-lg shadow-sm">
      <div
        className="relative w-full aspect-[3/2]"
      >
        <Image className="" alt={file.name} src={file.url} fill/>
        <Checkbox
          aria-checked="false"
          value="on"
          className=" h-5 w-5 absolute right-1 top-1 z-40 bg-white"
          onCheckedChange={(checked) => {
            const isChecked = checked === true;
            handleCheckChange(file, isChecked);
          }}
        ></Checkbox>
      </div>
      <div className="bg-accent w-full rounded-b-md p-2 space-y-2 px-2">
        <p className="text-sm">
          <span className="font-bold">Tên ảnh: </span>
          {file.name}
        </p>
        <p className="break-all text-xs">{file.url}</p>
      </div>
    </div>
  );
}
