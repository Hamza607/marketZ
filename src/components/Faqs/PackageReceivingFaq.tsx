import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const PackageReceivingFaq = () => {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem
          value="item-1"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            Will Marketsz open my package?
          </AccordionTrigger>
          <AccordionContent>
            <p className="my-2 font-semibold">Yes.</p>
            <p className="mb-2">
              Marketsz opens every package when it arrives at our facility. Our
              trained login agents carefully review your purchases to ensure
              they were not broken during shipping and are legal for export from
              the USA.
            </p>
            <p className="mb-2">
              If the merchant included an invoice, we will compare the contents
              of the package to the purchases shown on the invoice to ensure you
              received the correct items. If the invoice shows the price you
              paid, we will also enter these values for you.
            </p>
            <p>
              f you receive an item that is not in the manufacturer&apos;s
              original packaging, or is not from a trusted merchant, we will
              open the product packaging to inspect the item. This allows
              Marketsz to reduce fraud, and saves you shipping costs by
              verifying the correct product is in the package and is legal for
              export from the USA.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            Does Marketsz charge for package storage?
          </AccordionTrigger>
          <AccordionContent>
            Premium and Business members receive 30 days of free package
            storage. Packages stored past the free storage period will incur
            storage fees at the rates shown below. Storage fees continue to
            accrue until your package is shipped, discarded or returned to the
            sender. You will see storage charges itemized on your invoice when
            the package is shipped or discarded.
            <div className="my-2">
              <table className="border border-black p-2 w-full">
                <thead>
                  <tr>
                    <th className="border border-black p-2">Storage Days:</th>
                    <th className="border border-black p-2">Not Oversized</th>
                    <th className="border border-black p-2">Oversized</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-black p-2">Day 1 to Day 30</td>
                    <td className="border border-black p-2">Free</td>
                    <td className="border border-black p-2">Free</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-2">Day 1 to Day 60</td>
                    <td className="border border-black p-2">$1.00/day</td>
                    <td className="border border-black p-2"> $1.50/day</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-2">
                      Day 61 to Day 90
                    </td>
                    <td className="border border-black p-2">$2.00/day</td>
                    <td className="border border-black p-2"> $3.50/day</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-2">91+</td>
                    <td className="border border-black p-2">$3.00/day</td>
                    <td className="border border-black p-2"> $6.50/day</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            Does Marketsz provide temperature controlled facilities?
          </AccordionTrigger>
          <AccordionContent>
            <p className="font-semibold text-lg">No.</p>
            <p className="mb-2">
              Neither Marketsz, nor our couriers, provide any form of
              temperature-controlled storage or transportation.
            </p>
            <p className="mb-2">
              Common items that require refrigeration include frozen foods,
              perishable foodstuffs, temperature-sensitive medications, dry ice
              and chocolate.
            </p>
            <p className="mb-2">
              Marketsz may refuse packages that arrive at our facility requiring
              temperature controls or that include items that are perishable.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-5"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            What delivery services can I use to send packages to my Marketsz
            Suite?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Marketsz accepts packages from all major shipping services,
              including, but not limited to USPS, DHL, UPS, FedEx, courier
              services, and more! Your packages must include your suite number
              in order to be accepted by Marketsz.
            </p>
            <p className="mt-2">
              On-demand services that deliver orders or products via a person or
              delivery driver, rather than through a shipping carrier/courier,
              cannot be accepted at the Marketsz facility. These services often
              include Instacart, Amazon Fresh, Amazon Prime Now, Walmart Express
              Delivery, Peapod, and other services that offer 2-hour or other
              short term delivery windows.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default PackageReceivingFaq;
