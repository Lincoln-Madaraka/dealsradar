import React from "react";
import { TrendingOffer } from "./offer-card";
import OffersGrid from "./offer-grid";
import BackgroundBlur from "./background-blur";

const trendingOffers: TrendingOffer[] = [
    {
        id: 1,
        title: "Premium Wireless Headphones",
        collection: "Tech Collection 2024",
        price: "$89",
        originalPrice: "$129",
        image: "/wireless-headphones.png",
        rating: 4.8,
        discount: "31% OFF",
    },
    {
        id: 2,
        title: "Smart Fitness Watch",
        collection: "Health & Wellness 2024",
        price: "$199",
        originalPrice: "$299",
        image: "/watch.png",
        rating: 4.9,
        discount: "33% OFF",
    },
    {
        id: 3,
        title: "Organic Skincare Set",
        collection: "Beauty Essentials 2024",
        price: "$79",
        originalPrice: "$119",
        image: "/skincare.png",
        rating: 4.7,
        discount: "34% OFF",
    },
];

const TrendingOffers = () => (
    <section className="bg-subtle-bg relative overflow-hidden py-20">
        <BackgroundBlur />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
                <div className="flex flex-col lg:flex-row justify-around items-center gap-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center lg:text-left">
                        Trending Offers Of <br /> The Day.
                    </h2>
                        <p className="text-lg text-gray-600 max-w-md">
                            Discover amazing deals and exclusive offers on top products. Perfect for savvy shoppers who want the best value without compromising on quality.
                        </p>
                        <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-lg font-semibold transition hover:scale-105 shadow-lg">
                            Explore All Deals
                        </button>
                </div>
            </div>

            {/* Offers Grid */}
            <OffersGrid offers={trendingOffers} />

            {/* CTA Button */}
            <div className="text-center mt-12">
                <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-semibold transition hover:scale-105 shadow-lg">
                    View All Trending Offers
                </button>
            </div>
        </div>
        <BackgroundBlur />
    </section>
);

export default TrendingOffers;
