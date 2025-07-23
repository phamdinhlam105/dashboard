import * as React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { PaginationState, Table } from "@tanstack/react-table";

interface PaginationProps<TData> {
  table: Table<TData>;
  pagination: PaginationState;
  setPagination: React.Dispatch<React.SetStateAction<PaginationState>>;
}

export default function Pagination<TData>({ table, pagination, setPagination }: PaginationProps<TData>) {
  return (
    <div className="flex items-center justify-between space-x-2 py-4">
      <div>
        <select
          id="pageSize"
          value={pagination.pageSize}
          onChange={(e) =>
            setPagination((prev) => ({
              ...prev,
              pageSize: Number(e.target.value),
            }))
          }
          className="border rounded-md p-1"
        >
          {[5, 10, 20, 50].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        <span>{' / '}{table.getRowCount()}</span>
      </div>
      <div>
        <Button
          className="mr-auto"
          variant="outline"
          size="sm"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronsLeft />
        </Button>
        <Button
          className="mr-auto"
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeft />
        </Button>
        <Button
          className="ml-auto"
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRight />
        </Button>
        <Button
          className="mr-auto"
          variant="outline"
          size="sm"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <ChevronsRight />
        </Button>
      </div>
    </div>
  );
};
