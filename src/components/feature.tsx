'use client'
import React, {useEffect, useState} from "react";
import {BiShield, BiTrendingUp} from "react-icons/bi";
import {FiZap} from "react-icons/fi";

const Feature = () => {
    const [visibleCards, setVisibleCards] = useState(new Set());
    const [activeFeature, setActiveFeature] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleCards(prev => new Set([...prev, (entry.target as HTMLElement).dataset.index]));
                    }
                });
            },
            {threshold: 0.1}
        );

        const cards = document.querySelectorAll('.feature-card');
        cards.forEach(card => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature(prev => (prev + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, []);


    const features = [
        {
            icon: <BiTrendingUp className="w-8 h-8"/>,
            title: "Smart Deal Detection",
            description: "Our AI-powered system scans thousands of retailers in real-time to find the best deals tailored to your preferences.",
            metric: "2.3M+",
            metricLabel: "Deals Found Daily"
        },
        {
            icon: <BiShield className="w-8 h-8"/>,
            title: "Verified Savings",
            description: "Every deal is verified and updated in real-time. No expired coupons or fake discounts - just genuine savings.",
            metric: "99.8%",
            metricLabel: "Accuracy Rate"
        },
        {
            icon: <FiZap className="w-8 h-8"/>,
            title: "Lightning Fast Alerts",
            description: "Get instant notifications when your favorite products go on sale. Never miss a deal again.",
            metric: "<1s",
            metricLabel: "Alert Speed"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left side - Feature showcase */}
                <div className="relative">
                    <div
                        className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
                        <div
                            className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white shadow-lg">
                            {features[activeFeature].icon}
                        </div>

                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                {features[activeFeature].title}
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {features[activeFeature].description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                            <div>
                                <div className="text-3xl font-bold text-orange-600">
                                    {features[activeFeature].metric}
                                </div>
                                <div className="text-sm text-gray-500">
                                    {features[activeFeature].metricLabel}
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                {features.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveFeature(index)}
                                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                            activeFeature === index ? 'bg-orange-600' : 'bg-gray-300'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Floating elements */}
                    <div
                        className="absolute -z-10 top-10 left-10 w-20 h-20 bg-orange-200 rounded-full blur-xl opacity-60 animate-pulse"/>
                    <div
                        className="absolute -z-10 bottom-10 right-10 w-32 h-32 bg-blue-200 rounded-full blur-xl opacity-60 animate-pulse"
                        style={{animationDelay: '1s'}}/>
                </div>

                {/* Right side - Feature grid */}
                <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-gray-900 mb-8">
                        Why Choose Deals Radar?
                    </h3>

                    {features.map((feature, index) => (
                        <div
                            key={index}
                            data-index={index}
                            className={`feature-card bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500 transform transition-all duration-700 hover:shadow-xl hover:scale-105 ${
                                visibleCards.has(String(index)) ? 'translate-x-0 opacity-100' : 'sm:translate-x-8 opacity-0'
                            }`}
                            style={{transitionDelay: `${index * 200}ms`}}
                        >
                            <div className="flex items-start space-x-4">
                                <div
                                    className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                                    {feature.icon}
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                                        {feature.title}
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
export default Feature;