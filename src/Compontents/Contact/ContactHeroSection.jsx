import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactHeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <header 
      className="my-10 px-5 md:px-10 lg:px-20 mx-5 lg:mx-20 rounded-4xl" 
      aria-label="Contact Page Hero Section" 
      style={{
        backgroundImage: "url('/Shared/Newfolder/Contact_us.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      data-aos="fade-down"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="py-35 md:py-45 lg:py-60 relative"
          role="img"
          aria-label="Scenic background image representing contact page"
        >
          <h1 className="font-bold text-white text-3xl md:text-5xl lg:text-7xl">
            Contact Us
          </h1>
        </div>
      </div>
    </header>
  );
}
