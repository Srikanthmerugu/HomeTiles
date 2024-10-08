import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-[url('/public/images/hero-bg.jpg')] bg-cover bg-center h-screen flex flex-col justify-center items-center text-center text-white">
      <h1 className="text-4xl md:text-6xl font-bold">Transform Your Space with Premium Tiles & Marble</h1>
      <button className="mt-8 bg-[#04ba70] text-white px-6 py-3 rounded-lg hover:bg-[#fdc727]">
        Explore Products
      </button>
    </div>
  );
}

export default HeroSection;
