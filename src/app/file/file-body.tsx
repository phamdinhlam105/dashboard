"use client";

import { getAllImage } from "@/components/api/image-api";
import FileButton from "@/components/file/file-button";
import FileList from "@/components/file/file-list";
import { FileModel } from "@/components/file/model/file-model";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function FileBody() {
  const [data, setData] = useState<FileModel[]>([]);
  const [filteredData, setFilteredData] = useState(data);
  const [fileChanged, setFileChanged] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllImage();
      if (result) {
        setData(result);
        setIsLoading(false);
      } else toast.error("Không thể tải ảnh");
    };
    if (fileChanged === true) {
      fetchData();
      setFileChanged(false);
    }
  }, [fileChanged]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

    const handleChooseFile = (id: string, isCheck: boolean) => {
    if (isCheck) setSelectedFiles((prev) => [...prev]);
    else setSelectedFiles(selectedFiles.filter((s) => s != id));
  };

  const handleSearch = (search: string) => {
    if (search == "") setFilteredData(data.filter(i=>i.name.includes(search)));
    if (search)
      setData(
        data.filter((file) =>
          file.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    else setFileChanged(true);
  };

  const removeSelected = async () => {
    if (selectedFiles.length > 0) {
      setData((prevData) =>
        prevData.filter((item) => !selectedFiles.includes(item.id))
      );
      toast("DELETE CATEGORY", {
        description: "All selected images are deleted",
      });
    }
  };

  return (
    <div className="p-3 w-full dark:bg-black h-full">
      <div className="p-3 bg-background rounded-md shadow-sm border">
        <FileButton
          handleSearch={handleSearch}
          removeSelected={removeSelected}
          selectedFiles={selectedFiles}
          setFileChanged={setFileChanged}
        />
        {isLoading ? (
          "Đang tải dữ liệu"
        ) : (
          <FileList
            files={filteredData}
            handleCheckChange={handleChooseFile}
          />
        )}
      </div>
    </div>
  );
}
