import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const PaymentInformation = () => {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem
          value="item-1"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            What payment methods does Marketsz accept?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Marketsz accepts the following payment methods for membership fees
              and shipping costs:
            </p>
            <ul className="list-disc ml-6">
              <li>
                Any major credit card, including American Express, Visa,
                MasterCard, Diner&apos;s Club, JCB, Discover and Union Pay
              </li>
              <li>
                Debit cards, providing your card provider supports online
                international transactions.
              </li>
              <li>
                PayPal for most countries. Please contact us to confirm PayPal
                is available for your country.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            What if I do not have a credit card?
          </AccordionTrigger>
          <AccordionContent>
            If you do not have a credit card, Marketsz also accepts PayPal, wire
            transfers, checks and money orders.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            Does Marketsz accept wire transfers?
          </AccordionTrigger>
          <AccordionContent>
            Yes. Marketsz accepts a variety of payment methods, including wire
            transfers.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-5"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            Can Marketsz bill me in my local currency?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Yes, Marketsz can convert billing transactions from USD to your
              local currency. Conversion rates are based on daily foreign
              exchange market averages gathered from frequently updated sources,
              including financial institutions.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            In what currency does Marketsz display fees?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              All Marketsz pricing is displayed in US Dollars (USD) by default,
              but members can change their billing currency in their Marketsz
              account preferences.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default PaymentInformation;
