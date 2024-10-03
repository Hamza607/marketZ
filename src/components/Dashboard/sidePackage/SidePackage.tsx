import Image from "next/image";
import React, { useState } from "react";
import location from "@/components/assets/images/location.png";
import Table from "./Table";
import TableDetail from "./TableDetail";
const SidePackage = () => {
  const [selectState, setSelectState] = useState("usa");
  const [selectedRow, setSelectedRow] = useState(null);
  const tableData = [
    {
      from: "Google",
      packageId: "2324-3232",
      dateReceived: "07-03-2024",
      status: "Action required",
      estValue: 1961,
      weight: 9,
    },
    {
      from: "Gucci",
      packageId: "2324-3232",
      dateReceived: "07-03-2024",
      status: "Action required",
      estValue: 1972,
      weight: 21,
    },
    {
      from: "Zara",
      packageId: "2324-3232",
      dateReceived: "07-03-2024",
      status: "Ready to Send",
      estValue: 1975,
      weight: 7,
    },
    {
      from: "Amazon",
      packageId: "2324-3232",
      dateReceived: "07-03-2024",
      status: "In Review",
      estValue: 1975,
      weight: 86,
    },
  ];
  return (
    <>
      {selectedRow == null && (
        <div className="p-4">
          <div className="flex ">
            <div className="w-1/3">
              <span
                onClick={() => setSelectState("usa")}
                className={`px-4 py-2 font-semibold ${selectState == "usa" && "bg-slate-200"} cursor-pointer rounded-s-full border`}
              >
                USA
              </span>
              <span
                onClick={() => setSelectState("uk")}
                className={`px-4 py-2 font-semibold ${selectState == "uk" && "bg-slate-200"} cursor-pointer rounded-e-full border`}
              >
                UK
              </span>
            </div>
            <div className="w-2/3">
              <p className="text-[#888888] py-2 font-semibold">
                18 Packages in this Suite
              </p>
            </div>
          </div>
          <div className="my-6 sm:flex  ">
            <div className="sm:w-1/3 flex sm:items-center gap-3 ">
              <div>
                <Image src={location} width={30} height={30} alt="" />
              </div>
              <p className="sm:w-1/2">
                4289 Express LaneSuite XC1078 Sarasota, FL 34249
              </p>
            </div>
            <div className="sm:w-2/3  sm:flex gap-4">
              <div className="border border-gray-400 rounded-lg h-[150px] flex flex-col justify-center p-4 text-center">
                {" "}
                <p className="text-2xl text-red-500">3</p>{" "}
                <h3>Action Required</h3>{" "}
              </div>
              <div className="border border-gray-400 rounded-lg h-[150px] flex flex-col justify-center p-4 text-center">
                <p
                  className="text-2xl text-yellow-400
               "
                >
                  5
                </p>{" "}
                <h3>In Review</h3>{" "}
              </div>
              <div className="border border-gray-400 rounded-lg h-[150px] flex flex-col justify-center p-4 text-center">
                {" "}
                <p className="text-2xl text-green-400">10</p>{" "}
                <h3>Ready to Send</h3>
              </div>
            </div>
          </div>
          <div className="my-2">
            <div className="flex gap-4 text-sm">
              <button className="action-btn border border-gray-500">All</button>
              <button className="action-btn border border-red-400">
                Action Required
              </button>
              <button className="action-btn border border-yellow-400">
                In Review
              </button>
              <button className="action-btn border border-green-400">
                Ready to Send
              </button>
            </div>
          </div>

          <Table
            tableData={tableData}
            setSelectedRow={setSelectedRow}
            selectedRow={selectedRow}
          />
        </div>
      )}
      {selectedRow && (
        <TableDetail setSelectedRow={setSelectedRow} rowData={selectedRow} />
      )}
    </>
  );
};

export default SidePackage;
