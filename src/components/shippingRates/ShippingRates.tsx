"use client";
import Image from "next/image";
import React, { useState } from "react";
import hassle from "@/components/assets/images/hassle-free-cart.svg";
import aeroplane from "@/components/assets/images/su-aeroplane.svg";
import card from "@/components/assets/images/su-boxes.svg";
import { FaLocationDot } from "react-icons/fa6";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

const ShippingRates = () => {
  const countries = [
    { code: "XB", name: "Bonaire" },
    { code: "XC", name: "Curacao" },
    { code: "AN", name: "Saba" },
    { code: "XM", name: "St. Maarten" },
    { code: "XE", name: "St. Eustatius" },
  ];
  const [dimension, setDimension] = useState("in");
  const [weight, setWeight] = useState("kg");
  const formshipping = z.object({
    country: z.string().min(1),
    length: z.string().optional(),
    width: z.string().optional(),
    height: z.string().optional(),
    weight: z.string().min(1),
  });
  const form = useForm<z.infer<typeof formshipping>>({
    resolver: zodResolver(formshipping),
    defaultValues: {},
  });
  function onSubmit(values: z.infer<typeof formshipping>) {
    console.log("shipping form value are shown here", values);
  }
  return (
    <>
      <div className="px-4 py-12   bg-gray-100/50">
        <h3 className="text-4xl text-center font-semibold">
          <span className="color-brown">“Save upto 80%</span> off with our Low
          Shipping Rates”
        </h3>
        <p className="text-center text-xl mt-2">
          Use our calculator to estimate exactly how much it would cost you to
          ship.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className=" my-10 lg:w-4/5 mx-auto lg:flex gap-4 ">
              <Image
                src={hassle}
                alt=""
                width={100}
                height={100}
                className="lg:w-1/5 block mx-auto lg:mx-0"
              />
              <div className="bg-[#fff1f2] lg:w-4/5 p-8 rounded-3xl ">
                <h3 className=" text-2xl font-bold">
                  Where should we send your package?
                </h3>
                <p className="my-2">We forward to the Caribbean</p>
                <div className="relative">
                  <FaLocationDot className="absolute top-[12px] pointer-events-none left-2" />
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="pl-8">
                              <SelectValue placeholder="Select a Country" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {countries.map((item, index) => (
                              <SelectItem key={index} value={item.code}>
                                {item.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        <FormMessage className="text-xs m-0 p-0" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className=" my-10 w-full lg:w-4/5 mx-auto lg:flex gap-4 ">
              <div className="bg-[#fff1f2] lg:w-4/5 p-8 mx-4 md:mx-0 rounded-3xl ">
                <h3 className=" text-2xl font-bold">How much does it cost?</h3>
                <p className="my-2">
                  Enter your dimensions for a more accurate quote.
                </p>
                <div className="lg:flex my-8 gap-4 ">
                  <div className="my-2 lg:w-1/2">
                    <div className="flex justify-between gap-4 mb-4">
                      <h3 className="font-bold text-2xl md:text-4xl">
                        Dimensions
                      </h3>
                      <div className="p-2 bg-white rounded-full w-fit">
                        {" "}
                        <span
                          onClick={() => setDimension("in")}
                          className={`${dimension == "in" ? "bg-[#9e1d22] text-white " : "bg-white "}  cursor-pointer  px-4 py-1 rounded-full text-xs`}
                        >
                          in
                        </span>
                        <span
                          onClick={() => setDimension("cm")}
                          className={`${dimension == "cm" ? "bg-[#9e1d22]  text-white" : "bg-white "} cursor-pointer ml-1 px-4 py-1 rounded-full text-xs`}
                        >
                          cm
                        </span>
                      </div>
                    </div>
                    <div className="lg:flex gap-2 my-2">
                      <div className="flex flex-col">
                        <Label className="text-xs" htmlFor="">
                          Length
                        </Label>

                        <FormField
                          control={form.control}
                          name="length"
                          render={({ field }) => (
                            <>
                              <FormItem>
                                <FormControl>
                                  <Input
                                    placeholder=""
                                    {...field}
                                    className="p-2 outline-none lg:w-[100px] rounded-lg "
                                  />
                                </FormControl>
                                <FormMessage className="text-xs m-0 p-0" />
                              </FormItem>
                            </>
                          )}
                        />
                      </div>
                      <div className="flex flex-col">
                        <Label className="text-xs" htmlFor="">
                          Width
                        </Label>
                        <FormField
                          control={form.control}
                          name="width"
                          render={({ field }) => (
                            <>
                              <FormItem>
                                <FormControl>
                                  <Input
                                    placeholder=""
                                    {...field}
                                    className="p-2 outline-none lg:w-[100px] rounded-lg "
                                  />
                                </FormControl>
                                <FormMessage className="text-xs m-0 p-0" />
                              </FormItem>
                            </>
                          )}
                        />
                      </div>
                      <div className="flex flex-col">
                        <Label className="text-xs" htmlFor="">
                          Height
                        </Label>
                        <FormField
                          control={form.control}
                          name="height"
                          render={({ field }) => (
                            <>
                              <FormItem>
                                <FormControl>
                                  <Input
                                    placeholder=""
                                    {...field}
                                    className="p-2 outline-none lg:w-[100px] rounded-lg "
                                  />
                                </FormControl>
                                <FormMessage className="text-xs m-0 p-0" />
                              </FormItem>
                            </>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="my-2 lg:w-1/2">
                    <div className="flex  justify-between gap-4  mb-4">
                      <h3 className="font-bold text-2xl md:text-4xl">Weight</h3>
                      <div className="p-2 bg-white rounded-full w-fit">
                        {" "}
                        <span
                          onClick={() => setWeight("kg")}
                          className={`${weight == "kg" ? "bg-[#9e1d22] text-white " : "bg-white "} cursor-pointer  px-4 py-1 rounded-full text-xs`}
                        >
                          kg
                        </span>
                        <span
                          onClick={() => setWeight("Ibs")}
                          className={`${weight == "Ibs" ? "bg-[#9e1d22] text-white " : "bg-white "} cursor-pointer ml-1 px-4 py-1 rounded-full text-xs`}
                        >
                          Ibs
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 my-2 ">
                      <div className="flex flex-col w-full">
                        <Label className="text-xs" htmlFor="">
                          Weight in {weight}
                        </Label>

                        <FormField
                          control={form.control}
                          name="weight"
                          render={({ field }) => (
                            <>
                              <FormItem>
                                <FormControl>
                                  <Input
                                    placeholder=""
                                    {...field}
                                    className="p-2 outline-none  rounded-lg "
                                  />
                                </FormControl>
                                <FormMessage className="text-xs m-0 p-0" />
                              </FormItem>
                            </>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[12px]">
                  *While 99% of shipments are calculated by weight only, this
                  excludes packages with linear dimensions (length + width +
                  height) greater than 72 inches (183 cm).
                </p>
                <Button
                  type="submit"
                  variant={"brown"}
                  className="px-6 hover:bg-[#9e1d22]  hover:rotate-6 shadow-md rounded-full bg-[#9e1d22] text-white my-4 ml-auto block"
                >
                  Get Price Estimate
                </Button>
              </div>
              <div className="lg:w-1/5 flex flex-col gap-24 items-center">
                <Image src={aeroplane} alt="" width={180} height={180} />
                <Image src={card} alt="" width={180} height={180} />
              </div>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default ShippingRates;
