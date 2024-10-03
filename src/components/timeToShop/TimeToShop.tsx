import Image from "next/image";
import React from "react";
import aeroplane from "@/components/assets/images/tts-aeoplane.svg";
import gift from "@/components/assets/images/gift-parachute.svg";
import check from "@/components/assets/images/tts-check-circle-green.svg";
import Link from "next/link";
const TimeToShop = () => {
  return (
    <>
      <div className=" px-8 py-20 md:flex gap-8 bg-light">
        <div className="md:w-1/5 flex md:justify-end justify-center">
          <div className="">
            <Image
              src={aeroplane}
              alt=""
              width={200}
              className="rotating-box"
              height={200}
            />
          </div>
        </div>
        <div className="md:w-3/5 mx-auto">
          <h3 className="text-center text-4xl font-bold ">
            It&apos;s time to <span className="color-brown">shop</span> till you
            drop and <span className="color-brown">get your orders</span> in
            record time!
          </h3>
          <p className="text-center font-medium text-xl mt-4">
            It&apos;s never been easier to shop from any online store and get
            your packages delivered right at your door
          </p>

          <div className="md:flex gap-4 justify-center my-8">
            <div className="flex justify-center md:justify-start items-center gap-4">
              <Image src={check} alt="" width={30} height={30} />
              <p>2-4 Days Delivery</p>
            </div>
            <div className="flex justify-center md:justify-start items-center gap-4">
              <Image src={check} alt="" width={30} height={30} />
              <p>2-4 Days Delivery</p>
            </div>
            <div className="flex justify-center md:justify-start items-center gap-4">
              <Image src={check} alt="" width={30} height={30} />
              <p>2-4 Days Delivery</p>
            </div>
          </div>
          <Link href="/signup">
            <button className="bg-dark text-white rounded-full px-6 py-4 my-4 text-lg mx-auto block hover:rotate-6">
              Get Started
            </button>
          </Link>
        </div>
        <div className="md:w-1/5 flex justify-center md:justify-start">
          <Image
            src={gift}
            alt=""
            width={120}
            height={120}
            className="su-package"
          />
        </div>
      </div>
    </>
  );
};

export default TimeToShop;
