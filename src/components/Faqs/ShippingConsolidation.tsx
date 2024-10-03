import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const ShippingConsolidation = () => {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem
          value="item-1"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            How can I estimate international shipping costs?
          </AccordionTrigger>
          <AccordionContent>
            You can estimate your shipping costs before you purchase an item by
            asking the merchant for the weight and dimensions of the package
            they will ship to us. You can then enter that information into our
            shipping rate calculator.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            What are the Marketsz 2022 holiday shipping cutoff dates?
          </AccordionTrigger>
          <AccordionContent>
            <h3 className="font-semibold">
              To Receive Your Package By 25 December:
            </h3>
            <p className="my-2">
              Submit your ship requests before 3:00 PM EST (GMT -5 hours) on the
              following dates for the best chance of delivery by 25 December.
            </p>
            <h3 className="font-semibold">
              5 December: Deadline for Marketsz Courier Partners
            </h3>
            <p>Includes:</p>
            <ul className="list-disc ml-6">
              <li>Emirates SkyCargo</li>
              <li>Fortune G</li>
              <li>NZ Post</li>
              <li>Royal Mail</li>
              <li>Redbox Economy</li>
              <li>SMSA</li>
              <li>Yamato</li>
              <li>Yun Express</li>
            </ul>
            <h3 className="font-semibold">
              10 December: Deadline for Budget Couriers
            </h3>
            <p>Includes:</p>
            <ul className="list-disc ml-6">
              <li>FedEx Economy</li>
              <li>FedEx Economy Freight</li>
              <li>FedEx USA Ground</li>
              <li>UPS Worldwide Saver</li>
              <li>UPS Expedited</li>
              <li>Budget Economy</li>
              <li>Budget Express</li>
              <li>DHL Economy Worldwide</li>
              <li>FDX Economy</li>
            </ul>
            <h3 className="font-semibold">
              16 December: Deadline for Express Couriers
            </h3>
            <p>Includes:</p>
            <ul className="list-disc ml-6">
              <li>DHL Express</li>
              <li>DHL Express Worldwide</li>
              <li>FedEx Priority</li>
              <li>FedEx Priority Freight</li>
              <li>FedEx USA Overnight</li>
              <li>FedEx USA 2nd Day</li>
              <li>FDX Priority</li>
              <li>Marketsz Swiftsaver</li>
            </ul>
            <p className="my-2">
              Be sure to mark your ship request as “Urgent” and submit it by
              3:00 PM EST (GMT -5 hours) on these dates.
            </p>
            <h3 className="my-2 font-semibold">Things to Remember</h3>
            <p>1. Shop early!</p>
            <p className="my-2">
              2. For the fastest international delivery with Marketsz, choose
              FedEx Priority or DHL Express (where available) for 1 to 4 day
              delivery.
            </p>
            <p>
              Your package must be in your suite before submitting a ship
              request, so remember to consider the time it takes for delivery
              from the retailer, logging items into your suite, and
              international shipping to you.
            </p>
            <p className="mt-2">
              Marketsz can&apos;t wait to help ship your packages from the US to
              over 220 countries worldwide. So, let&apos;s deliver some holiday
              gifts!
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            How can I save money on international shipping?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              There&apos;s more than one way to save on international shipping
              rates with Marketsz!
            </p>
            <h3 className="font-semibold my-2">
              Saving through Consolidation:
            </h3>
            <p>
              You can save the most on international shipping by placing orders
              at multiple US stores, and letting Marketsz send them together in
              one shipment. Consolidating your packages is the easiest way to
              save up to 80% on international shipping, and is far more
              cost-effective than shipping directly from multiple stores.
              Premium and Business memberships offer FREE consolidation on every
              shipment.
            </p>
            <h3 className="font-semibold mb-2">
              Refer a Friend and get a shipping credit:
            </h3>
            <p>
              Members can earn shipping credits by referring friends to
              Marketsz. Learn more here.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-5"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            How does package consolidation work?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Shipping multiple packages overseas direct from online stores can
              be very costly. With Marketsz consolidation (package bundling),
              our expert packers combine your purchases into a single package,
              saving you up to 80% on international shipping rates.
            </p>

            <p className="mt-2">
              Premium and Business members receive FREE package consolidation.
              As per-pound shipping rates decrease as the box weight increases,
              it is almost always to your benefit to ship one large box instead
              of several small boxes.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-6"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            How does repacking save me money on international shipping?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Many stores pack your items in boxes that are too large or not
              properly prepared for global shipping. Marketsz takes extra time
              to ensure all your merchandise is properly packaged for
              international shipping. Our repackaging service is FREE with a
              Premium or Business membership, will save you money in shipping
              costs, and also helps ensure your purchases are not damaged during
              transport.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-7"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            How does package consolidation work?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Shipping multiple packages overseas direct from online stores can
              be very costly. With Marketsz consolidation (package bundling),
              our expert packers combine your purchases into a single package,
              saving you up to 80% on international shipping rates.
            </p>
            <p className="mt-2">
              Premium and Business members receive FREE package consolidation.
              As per-pound shipping rates decrease as the box weight increases,
              it is almost always to your benefit to ship one large box instead
              of several small boxes.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-8"
          className="bg-gray-200 mb-2 p-2  rounded-md"
        >
          <AccordionTrigger className="font-semibold text-xl">
            What international carriers does Marketsz use?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Marketsz partners with DHL, FedEx, and UPS to deliver your
              shipments. In some areas, a &quot;Budget Shipper&quot; service is
              available, which may be provided by other local carriers.
            </p>
            <p className="mt-2">
              our carrier options will vary, depending on the country you are
              shipping to and the weight and size of your shipment.
            </p>
            <p className="mt-2">
              Items that require special handling, like dangerous goods and
              televisions, can influence the carrier options available for your
              shipment.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default ShippingConsolidation;
