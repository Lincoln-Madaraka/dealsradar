import Image from "next/image";
import React from "react";
import { BiHeart, BiStar } from "react-icons/bi";

export interface TrendingOffer {
  id: number;
  title: string;
  collection: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating?: number;
  discount?: string;
}

const OfferCard: React.FC<{ offer: TrendingOffer }> = ({ offer }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl cursor-pointer overflow-hidden">
      {/* Image Section */}
      <div className="relative h-48 bg-gray-100">
        <Image
          src={offer.image}
          width={150}
          height={150}
          alt={offer.title}
          className="object-center w-full h-full "
        />

        {/* Discount Badge */}
        {offer.discount && (
          <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            {offer.discount}
          </span>
        )}

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-red-100 transition">
          <BiHeart className="w-4 h-4 text-gray-600 hover:text-red-500 transition" />
        </button>
      </div>

      {/* Info Section */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition">
          {offer.title}
        </h3>
        <p className="text-sm text-gray-500">{offer.collection}</p>

        {/* Rating */}
        {offer.rating && (
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, i) => (
              <BiStar
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(offer.rating!) ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">({offer.rating})</span>
          </div>
        )}

        {/* Price + View Deal */}
        <div className="flex items-center justify-between mt-4">
          <div className="space-x-2">
            <span className="text-primary text-xl font-bold">{offer.price}</span>
            {offer.originalPrice && (
              <span className="line-through text-gray-400">{offer.originalPrice}</span>
            )}
          </div>
          <button className="bg-primary hover:bg-primary-hover text-white px-3 py-1.5 rounded-md text-sm font-semibold transition">
            View Deal
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
