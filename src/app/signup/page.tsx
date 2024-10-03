"use client";
import Image from "next/image";
import React from "react";
import logoshop from "@/components/assets/images/hassle-free-cart.svg";
import plane from "@/components/assets/images/tts-aeoplane.svg";
import gift from "@/components/assets/images/gift-parachute.svg";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const formSchema = z
  .object({
    email: z.string().email({
      message: "Invalid email address.",
    }),
    address: z.string().min(5, {
      message: "Address must be at least 5 characters.",
    }),
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    phoneNumber: z.string().min(10),
    year: z.string(),
    taxId: z.string().optional(),
    honeypot: z.string().optional(),
    country: z.string().min(1),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
    month: z.string(),
    day: z.string(),
    agreeToTerms: z.boolean().optional(),
  })
  .refine(
    (data) => {
      const year = parseInt(data.year);
      const monthIndex = monthsOfYear.indexOf(data.month);
      const day = parseInt(data.day);

      const birthDate = new Date(year, monthIndex, day);
      const ageDiffMs = Date.now() - birthDate.getTime();
      const ageDate = new Date(ageDiffMs);
      const age = Math.abs(ageDate.getUTCFullYear() - 1970);

      return age >= 18;
    },
    {
      message: "You must be at least 18 years old.",
      path: ["year", "month", "day"],
    },
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  })
  .refine(
    (value) => {
      return value.agreeToTerms == true;
    },
    {
      message: "You must agree to the terms of service.",
      path: ["agreeToTerms"],
    },
  );

const SingUp = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });
  console.log("Form State:", form.formState);
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("form value are shown here", values);
  }

  const countries = [
    { code: "XB", name: "Bonaire" },
    { code: "XC", name: "Curacao" },
    { code: "AN", name: "Saba" },
    { code: "XM", name: "St. Maarten" },
    { code: "XE", name: "St. Eustatius" },
  ];
  const daysOfMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const currentYear = new Date().getFullYear();
  const yearsArray: number[] = [];
  for (let year = 1920; year <= currentYear; year++) {
    yearsArray.push(year);
  }
  console.log("the form status error", form.formState.errors);

  return (
    <>
      <Header />
      <div className="bg-[#FFF1F2] py-6">
        <div className="lg:flex  p-4">
          <div className="lg:w-1/5 ">
            <div className=" lg:justify-start flex justify-center ">
              <Image
                src={logoshop}
                alt=""
                width={250}
                height={250}
                className="su-mascot"
              />
            </div>
          </div>
          <div className=" lg:w-3/5 ">
            <div className="my-20">
              <h3 className="text-center font-bold text-4xl">
                Get Your <span className="color-brown">FREE USA</span> and
                <span className="color-brown"> UK</span>
              </h3>
              <h3 className="text-center font-bold text-4xl">
                Shipping Address
              </h3>
            </div>
            <div className="bg-[#9E1D22] p-4  md:p-8 my-2 rounded-lg md:w-[80%] mx-auto">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
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
                            <SelectTrigger>
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

                  <div className="flex gap-2">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <>
                          <FormItem className="w-1/2 ">
                            <FormControl>
                              <Input placeholder="First Name" {...field} />
                            </FormControl>
                            <FormMessage className="text-xs m-0 p-0" />
                          </FormItem>
                        </>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <>
                          <FormItem className="w-1/2 ">
                            <FormControl>
                              <Input placeholder="Last Name" {...field} />
                            </FormControl>
                            <FormMessage className="text-xs m-0 p-0" />
                          </FormItem>
                        </>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <>
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Address" {...field} />
                          </FormControl>
                          <FormMessage className="text-xs m-0 p-0" />
                        </FormItem>
                      </>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <>
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Email" {...field} />
                          </FormControl>
                          <FormMessage className="text-xs m-0 p-0" />
                        </FormItem>
                      </>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <>
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Phone Number" {...field} />
                          </FormControl>
                          <FormMessage className="text-xs m-0 p-0" />
                        </FormItem>
                      </>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <>
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Password"
                              type="password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs m-0 p-0" />
                        </FormItem>
                      </>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <>
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Confirm Password"
                              type="password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs m-0 p-0" />
                        </FormItem>
                      </>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="taxId"
                    render={({ field }) => (
                      <>
                        <FormItem>
                          <FormControl>
                            <Input placeholder="taxId (Optional)" {...field} />
                          </FormControl>
                          <FormMessage className="text-xs m-0 p-0" />
                        </FormItem>
                      </>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="honeypot"
                    render={({ field }) => (
                      <>
                        <FormItem className="hidden">
                          <FormControl>
                            <Input placeholder="honeypot" {...field} />
                          </FormControl>
                          <FormMessage className="text-xs m-0 p-0" />
                        </FormItem>
                      </>
                    )}
                  />
                  <div className="flex gap-2 items-center">
                    <FormField
                      control={form.control}
                      name="year"
                      render={({ field }) => (
                        <>
                          <FormItem className="w-full">
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Year" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {yearsArray.map((item, index) => (
                                  <SelectItem key={index} value={String(item)}>
                                    {item}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-xs m-0 p-0" />
                          </FormItem>
                        </>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="month"
                      render={({ field }) => (
                        <>
                          <FormItem className="w-full">
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Month" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {monthsOfYear.map((item, index) => (
                                  <SelectItem key={index} value={item}>
                                    {item}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-xs m-0 p-0" />
                          </FormItem>
                        </>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="day"
                      render={({ field }) => (
                        <>
                          <FormItem className="w-full">
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Day" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {daysOfMonth.map((item, index) => (
                                  <SelectItem key={index} value={String(item)}>
                                    {item}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-xs m-0 p-0" />
                          </FormItem>
                        </>
                      )}
                    />
                  </div>
                  {form.formState.errors.year && (
                    <FormMessage className="text-xs m-0 p-0">
                      {form.formState.errors.year?.month?.day?.message}
                    </FormMessage>
                  )}

                  <FormField
                    control={form.control}
                    name="agreeToTerms"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="flex items-center text-white my-2">
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={(checked) =>
                                field.onChange(checked)
                              }
                            />
                            <Label className="ml-2">
                              By signing up I agree to the{" "}
                              <span className="font-semibold cursor-pointer">
                                terms of service
                              </span>
                            </Label>
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs m-0 p-0">
                          {form.formState.errors.agreeToTerms?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="bg-white color-brown rounded-full font-semibold hover:bg-white hover:rotate-6 block mx-auto "
                  >
                    Register Now
                  </Button>
                </form>
              </Form>

              <p className="text-[10px] text-center text-white my-4">
                By submitting this for you agree to receive occasional emails
                from us. You can unsubscribe anytime
              </p>
            </div>
          </div>
          <div className="w-1/5 lg:block hidden ">
            <div className="mt-32 h-full">
              <Image
                src={plane}
                className=" su-aero-plane !z-10 "
                width={200}
                height={200}
                alt={""}
              />
              <Image
                src={gift}
                className=" su-package ml-10 "
                width={70}
                height={70}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingUp;
