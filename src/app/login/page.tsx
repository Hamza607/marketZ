"use client";
import Image from "next/image";
import React from "react";
import aeroplane from "@/components/assets/images/tts-aeoplane.svg";
import gift from "@/components/assets/images/gift-parachute.svg";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  // FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface loginValues {
  email: string;
  password: string;
}
const emailOrPhoneNumber = z.string().superRefine((value, context) => {
  const emailRegex = /\S+@\S+\.\S+/;
  const phoneNumberRegex = /^\+[1-9]\d{0,2}\d{9,14}$/;

  if (emailRegex.test(value)) {
    return;
  }
  if (phoneNumberRegex.test(value)) {
    const numDigits = value.substring(1);
    if (numDigits.length >= 10 && numDigits.length <= 15) {
      return;
    }
  }
  if (value.includes("@")) {
    context.addIssue({
      code: "custom",
      message: "Invalid email format. Please enter a valid email address.",
    });
  } else if (value.startsWith("+")) {
    context.addIssue({
      code: "custom",
      message:
        "Invalid phone number format. Please enter a valid phone number with country code .",
    });
  } else {
    context.addIssue({
      code: "custom",
      message:
        "Please enter a valid email address or a phone number with country code .",
    });
  }
});

const loginSchema = z.object({
  email: emailOrPhoneNumber,
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

const Login = () => {
  const form = useForm<loginValues>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = (data: loginValues) => {
    console.log(data);
  };
  return (
    <>
      <Header />
      <div className="bg-[#FFF1F2] p-4">
        <div className="w-5/5 p-4 my-6 lg:my-14 su-mascot2">
          <p className="text-center text-xl">Welcome!</p>
          <h2 className="text-center my-2 color-brown font-bold text-2xl lg:text-4xl">
            {" "}
            Ready to Shop Some More?
          </h2>
          <h4 className="text-center text-xl my-2 font-semibold">
            Your Packages are Waiting!
          </h4>
        </div>
        <div className="lg:flex">
          <div className="w-[25%] p-4  lg:flex hidden justify-end">
            <div>
              <Image
                src={aeroplane}
                alt=""
                className="su-aero-plane !z-10"
                width={200}
                height={200}
              />
              <Image
                src={gift}
                alt=""
                className="ml-8 su-package"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="lg:w-[75%] p-4 su-mascot2 ">
            <div className="rounded-lg bg-[#9E1D22]  flex flex-col justify-center p-4 lg:p-8 lg:w-2/3">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <Input
                          placeholder="Enter Email or Number"
                          type="text"
                          {...field}
                        />
                        {form.formState.errors.email && (
                          <FormMessage className="text-xs m-0 p-0">
                            {form.formState.errors.email.message}
                          </FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <Input placeholder="Enter password" {...field} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <p className="text-white/70 hover:text-white cursor-pointer font-semibold my-2">
                    Forget Password ?
                  </p>
                  <div className="flex items-center gap-2 my-4 text-white">
                    <Checkbox />
                    <Label>
                      Remember Me (Not Recomended for public computers ){" "}
                    </Label>
                  </div>
                  <button
                    type="submit"
                    className="color-brown hover:rotate-6 px-10 py-4 bg-white rounded-full mt-6 block mx-auto shadow-lg font-semibold"
                  >
                    Login
                  </button>
                </form>
              </Form>
            </div>
            <ul className="list-disc ml-6 lg:w-1/2 my-4">
              <li className="my-2">
                Your suite number can be found in your Marketsz address
              </li>
              <li className="my-2">
                Your password was originally selected by you during account
                registratoin
              </li>
              <li className="my-2">Passwords are case sensitive</li>
              <li className="my-2">
                If you are having trouble logging in, please clear your browser
                cookies and try again.
              </li>
              <li className="my-2">
                Your suite number can be found in your Marketsz address
              </li>
            </ul>
            <p className="ml-6 mb-20">
              Other Login Questions?{" "}
              <span className="font-semibold cursor-pointer hover:underline">
                Please see our FAQ.
              </span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
