import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import RetailPromotions from "@/components/retails-promotion";
import TrendingOffers from "@/components/trending-offers";
import WhyDealsRadar from "@/components/why-deals-radar";


const page = () => {
  return (
    <>
      <Hero />
      <RetailPromotions />
      <HowItWorks />
      <TrendingOffers />
      <WhyDealsRadar />
    </>
  );
};

export default page;
