import Image from "next/image";
import React from "react";
import circle from "@/components/assets/images/check-icon-circle.svg";
import cloud from "@/components/assets/images/cloud-1.svg";
import cloud2 from "@/components/assets/images/cloud-2.svg";
import crow from "@/components/assets/images/black-crow.svg";
import usalandmark from "@/components/assets/images/USA landmarks.svg";
import home from "@/components/assets/images/home.svg";
import uklandmark from "@/components/assets/images/uk landmarks.svg";
import aeroplane from "@/components/assets/images/hero-aeroplane.svg";
import box from "@/components/assets/images/tts-box.svg";
import Link from "next/link";
const HeroSection = () => {
  return (
    <>
      <div className="bg-[#9E1D22] p-4">
        <div className="  ">
          <div className=" w-5/5 relative mx-auto h-[700px]">
            <Image
              src={cloud}
              alt=""
              width={100}
              height={100}
              className="absolute w-[80px] md:w-auto top-0 left-6"
            />
            <Image
              src={cloud}
              alt=""
              width={100}
              height={100}
              className="absolute w-[80px] md:w-auto top-0 right-6"
            />
            <Image
              src={cloud2}
              alt=""
              width={100}
              height={100}
              className="absolute w-[40px] md:w-auto top-20 right-6"
            />
            <Image
              src={cloud2}
              alt=""
              width={100}
              height={100}
              className="absolute w-[40px] md:w-auto top-20 left-32"
            />
            <Image
              src={cloud2}
              alt=""
              width={100}
              height={100}
              className="absolute w-[40px] md:w-auto top-20 left-[40%]"
            />
            <Image
              src={crow}
              alt=""
              width={30}
              height={30}
              className="absolute hero-black-crow top-20 left-60"
            />
            <Image
              src={crow}
              alt=""
              width={30}
              height={30}
              className="absolute hero-black-crow top-28 right-60"
            />
            <Image
              src={crow}
              alt=""
              width={30}
              height={30}
              className="absolute hero-black-crow top-[50%] right-[50%]"
            />
            <Image
              src={crow}
              alt=""
              width={30}
              height={30}
              className="absolute  hero-black-crow top-[50%] right-[20%]"
            />
            <Image
              src={crow}
              alt=""
              width={30}
              height={30}
              className="absolute hero-black-crow top-[50%] left-[20%]"
            />
            <Image
              src={usalandmark}
              alt=""
              width={100}
              height={100}
              className="absolute w-[140px] lg:w-[300px] top-[70%] left-[0%]"
            />
            <Image
              src={home}
              alt=""
              width={100}
              height={100}
              className="absolute w-[140px] lg:w-[300px] top-[70%] left-[40%]"
            />
            <Image
              src={uklandmark}
              alt=""
              width={100}
              height={100}
              className="absolute w-[140px] lg:w-[300px] top-[70%] left-[70%]"
            />

            <Image
              src={aeroplane}
              alt=""
              width={250}
              height={250}
              className="absolute z-10 top-[20%] left-[40%]"
            />
            <Image
              src={box}
              alt=""
              width={100}
              height={100}
              className="absolute su-package2 top-[20%] left-[45%]"
            />
          </div>
        </div>

        <div>
          <h1 className="md:text-6xl text-2xl md:w-[80%] mx-auto text-center leading-8 md:leading-[70px] text-white font-bold">
            Get Your <span className="underline">USA</span> and{" "}
            <span className="underline">UK</span> Shipping Address for the Dutch
            Caribbean
          </h1>
          <p className="text-white md:w-[60%] my-4 text-lg md:text-2xl text-center mx-auto">
            Shop on any online store using your unique and personal Marketsz USA
            and UK Shipping Address and we deliver your orders to your doorstep
            at your home or business in the Dutch Caribbean.
          </p>
          <div className="md:flex justify-center gap-7 text-white text-xl my-8">
            <div className="flex gap-3 items-center">
              <Image src={circle} alt="" width={20} height={20} />{" "}
              <span>2-4 Days Delivery</span>
            </div>
            <div className="flex gap-3 items-center">
              <Image src={circle} alt="" width={20} height={20} />{" "}
              <span>Unlimited Consolidation</span>
            </div>
            <div className="flex gap-3 items-center">
              <Image src={circle} alt="" width={20} height={20} />{" "}
              <span>Live Support</span>
            </div>
          </div>
          <div className="flex justify-center mb-[100px]">
            <Link href="/signup">
              <button className="text-[#9E1D22] hover:rotate-6 shadow-2xl bg-white px-6 py-4 rounded-full font-bold text-xl ">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
