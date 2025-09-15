import React from "react";
import { BiSearch } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { LuBookMarked } from "react-icons/lu";
import WorkCard from "./work-card";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white md:h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
            DealsRadar aggregates real-time discounts and offers from top retail
            brands, allowing users to shop smart by seeing the best deals across
            multiple outlets — all from a single platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 mt-6 dark:text-gray-600">
          <WorkCard
            icon={<BiSearch size={24} />}
            title="Search & Compare"
            description="Browse thousands of deals from top Kenyan retailers. Compare prices across different stores to find the best offers."
          />
          <WorkCard
            icon={<LuBookMarked size={24} />}
            title="Bookmark & Alert"
            description="Save your favorite deals and get notified when prices drop or new offers become available at your preferred stores."
          />
          <WorkCard
            icon={<CgShoppingCart size={24} />}
            title="Shop & Save"
            description="Visit the store with confidence knowing you're getting the best deal. Show your phone to redeem offers instantly."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
