import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactHeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true,     // Animate only once when scrolling
    });
  }, []);

  return (
    <header className="my-15 px-5 md:px-10 lg:px-20 mx-5 lg:mx-20 rounded-4xl" aria-label="Contact Page Hero Section" style={{
            backgroundImage:
                "url('https://images.theconversation.com/files/675612/original/file-20250620-56-novrkv.jpg?ixlib=rb-4.1.0&rect=300%2C0%2C5340%2C2567&q=45&auto=format&w=668&h=324&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
      <div className="max-w-7xl mx-auto" >
        <div
          className="py-35 md:py-45 lg:py-60 relative"
          
          role="img"
          aria-label="Scenic background image representing contact page"
          data-aos="fade-down"
        >
          <h1 
            className=" font-bold text-white text-3xl md:text-5xl lg:text-7xl"
            data-aos="slide-up"
            data-aos-delay="300"
          >
            Contact Us
          </h1>
        </div>
      </div>
    </header>
  );
}
