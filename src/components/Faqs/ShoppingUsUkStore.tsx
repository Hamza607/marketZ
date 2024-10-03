import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const ShoppingUsUkStore = () => {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem
          value="item-1"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            Do Marketsz members pay US sales tax when shopping US stores?
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              <b>No,</b> you do not need to pay US sales tax when purchasing
              items from US websites and shipping them to your Marketsz address.
            </p>
            <p className="mb-2">
              Simply sign up and use the tax-free Marketsz zip code at check
              out, and you can save 7% sales tax on every order!
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            Can Marketsz buy goods for me?
          </AccordionTrigger>
          <AccordionContent>
            <h3 className="mb-2 font-semibold">Yes.</h3>
            <p>
              Marketsz Buying Assistant is a service that allows you to add
              items to your Marketsz shopping cart from nearly every US store.
            </p>

            <p>
              No membership is required to use Marketsz Buying Assistant. Simply
              copy the link to a product you would like to buy and paste it into
              the order form on the Buying Assistant page.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            What is Marketsz Buying Assistant?
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              Marketsz Buying Assistant is a service that allows you to add
              items to your Marketsz Shopping cart from nearly every US store.
            </p>
            <p className="">
              To use it, simply copy the link to a product you would like to buy
              and paste it into the order form on the Buying Assistant page.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            Can I order personalized or customized orders through Buying
            Assistant?
          </AccordionTrigger>
          <AccordionContent>
            <h3 className="font-semibold my-2">Yes.</h3>
            <p>
              The Marketsz Buying Assistant service can place your personalized
              or customized orders. Simply include the details of the
              customizations required in the Additional Order Details field of
              the Buying Assistant order form.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-5"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            Can I use Marketsz Buying Assistant to buy items for me on eBay or
            other auction sites?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              You can purchase &quot;Buy It Now&quot; items from eBay with
              Marketsz Buying Assistant, however, we cannot purchase any auction
              items that require bidding.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default ShoppingUsUkStore;
