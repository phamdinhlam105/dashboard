import ImageFile from "./image-file";
import { FileModel } from "./model/file-model";

export default function FileList({
  files,
  handleCheckChange,
}: {
  files: FileModel[];
  handleCheckChange: (id: string, isCheck: boolean) => void;
}) {
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
