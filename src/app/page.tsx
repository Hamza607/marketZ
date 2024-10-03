import Footer from "@/components/footer/Footer";
import FreeBenefit from "@/components/freeBenefit/FreeBenefit";
import HassleFree from "@/components/hassleFree/HassleFree";
import Header from "@/components/header/Header";
import HeroSection from "@/components/heroSection/HeroSection";
import ShippingRates from "@/components/shippingRates/ShippingRates";
import StartShipping from "@/components/startShipping/StartShipping";
import TimeToShop from "@/components/timeToShop/TimeToShop";
import WhereCanIShop from "@/components/whereCaniShop/WhereCanIShop";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <StartShipping />
      <HassleFree />
      <ShippingRates />
      <WhereCanIShop />
      <FreeBenefit />
      <TimeToShop />
      <Footer />
    </div>
  );
}
