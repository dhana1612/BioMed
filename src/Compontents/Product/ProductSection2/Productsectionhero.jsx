import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Productsectionhero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <header 
      className="my-15 mx-5 lg:mx-20 rounded-4xl" 
      aria-label="Collagen Hero Section" 
      style={{
        backgroundImage: "url('/Shared/Newfolder/Collagen_BG1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }} 
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto">
        <div className="py-35 md:py-45 lg:py-60 relative" role="img" aria-label="Collagen Hero Section">
          <h1 className="font-bold text-gray-300 text-3xl md:text-5xl lg:text-7xl">
            Collagen
          </h1>
        </div>
      </div>
    </header>
  );
}
