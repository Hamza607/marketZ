import Image from "next/image";
import React from "react";
import hassle from "@/components/assets/images/hassle-free-cart.svg";
import reactangle1 from "@/components/assets/images/hf-rectangle-1.svg";
import location from "@/components/assets/images/hf-location-icon-1.svg";
import location2 from "@/components/assets/images/hf-location-icon-2.svg";
import location3 from "@/components/assets/images/hf-location-icon-3.svg";
import location4 from "@/components/assets/images/hf-location-icon-4.svg";
import warehouse from "@/components/assets/images/hf-warehouse-icon.svg";
import track from "@/components/assets/images/hf-cargo-track.svg";
import cargo from "@/components/assets/images/hf-cargo-box-1.svg";
import cargo1 from "@/components/assets/images/hf-cargo-box-2.svg";
import cargo2 from "@/components/assets/images/hf-cargo-box-3.svg";
import cargo3 from "@/components/assets/images/hf-cargo-box-4.svg";
import cargo4 from "@/components/assets/images/hf-cargo-box-5.svg";
import plane from "@/components/assets/images/su-aeroplane.svg";
import couple from "@/components/assets/images/hf-couple-with-poster.svg";
const HassleFree = () => {
  return (
    <>
      <div className="p-4 bg-[#9E1D22]/95 back-image">
        <div className="lg:flex  gap-10 items-center">
          <Image
            src={hassle}
            alt=""
            className="su-mascot block mx-auto lg:mx-0"
            width={300}
            height={300}
          />
          <div className="">
            <h3 className="text-white text-center lg:text-start font-semibold text-2xl md:text-5xl">
              Your Hassle-Free Solution!
            </h3>
            <p className="text-white text-center mt-4 font-medium">
              Shop Globally, Ship Effortlessly with Marketsz
            </p>
          </div>
        </div>
        <div className=" ml-6 relative z-10">
          <div className="rounded-full flex items-center justify-center bg-black w-10 h-10 absolute -rotate-12 -top-2 -left-3 border-dashed border-white border-2">
            <p className="text-white ">1</p>
          </div>
          <Image src={reactangle1} alt="" width={550} height={200} />
          <div className="absolute top-2 md:top-7 left-7 gap-3 flex items-center">
            <p className="font-semibold text-base md:text-2xl color-brown">
              Get a USA and UK shipping address
            </p>
            <Image src={location} alt="" width={50} height={50} />
          </div>
          <div className="h-[100px] w-[2px] bg-white absolute top-[90%] left-[20%]"></div>
        </div>
        <div className=" ml-6 relative mt-10 mb-20 w-fit z-10">
          <div className="rounded-full flex items-center justify-center bg-black w-10 h-10 absolute rotate-12 -top-2 -right-3 border-dashed border-white border-2">
            <p className="text-white ">2</p>
          </div>
          <Image src={reactangle1} alt="" width={550} height={200} />
          <div className="absolute top-2 md:top-7 left-7 gap-3 flex items-center">
            <Image src={location2} alt="" width={50} height={50} />
            <p className="font-semibold text-base md:text-2xl color-brown">
              Shop from any online store
            </p>
          </div>
        </div>
        <div className=" ml-6 relative z-10">
          <div className="rounded-full flex items-center justify-center bg-black w-10 h-10 absolute -rotate-12 -top-2 -left-3 border-dashed border-white border-2">
            <p className="text-white ">3</p>
          </div>
          <Image
            src={reactangle1}
            alt=""
            className="z-10"
            width={550}
            height={200}
          />
          <div className="absolute top-2 md:top-7 left-7 gap-3 flex items-center">
            <p className="font-semibold text-base md:text-2xl color-brown">
              Consolidate & send to your island
            </p>
            <Image src={location3} alt="" className="" width={50} height={50} />
          </div>
          <div className="lg:absolute mt-6 lg:mt-0 right-4 lg:-top-24 flex ">
            <div className="relative hidden lg:block top-[120px] h-[90px]">
              <div className="flex items-center justify-center relative top-3 gap-3">
                <Image src={cargo} alt="" width={30} height={30} />
                <Image src={cargo1} alt="" width={30} height={30} />
                <Image src={cargo2} alt="" width={30} height={30} />
                <Image src={cargo3} alt="" width={30} height={30} />
                <Image src={cargo4} alt="" width={30} height={30} />
              </div>
              <Image src={track} alt="" width={400} height={200} />
            </div>
            <Image
              src={warehouse}
              alt=""
              width={400}
              height={200}
              className="z-10 relative -left-2"
            />
          </div>
        </div>
        <div className="my-2 relative">
          <Image
            src={plane}
            className="ml-20"
            width={200}
            height={200}
            alt=""
          />
        </div>
        <Image
          src={couple}
          alt=""
          width={200}
          height={200}
          className="lg:ml-auto lg:mr-[20%] mx-auto  relative top-8"
        />
        <div className=" lg:ml-auto relative mt-10 mb-20 w-fit z-10 ">
          <div className="rounded-full flex items-center justify-center bg-black w-10 h-10 absolute rotate-12 -top-2 -right-3 border-dashed border-white border-2">
            <p className="text-white ">4</p>
          </div>

          <Image src={reactangle1} alt="" width={550} height={200} />
          <div className="absolute top-2  md:top-7 left-7 gap-3 flex items-center">
            <Image src={location4} alt="" width={50} height={50} />
            <p className="font-semibold text-base md:text-2xl color-brown">
              Fast & Worry-Free Delivery
            </p>
          </div>
        </div>
        <button className=" block mx-auto  px-6 py-4 text-md bg-white color-brown rounded-full shadow-lg">
          Learn More
        </button>
      </div>
    </>
  );
};

export default HassleFree;
