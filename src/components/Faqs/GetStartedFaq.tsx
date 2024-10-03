import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const GetStartedFaq = () => {
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
            Why is Marketsz rated #1 in the international shipping industry?
          </AccordionTrigger>
          <AccordionContent>
            Marketsz international shipping rates are the lowest in our
            industry, and we specialize in express shipping worldwide in 1 to 4
            days.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            How does Marketsz compare to its competitors?
          </AccordionTrigger>
          <AccordionContent>
            Marketsz is consistently rated higher than other international
            shippers, with over 5 million satisfied members around the world.
            See for yourself how Marketsz stacks up against the competition.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-5"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            What are Marketsz hours of operation?
          </AccordionTrigger>
          <AccordionContent>
            <p>Marketsz regular business hours are as follows:</p>
            <h3 className="my-2 font-semibold text-lg">Customer Service:</h3>
            <p>
              We are dedicated to making our members happy, with online account
              management tools available 24/7. If you need further assistance,
              there are two ways to contact Marketsz:
            </p>

            <ul className="list-disc ml-6">
              <li>
                <span className="font-semibold">Chat:</span> Available 24/7 on
                our Contact Us page. It is our goal to minimize your hold time,
                however, response times may be longer during peak shipping
                periods. If you experience hold times beyond 4 minutes, we
                recommend contacting us via email instead.
              </li>
              <li>
                <span className="font-semibold"> Email:</span> Send an email
                from our Contact Us page, and we will respond shortly, typically
                within 24 hours. Response times may be longer during peak
                shipping periods.
              </li>
            </ul>
            <h3 className="my-2 font-semibold">Receiving:</h3>
            <p className="my-2">
              Marketsz receives packages seven days a week. Your package will
              show as delivered, then it is cataloged before being placed into
              your suite. You will receive an email as each package is placed
              into your suite.
            </p>
            <p className="mb-2">
              Processing time after delivery is typically 24-48 hours. The
              receiving department works Monday-Friday so packages received on
              Saturday or Sunday will show in your Suite the following Monday.
            </p>
            <h3 className="my-2 font-semibold">Shipping:</h3>
            <p className="my-2">
              Our shipping team works Monday through Saturday 09:00 to 17:00 ET.
              Urgent shipment requests placed before 15:00 ET are processed the
              same business day. Regular processing of shipments takes place the
              following business day after the request is made. Shipments
              prepared on Saturdays may not show movement in tracking until the
              following Monday.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            What is the Marketsz member privacy and confidentiality policy?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              We understand our members concerns regarding confidentiality, and
              it is our policy never to sell or give away any member
              information. The privacy of our members is of utmost importance to
              us. Details can be found in our Privacy Policy.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default GetStartedFaq;
