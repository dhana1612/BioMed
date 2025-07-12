import React from 'react';

export default function HeroSection() {
  return (
    <header className="py-15 px-5 md:px-10 lg:px-20" aria-label="Homepage Hero Section">
      <div
        className="py-35 md:py-45 lg:py-60 bg-green-300 rounded-4xl bg-cover bg-center"
        style={{
          backgroundImage: "url('/Shared/images/HomePage_HeroSection.jpg')",
        }}
        role="img"
        aria-label="Nature background representing Biomed International’s green environment mission"
      >
        <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-6xl mx-auto px-4 md:px-8">
          <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            Biomed International <br />
            an established platform <br />
            for the green environment.
          </h1>

          <a
            href="#"
            aria-label="Discover more about Biomed International"
            className="group inline-flex items-center px-6 py-3 bg-white text-green-700 font-medium rounded-full border border-white hover:bg-green-600 hover:text-white transition-colors duration-300"
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
      </div>
    </header>
  );
}
