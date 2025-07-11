
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown, ListFilter, Search } from "lucide-react";
import { Input } from "../ui/input";
import React, { useEffect } from "react";


export default function ActionsNavigation({ searchTitle, onDelete, allStatus, searchStatus }: {
    searchTitle: (search: string) => void
    onDelete: (idRow: string) => void,
    allStatus: string[],
    searchStatus: (selectedStatus: string) => void
}) {

    const [search, setSearch] = React.useState('');
    const [statusSearch, setStatusSearch] = React.useState('');

    useEffect(() =>
        searchTitle(search), [search]);
    useEffect(() =>
        searchStatus(statusSearch), [statusSearch]);
    const removeFilter = () => {
        setStatusSearch('');
        setSearch('');
    }
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
                        <DropdownMenuSubContent
                            className="bg-background shadow-md rounded-md p-1">
                            {allStatus.map((item) => <Button
                                variant="ghost"
                                key={item}
                                onClick={(e) => setStatusSearch(item)}
                            >
                                {item}
                            </Button>
                            )}
                        </DropdownMenuSubContent>
                    </DropdownMenuSub>
                </DropdownMenuContent>
            </DropdownMenu>

            <div className="w-30 relative">
                <Input
                    placeholder="Từ khóa..."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)
                    }
                    className="max-w-sm"
                />

            </div>
            <Button
                className="text-foreground border h-10 px-3 rounded-md "
                variant="outline"
                onClick={removeFilter}>
                Xóa bộ lọc
            </Button>

            <Button variant="outline" className="h-10 ml-auto px-5 items-center justify-center font-semibold text-sm">
                Thêm mới
            </Button>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="h-10 text-md ">
                        Thao tác hàng loạt
                        <ChevronDown />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className=" shadow w-60 p-2 rounded-md">
                    <DropdownMenuItem

                        className="px-2 w-full items-center rounded-sm"
                    >
                        <p>Xóa các dòng đã chọn</p>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}