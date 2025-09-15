'use client'; // Only needed if using App Router

import { useRouter } from 'next/navigation';

const Custom404: React.FC = () => {
    const router = useRouter();

    const handleGoHome = () => {
        router.push('/');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300 flex items-center justify-center relative overflow-hidden">
            {/* Main Content */}
            <div className="text-center z-10 relative">
                {/* Circular Border */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 border-2 border-orange-300 border-opacity-40 rounded-full animate-circle-grow opacity-0 animation-delay-300">
                    <div className="absolute -inset-1 border border-orange-300 border-opacity-20 rounded-full animate-pulse"></div>
                </div>

                {/* 404 Number */}
                <div className="text-9xl md:text-[300px] font-black bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 bg-clip-text text-transparent mb-5 animate-fade-in-scale opacity-0 animation-delay-500 leading-none">
                    404
                </div>

                {/* Error Title */}
                <h1 className="text-4xl font-bold text-orange-700 mb-3 animate-fade-in-up opacity-0 animation-delay-1000">
                    Oops
                </h1>

                {/* Error Message */}
                <p className="text-xl text-orange-600 mb-2 animate-fade-in-up opacity-0 animation-delay-1200">
                    Something Went Wrong.
                </p>

                {/* Error Code */}
                <p className="text-sm text-orange-500 mb-10 animate-fade-in-up opacity-0 animation-delay-1400">
                    Error 404 Page Not Found
                </p>

                {/* Go Home Button */}
                <button
                    onClick={handleGoHome}
                    className="px-9 py-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold text-base tracking-wider uppercase rounded-full shadow-lg shadow-orange-400/25 hover:shadow-orange-400/35 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up opacity-0 animation-delay-1600 active:translate-y-0"
                >
                    GO TO HOME
                </button>
            </div>
        </div>
    );
};

export default Custom404;