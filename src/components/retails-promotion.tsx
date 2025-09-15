"use client";

import React from "react";
import { BiBarChart, BiMapPin, BiSearch } from "react-icons/bi";
import { LuBookMarked } from "react-icons/lu";
import { motion } from "framer-motion";
import Card from "./card";

const features = [
    {
        icon: <BiSearch className="w-8 h-8 text-white" aria-label="Search Icon" />,
        title: "Smart Deal Search",
        description:
            "Search and discover promotions from major retailers like Naivas, Quickmart, and Carrefour with intelligent filtering and real-time results",
        bgColor: "bg-gradient-to-br from-[#fe9900] to-[#f26522]",
    },
    {
        icon: <BiMapPin className="w-8 h-8 text-white" aria-label="Map Pin Icon" />,
        title: "Location-Based Offers",
        description:
            "Find nearby stores with the best deals based on your location and get directions to save time and money on every shopping trip",
        bgColor: "bg-gradient-to-br from-[#f26522] to-[#fe9900]",
    },
    {
        icon: <LuBookMarked className="w-8 h-8 text-white" aria-label="Bookmark Icon" />,
        title: "Deal Management",
        description:
            "Bookmark favorite offers, track expiry dates, and receive notifications before deals end to never miss amazing promotions again",
        bgColor: "bg-gradient-to-br from-[#fe9900] to-[#f26522]",
    },
    {
        icon: <BiBarChart className="w-8 h-8 text-white" aria-label="Bar Chart Icon" />,
        title: "Price Comparison Engine",
        description:
            "Compare prices across multiple retailers for the same products and make informed purchasing decisions to maximize savings",
        bgColor: "bg-gradient-to-br from-[#f26522] to-[#fe9900]",
    },
];

const RetailPromotions: React.FC = () => {
    return (
        <section className="bg-light-orange py-10 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.4 }}
                        >
                            <Card
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                bgColor={feature.bgColor}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default RetailPromotions;
