import React from "react";
import {BiCheckCircle, BiStar, BiTrendingUp, BiUser} from "react-icons/bi";

const WhyJoinHeader = () => {
    const stats = [
        {number: "5M+", label: "Active Users", icon: <BiUser className="w-5 h-5"/>},
        {number: "$2.4B", label: "Money Saved", icon: <BiTrendingUp className="w-5 h-5"/>},
        {number: "4.9/5", label: "User Rating", icon: <BiStar className="w-5 h-5"/>},
        {number: "150K+", label: "Partner Stores", icon: <BiCheckCircle className="w-5 h-5"/>}
    ];

    return (
        <div className="relative overflow-hidden bg-white">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 via-transparent to-blue-100/20"/>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        The Future of Smart Shopping
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                        Join millions of savvy shoppers who trust Deals Radar to find the best deals across the web
                    </p>

                    {/* Animated Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="text-center transform hover:scale-105 transition-transform duration-300"
                            >
                                <div className="flex items-center justify-center mb-2 text-orange-600">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WhyJoinHeader;