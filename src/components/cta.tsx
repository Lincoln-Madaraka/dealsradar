'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

const Cta = () => {
        const router = useRouter();

  return (
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                        Ready to Start Saving?
                    </h3>
                    <p className="text-lg sm:text-xl text-orange-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
                        Join our community of smart shoppers and discover deals that matter to you
                    </p>
                    <button 
                        onClick={() => router.push('/signup')}
                        className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-orange-600 font-semibold rounded-lg shadow-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600"
                    >
                        Get Started
                    </button>
                </div>

                {/* Decorative elements - hidden on very small screens */}
                <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-white/10 rounded-full -translate-x-12 -translate-y-12 sm:-translate-x-16 sm:-translate-y-16 lg:-translate-x-20 lg:-translate-y-20" />
                <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60 bg-white/10 rounded-full translate-x-16 translate-y-16 sm:translate-x-20 sm:translate-y-20 lg:translate-x-24 lg:translate-y-24" />
            </div>
  )
}

export default Cta