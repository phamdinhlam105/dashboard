import ImageFile from "./image-file";
import { FileModel } from "./model/file-model";

export default function FileList({
  files,
  selectedFiles,
  setSelectedFiles,
}: {
  files: FileModel[];
  selectedFiles: FileModel[];
  setSelectedFiles: React.Dispatch<React.SetStateAction<FileModel[]>>;
}) {
  const handleCheckChange = (file: FileModel, isCheck: boolean) => {
    if (isCheck) setSelectedFiles((prev) => [...prev, file]);
    else setSelectedFiles(selectedFiles.filter((s) => s != file));
  };

  return (
    <ul className="list grid grid-cols-4 p-4 gap-4">
      {files.map((file, idx) => (
        <li key={idx}>
          <ImageFile file={file} handleCheckChange={handleCheckChange} />
        </li>
      ))}
    </ul>
  );
}
