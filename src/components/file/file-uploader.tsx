
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function FileUploader({ setFileChanged }: {
    setFileChanged: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleAddFileClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const file = event.target.files?.[0];
        if (file) {
            //const result = await uploadFile(file);
            // if (result.status == 'success') {
            //     toast("UPLOAD FILE", {
            //         description: "File upload successfully"
            //     });
            //     setFileChanged(true);
            // }

            // else
            //     toast("UPLOAD FILE",{
            //         description: "File upload failed"
            //     });
        }
    };

    return (
        <div className="flex space-x-2">
            <Button
                className="h-10 text-md text-white"
                onClick={handleAddFileClick}
            >
                Thêm tệp tin
            </Button>
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
            />
        </div>
    );
};
