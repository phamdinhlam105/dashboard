"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import ImageFile from "./image-file";
import { FileModel } from "./model/file-model";

export default function FileList({
  files,
  handleCheckChange,
  checkedFiles,
  showUrl = true,
}: {
  files: FileModel[];
  handleCheckChange: (id: string, isCheck: boolean) => void;
  checkedFiles: string[];
  showUrl?: boolean;
}) {
  const [filterFiles, setFilterFiles] = useState<FileModel[]>([]);

  useEffect(() => {
    setFilterFiles(files);
  }, [files]);

  const handleFilterByType = (type: string) => {
    setFilterFiles(files.filter((f) => f.name.includes(type)));
  };

  const sortedFiles = (files: FileModel[]) => {
    return files.slice().sort((a, b) => a.name.localeCompare(b.name));
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <Button onClick={() => handleFilterByType("Tour")} variant="outline">
          Tour
        </Button>
        <Button
          onClick={() => handleFilterByType("Khách sạn")}
          variant="outline"
        >
          Khách sạn
        </Button>
        <Button onClick={() => handleFilterByType("")} variant="outline">
          Mặc định
        </Button>
      </div>
      <ul className="list grid grid-cols-4 p-4 gap-4 max-h-[600px] overflow-y-auto">
        {sortedFiles(filterFiles).map((file, idx) => (
          <li key={idx}>
            <ImageFile
              file={file}
              handleCheckChange={handleCheckChange}
              isChecked={checkedFiles.includes(file.id)}
              showUrl={showUrl}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
