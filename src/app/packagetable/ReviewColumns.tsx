"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { FaEye } from "react-icons/fa6";

export type ReviewColumns = {
  id: number;
  name: string;
  packageId: string;
  date: string;
  itemValue: string;
  weight: string;
  value: string;
};

export const reviewColumns: ColumnDef<ReviewColumns>[] = [
  {
    accessorKey: "id",
    header: ({ table }) => (
      <div className="flex items-center gap-2">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />{" "}
        <p className="flex items-center ">
          From{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-arrow-down "
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </span>
        </p>
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />{" "}
        <div>
          <h3 className="font-semibold">Amazon</h3>
          <p className="text-slate-500 text-xs">IZ6A9426897731887</p>
        </div>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "packageId",
    header: "PackageId",
  },
  {
    accessorKey: "date",
    header: () => (
      <div>
        <p className="flex items-center ">
          Date Received{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-arrow-down "
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </span>
        </p>
      </div>
    ),
  },
  {
    accessorKey: "itemValue",
    header: () => (
      <div>
        <p className="flex items-center ">
          Total Value{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-circle-help"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>
          </span>
        </p>
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className=" font-medium  p-1 rounded-lg">
          <p className="text-black "> {row.getValue("itemValue")}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "weight",
    header: "Weight",
  },
  {
    accessorKey: "value",
    header: "Action",
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium flex items-center gap-2 text-red-800">
          <p>{row.getValue("value")}</p> <FaEye />{" "}
        </div>
      );
    },
  },
];
