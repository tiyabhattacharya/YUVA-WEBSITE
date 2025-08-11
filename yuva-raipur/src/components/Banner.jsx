import React from "react";


const Banner = () => {
  return (
    <div className="w-full">
      <img
        src="/hero-banner.png" // Replace with your image path
        alt="YUVA Banner"
        loading="lazy"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default Banner;
