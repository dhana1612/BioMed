import React from 'react';

const BiomedHeroSection = () => {
  return (
    <section
      className="relative mt-8 md:mt-12 mb-8 md:mb-12 py-16 md:py-24 lg:py-32 
                 rounded-2xl md:rounded-[30px] overflow-hidden mx-4 md:mx-12"
      style={{
        backgroundImage: "url('/images/your-background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-6xl mx-auto px-4 md:px-8">
        <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
          Biomed International <br />
          an established platform <br />
          for the green environment.
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg max-w-2xl mb-6">
          Biomed International is the only company with drug licence to manufacture Chondroitin
          Sulfate Sodium as an API/Drug in India. The process is developed in-house from lab scale
          to commercial production.
        </p>

        <a
          href="#"
          className="group inline-flex items-center px-6 py-3 bg-white text-green-700 font-medium rounded-full border border-white
                     hover:bg-green-600 hover:text-white transition-colors duration-300"
        >
          Discover More
          <span className="ml-3 flex items-center justify-center w-7 h-7 rounded-full bg-green-600 text-white group-hover:bg-white group-hover:text-green-600 transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
};

export default BiomedHeroSection;
