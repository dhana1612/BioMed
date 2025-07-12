import React from 'react';

export default function Aboutsection4() {
  return (
    <section
      className="bg-gray-200 py-10 mx-5 md:mx-10 lg:mx-20 rounded-4xl mb-20"
      aria-labelledby="what-we-do"
    >
      {/* Section Title */}
      <div className="px-5 md:px-10 lg:px-25 2xl:px-60 p-10">
        <p id="what-we-do" className="text-green-600 py-3 text-lg md:text-xl">
          <span className="text-green-500 text-2xl" aria-hidden="true">●</span>{' '}
          What We Do
        </p>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-17 px-5 md:px-10 lg:px-25 2xl:px-60">
        <div>
          <h2 className="font-bold py-3 text-xl md:text-3xl">
            Empowering Health Through Science and Innovation
          </h2>
        </div>

        <div>
          <p className="py-3 text-lg md:text-xl">
            Biomed International is the only company with a drug licence to
            manufacture Chondroitin Sulfate Sodium as an API/Drug in India.
            The process is developed in-house from lab scale to commercial
            production.
          </p>
        </div>
      </div>

      {/* YouTube Video Section */}
      <div className="px-5 md:px-10 lg:px-25 2xl:px-60 py-10">
        <div className="relative w-full" style={{ paddingTop: '40%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/2qCpY38ompo?si=BHa2hsQ-7wBIFRjp"
            title="Biomed International Introduction Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
