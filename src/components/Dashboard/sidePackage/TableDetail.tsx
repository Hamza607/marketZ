"use client";
import FileUploader from "@/components/modals/FileUploader";
import Modal from "@/components/modals/Modal";
import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import ServiceDetail from "./ServiceDetail/ServiceDetail";
import ServiceCheckout from "./ServiceDetail/ServiceCheckout";

interface RowData {
  from: string;
  packageId: string;
  dateReceived: string;
  status: string;
  estValue: number;
  weight: number;
}

interface TableDetailProps {
  rowData: RowData;
  setSelectedRow: React.Dispatch<React.SetStateAction<null>>;
}

const TableDetail: React.FC<TableDetailProps> = ({
  rowData,
  setSelectedRow,
}) => {
  const [submitModal, setSubmitModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [serviceRequest, setServiceRequest] = useState("");
  const handleClose = () => {
    setSubmitModal(false);
    setSuccessModal(false);
  };
  return (
    <>
      {serviceRequest == "" && (
        <div className="p-4">
          <div
            className="my-2 flex items-center cursor-pointer gap-2 text-[#888888] font-semibold w-fit"
            onClick={() => setSelectedRow(null)}
          >
            <span>
              <IoIosArrowRoundBack />
            </span>
            <span>Back</span>
          </div>
          <div className=" md:flex">
            <div className="flex flex-wrap md:w-2/3 gap-8">
              <div className="p-4 border border-salte-200 rounded-md w-full md:w-auto">
                <h1 className="text-center font-semibold">Package</h1>
                <p className="text-center mt-2"> {rowData?.packageId}</p>
              </div>
              <div className="p-4 border border-salte-200 rounded-md w-full md:w-auto">
                <h1 className="text-center font-semibold">From</h1>
                <p className="text-center mt-2"> {rowData?.from}</p>
              </div>
              <div className="p-4 border border-salte-200 rounded-md w-full md:w-auto">
                <h1 className="text-center font-semibold">Date Recieved</h1>
                <p className="text-center mt-2"> {rowData?.dateReceived}</p>
              </div>
              <div className="p-4 border border-salte-200 rounded-md w-full md:w-auto">
                <h1 className="text-center font-semibold">
                  Package Weight (Lbs)
                </h1>
                <p className="text-center mt-2"> {rowData?.weight}</p>
              </div>
              <div className="p-4 border border-salte-200 rounded-md w-full md:w-auto">
                <h1 className="text-center font-semibold">
                  Total Package Value (USA)
                </h1>
                <p className="text-center mt-2"> {rowData?.estValue}</p>
              </div>
            </div>
            <div className="md:w-1/3">
              <ul className="font-semibold underline ">
                <li
                  className="my-2 p-1 cursor-pointer"
                  onClick={() => setSubmitModal(true)}
                >
                  Submit Merchant Invoice
                </li>
                <li
                  className="my-2 p-1 cursor-pointer"
                  onClick={() => setServiceRequest("serviceDetail")}
                >
                  Request Service
                </li>
                <li className="my-2 p-1 cursor-pointer">
                  Create Shipment Request
                </li>
                <li className="my-2 p-1 cursor-pointer">Add Note</li>
                <li className="my-2 p-1 cursor-pointer">Documents</li>
                <li className="my-2 p-1 cursor-pointer">Photos</li>
              </ul>
            </div>
          </div>

          <div className="my-4">
            <table className="table-fixed  w-full">
              <thead>
                <tr>
                  <th className="text-start">Item Name</th>
                  <th className="text-start">QTY</th>
                  <th className="text-start">Unit value (USD)</th>
                  <th className="text-start">TOTAL LINE VALUE (USD)</th>
                </tr>
              </thead>
              <tbody>
                {[1, 1, 1].map((_, index) => (
                  <tr key={index} className="hover:bg-slate-100 ">
                    <td className="text-[#888888] py-2 font-semibold text-sm">
                      power drills
                    </td>
                    <td className="text-[#888888] py-2 font-semibold text-sm">
                      3
                    </td>
                    <td className="text-[#888888] py-2 font-semibold text-sm">
                      374
                    </td>
                    <td
                      className={`font-semibold text-sm ${
                        rowData.status === "Action required"
                          ? "text-red-400"
                          : rowData.status === "Ready to Send"
                            ? "text-green-400"
                            : rowData.status === "In Review"
                              ? "text-yellow-400"
                              : ""
                      }`}
                    >
                      1122
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {serviceRequest == "serviceDetail" && (
        <ServiceDetail
          serviceRequest={serviceRequest}
          setServiceRequest={setServiceRequest}
        />
      )}
      {serviceRequest == "checkout" && (
        <ServiceCheckout setServiceRequest={setServiceRequest} />
      )}
      <Modal isOpen={submitModal} onClose={handleClose}>
        <div className="">
          <div className="flex justify-between items-center  font-semibold">
            <p>Upload Files</p>
            <IoClose onClick={handleClose} />
          </div>
        </div>
        <FileUploader />
        <div className="flex gap-2 justify-end my-2">
          <button className="px-4 py-2 border border-gray-300 text-xs rounded-md">
            Cancel
          </button>
          <button
            onClick={() => {
              setSuccessModal(true);
              setSubmitModal(false);
            }}
            className="px-4 py-2 border border-gray-300 text-xs rounded-md bg-black text-white"
          >
            Upload Files
          </button>
        </div>
      </Modal>
      <Modal isOpen={successModal} onClose={handleClose}>
        <div className="">
          <h3 className=" font-semibold text-sm my-4">File Uploaded</h3>
          <div className="flex flex-col justify-center items-center">
            <p className=" text-green-800 font-semibold">
              2 Files Upload Successfully{" "}
            </p>
            <button
              onClick={handleClose}
              className="px-4 py-2 my-2 border border-gray-300 text-xs rounded-md bg-black text-white"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TableDetail;
