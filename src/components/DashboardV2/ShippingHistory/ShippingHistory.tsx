"use client";
import Image from "next/image";
import React, { useState } from "react";
import clock from "@/components/assets/images/clock.png";
import csv from "@/components/assets/images/csv.png";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TableData } from "../packageDataTable/TableData";
import {
  ShippignColumns,
  shippingColumn,
} from "@/app/packagetable/ShippingColumns";
import ShipRequest from "./ShipRequest";

const ShippingHistory = () => {
  const [shipping, setShipping] = useState(false);
  const data: ShippignColumns[] = [
    {
      id: 1,
      packageId: "55555",
      date: "18/4/20222",
      value: "View",
      weight: "$110.00",
    },
    {
      id: 2,
      packageId: "55555",
      date: "18/4/20222",
      value: "View",
      weight: "$110.00",
    },
    {
      id: 3,
      packageId: "55555",
      date: "18/4/20222",
      value: "View",
      weight: "$110.00",
    },
    {
      id: 4,
      packageId: "55555",
      date: "18/4/20222",
      value: "View",
      weight: "$110.00",
    },
    {
      id: 5,
      packageId: "55555",
      date: "18/4/20222",
      value: "View",
      weight: "$110.00",
    },
  ];
  return (
    <>
      {shipping ? (
        <ShipRequest />
      ) : (
        <div className="m-8">
          <div className=" bg-white rounded-lg p-6">
            <div className="flex items-center gap-2">
              <Image src={clock} width={30} height={30} alt="" />{" "}
              <h1
                className="font-semibold text-2xl"
                onClick={() => setShipping(true)}
              >
                Shipping History
              </h1>
            </div>
          </div>
          <div className="my-4 bg-white border border-red-800 flex items-center gap-2 p-4 rounded-lg">
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
              className="lucide lucide-info text-red-800"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            <p className="text-sm">
              View your completed shipments, transactions and orders here. Ship
              requests still in process can be found in your{" "}
              <span className="color-brown underline font-semibold cursor-pointer">
                Queue
              </span>
              .
            </p>
          </div>
          <div className="my-4 bg-white border border-red-800 flex  gap-2 p-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-info text-red-800"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            <p className="text-sm">
              You may need to update the billing information on your account.
              Please select the Account Settings tab above, then{" "}
              <span className="color-brown underline font-semibold cursor-pointer">
                {" "}
                My Billing Information,
              </span>{" "}
              then enter your updated billing information. Please contact
              Customer Service if you require further assistance
            </p>
          </div>
          <div className="my-4 bg-white border border-red-800 flex gap-2 p-4 rounded-lg">
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
              className="lucide lucide-info text-red-800"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            <p className="text-sm">
              You currently have an unpaid balance of $2,520.00. Please{" "}
              <span className="color-brown underline font-semibold cursor-pointer">
                Pay Your Balance{" "}
              </span>
              to avoid delays in shipments and orders. Please allow 30 minutes
              for your account data to be updated.
            </p>
          </div>

          <div className="bg-white rounded-lg p-4">
            <div className=" flex gap-2 items-center justify-between">
              <Input placeholder=" Search for Invoice" className="w-[300px]" />
              <div className="flex items-center">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="30 Days" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">14 days</SelectItem>
                    <SelectItem value="dark">7 days</SelectItem>
                    <SelectItem value="system">1 days</SelectItem>
                  </SelectContent>
                </Select>
                <div className="border border-slate-200 rounded-md p-2">
                  <p>02/19/2024 - 02/26/2024</p>
                </div>
                <div className="ml-2">
                  <Button className="bg-white text-red-800 p-2 hover:bg-white flex gap-2 border border-red-800">
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
                      className="lucide lucide-refresh-cw"
                    >
                      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                      <path d="M21 3v5h-5" />
                      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                      <path d="M8 16H3v5" />
                    </svg>{" "}
                    Reset
                  </Button>
                </div>
                <div className="ml-12">
                  <Button className="bg-white text-red-800 p-2 hover:bg-white flex gap-2 border border-red-800">
                    <Image src={csv} alt="" width={20} height={20} />
                    Export As CSV
                  </Button>
                </div>
              </div>
            </div>
            <Separator className="my-4" />

            <div className="">
              <TableData data={data} columns={shippingColumn} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShippingHistory;
