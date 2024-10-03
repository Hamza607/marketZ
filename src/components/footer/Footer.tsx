import Image from "next/image";
import React from "react";
import footerlogo from "@/components/assets/images/icon-logo.svg";
import facebook from "@/components/assets/images/icon-facebook.svg";
import youtube from "@/components/assets/images/icon-youtube.svg";
import instagram from "@/components/assets/images/icon-instagram.svg";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  // DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TermsCondition from "@/app/terms-conditions/page";
import PrivacyPolicy from "@/app/privacy-policy/page";

const Footer = () => {
  return (
    <>
      <div className="lg:flex">
        <div className="p-4 lg:ml-20 lg:w-1/2  ">
          <Image
            src={footerlogo}
            alt=""
            width={300}
            height={300}
            className="block mx-auto lg:mx-0"
          />
          <p className="lg:w-1/2 my-2  text-center lg:text-start">
            We deliver your orders to your doorstep at your home or business in
            the Dutch Caribbean.
          </p>
          <Link href="/signup">
            {" "}
            <button className="text-white block mx-auto lg:mx-0 hover:rotate-6 bg-[#9E1D22] px-6 py-4 my-2 rounded-full shadow-lg">
              Get Started
            </button>
          </Link>
        </div>
        <div className="lg:w-1/2  p-4 lg:flex">
          <div className="lg:w-1/3">
            <ul className=" text-center lg:text-start">
              <li className="font-bold">Navigation</li>
              <Link href="/how-it-work">
                {" "}
                <li className="my-2 cursor-pointer">How its works?</li>
              </Link>
              <Link href="/cost-calculator">
                {" "}
                <li className="my-2 cursor-pointer">Cost Calculator</li>
              </Link>
              <Link href="/about-us">
                {" "}
                <li className="my-2 cursor-pointer">About us</li>
              </Link>
              <Link href="/contact-us">
                {" "}
                <li className="my-2 cursor-pointer">Contact us</li>
              </Link>
              <Link href="/faq">
                {" "}
                <li className="my-2 cursor-pointer">FAQs</li>
              </Link>{" "}
            </ul>
          </div>
          <div className="lg:w-1/3">
            <ul className="text-center lg:text-start">
              <li className="font-bold">Privacy & Policy</li>
              <li>
                {/* <Link href="/terms-conditions"> */}{" "}
                {/* <li className="my-2 cursor-pointer">Terms of Service</li> */}
                <Dialog>
                  <DialogTrigger>Terms of Service</DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
                      <DialogDescription>
                        <TermsCondition />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </li>
              <li>
                {" "}
                {/* <li className="my-2 cursor-pointer">Privacy Policy</li> */}
                <Dialog>
                  <DialogTrigger>Privacy Policy</DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
                      <DialogDescription>
                        <PrivacyPolicy />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/3">
            <ul className="text-center lg:text-start">
              <li className="font-bold">Social Media</li>
              <li className="my-2 cursor-pointer flex lg:justify-start justify-center">
                <Image src={facebook} alt="" width={30} height={30} />
                <Image src={youtube} alt="" width={30} height={30} />
                <Image src={instagram} alt="" width={30} height={30} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="p-8 flex justify-center lg:justify-end">
        <small className="lg:mr-10">© All Rights Reserved - 2023</small>
      </div>
    </>
  );
};

export default Footer;
