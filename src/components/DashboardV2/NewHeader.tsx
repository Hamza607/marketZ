import Image from "next/image";
import React from "react";
import logo from "@/components/assets/images/newlogo.png";
import usflag from "@/components/assets/images/usflag.png";
import engflag from "@/components/assets/images/engflag.png";
import { Button } from "../ui/button";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
interface NewHeaderProps {
  setHeaderLink: (link: string) => void;
}
const NewHeader: React.FC<NewHeaderProps> = ({ setHeaderLink }) => {
  return (
    <>
      <div className="p-4 border flex justify-between bg-white items-center ">
        <div className=" flex gap-4 items-center">
          <Image src={logo} alt="" width={80} height={80} />
          <ul>
            <li
              onClick={() => setHeaderLink("mysuit")}
              className="inline cursor-pointer px-4 py-2 text-slate-500"
            >
              My Suite
            </li>
            <li
              onClick={() => setHeaderLink("shippinghistory")}
              className="inline cursor-pointer px-4 py-2 text-slate-500"
            >
              Shipping History
            </li>
            <li className="inline cursor-pointer px-4 py-2 text-slate-500">
              Help
            </li>
            <li className="inline cursor-pointer px-4 py-2 text-slate-500">
              Contact Us
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <Button variant={"brown"} size={"sm"}>
            Log out
          </Button>
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
                    <p className="text-xs ">Manage my packages from the US</p>
                  </div>
                </div>
              </SelectItem>
              <SelectItem value="UK">
                {" "}
                <div className="flex gap-1 items-center p-2">
                  <div className="flex items-center gap-2">
                    <Image width={20} height={20} src={engflag} alt="" />
                    <p className="text-xs ">Manage my packages from the UK</p>
                  </div>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
          <div className="h-7 w-[1px] bg-slate-300"></div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex gap-1 items-center p-2">
                <div>
                  <p className="text-xs font-semibold">Bryan Adams</p>
                  <p className="text-xs">Manager</p>
                </div>
                <RiArrowDropDownLine />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};

export default NewHeader;
