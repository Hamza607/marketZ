"use client";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Image from "next/image";
import React, { useState } from "react";
import faq1 from "@/components/assets/images/faq-2.svg";
import faq2 from "@/components/assets/images/faq-3.svg";
import faq3 from "@/components/assets/images/faq-4.svg";
import faq4 from "@/components/assets/images/faq-5.svg";
import faq5 from "@/components/assets/images/faq-6.svg";
import faq6 from "@/components/assets/images/faq-7.svg";
import faq7 from "@/components/assets/images/faq-8.svg";
import faq8 from "@/components/assets/images/faq-9.svg";
import TopFaqs from "@/components/Faqs/TopFaqs";
import GetStartedFaq from "@/components/Faqs/GetStartedFaq";
import PaymentInformation from "@/components/Faqs/PaymentInformation";
import PackageReceivingFaq from "@/components/Faqs/PackageReceivingFaq";
import ShippingConsolidation from "@/components/Faqs/ShippingConsolidation";
import RestrictedMerchandise from "@/components/Faqs/RestrictedMerchandise";
import ShoppingUsUkStore from "@/components/Faqs/ShoppingUsUkStore";
import CovidHelp from "@/components/Faqs/CovidHelp";

const Faq = () => {
  const [faq, setFaq] = useState("Top FAQS");
  const [active, setActive] = useState<number>(1);
  return (
    <>
      <Header />
      <div className="px-4 py-8">
        <h1 className="font-bold text-4xl text-center my-16">
          What can we <span className="color-brown">help</span> you with?
        </h1>
        <div className="my-4 md:flex items-center gap-4 md:space-y-0 space-y-4 w-[90%] mx-auto">
          <div
            onClick={() => {
              setFaq("Top FAQS");
              setActive(1);
            }}
            className={`md:w-1/2 text-lg ${active == 1 && "bg-[#FFF5F5]"} border border-slate-200 p-2 md:text-2xl rounded-md flex items-center gap-2`}
          >
            <Image
              src={faq1}
              alt=""
              width={40}
              height={40}
              className="w-auto h-auto"
            />
            Top FAQS
          </div>
          <div
            onClick={() => {
              setFaq("Get Started");
              setActive(2);
            }}
            className={`md:w-1/2 text-lg ${active == 2 && "bg-[#FFF5F5]"} border border-slate-200 p-2 md:text-2xl rounded-md flex items-center gap-2`}
          >
            <Image
              src={faq2}
              alt=""
              width={40}
              height={40}
              className="w-auto h-auto"
            />
            Getting Started
          </div>
        </div>
        <div className="my-4 md:flex items-center gap-4  md:space-y-0 space-y-4 w-[90%] mx-auto">
          <div
            onClick={() => {
              setFaq("Payment Information");
              setActive(3);
            }}
            className={`md:w-1/2 text-lg ${active == 3 && "bg-[#FFF5F5]"} border border-slate-200 p-2 md:text-2xl rounded-md flex items-center gap-2`}
          >
            <Image
              src={faq3}
              alt=""
              width={40}
              height={40}
              className="w-auto h-auto"
            />
            Payments Information
          </div>
          <div
            onClick={() => {
              setFaq("Package Receiving & Storage");
              setActive(4);
            }}
            className={`md:w-1/2 text-lg ${active == 4 && "bg-[#FFF5F5]"} border border-slate-200 p-2 md:text-2xl rounded-md flex items-center gap-2`}
          >
            <Image
              src={faq4}
              alt=""
              width={40}
              height={40}
              className="w-auto h-auto"
            />
            Package Receiving & Storage
          </div>
        </div>
        <div className="my-4 md:flex items-center gap-4  md:space-y-0 space-y-4 w-[90%] mx-auto">
          <div
            onClick={() => {
              setFaq("Shipping and Consolidation");
              setActive(5);
            }}
            className={`md:w-1/2 text-lg ${active == 5 && "bg-[#FFF5F5]"} border border-slate-200 p-2 md:text-2xl rounded-md flex items-center gap-2`}
          >
            <Image
              src={faq5}
              alt=""
              width={40}
              height={40}
              className="w-auto h-auto"
            />
            Shipping Consolidation
          </div>
          <div
            onClick={() => {
              setFaq("Restricted Merchandise");
              setActive(6);
            }}
            className={`md:w-1/2 text-lg ${active == 6 && "bg-[#FFF5F5]"} border border-slate-200 p-2 md:text-2xl rounded-md flex items-center gap-2`}
          >
            <Image
              src={faq6}
              alt=""
              width={40}
              height={40}
              className="w-auto h-auto"
            />
            Restricted Merchandise
          </div>
        </div>
        <div className="my-4 md:flex items-center gap-4  md:space-y-0 space-y-4 w-[90%] mx-auto">
          <div
            onClick={() => {
              setFaq("Shopping US and UK stores");
              setActive(7);
            }}
            className={`md:w-1/2 text-lg ${active == 7 && "bg-[#FFF5F5]"} border border-slate-200 p-2 md:text-2xl rounded-md flex items-center gap-2`}
          >
            <Image
              src={faq7}
              alt=""
              width={40}
              height={40}
              className="w-auto h-auto"
            />
            Shopping US and UK stores
          </div>
          <div
            onClick={() => {
              setFaq("Covid-19 Helps");
              setActive(8);
            }}
            className={`md:w-1/2 text-lg ${active == 8 && "bg-[#FFF5F5]"} border border-slate-200 p-2 md:text-2xl rounded-md flex items-center gap-2`}
          >
            <Image
              src={faq8}
              alt=""
              width={40}
              height={40}
              className="w-auto h-auto"
            />
            Covid-19 Helps
          </div>
        </div>
        <div className="mt-20">
          <h3 className="text-4xl font-bold text-center my-8">{faq}</h3>
          <div className=" w-[95%] mx-auto ">
            {faq == "Top FAQS" ? (
              <TopFaqs />
            ) : faq == "Get Started" ? (
              <GetStartedFaq />
            ) : faq == "Payment Information" ? (
              <PaymentInformation />
            ) : faq == "Package Receiving & Storage" ? (
              <PackageReceivingFaq />
            ) : faq == "Shipping and Consolidation" ? (
              <ShippingConsolidation />
            ) : faq == "Restricted Merchandise" ? (
              <RestrictedMerchandise />
            ) : faq == "Shopping US and UK stores" ? (
              <ShoppingUsUkStore />
            ) : faq == "Covid-19 Helps" ? (
              <CovidHelp />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
