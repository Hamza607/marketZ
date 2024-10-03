"use client";
import Image from "next/image";
import React, { useState } from "react";
import bell from "@/components/assets/images/bell.png";
import userimg from "@/components/assets/images/userimg.png";
import edit from "@/components/assets/images/edit.png";
import { RiArrowDropDownLine } from "react-icons/ri";
// import { spec } from "node:test/reporters";

interface DashboardHeaderProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  heading: string;
}
const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  setShow,
  heading,
}) => {
  const [profile, setProfile] = useState(false);
  return (
    <>
      <div className="px-4 py-6 md:flex justify-between">
        <div className="my-2 md:my-0">
          <p className="text-2xl" onClick={() => setShow(true)}>
            {heading}
          </p>
        </div>
        <div className=" flex items-center gap-4">
          <div className="relative">
            <Image src={bell} alt="" width={40} height={40} />
            <div className="absolute -top-2 left-3 w-[14px] rounded-full h-[14px] bg-red-600"></div>
          </div>
          <div className="flex items-center gap-2 relative">
            <Image src={userimg} alt="" width={40} height={40} />
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setProfile(!profile)}
            >
              <div className="text-sm ">
                <p className="text-[#888888] font-medium">Jhon doe</p>
                <p className="text-[#888888] font-medium">
                  Jhondoe3232@gmail.com
                </p>
              </div>
              <div>
                <RiArrowDropDownLine
                  className={`text-2xl text-[#888888] ${profile && "rotate-180"} `}
                />
              </div>
            </div>
            {profile && (
              <div
                onClick={() => setProfile(false)}
                className="absolute top-10 right-5 w-[200px] text-sm flex gap-2 hover:bg-gray-50 cursor-pointer justify-center bg-white p-4 shadow"
              >
                <Image src={edit} alt="" width={20} height={10} />{" "}
                <p>My Profile</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
