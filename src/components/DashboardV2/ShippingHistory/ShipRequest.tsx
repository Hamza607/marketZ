"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import React, { useState } from "react";
import visa from "@/components/assets/images/visa.png";
import coupon from "@/components/assets/images/applycoupon.png";
import dotline from "@/components/assets/images/dotline.png";
import discount from "@/components/assets/images/coupdis.png";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import { TableData } from "../packageDataTable/TableData";
import {
  ShipRequestColumns,
  shiprequestColumns,
} from "@/app/packagetable/ShipRequestColumns";

const ShipRequest = () => {
  const [couponData, setCouponData] = useState(false);
  const data: ShipRequestColumns[] = [
    {
      id: 1,
      packageId: "55555",
      date: "18/4/20222",
      value: "Remove",
      weight: "$110.00",
    },
    {
      id: 2,
      packageId: "55555",
      date: "18/4/20222",
      value: "Remove",
      weight: "$110.00",
    },
    {
      id: 3,
      packageId: "55555",
      date: "18/4/20222",
      value: "Remove",
      weight: "$110.00",
    },
    {
      id: 4,
      packageId: "55555",
      date: "18/4/20222",
      value: "Remove",
      weight: "$110.00",
    },
    {
      id: 5,
      packageId: "55555",
      date: "18/4/20222",
      value: "Remove",
      weight: "$110.00",
    },
  ];
  return (
    <>
      <div className="m-8">
        <div className=" bg-white rounded-lg p-6">
          <div className="flex items-center gap-2">
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
              className="lucide lucide-truck text-red-800"
            >
              <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
              <path d="M15 18H9" />
              <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
              <circle cx="17" cy="18" r="2" />
              <circle cx="7" cy="18" r="2" />
            </svg>
            <h1 className="font-semibold text-2xl">Ship Request</h1>
          </div>
        </div>
        <div className="flex gap-2 ">
          <div className=" w-2/3 ">
            <div className="my-2 bg-white p-4 flex ">
              <div className="w-1/2  p-2">
                <h3 className="font-semibold my-2">Select Payment Method</h3>
                <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder="Select Payment Method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">14 days</SelectItem>
                    <SelectItem value="dark">7 days</SelectItem>
                    <SelectItem value="system">1 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-1/2   bg-[#F5F5F5] p-2  rounded-md">
                <div className="flex gap-2">
                  <div>
                    <Image src={visa} alt="" width={40} height={40} />
                  </div>
                  <div className=" w-full  ">
                    <div className="flex gap-2 w-full  justify-between">
                      <div className="flex ">
                        <h3 className="font-semibold">Payment Method 1</h3>
                        <p className="text-xs  ml-2 text-[#B54708] h-fit bg-[#FFFAEB] p-1 rounded-md">
                          Default
                        </p>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-pencil-line color-brown"
                      >
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                        <path d="m15 5 3 3" />
                      </svg>
                    </div>
                    <h3 className="mt-2 font-semibold text-sm">
                      Visa ending in 1234
                    </h3>
                    <p className="text-sm mt-1">Expiry 06/2024</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-2 bg-white p-4  flex ">
              <div className="w-1/2  p-2">
                <h3 className="font-semibold my-2">Select Shipping Method</h3>
                <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder="Select Shipping Method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">14 days</SelectItem>
                    <SelectItem value="dark">7 days</SelectItem>
                    <SelectItem value="system">1 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-1/2   bg-[#F5F5F5] p-2  rounded-md">
                <div className="flex gap-2">
                  <div className=" w-full  ">
                    <div className="flex gap-2 w-full  justify-between">
                      <div className="flex ">
                        <h3 className="font-semibold">Shipping Address</h3>
                        <p className="text-xs  ml-2 text-[#B54708] h-fit bg-[#FFFAEB] p-1 rounded-md">
                          Default
                        </p>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-pencil-line color-brown"
                      >
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                        <path d="m15 5 3 3" />
                      </svg>
                    </div>
                    <h3 className="mt-2  text-xs">
                      Name : <span className="font-semibold">Robert Fox</span>
                    </h3>
                    <h3 className="mt-2  text-xs">
                      Address :{" "}
                      <span className="font-semibold">
                        {" "}
                        Alex Lokien Kaya Ser&apos;i Katki 12A Willemstad Curacao
                      </span>
                    </h3>
                    <h3 className="mt-2  text-xs">
                      Phone :{" "}
                      <span className="font-semibold">+1 (941) 538-6941</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">
                  Packages in This Shipment
                </h3>
                <Button className="flex gap-2 bg-red-800 hover:bg-red-700">
                  {" "}
                  <FaPlus /> Add More Packages
                </Button>
              </div>
              <Separator className="mb-2" />
              <TableData data={data} columns={shiprequestColumns} />
            </div>
          </div>
          <div className="w-1/3 bg-white rounded-md p-4 border border-emerald-100 my-2">
            <p className="text-sm text-slate-500">
              All values are in United States dollars (USD).
            </p>
            <div className="bg-gray-200/25 my-2 rounded-md p-2">
              <h3 className="font-semibold">Shipment Details & Options</h3>
              <Separator className="my-2" />
              <div className="text-sm">
                <div className="flex justify-between">
                  {" "}
                  <p className="font-semibold">Shipping Method</p>{" "}
                  <span className="font-semibold">$59.00</span>
                </div>
                <small>(8.00 lbs)</small>
                <div className="flex items-center gap-2">
                  {" "}
                  <Checkbox /> <p className="my-1 font-semibold">
                    DHL Express
                  </p>{" "}
                </div>
                <p className="color-brown mt-1">See More</p>
                <Separator className="my-2" />
              </div>
              <div className="text-sm">
                <div className="flex justify-between">
                  {" "}
                  <p className="font-semibold">Packing Options</p>{" "}
                  <span className="font-semibold">$0.00</span>
                </div>
                <small>(Based on 8-00 Lbs weight)</small>
                <div className="flex items-center gap-2">
                  {" "}
                  <Checkbox />{" "}
                  <p className="my-1 font-semibold">Fragile stickers</p>{" "}
                </div>
                <div className="flex items-center gap-2">
                  {" "}
                  <Checkbox />{" "}
                  <p className="my-1 font-semibold">Extra padding</p>{" "}
                </div>
                <p className="color-brown mt-1">See More</p>
                <Separator className="my-2" />
              </div>
              <div className="text-sm">
                <div className="flex justify-between">
                  {" "}
                  <p className="font-semibold">Shipping Preference</p>{" "}
                  <span className="font-semibold">$0.00</span>
                </div>
                <div className="flex items-center gap-2">
                  {" "}
                  <Checkbox /> <p className="my-1 font-semibold">
                    Insurance
                  </p>{" "}
                </div>

                <p className="color-brown mt-1">See More</p>
                <Separator className="my-2" />
              </div>
              <div className="text-sm">
                <div className="flex justify-between">
                  {" "}
                  <p className="font-semibold">Export Documentation</p>{" "}
                  <span className="font-semibold">$0.00</span>
                </div>
                <small>(Based on 8-00 Lbs weight)</small>
                <div className="flex items-center justify-between gap-2 my-1">
                  {" "}
                  <p className="font-semibold">National ID:</p>
                  <p className="font-semibold color-brown">Add Id</p>{" "}
                </div>
                <p className="my-1 text-xs">Ion Stickers ($0.00)</p>{" "}
                <p className="color-brown mt-1">See More</p>
                <Separator className="my-2" />
              </div>
              <div className="text-sm">
                <div className="flex justify-between">
                  {" "}
                  <p className="font-semibold">Handeling Fee</p>{" "}
                  <span className="font-semibold">$10.00</span>
                </div>

                <Separator className="my-2" />
              </div>
              <div className="text-sm my-4">
                <div className="flex items-center justify-between gap-2 my-1">
                  {" "}
                  <p className="font-semibold">Subtotal</p>
                  <p className="font-semibold color-brown">$39.12</p>{" "}
                </div>
                <div className="flex items-center justify-between gap-2 my-1">
                  {" "}
                  <p className="font-medium">Package Level Charges:</p>
                  <p className="font-medium ">$0.00</p>{" "}
                </div>
                <div className="flex items-center justify-between gap-2 my-1">
                  {" "}
                  <p className="font-bold text-lg">Estimated Shipping:</p>
                  <p className="font-bold ">$39.12</p>{" "}
                </div>

                <p className="color-brown mt-1">See More</p>
              </div>
              {!couponData && (
                <div className="flex justify-between items-center gap-1 my-4">
                  <Input placeholder="Apply Coupon here..." />
                  <Button
                    variant={"brown"}
                    onClick={() => setCouponData(true)}
                    className="bg-dark hover:bg-red-800 text-white"
                  >
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
                      className="lucide lucide-check"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>{" "}
                    Apply
                  </Button>
                </div>
              )}
              {couponData && (
                <div className="my-4 relative h-[150px]">
                  <div className="relative z-10 flex items-center  h-[75px] ml-6 gap-2">
                    <Image src={discount} alt="" width={40} height={40} />
                    <h2>
                      -$25 <span className="text-xs"> (Discount)</span>
                    </h2>
                  </div>
                  <div className="relative z-10 flex items-center justify-between px-4  h-[75px] ml-2 gap-2">
                    <h2>
                      Code: <span className="text-xs"> NewUser15</span>
                    </h2>
                    <p className="color-brown underline text-sm">Remove</p>
                  </div>
                  <Image
                    src={coupon}
                    alt=""
                    width={20}
                    height={20}
                    className="w-full absolute top-0 left-0"
                  />
                  <Image
                    src={dotline}
                    alt=""
                    width={20}
                    height={20}
                    className="w-[93%] left-3 absolute top-[54%]"
                  />
                </div>
              )}
              <div className="my-6 text-xs px-2 py-8 border border-slate-300 rounded-md">
                <p>
                  Your default payment method will be charged for this
                  transaction.
                </p>
              </div>

              <Button
                variant={"brown"}
                className="bg-dark text-white w-full p-6 hover:text-white hover:bg-red-800"
              >
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
                  className="lucide mr-2 lucide-truck"
                >
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                  <path d="M15 18H9" />
                  <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                  <circle cx="17" cy="18" r="2" />
                  <circle cx="7" cy="18" r="2" />
                </svg>
                Create Ship Request
              </Button>
              <Button
                variant={"brown"}
                className="bg-white  color-brown my-2 w-full p-6 hover:text-red-800 hover:bg-white"
              >
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
                  className="lucide mr-2 lucide-circle-x"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
                Cancel Request
              </Button>

              <div className="p-4 flex gap-2 border border-slate-300 rounded-md">
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
                  All items are subject to a customs duty upon receipt of
                  package. Payment will be due when your package is delivered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShipRequest;
