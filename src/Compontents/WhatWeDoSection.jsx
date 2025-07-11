import React from "react";

const WhatWeDoSection = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-8">
          <p className="text-green-600 text-sm sm:text-base md:text-2xl py-5 font-medium flex items-center gap-2">
            <span className="text-green-500 text-2xl">●</span>
            What We Do
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="md:w-[85%]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
                Empowering Health Through Science and Innovation
              </h2>
            </div>
            <div>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-2xl">
                Biomed International is the only company with a drug licence to
                manufacture Chondroitin Sulfate Sodium as an API/Drug in India.
                The process is developed in-house from lab scale to commercial
                production.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full overflow-hidden rounded-xl h-[500px]">
  <iframe
    src="https://www.youtube.com/embed/GXYNPuE3Iz8?si=Cx5nRnHQARQpkpDU"
    title="YouTube video player"
    className="w-full h-full"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>
 
      </div>
    </section>
  );
};

export default WhatWeDoSection;
