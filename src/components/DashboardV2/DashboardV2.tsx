"use client";
import React, { useState } from "react";
import NewHeader from "./NewHeader";
import PackageHeader from "./packageHeader/PackageHeader";
import PackageDataTable from "./packageDataTable/PackageDataTable";
import NewFooter from "./NewFooter";
import ShippingHistory from "./ShippingHistory/ShippingHistory";

const DashboardV2 = () => {
  const [queue, setQueue] = useState<string>("");
  const [headerLink, setHeaderLink] = useState("mysuit");
  return (
    <>
      <div className="bg-[#F5F5F5] min-h-screen">
        <NewHeader setHeaderLink={setHeaderLink} headerLink={headerLink} />
        {headerLink == "mysuit" && (
          <>
            <PackageHeader setQueue={setQueue} />
            <PackageDataTable queue={queue} setQueue={setQueue} />
          </>
        )}
        {headerLink == "shippinghistory" && <ShippingHistory />}
        <NewFooter />
      </div>
    </>
  );
};

export default DashboardV2;
