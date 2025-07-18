import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Aboutsection4() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      className="bg-gray-200 py-5 mx-3 md:mx-5 lg:mx-20 rounded-4xl mb-20"
      aria-labelledby="what-we-do"
    >
      <div className="px-5 md:px-10 lg:px-5 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="py-5" data-aos="fade-up">
          <p className="py-3 text-lg md:text-xl flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            What We Do
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8" data-aos="fade-up">

          <div className="col-span-2">
            <h2 className="font-bold text-xl md:text-3xl">
              Empowering Health Through Science and Innovation
            </h2>
          </div>

          <div className="col-span-3">
            <p className="text-lg md:text-xl text-gray-600">
              Biomed International is the only company with a drug licence to
              manufacture Chondroitin Sulfate Sodium as an API/Drug in India.
              The process is developed in-house from lab scale to commercial
              production.
            </p>
          </div>
        </div>

        {/* Google Drive Video Section */}
        <div className="py-5 lg:py-10" data-aos="fade-up">
          <div className="relative w-full" style={{ paddingTop: '40%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              src="https://drive.google.com/file/d/1mlkcjO5sjOXx1gazxtlT7AUtPiEENGgR/preview" 
              title="Biomed International Introduction Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}
