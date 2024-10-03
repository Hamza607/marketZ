import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const TopFaqs = () => {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem
          value="item-1"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            How does marketz works?
          </AccordionTrigger>
          <AccordionContent>
            Marketsz provides international shoppers with a US shipping address
            you can use when placing orders with US online stores. The store
            ships your purchases to Marketsz, we ship it to you, and you save
            BIG on international shipping costs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            why is my login information not working?
          </AccordionTrigger>
          <AccordionContent>
            <p>If you are unable to login to your Marketsz account, first:</p>
            <ul className="list-disc ml-6 my-4">
              <li>Make sure your Caps Lock button is not turned on.</li>
              <li>
                Make sure your Web browser is updated to Internet Explorer
                version 11+, Mozilla Firefox version 39+, Google Chrome 43+, or
                Safari version 8+.
              </li>
            </ul>
            <p>
              If you are still unable to login, use the &quot;I forgot my email
              address, suite number or password. Please remind me.&quot;
              function on the Sign In screen.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            How can I estimate international shipping costs?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              You can estimate your shipping costs before you purchase an item
              by asking the merchant for the weight and dimensions of the
              package they will ship to us. You can then enter that information
              into our shipping rate calculator.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            Can Marketsz ship my products?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              We can ship just about every item for you, including clothing,
              cosmetics, toys, cell phones, laptops, and much more.
            </p>
            <p className="my-2">
              The types of items that we cannot ship are restricted by the US
              government and/or prohibited for import into your country. For
              example, we cannot ship any items that require a license to export
              or require a license exception to be filed.
            </p>
            <p className="my-1">
              Please review the following link to verify your item(s) can be
              exported:
            </p>
            <ul className="list-disc ml-6 my-2">
              <li>
                Restricted/Prohibited item list <br /> We are happy to ship any
                items that do not conflict with our compliance policy. If you
                would like Marketsz to review the item you wish to ship, please
                contact us with the following information:
              </li>
              <li className="mt-2">Link to the item you wish to purchase</li>
              <li>Address you are shipping to</li>
              <li>Weight and dimensions of the product</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default TopFaqs;
