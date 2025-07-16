import { Button } from "@/components/ui/button";
import ImageFile from "../image-file";
import { FILE_MOCK_DATA } from "../mock-data/file-data";
import Image from "next/image";
import { SetStateAction } from "react";

export default function ChooseFile({
  onChange,
  setIsOpen,
}: {
  onChange: (field: string, value: string) => void;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}) {
  const files = FILE_MOCK_DATA;
  return (
    <div>
      <ul className="list grid grid-cols-3 p-4 gap-4">
        {files.map((file, idx) => (
          <li key={idx}>
            <Button
              variant="ghost"
              className="relative aspect-2/3 w-full"
              onClick={() => {
                onChange("thumbnail", file.url);
                setIsOpen(false);
              }}
            >
              <Image alt="image" src={file.url} width={100} height={100} />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
