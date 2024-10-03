import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const CovidHelp = () => {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem
          value="item-1"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            Is Marketsz open for business and able to ship?
          </AccordionTrigger>
          <AccordionContent>
            <h3 className="font-semibold my-2">Yes.</h3>
            <p>
              Regular business operations continue at Marketsz. As a shipping
              and logistics company, Marketsz has been deemed an “essential
              service” by our state and federal governments.
            </p>
            <p className="mt-2">
              US online shopping is open for business, and our shipping partners
              and carriers are still operating and able to deliver packages. For
              more information on our commitment to safety and service in the
              face of the COVID-19 pandemic, read the message from our CEO.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            Can I still shop online? Are US stores fulfilling and shipping
            orders?
          </AccordionTrigger>
          <AccordionContent>
            <h3 className="font-semibold my-2">Yes!</h3>
            <p>
              While some physical stores and borders may be closed, online
              shopping is still open for business, and can be a great way to
              safely access everything your family needs.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            What should I do if an item is out of stock, or my favorite US store
            is closed?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Most US stores are still open for business online, but if you
              can&apos;t find an item, or a store you like is closed, check out
              the thousands of other store options available to you as a
              Marketsz member.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            Is it safe to receive shipped packages and the items inside?
          </AccordionTrigger>
          <AccordionContent>
            <h3 className="font-semibold my-2">Yes!</h3>
            <p>
              Both the World Health Organization (WHO)and Center for Disease
              Control and Prevention (CDC) confirm that it&apos;s safe to handle
              and receive packages, as catching the COVID-19 virus from shipping
              materials is unlikely.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-5"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            My country has a travel ban or closed borders. Can I still ship and
            receive packages?
          </AccordionTrigger>
          <AccordionContent>
            <h3 className="font-semibold my-2">Yes!</h3>
            <p>
              <span className="font-semibold"> Yes,</span> in most cases. Most
              countries have categorized shipping and logistics as “essential
              services” and these businesses are allowed to continue operating
              throughout any other bans or restrictions. Travel bans and border
              closures generally do not apply to cargo shipments or commercial
              shipping operations, which is what Marketsz uses to ship and
              deliver your packages. However, there is a small group of
              countries that have banned cargo transit and deliveries.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default CovidHelp;
