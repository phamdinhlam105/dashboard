import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import {ListFilter } from "lucide-react";
import { Input } from "../ui/input";
import React, { useEffect } from "react";
import Link from "next/link";

export default function ActionsNavigation({
  searchTitle,
  onDelete,
  allStatus,
  searchStatus,
  newItemLink,
}: {
  searchTitle: (search: string) => void;
  onDelete: (idRow: string) => void;
  allStatus: string[];
  searchStatus: (selectedStatus: string) => void;
  newItemLink: string;
}) {
  const [search, setSearch] = React.useState("");
  const [statusSearch, setStatusSearch] = React.useState("");

  useEffect(() => searchTitle(search), [search]);
  useEffect(() => searchStatus(statusSearch), [statusSearch]);
  const removeFilter = () => {
    setStatusSearch("");
    setSearch("");
  };
  return (
    <div className="inline-flex items-center w-full justify-start gap-x-2 mb-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="h-10 w-10">
            <ListFilter className="w-full h-full" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="right"
          align="start"
          className="shadow-md rounded-md"
        >
          <DropdownMenuLabel className="p-2">
            <p className="font-semibold text-sm">Bộ lọc</p>
          </DropdownMenuLabel>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="flex p-2">
              <span>Trạng thái</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="bg-background shadow-md rounded-md p-1">
              {allStatus.map((item) => (
                <Button
                  variant="ghost"
                  key={item}
                  onClick={(e) => setStatusSearch(item)}
                >
                  {item}
                </Button>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="w-30 relative">
        <Input
          placeholder="Từ khóa..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="max-w-sm"
        />
      </div>
      <Button
        className="text-foreground border h-10 px-3 rounded-md "
        variant="outline"
        onClick={removeFilter}
      >
        Xóa bộ lọc
      </Button>

      <Button
        asChild
        variant="outline"
        className="h-10 ml-auto px-5 items-center justify-center font-semibold text-sm"
      >
        <Link href={newItemLink}  className="h-10 ml-auto px-5 items-center justify-center font-semibold text-sm">Thêm mới</Link>
      </Button>
      
    </div>
  );
}
