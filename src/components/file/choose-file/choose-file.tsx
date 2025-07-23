"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
import { getAllImage } from "@/components/api/image-api";
import { toast } from "sonner";
import { FileModel } from "../model/file-model";

export default function ChooseFile({
  onChange,
  setIsOpen,
}: {
  onChange: (field: string, value: string) => void;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}) {
  const [data, setData] = useState<FileModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllImage();
      if (result) {
        setData(result);
        setIsLoading(false);
      } else toast.error("Không thể tải ảnh");
    };
    fetchData();
  }, []);

  const thumbnailFiles = data.filter(file =>
  file.name.toLowerCase().includes("thumbnail")
);

  return (
    <div>
      <ul className="list grid grid-cols-3 p-4 gap-4 max-h-[600px] overflow-y-auto">
        {isLoading
          ? "Đang tải ảnh"
          : thumbnailFiles.map((file, idx) => (
              <li key={idx}>
                <Button
                  variant="ghost"
                  className="w-full h-fit flex flex-col items-center"
                  onClick={() => {
                    onChange("thumbnail", file.url);
                    setIsOpen(false);
                  }}
                >
                  <Image
                    alt="image"
                    src={file.url}
                    width={100}
                    height={100}
                    unoptimized
                  />
                  <p className="text-xs text-wrap text-center">{file.name}</p>
                </Button>
              </li>
            ))}
      </ul>
    </div>
  );
}
