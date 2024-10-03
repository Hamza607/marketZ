import Image from "next/image";
import React from "react";
import truck from "@/components/assets/images/forklift-machine.svg";
import roadline from "@/components/assets/images/road-line.svg";

const TruckRoler = () => {
  return (
    <>
      <div className="my-20 overflow-hidden">
        <Image
          src={truck}
          alt=""
          width={160}
          height={160}
          className="forklift-machine-img"
        />
        <Image
          src={roadline}
          alt=""
          className="w-full h-[10px]"
          width={100}
          height={100}
        />
      </div>
    </>
  );
};

export default TruckRoler;
