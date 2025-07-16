import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <header className="py-15 px-5 md:px-10 lg:px-20" aria-label="Homepage Hero Section">
      <div
        className="py-35 md:py-45 lg:py-50 bg-green-300 rounded-4xl bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/Shared/Newfolder/Home_about.jpg')",
        }}
        role="img"
        aria-label="Nature background representing Biomed International’s green environment mission"
      >
        <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-7xl px-5 mx-auto ">
          <div className='max-w-2xl'>
          <h1
            className="text-white font-bold text-2xl  md:text-4xl lg:text-5xl leading-tight mb-8"
            data-aos="fade-right"
          >
            Biomed International an established platform for the green environment.
          </h1>

          <p className="py-3 text-lg md:text-2xl text-white  items-center mb-8 text-justify hidden sm:flex">
            Biomed International is the only company with a drug licence to manufacture Chondroitin Sulfate Sodium as an API/Drug in India. The process is developed in-house from lab scale to commercial production.
          </p>



<a
  href="#"
  aria-label="Discover more about Biomed International"
  className="group relative inline-flex items-center px-4 py-2 md:px-6 md:py-3 font-medium border border-white rounded-full overflow-hidden transition-colors duration-300"
  data-aos="zoom-in"
  data-aos-delay="300"
>
  <span className="relative z-10 text-white text-sm md:text-base">
    Discover More
  </span>
  <span className="ml-2 md:ml-3 flex items-center justify-center w-6 h-6 md:w-7 md:h-7 rounded-full bg-green-600 text-white transition-colors duration-300 relative z-10 group-hover:bg-white group-hover:text-green-600">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 md:h-4 md:w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </span>

  {/* Hover Overlay */}
  <span
    className="absolute inset-0 bg-green-600 transition-transform duration-300 ease-out transform scale-x-0 origin-left group-hover:scale-x-100"
  ></span>
</a>


          </div>

        </div>
      </div>
    </header>
  );
}
