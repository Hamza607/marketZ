"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import calculator from "@/components/assets/images/calculator.png";
import notebook from "@/components/assets/images/notebook.png";
import { TableData } from "./TableData";
import { PackageColumns, columns } from "@/app/packagetable/Columns";
import { Separator } from "@/components/ui/separator";
import { ReviewColumns, reviewColumns } from "@/app/packagetable/ReviewColumns";
import { ActionColumns, actionColumns } from "@/app/packagetable/ActionColumns";
import {
  ReadyToSendColumns,
  readyToSendColumns,
} from "@/app/packagetable/ReadytoSendColumns";
import { ColumnDef } from "@tanstack/react-table";
import { Truck } from "lucide-react";
import { CiCircleInfo } from "react-icons/ci";
import { FaBackward } from "react-icons/fa6";
import { QueueColumns, queueColumn } from "@/app/packagetable/QueueColumns";

interface PackageDataTableProps {
  queue: string;
  setQueue: (queue: string) => void;
}
type TableColumnType =
  | ColumnDef<PackageColumns>[]
  | ColumnDef<ReviewColumns>[]
  | ColumnDef<ActionColumns>[]
  | ColumnDef<ReadyToSendColumns>[]
  | ColumnDef<QueueColumns>[];

type TableDataType =
  | PackageColumns[]
  | ReviewColumns[]
  | ActionColumns[]
  | QueueColumns[]
  | ReadyToSendColumns[];

const PackageDataTable = ({ queue, setQueue }: PackageDataTableProps) => {
  const [tableBtn, setTableBtn] = useState(1);
  const data: PackageColumns[] = [
    {
      id: 1,
      name: "John Doe",
      itemValue: "$30",
      packageId: "3243242",
      date: "20/3/2932",
      weight: "30kg",
      value: "View",
      status: "Ready to Send",
    },
    {
      id: 2,
      name: "John Doe",
      itemValue: "$30",
      packageId: "3243242",
      date: "20/3/2932",
      weight: "30kg",
      value: "View",
      status: "Action Required",
    },
    {
      id: 3,
      name: "John Doe",
      itemValue: "$30",
      packageId: "3243242",
      date: "20/3/2932",
      weight: "30kg",
      value: "View",
      status: "In Review",
    },
    {
      id: 4,
      name: "John Doe",
      itemValue: "$30",
      packageId: "3243242",
      date: "20/3/2932",
      weight: "30kg",
      value: "View",
      status: "Ready to Send",
    },
    {
      id: 5,
      name: "John Doe",
      itemValue: "$30",
      packageId: "3243242",
      date: "20/3/2932",
      weight: "30kg",
      value: "View",
      status: "Ready to Send",
    },
  ];
  const data2: ReviewColumns[] = [
    {
      id: 1,
      name: "Jason Smith",
      itemValue: "$10",
      packageId: "4646464",
      date: "18/4/2024",
      weight: "90kg",
      value: "View review",
    },
    {
      id: 2,
      name: "Jason Smith",
      itemValue: "$10",
      packageId: "4646464",
      date: "18/4/2024",
      weight: "90kg",
      value: "View review",
    },
    {
      id: 3,
      name: "Jason Smith",
      itemValue: "$10",
      packageId: "4646464",
      date: "18/4/2024",
      weight: "90kg",
      value: "View review",
    },
    {
      id: 4,
      name: "Jason Smith",
      itemValue: "$10",
      packageId: "4646464",
      date: "18/4/2024",
      weight: "90kg",
      value: "View review",
    },
    {
      id: 5,
      name: "Jason Smith",
      itemValue: "$10",
      packageId: "4646464",
      date: "18/4/2024",
      weight: "90kg",
      value: "View review",
    },
  ];
  const data3: ActionColumns[] = [
    {
      id: 1,
      name: "Neila William",
      packageId: "55555",
      date: "18/4/20222",
      value: "Upload Invoice",
      status: "Upload Merchant Invoice",
    },
    {
      id: 2,
      name: "Neila William",
      packageId: "55555",
      date: "18/4/20222",
      value: "Upload Invoice",
      status: "Upload Merchant Invoice",
    },
    {
      id: 3,
      name: "Neila William",
      packageId: "55555",
      date: "18/4/20222",
      value: "Upload Invoice",
      status: "Upload Merchant Invoice",
    },
    {
      id: 4,
      name: "Neila William",
      packageId: "55555",
      date: "18/4/20222",
      value: "Upload Invoice",
      status: "Upload Merchant Invoice",
    },
    {
      id: 5,
      name: "Neila William",
      packageId: "55555",
      date: "18/4/20222",
      value: "Upload Invoice",
      status: "Upload Merchant Invoice",
    },
  ];
  const data4: ReadyToSendColumns[] = [
    {
      id: 1,
      name: "Neila William",
      packageId: "55555",
      date: "18/4/20222",
      weight: "220 lbs",
      value: "View",
      itemValue: "$50",
    },
    {
      id: 2,
      name: "Neila William",
      packageId: "55555",
      date: "18/4/20222",
      weight: "220 lbs",
      value: "View",
      itemValue: "$50",
    },
    {
      id: 3,
      name: "Neila William",
      packageId: "55555",
      date: "18/4/20222",
      weight: "220 lbs",
      value: "View",
      itemValue: "$50",
    },
    {
      id: 4,
      name: "Neila William",
      packageId: "55555",
      date: "18/4/20222",
      weight: "220 lbs",
      value: "View",
      itemValue: "$50",
    },
    {
      id: 5,
      name: "Neila William",
      packageId: "55555",
      date: "18/4/20222",
      weight: "220 lbs",
      value: "View",
      itemValue: "$50",
    },
  ];
  const data5: QueueColumns[] = [
    {
      id: 1,
      packageId: "400000",
      date: "18/4/202211",
      weight: "22.31 lbs",
      value: "View",
      itemValue: "$150",
    },
    {
      id: 2,
      packageId: "400000",
      date: "18/4/202211",
      weight: "22.31 lbs",
      value: "View",
      itemValue: "$150",
    },
    {
      id: 3,
      packageId: "400000",
      date: "18/4/202211",
      weight: "22.31 lbs",
      value: "View",
      itemValue: "$150",
    },
    {
      id: 4,
      packageId: "400000",
      date: "18/4/202211",
      weight: "22.31 lbs",
      value: "View",
      itemValue: "$150",
    },
    {
      id: 5,
      packageId: "400000",
      date: "18/4/202211",
      weight: "22.31 lbs",
      value: "View",
      itemValue: "$150",
    },
  ];
  function getColumnType(tableBtn: number): TableColumnType {
    switch (tableBtn) {
      case 1:
        return columns;
      case 2:
        return reviewColumns;
      case 3:
        return actionColumns;
      case 4:
        return readyToSendColumns;
      default:
        return queueColumn;
    }
  }

  function getDataType(tableBtn: number): TableDataType {
    switch (tableBtn) {
      case 1:
        return data;
      case 2:
        return data2;
      case 3:
        return data3;
      case 4:
        return data4;
      case 5:
        return data5;
      default:
        throw new Error("Invalid tableBtn value");
    }
  }

  return (
    <>
      <div className="m-4  p-4 md:flex gap-2">
        <div className="md:w-2/3 bg-white h-fit rounded-md">
          {queue == "queue" ? (
            <>
              <div className="p-2  my-4 flex items-center gap-4">
                <p
                  className="flex items-center gap-2 my-2 w-fit"
                  onClick={() => setQueue("")}
                >
                  <FaBackward /> Back
                </p>
                <Button
                  variant={"outline"}
                  onClick={() => {
                    setTableBtn(5);
                  }}
                  className="w-full md:w-1/4 bg-[#05011C] text-white hover:bg-black/85 hover:text-white flex items-center"
                >
                  <p> Queue</p>
                  <span className="h-4 ml-2 px-1 bg-white rounded-md text-black text-[8px] block ">
                    08
                  </span>
                </Button>
              </div>
              <Separator />
              <div className="px-2 py-4">
                <TableData columns={queueColumn} data={data5} />
              </div>
            </>
          ) : (
            <>
              <div className="flex lg:flex-nowrap flex-wrap gap-2 flex-auto p-2  my-4">
                <Button
                  variant={"outline"}
                  onClick={() => setTableBtn(1)}
                  className="w-full md:w-1/4 bg-[#05011C] text-white hover:bg-black/85 hover:text-white flex items-center"
                >
                  <p> View All</p>
                  <span className="h-4 ml-2 px-1 bg-white rounded-md text-black text-[8px] block ">
                    20
                  </span>
                </Button>
                <Button
                  variant={"outline"}
                  onClick={() => setTableBtn(2)}
                  className="w-full md:w-1/4 bg-[#EF3528] text-white hover:bg-[#EF3528]/85 hover:text-white flex items-center"
                >
                  <p> In Review</p>
                  <span className="h-4 ml-2 px-1 bg-white rounded-md text-black text-[8px] block ">
                    7
                  </span>
                </Button>
                <Button
                  onClick={() => setTableBtn(3)}
                  variant={"outline"}
                  className="w-full md:w-1/4 bg-[#F18D09] text-white hover:bg-[#F18D09]/85 hover:text-white flex items-center"
                >
                  <p> Action Required</p>
                  <span className="h-4 ml-2 px-1 bg-white rounded-md text-[#F18D09] text-[8px] block ">
                    50
                  </span>
                </Button>
                <Button
                  onClick={() => setTableBtn(4)}
                  variant={"outline"}
                  className="w-full md:w-1/4 bg-[#12B368] text-white hover:bg-[#12B368]/85 hover:text-white flex items-center"
                >
                  <p> Ready To Send</p>
                  <span className="h-4 ml-2 px-1 bg-white rounded-md text-[#12B368] text-[8px] block ">
                    12
                  </span>
                </Button>
              </div>
              <Separator />
              <div className="px-2 py-4">
                <TableData
                  columns={getColumnType(tableBtn)}
                  data={getDataType(tableBtn)}
                />
              </div>
            </>
          )}
        </div>

        <div className="md:w-1/3 p-4 h-fit bg-white rounded-md">
          <small className="text-slate-500">
            All values are in United States dollars (USD).
          </small>
          {tableBtn == 4 && (
            <div className=" border border-slate-300 py-2 rounded-lg bg-[#e1e0e749]">
              <h2 className="text-xl font-semibold p-4">Shipping Summary</h2>
              <Separator />
              <div className="p-4">
                <div className="flex justify-between items-center pb-1">
                  <p className="text-slate-400">Total Value</p>
                  <p>$28.98</p>
                </div>
                <div className="flex justify-between items-center pb-1">
                  <p className="text-slate-400">Total Weight</p>
                  <p>40.98 lbs</p>
                </div>
                <div className="flex justify-between items-center pb-1">
                  <p>Packages</p>
                  <p>1</p>
                </div>
                <Separator />
                <div className="flex justify-between items-center pb-1 mt-2">
                  <p className="text-sm">Sub Total</p>
                  <p>$39.40</p>
                </div>
                <div className="flex justify-between items-center pb-1">
                  <p>Estimate Shipping</p>
                  <p>$39.40</p>
                </div>
                <p className="color-brown text-sm underline cursor-pointer font-semibold">
                  How is this calculated?
                </p>

                <button className="px-6 py-4 bg-dark text-white rounded-lg w-full my-4 flex items-center justify-center gap-2">
                  <Truck /> Create Ship Request
                </button>
                <div className="p-2 border border-red-900 rounded-lg flex">
                  <CiCircleInfo className="text-red-900 text-2xl w-[120px]" />{" "}
                  <p className="">
                    All items are subject to a customs duty upon receipt of
                    package. Payment will be due when your package is delivered.
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="border border-[#9E1D2233]/5 p-4 bg-[#9E1D2233]/5 my-2 rounded-md">
            <Image
              src={calculator}
              className="block mx-auto"
              alt=""
              width={40}
              height={40}
            />
            <h2 className="text-center font-semibold text-red-700 text-2xl">
              Shipping Calculator
            </h2>
          </div>
          <div className="border border-[#9E1D2233]/5 bg-[#9E1D2233]/5 p-4 my-2 rounded-md">
            <Image
              src={notebook}
              className="block mx-auto"
              alt=""
              width={40}
              height={40}
            />
            <h2 className="text-center font-semibold text-red-700 text-2xl">
              Address Book
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageDataTable;
