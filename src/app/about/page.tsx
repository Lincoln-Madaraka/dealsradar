import Cta from '@/components/cta';
import Story from '@/components/story';
import React from 'react';



const page = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-850 via-amber-850 to-yellow-850 dark:bg-gray-800">
            <section className="relative h-[60vh] overflow-hidden">
                {/* Background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30 transition-all duration-500"
                    style={{
                        backgroundImage: "url('/image.png')" 
                    }}
                />

                {/* Dark orange overlay */}
                <div className="absolute inset-0 bg-orange-900/70 transition-all duration-500" />

                {/* Main content centered in viewport height */}
                <div className="relative container mx-auto px-4 sm:px-6 h-full flex items-center justify-center">
                    <div className="max-w-4xl text-center">
                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl md:text-6xl title-gradient mb-4 sm:mb-5 md:mb-6 leading-tight tracking-tight">
                            About Deals Radar
                        </h1>

                        {/* Subtitle */}
                        <p className="text-base sm:text-lg md:text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed font-light mb-6 sm:mb-7 md:mb-8">
                            Kenya&apos;s first centralized platform for discovering and accessing retail promotions across major outlets.
                            <br />
                            <span className="text-orange-200 text-sm sm:text-base md:text-lg mt-1 sm:mt-2 block">
                                We connect smart shoppers with the best deals in Nairobi and beyond.
                            </span>
                        </p>

                        {/* CTA Button */}
                        <button className="group bg-white/90 hover:bg-white text-orange-700 hover:text-orange-800 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300">
                            <span className="flex items-center gap-2 sm:gap-3">
                                Discover Deals
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>

                {/* Smooth bottom fade into next section */}
                <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-14 md:h-16 bg-gradient-to-t from-orange-900/70 to-transparent" />
            </section>
            <Story />

            <Cta />
        </div>
    );
};

export default page;

