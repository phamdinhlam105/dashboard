import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { addNewImage } from "../api/image-api";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";

export function FileUploader({
  setFileChanged,
}: {
  setFileChanged: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState<File | null>(null);

   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

 const handleUpload = async () => {
    if (!file || !fileName.trim()) {
      toast.error("Vui lòng chọn file và nhập tên ảnh.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", fileName);

    const result = await addNewImage(formData);
    if (result.status === "success") {
      toast.success("Up ảnh thành công");
      setFileChanged(true);
      setFile(null);
      setFileName("");
    } else {
      toast.error("Up ảnh thất bại");
    }
  };


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-white">Thêm ảnh</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload ảnh mới</DialogTitle>
        </DialogHeader>

        <Input
          type="text"
          placeholder="Nhập tên ảnh"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />

        <Input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
        />

        <DialogFooter>
          <Button onClick={handleUpload}>Upload ảnh</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
