import Image from "next/image";
import React from "react";
import location from "@/components/assets/images/location.png";
import call from "@/components/assets/images/call.png";
const MySuit = () => {
  return (
    <>
      <div className="p-4">
        <div className="border rounded-md md:w-[20%] px-4 py-6 my-4 shadow">
          <h4 className="text-[#888888] font-semibold">My Suite Number</h4>
          <h4 className="text-xl mt-4">XC1078</h4>
        </div>
        <div className="my-10">
          <h3 className="font-semibold text-[#888888] ">
            My warehouse addresses
          </h3>
          <div className="flex gap-4 flex-wrap">
            {[1, 1, 1, 1, 1].map((item, index) => {
              return (
                <div
                  key={index}
                  className="p-6 shadow md:w-[30%] w-full border my-4"
                >
                  <h3 className="text-[#888888] font-semibold">USA Address</h3>
                  <div className="flex gap-2 mt-4">
                    <div className=" ">
                      <Image width={50} height={50} src={location} alt="" />
                    </div>
                    <p>p4289 Express Lane Suite XC1078 Sarasota, FL 34249</p>
                  </div>
                  <div className="flex gap-2 my-2">
                    <div className="">
                      <Image width={20} height={20} src={call} alt="" />
                    </div>
                    <p>+1 (941) 538-6941</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MySuit;
