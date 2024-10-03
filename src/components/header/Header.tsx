"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/components/assets/images/icon-logo.svg";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <header>
        <div className=" px-6 flex justify-between items-center py-2">
          <Link href="/">
            {" "}
            <Image src={logo} width={250} height={250} alt="" />
          </Link>

          <RxHamburgerMenu
            className="block lg:hidden cursor-pointer text-2xl"
            onClick={() => setMenu(!menu)}
          />
          <div className="hidden lg:block">
            <ul className="flex gap-3 font-medium text-md ">
              <Link href="/how-it-work">
                {" "}
                <li className="cursor-pointer px-4 py-2">How its works?</li>
              </Link>
              <Link href="/cost-calculator">
                {" "}
                <li className="cursor-pointer px-4 py-2">Cost calculator</li>
              </Link>
              <Link href="/about-us">
                {" "}
                <li className="cursor-pointer px-4 py-2">About us</li>
              </Link>
              <Link href="/contact-us">
                {" "}
                <li className="cursor-pointer px-4 py-2">Contact us</li>
              </Link>
              <Link href="/login">
                <li className="cursor-pointer hover:rotate-6 bg-[#9E1D22] font-normal px-4 py-2 text-md rounded-full text-white">
                  Login
                </li>
              </Link>
              <Link href="/signup">
                <li className="cursor-pointer hover:rotate-6 bg-[#9E1D22] font-normal px-4 py-2 text-md rounded-full text-white">
                  Get Started
                </li>
              </Link>
            </ul>
          </div>
          {menu && (
            <div className="absolute top-[90px]  left-4 rounded-md z-20 bg-white p-4 w-[95%] lg:hidden block ">
              <ul className="lg:flex gap-3 font-medium text-md ">
                <Link href="/how-it-work">
                  {" "}
                  <li className="cursor-pointer my-2 px-4 py-2">
                    How its works?
                  </li>
                </Link>
                <Link href="/cost-calculator">
                  <li className="cursor-pointer my-2 px-4 py-2">
                    Cost calculator
                  </li>
                </Link>
                <Link href="/about-us">
                  {" "}
                  <li className="cursor-pointer my-2 px-4 py-2">
                    About us
                  </li>{" "}
                </Link>
                <Link href="/contact-us">
                  <li className="cursor-pointer my-2 px-4 py-2">Contact us</li>{" "}
                </Link>
                <Link href="/login">
                  <li className="cursor-pointer my-2 hover:rotate-6 bg-[#9E1D22] font-normal px-4 py-2 text-md rounded-full text-white">
                    Login
                  </li>
                </Link>
                <Link href="/signup">
                  <li className="cursor-pointer my-2 hover:rotate-6 bg-[#9E1D22] font-normal px-4 py-2 text-md rounded-full text-white">
                    Get Started
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
