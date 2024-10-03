import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
interface serviceRequest {
  setServiceRequest: React.Dispatch<React.SetStateAction<string>>;
}
const ServiceCheckout: React.FC<serviceRequest> = ({ setServiceRequest }) => {
  return (
    <>
      <div className="p-4 min-h-[80vh]">
        <div
          className="my-2 flex items-center cursor-pointer gap-2 text-[#888888] font-semibold w-fit"
          onClick={() => setServiceRequest("serviceDetail")}
        >
          <span>
            <IoIosArrowRoundBack />
          </span>
          <span>Back</span>
        </div>
        <h3 className=" font-semibold px-4">Checkout</h3>
        <p className="text-[#888888] px-4">Review your request before paying</p>

        <div className="my-4 p-4 ">
          <table className="table-auto  w-full">
            <thead>
              <tr>
                <th className="text-start">Service</th>
                <th className="text-start">Package</th>
                <th className="text-start">QTY</th>
                <th className="text-start">Free (USD)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-slate-100 ">
                <td className="text-[#888888] py-2 font-semibold text-sm">
                  Advance Photo
                </td>
                <td className="text-[#888888] py-2 font-semibold text-sm">
                  432445354
                </td>
                <td className="text-[#888888] py-2 font-semibold text-sm">1</td>
                <td className="font-semibold text-sm">15</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="">
          <div className=" p-2 w-1/5 ml-auto mr-16">
            <div className="flex justify-between items-center font-semibold my-2">
              <p>Subtotal </p> <p className="text-[#888888]"> $15.00</p>
            </div>
            <div className="flex justify-between items-center font-semibold my-2">
              <p>Discount </p> <p className="text-[#888888]"> -$1.00</p>
            </div>
            <div className="flex justify-between items-center font-semibold my-2">
              <p>Total </p> <p className="text-[#888888]"> $14.00</p>{" "}
            </div>
          </div>
          <div className="flex gap-2 justify-end my-2  md:mr-16">
            <button className="px-4 py-2 text-sm text-red-400 ">
              Cancel Service
            </button>
            <button className="px-4 py-2 text-sm text-white bg-black rounded-md ">
              Pay and Request Service
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCheckout;
