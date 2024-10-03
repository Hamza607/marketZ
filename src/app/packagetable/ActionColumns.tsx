"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

export type ActionColumns = {
  id: number;
  name: string;
  packageId: string;
  date: string;
  status: string;
  value: string;
};

export const actionColumns: ColumnDef<ActionColumns>[] = [
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
          <h3 className="font-semibold text-black">A/X Armani Exchange</h3>
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
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <>
          <div className="text-right w-fit font-medium bg-[#FEF3F2] text-xs flex items-center gap-2 text-red-600 p-1 rounded-lg">
            <p className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-triangle-alert"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
              </svg>
              {row.getValue("status")}
            </p>
          </div>
          <p className="text-[#667085] text-xs ml-4">As required by Customs</p>
        </>
      );
    },
  },
  {
    accessorKey: "value",
    header: "Action",
    cell: ({ row }) => {
      return (
        <>
          <Dialog>
            <DialogTrigger>
              <div className="text-right font-medium flex items-center gap-2 text-red-800">
                <p>{row.getValue("value")}</p>{" "}
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
                  className="lucide lucide-cloud-upload"
                >
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                  <path d="M12 12v9" />
                  <path d="m16 16-4-4-4 4" />
                </svg>{" "}
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Invoice</DialogTitle>
                <small className="text-slate-400">
                  You can add multiple invoices.
                </small>
                <Separator />
                <DialogDescription>
                  <div className=" rounded-md p-2 border border-slate-200 w-fit flex justify-center ">
                    <label htmlFor="file-input" className="custom-file-upload">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-cloud-upload text-red-800"
                      >
                        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                        <path d="M12 12v9" />
                        <path d="m16 16-4-4-4 4" />
                      </svg>
                      <span className="text-red-900 text-xs">Upload</span>
                    </label>
                    <Input
                      type="file"
                      id="file-input"
                      style={{ display: "none" }}
                    />
                  </div>
                  <Separator className="mt-2" />
                  <div className="my-2">
                    <Button className="text-white bg-dark w-full hover:bg-dark">
                      Add Invoices
                    </Button>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </>
      );
    },
  },
];
