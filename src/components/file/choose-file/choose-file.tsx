"use client";
import { Button } from "@/components/ui/button";
import ImageFile from "../image-file";
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

  return (
    <div>
      <ul className="list grid grid-cols-3 p-4 gap-4">
        {isLoading
          ? "Đang tải ảnh"
          : data.map((file, idx) => (
              <li key={idx}>
                <Button
                  variant="ghost"
                  className="relative aspect-2/3 w-full"
                  onClick={() => {
                    onChange("thumbnail", file.url);
                    setIsOpen(false);
                  }}
                >
                  <Image alt="image" src={file.url} width={100} height={100} unoptimized />
                </Button>
              </li>
            ))}
      </ul>
    </div>
  );
}
