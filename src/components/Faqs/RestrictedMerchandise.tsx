import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const RestrictedMerchandise = () => {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem
          value="item-1"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            Can Marketsz ship my products?
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              We can ship just about every item for you, including clothing,
              cosmetics, toys, cell phones, laptops, and much more.
            </p>
            <p className="mb-2">
              The types of items that we cannot ship are restricted by the US
              government and/or prohibited for import into your country. For
              example, we cannot ship any items that require a license to export
              or require a license exception to be filed.
            </p>
            <p className="mb-2">
              Please review the following link to verify your item(s) can be
              exported:
            </p>
            <ul className="list-disc ml-6">
              <li>Restricted/Prohibited item list</li>
              <li>
                We are happy to ship any items that do not conflict with our
                compliance policy. If you would like Marketsz to review the item
                you wish to ship, please contact us with the following
                information:
              </li>
              <li>Link to the item you wish to purchase</li>
              <li>Address you are shipping to</li>
              <li>Weight and dimensions of the product</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            What is the difference between restricted and prohibited items?
          </AccordionTrigger>
          <AccordionContent>
            <h3 className="font-semibold my-2">Prohibited Items:</h3>
            <p>
              If an item is prohibited in your country or for export from the
              United States, we cannot ship it to you. If you are not sure if an
              item is prohibited, please contact us before ordering. If we
              receive an item we cannot ship to you, Marketsz may be unable to
              ship it to any address, including back to the sender. In some
              cases, we may be required to dispose of it in a US disposal
              facility.
            </p>
            <h3 className="font-semibold my-2">Restricted Items:</h3>
            <p>
              Some restricted items can be shipped, but only after the Marketsz
              compliance team reviews the item to ensure it complies with both
              US laws in and laws in your country. The compliance review usually
              takes less than 24 hours, but it may take one to three business
              days before your package is available to ship. If you have
              questions about shipping a restricted item, please contact us
              before shipping the item to your Marketsz suite.
            </p>
            <p className="mt-2">
              Please review our list of prohibited and restricted items before
              you shop.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            What merchandise is considered dangerous goods or hazardous
            materials?
          </AccordionTrigger>
          <AccordionContent>
            <p className="my-2">
              Dangerous goods/hazardous materials are items that require special
              handling, additional packaging, and labeling to be transported
              internationally.
            </p>
            <p className="mb-2">
              These items may or may not be allowed to ship to your country.
              Shipping dangerous goods is country-specific, and may also depend
              on the courier you choose. USPS or UPS cannot ship dangerous
              goods. Even if your country allows the import of an item, the
              carrier may not be licensed to handle and transport dangerous
              goods.
            </p>
            <p className="mb-2">
              Items considered to be dangerous goods include: flammable items or
              items under pressure (e.g., hairspray, spray paint, lighters, nail
              polish and perfume). Dangerous goods items may be required to ship
              separately from non-dangerous goods items.
            </p>
            <p className="mb-2">
              Please view our restricted and prohibited items list for more
              information, or contact us for specific information regarding your
              country and the items you wish to ship.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            What if I receive a counterfeit, bootleg or knockoff item?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Marketsz cannot export counterfeit, bootleg or knockoff items.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default RestrictedMerchandise;
