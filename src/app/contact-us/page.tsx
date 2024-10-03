import Image from "next/image";
import React from "react";
import contactus from "@/components/assets/images/contact-us-illustration.svg";
import TruckRoler from "@/components/truckroler/TruckRoler";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
const page = () => {
  return (
    <>
      <Header />
      <div className="p-4 my-20 md:flex  items-center">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-semibold mb-2 text-center">
            Contact <span className="color-brown">Marketsz</span>
          </h2>
          <p className="text-center p-2 md:p-0 md:w-1/2 mx-auto my-4 font-medium">
            Contact us today through our live chat. Or send us an email at:
          </p>
          <p className="text-center font-semibold text-xl underline">
            support@marketsz.com
          </p>
        </div>
        <div className="flex justify-center items-center my-4 md:my-0 md:w-1/2">
          <Image
            src={contactus}
            alt=""
            width={400}
            height={400}
            className="cu-illustration"
          />
        </div>
      </div>
      <TruckRoler />
      <Footer />
    </>
  );
};

export default page;
