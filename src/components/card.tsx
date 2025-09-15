"use client";

import React from "react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor?: string; // Optional override for background color
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  bgColor = "bg-gradient-to-br from-[#fe9900] to-[#f26522]",
}) => {
  return (
    <div className="flex flex-col items-center text-center px-2">
      <div
        className={`w-14 h-14 rounded-full ${bgColor} flex items-center justify-center mb-2 shadow-md`}
      >
        {icon}
      </div>
      <h3 className="text-base font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-600 leading-snug">{description}</p>
    </div>
  );
};

export default Card;
