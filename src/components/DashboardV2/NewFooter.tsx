import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaX } from "react-icons/fa6";
const NewFooter = () => {
  return (
    <>
      <div className="bg-black text-white p-10 ">
        <div className="flex justify-between mb-4 pb-8 border-b border-b-slate-800">
          <h2 className="text-white font-semibold">Marketsz</h2>
          <ul>
            <li className="inline m-2 text-slate-300 cursor-pointer">
              My Suite
            </li>
            <li className="inline m-2 text-slate-300 cursor-pointer">
              Shipping History
            </li>
            <li className="inline m-2 text-slate-300 cursor-pointer">Help</li>
            <li className="inline m-2 text-slate-300 cursor-pointer">
              Contact Us
            </li>
          </ul>
          <ul>
            <li className="inline-block p-2 text-white">
              <FaTwitter />
            </li>
            <li className="inline-block p-2 text-white">
              <FaFacebook />
            </li>
            <li className="inline-block p-2 text-white">
              <FaX />
            </li>
            <li className="inline-block p-2 text-white">
              <FaInstagram />
            </li>
          </ul>
        </div>

        {/* <Separator className="my-4" /> */}
        <div className="flex justify-between text-white text-sm">
          <p className="cursor-pointer">@ All Rights Reserved - 2024</p>
          <div className="flex gap-2 items-center">
            <p className="cursor-pointer">Terms of Service</p>
            <p className="cursor-pointer">Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewFooter;
