"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { FaEye } from "react-icons/fa6";

export type ShippignColumns = {
  id: number;
  packageId: string;
  date: string;
  weight: string;
  value: string;
};

export const shippingColumn: ColumnDef<ShippignColumns>[] = [
  {
    accessorKey: "date",
    header: ({ table }) => (
      <div className="flex items-center gap-2">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
        <p className="flex items-center ">
          Date{" "}
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
    cell: ({ row }) => {
      return (
        <div className="flex items-center ">
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
          <div className=" font-medium  p-1 rounded-lg">
            <p className="text-red-800 font-semibold">
              {" "}
              {row.getValue("date")}
            </p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "id",
    header: () => (
      <div className="flex items-center gap-2">
        {" "}
        <p className="flex items-center ">
          Invoice{" "}
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
    cell: () => (
      <div className="flex items-center gap-2">
        <div>
          <p className="text-slate-500 text-xs">5185463</p>
        </div>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "packageId",
    header: "Type",
  },

  {
    accessorKey: "weight",
    header: "Charges",
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
