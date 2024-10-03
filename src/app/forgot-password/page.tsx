"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormLabel,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";

const formSchema = z
  .object({
    email: z.union([
      z.string().email({ message: "Invalid email address" }).nullish(),
      z.literal(""),
    ]),
    suite: z.union([z.string().min(6).max(10).nullish(), z.literal("")]),
  })
  .refine((schema) => schema.email?.length || schema.suite?.length, {
    message: "Please enter email or suite number",
    path: ["suite"],
  });

export default function ForgotPassword() {
  // const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      suite: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // TODO: send data to server
    // { email: "email", suite: "suite" }
    // console.log(data);
    toast({
      title: "Password recovery email sent",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-bold py-5">Recover password</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          <FormField
            control={form.control}
            name={"email"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"suite"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Suite number</FormLabel>
                <FormControl>
                  <Input placeholder="suite number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="bg-red-500 hover:bg-red-600">
            Recover Password
          </Button>
        </form>
      </Form>
    </div>
  );
}
