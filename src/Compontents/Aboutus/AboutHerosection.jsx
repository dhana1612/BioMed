import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutHerosection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <header 
      className="my-7 px-5 md:px-10 lg:px-20 mx-5 md:mx-10 lg:mx-20 rounded-4xl" 
      aria-label="About Us Hero Section"
      style={{
        backgroundImage: "url('/Shared/Newfolder/HeroSection_Image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }} 
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto">
        <div className="py-35 md:py-45 lg:py-60 relative" role="img" aria-label="Scenic background image representing About Us">
          <h1 
            className="font-bold text-white text-3xl md:text-5xl lg:text-7xl text-shadow-md"
          >
            About Us
          </h1>
        </div>
      </div>
    </header>
  );
}
