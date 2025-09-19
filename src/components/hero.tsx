"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const slides = [
    {
      id: 1,
      title: "Never Miss a Deal Again!",
      description:
        "Discover real-time promotions from Naivas, Quickmart, Carrefour and more — all in one place.",
      subtitle:
        "Search, compare, and bookmark offers on groceries, electronics, and household items near you.",
      backgroundImage: "/hero-supermarket.jpg", // Replace with a vibrant store aisle or shopping cart image
      buttonText: "Browse Deals",
    },
    {
      id: 2,
      title: "Save More, Shop Smarter",
      description:
        "Get instant access to discounted products across major supermarkets in Kenya.",
      subtitle:
        "Know what's on offer before you leave the house — or while you're in-store.",
      backgroundImage: "/hero-deals.jpg", // A shopper using phone in store or comparing prices
      buttonText: "Start Saving",
    },
    {
      id: 3,
      title: "Your Shopping Assistant",
      description:
        "Track expiring deals, receive alerts, and bookmark your favorite discounts with ease.",
      subtitle: "All your savings, organized and accessible from anywhere.",
      backgroundImage: "/hero-deals2.jpg", // Smartphone with app interface, ideally showing list of deals
      buttonText: "Try It Now",
    },
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <section className="relative h-[80vh] overflow-hidden mt-16">
        {/* Background Images with Transitions */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-gray-800/60 hover:bg-gray-800/80 text-white rounded-full p-3 transition-all duration-200"
        >
          <BiChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-gray-800/60 hover:bg-gray-800/80 text-white rounded-full p-3 transition-all duration-200"
        >
          <BiChevronRight className="w-6 h-6" />
        </button>

        {/* Content Container */}
        <div className="relative z-10 h-full mb-10 flex items-center">
          <div className="w-full px-4 sm:px-6 md:px-10 flex justify-center">
            <div className="w-full max-w-5xl bg-black/50 p-4 sm:p-6 md:p-8 lg:p-10 text-center sm:text-left">
              {/* Animated Content */}
              <div key={currentSlide} className="animate-fade-in">
                <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold title-gradient mb-4 sm:mb-6 leading-snug">
                  {slides[currentSlide].title}
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-white mb-3 sm:mb-4 leading-relaxed">
                  {slides[currentSlide].description}
                </p>

                <p className="text-sm sm:text-base md:text-lg text-white mb-6 sm:mb-8 leading-relaxed">
                  {slides[currentSlide].subtitle}
                </p>

                <button  onClick={()=>router.push('/signup')} className="bg-primary hover:bg-primary-hover flex items-center text-white font-bold px-6  py-2 rounded-full transition-all duration-500 hover:scale-105 shadow-lg">
                  {slides[currentSlide].buttonText}
                  <span className="py-2 font-bold">
                    <BiChevronRight size={25} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                  ? "bg-white scale-110"
                  : "bg-white/50 hover:bg-white/80"
                }`}
            />
          ))}
        </div>
      </section>
      <div className="h-1 w-full bg-primary"></div>
    </>
  );
};

export default Hero;
