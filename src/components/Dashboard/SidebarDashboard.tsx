"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/components/assets/images/icon-logo.svg";
import suit from "@/components/assets/images/Mailbox.png";
import package1 from "@/components/assets/images/Package.png";
import service from "@/components/assets/images/service.png";
import queue from "@/components/assets/images/timer.png";
import notification from "@/components/assets/images/bell.png";
import shipping from "@/components/assets/images/shipping.png";
import faq from "@/components/assets/images/faq.png";
import setting from "@/components/assets/images/setting.png";
import logout from "@/components/assets/images/logout.png";
import MySuit from "./mySuit/MySuit";
import DashboardHeader from "./dashboardHeader/DashboardHeader";
import DashboardFooter from "./dashboardFooter/DashboardFooter";
import { IoIosClose } from "react-icons/io";
import SidePackage from "./sidePackage/SidePackage";
const SidebarDashboard = () => {
  const [show, setShow] = useState(true);
  const [navigateList, setNavigateList] = useState("suit");

  const menuItems = [
    { id: "suit", icon: suit, text: "My Suit" },
    { id: "package", icon: package1, text: "Packages" },
    { id: "service", icon: service, text: "Service History" },
    { id: "queue", icon: queue, text: "Queue" },
    { id: "notification", icon: notification, text: "Notification" },
    { id: "shipping", icon: shipping, text: "Shipping Calculator" },
    { id: "faq", icon: faq, text: "FAQ" },
  ];
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShow(false);
      } else {
        setShow(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="flex ">
        {show && (
          <div className="p-4 border-r z-10 md:w-[20%] h-[100vh] overflow-y-scroll  fixed bg-white w-3/5 md:sticky  top-0 ">
            <div className="flex justify-between items-center">
              <Image src={logo} alt=" " width={140} height={140} />{" "}
              <IoIosClose onClick={() => setShow(false)} />
            </div>
            <div>
              <ul className="my-10">
                {menuItems.map((item) => (
                  <li
                    onClick={() => setNavigateList(item.id)}
                    className={`font-medium ${navigateList === item.id && "font-semibold text-black bg-[#E9E9E9]"} text-md flex items-center gap-4 hover:bg-[#E9E9E9] cursor-pointer text-[#888888] ml-4 p-2 mt-2 rounded-lg`}
                    key={item.id}
                  >
                    <Image src={item.icon} alt="" width={20} height={20} />
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
              <ul className="py-4 border-t border-t-slate-300">
                <li className="font-medium text-md flex items-center gap-4  hover:bg-[#E9E9E9] cursor-pointer text-[#888888] ml-4 p-2  mt-2 rounded-lg">
                  <Image src={setting} alt="" width={20} height={20} />
                  <p>Setting</p>
                </li>
                <li className="font-medium text-md flex items-center gap-4  hover:bg-[#E9E9E9] cursor-pointer text-[#888888] ml-4 p-2  mt-2 rounded-lg">
                  <Image src={logout} alt="" width={20} height={20} />
                  <p>Log out</p>
                </li>
              </ul>
            </div>
          </div>
        )}
        <div className={` ${show ? "w-[80%]" : "w-[100%]"}  `}>
          <DashboardHeader
            setShow={setShow}
            heading={
              navigateList === "suit"
                ? "My Suite"
                : navigateList === "package"
                  ? "Package"
                  : navigateList === "service"
                    ? "Service"
                    : ""
            }
          />
          {navigateList === "suit" && <MySuit />}
          {navigateList === "package" && <SidePackage />}

          <DashboardFooter />
        </div>
      </div>
    </>
  );
};

export default SidebarDashboard;
