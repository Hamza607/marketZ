import Image from "next/image";
import React from "react";
import loading from "@/components/assets/images/loading.png";
import usflag from "@/components/assets/images/usflag.png";
import engflag from "@/components/assets/images/engflag.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface PackageHeaderProps {
  setQueue: (queue: string) => void;
}
const PackageHeader = ({ setQueue }: PackageHeaderProps) => {
  return (
    <>
      <div className="mx-8 my-4 bg-white p-6 rounded-md">
        <div className="flex gap-2 items-center">
          <div className="w-2/6">
            <h2 className="text-2xl font-semibold">Packages in Suite XC1164</h2>

            <div className="flex  items-center gap-4">
              <p>My Shipping Schedule;</p>{" "}
              <div className="bg-[#FFFAEB] text-slate-400 px-4 py-1 rounded-full flex gap-2 items-center">
                <p className="w-2 h-2 bg-orange-500 rounded-full"></p>
                <p className="text-orange-700 font-semibold"> Hold</p>
              </div>
            </div>
          </div>
          <div className=" w-1/6  mx-4 border-x border-x-slate-300">
            <div className="flex border border-[red]/5 mx-6 bg-[red]/5 rounded-md  items-center justify-center gap-2">
              <div className="py-2">
                <Image src={loading} alt="" width={40} height={40} />
              </div>
              <div className="py-2">
                <h3 className="font-semibold  text-xl">08</h3>
                <p
                  onClick={() => setQueue("queue")}
                  className="text-orange-800 text-sm underline cursor-pointer font-semibold"
                >
                  View Queue
                </p>
              </div>
            </div>
          </div>
          <div className="w-2/6 gap-2 mx-4  pl-4">
            <div>
              <h3 className="font-semibold">Manage Packages</h3>
            </div>
            <div>
              <Select>
                <SelectTrigger className="w-[300px] my-1">
                  <SelectValue placeholder="Select your Package" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="US">
                    {" "}
                    <div className="flex gap-1 items-center p-2">
                      <div className="flex items-center gap-2">
                        <Image width={20} height={20} src={usflag} alt="" />
                        <p className="text-xs ">
                          Manage my packages from the US
                        </p>
                      </div>
                    </div>
                  </SelectItem>
                  <SelectItem value="UK">
                    {" "}
                    <div className="flex gap-1 items-center p-2">
                      <div className="flex items-center gap-2">
                        <Image width={20} height={20} src={engflag} alt="" />
                        <p className="text-xs ">
                          Manage my packages from the UK
                        </p>
                      </div>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageHeader;
