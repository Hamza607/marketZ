import Image from "next/image";
import React from "react";
import box from "@/components/assets/images/tts-box.svg";
import circle from "@/components/assets/images/dotted-circle.svg";
import aeroplane from "@/components/assets/images/aeroplane.svg";
import Link from "next/link";
const StartShipping = () => {
  return (
    <>
      <div className="px-4 py-6">
        <div className=" lg:w-[90%] mx-auto lg:flex  justify-around">
          <div className="flex justify-center lg:block">
            <Image
              width={150}
              height={150}
              className="rotating-box"
              src={box}
              alt=""
            />
          </div>
          <div className="">
            <h3 className="text-center pt-32 color-brown text-4xl font-bold">
              Ready to start shipping with Marketsz?
            </h3>
            <p className="text-center my-4 color-brown">
              Sign up now and get your instant forwarding address
            </p>
            <Link href="/signup">
              <button className="mx-auto block my-20 w-[200px] py-4 brown hover:rotate-6">
                Get Started Now
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Image
              width={150}
              height={150}
              src={circle}
              className="mt-10 rotate-circle hidden lg:block"
              alt=""
            />
            <Image
              width={150}
              height={150}
              src={aeroplane}
              className="lg:mt-20 relative su-aero-plane  lg:-left-32"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StartShipping;
