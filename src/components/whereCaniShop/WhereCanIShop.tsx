import React from "react";
import Image from "next/image";

import img1 from "@/components/assets/images/partners-logos/aliexpress-logo.png";
import img2 from "@/components/assets/images/partners-logos/amazon-logo.png";
import img3 from "@/components/assets/images/partners-logos/apple-logo.png";
import img4 from "@/components/assets/images/partners-logos/bath-and-body-works-logo.png";
import img5 from "@/components/assets/images/partners-logos/coach-logo.png";
import img6 from "@/components/assets/images/partners-logos/ebay-logo.png";
import img7 from "@/components/assets/images/partners-logos/fashion-nova-logo.jpg";
import img8 from "@/components/assets/images/partners-logos/forever-logo.png";
import img9 from "@/components/assets/images/partners-logos/gap-logo.png";
import img10 from "@/components/assets/images/partners-logos/hm-logo.png";
import img11 from "@/components/assets/images/partners-logos/home-depot-logo.png";
import img12 from "@/components/assets/images/partners-logos/jc-penney-logo.jpg";
import img13 from "@/components/assets/images/partners-logos/macys-logo.jpg";
import img14 from "@/components/assets/images/partners-logos/nike-logo.png";
import img15 from "@/components/assets/images/partners-logos/old-navy-logo.png";
import img16 from "@/components/assets/images/partners-logos/pretty-little-thing-logo.png";
import img17 from "@/components/assets/images/partners-logos/shein-logo.png";
import img18 from "@/components/assets/images/partners-logos/tory-burch-logo.png";
import img19 from "@/components/assets/images/partners-logos/vans-logo.jpg";
import img20 from "@/components/assets/images/partners-logos/vs-logo.png";
import img21 from "@/components/assets/images/partners-logos/walmart-logo.jpg";
import img22 from "@/components/assets/images/partners-logos/zaful-logo.png";
import img23 from "@/components/assets/images/partners-logos/zappos-logo.png";
import img24 from "@/components/assets/images/partners-logos/zara-logo.png";
import img25 from "@/components/assets/images/partners-logos/zulily-logo.png";

const WhereCanIShop = () => {
  const logos = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
  ];

  return (
    <div className="bg-[#fff1f2] py-20 overflow-hidden">
      <div className="bg-white p-2 slide-track flex items-center gap-4 w-full ">
        {logos.map((item, i) => (
          <Image
            key={i}
            src={item}
            alt=""
            className="hover:scale-75 transition-all"
            width={100}
            height={100}
          />
        ))}
      </div>

      <div className="my-24 p-2 md:w-2/3 mx-auto">
        <h4 className="text-4xl text-center font-bold">
          Where can <span className="color-brown">I shop?</span>
        </h4>
        <p className="text-center my-4">
          Marketsz works with all online stores that ship to the US and Europe.
          When shopping online simply use your personal US Marketsz address as
          your shipping address.
        </p>
        <p className="text-md text-center font-semibold">
          These are some of our members favorite stores!
        </p>
      </div>
      <div className="bg-white p-2 slide-track flex items-center gap-4 w-full ">
        {logos.map((item, i) => (
          <Image
            key={i}
            src={item}
            alt=""
            className="hover:scale-75 transition-all"
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  );
};

export default WhereCanIShop;
