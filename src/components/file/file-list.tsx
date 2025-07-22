import ImageFile from "./image-file";
import { FileModel } from "./model/file-model";

export default function FileList({
  files,
  handleCheckChange,
}: {
  files: FileModel[];
  handleCheckChange: (id: string, isCheck: boolean) => void;
}) {
  const sortedFiles = files
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));
  return (
    <ul className="list grid grid-cols-4 p-4 gap-4 max-h-[600px] overflow-y-auto">
      {sortedFiles.map((file, idx) => (
        <li key={idx}>
          <ImageFile file={file} handleCheckChange={handleCheckChange} />
        </li>
      ))}
    </ul>
  );
}
