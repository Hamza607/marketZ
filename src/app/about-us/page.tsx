import Image from "next/image";
import React from "react";
import plane from "@/components/assets/images/tts-aeoplane.svg";
import gift from "@/components/assets/images/gift-parachute.svg";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
const page = () => {
  return (
    <>
      <Header />
      <div className="p-4 md:flex gap-5 ">
        <div className="md:w-1/5 flex justify-center md:justify-end">
          <Image
            width={200}
            height={200}
            src={plane}
            alt=""
            className="rotating-box"
          />
        </div>
        <div className="md:w-3/5">
          <h2 className="text-center font-bold text-4xl my-10">
            Welcome to <span className="color-brown">Marketsz!</span>
          </h2>
          <iframe
            width="100%"
            height="500"
            className="border-4 border-red-700 rounded-lg"
            src="https://www.youtube.com/embed/OxF-wG_wj1k?si=Em5MAngk3UVuZA9R"
            allowFullScreen
          ></iframe>
        </div>
        <div className="md:w-1/5 flex justify-center">
          <Image
            width={100}
            height={100}
            className="su-package"
            src={gift}
            alt=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
