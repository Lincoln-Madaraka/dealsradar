import React from "react";
import OfferCard, { TrendingOffer } from "./offer-card";

const OffersGrid: React.FC<{ offers: TrendingOffer[] }> = ({ offers }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {offers.map((offer) => (
      <OfferCard key={offer.id} offer={offer} />
    ))}
  </div>
);

export default OffersGrid;
