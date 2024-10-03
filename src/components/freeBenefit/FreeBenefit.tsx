import Image from "next/image";
import React from "react";
import gift from "@/components/assets/images/gift-parachute.svg";
import aeroplane from "@/components/assets/images/fb-aeroplane.svg";
import bgmap from "@/components/assets/images/map-gray.svg";
import TruckRoler from "../truckroler/TruckRoler";
import Link from "next/link";
const FreeBenefit = () => {
  return (
    <>
      <div className="my-8">
        <div className=" md:flex justify-between">
          <div className="mt-10  md:w-1/5">
            <Image
              src={gift}
              alt=""
              className="block mx-auto rotating-box"
              width={60}
              height={60}
            />
          </div>
          <div className="md:w-3/5">
            <h3 className="font-bold text-2xl md:text-4xl text-center mt-10">
              <span className="color-brown">Free benefits</span> you will{" "}
              <span className="color-brown"> love!</span>
            </h3>
            <p className="text-xl text-center px-4 md:p-0 md:w-1/2 mx-auto font-medium my-3">
              We go the extra mile to give you a seamless shipping experience,
              hassle free!
            </p>
          </div>
          <div className=" md:w-1/5">
            <Image
              src={gift}
              alt=""
              className="block mx-auto rotating-box"
              width={60}
              height={60}
            />
          </div>
        </div>
        <div className="md:flex mb-10 items-center justify-between gap-4  w-4/5 mx-auto">
          <div className=" bg-light py-8 px-16 rounded-3xl">
            <h4 className="text-md font-medium">
              <span className="color-brown">Swift doorstep delivery:</span>{" "}
              Shop, we ship, and your packages arrive in 1-3 days!
            </h4>
          </div>
          <div className=" w-1/3">
            <Image
              src={aeroplane}
              alt=""
              className="rotating-box hidden md:block"
              width={250}
              height={250}
            />
          </div>
        </div>
        <div className="md:flex items-center mb-10 justify-between gap-4  w-4/5 mx-auto">
          <div className="  md:w-1/3 flex justify-center md:justify-end">
            <Image
              src={gift}
              alt=""
              className="rotating-box md:mr-10"
              width={70}
              height={70}
            />
          </div>
          <div className=" bg-light py-8 px-16 rounded-3xl">
            <h4 className="text-md font-medium">
              <span className="color-brown"> Track, snap, deliver: </span> See
              your items, know their location, and get them ASAP!
            </h4>
          </div>
        </div>
        <div className="md:flex flex md:flex-row flex-col-reverse items-center justify-between gap-4 mb-10 w-4/5 mx-auto">
          <div className=" bg-light py-8 px-16 rounded-3xl">
            <h4 className="text-md font-medium">
              <span className="color-brown"> Free 30-Day Storage:</span> No rush
              to ship? No worries! We&apos;ll store your items for 90 days at no
              cost.
            </h4>
          </div>
          <div className=" w-1/3">
            <Image
              src={gift}
              alt=""
              className="rotating-box ml-10"
              width={70}
              height={70}
            />
          </div>
        </div>
      </div>

      <TruckRoler />

      <div className="bg-dark p-4 relative h-[500px] overflow-hidden ">
        <Image
          src={bgmap}
          alt=""
          width={100}
          height={100}
          className="absolute top-0  z-30 w-full object-cover left-0"
        />
        <div className="mt-28 relative !z-50 ">
          <h2 className="text-white text-center font-bold text-2xl md:text-4xl my-2">
            Ready to start shipping with Marketsz?
          </h2>
          <p className="text-white text-base md:text-xl text-center font-medium my-2">
            Sign up now and get your instant forwarding address
          </p>
          <Link href="/signup">
            <button className="bg-white  color-brown px-6 py-4 rounded-full mx-auto block mt-12 hover:rotate-6">
              Get Started Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FreeBenefit;
