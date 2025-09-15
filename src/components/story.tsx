import React from 'react'

const Story = () => {
    return (
        <section className="py-6 sm:py-8 md:py-12 bg-subtle-bg h-screen">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold text-gray-900 mb-6 sm:mb-7 md:mb-8">
                    Our Story
                </h2>

                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                    {[
                        {
                            text: "Deals Radar was born from a simple observation: Kenyan shoppers were missing out on incredible savings simply because they couldn't easily discover and compare promotional offers across different retail outlets.",
                            label: "The Problem",
                        },
                        {
                            text: "We realized that with hundreds of stores across Nairobi offering unlimited promotions and deals, consumers needed a centralized platform to discover, compare, and act on these opportunities.",
                            label: "The Solution",
                        },
                        {
                            text: "Today, Deals Radar serves as Kenya's premier deal aggregation platform, helping smart shoppers save money and discover new products.",
                            label: "The Future",
                        },
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-3 sm:p-4 rounded shadow">
                            <p className="text-black text-sm sm:text-base">
                                {item.text}
                            </p>
                            <div className="flex items-center mt-3 sm:mt-4">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-400 text-white text-xs flex items-center justify-center rounded-full">
                                    {i + 1}
                                </div>
                                <span className="ml-2 text-xs sm:text-sm text-orange-700">
                                    {item.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Story