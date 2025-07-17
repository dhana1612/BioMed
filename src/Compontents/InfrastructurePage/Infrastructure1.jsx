import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Infrastructure1() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="py-1 md:py-10"
      aria-label="Biomed Infrastructure Overview"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 md:px-10 lg:px-5">

        {/* Image Section */}
        <div data-aos="fade-right">
          <img
            src="/Shared/Newfolder/IMG_20250625_143208.jpg"
            alt="Biomed International Manufacturing Facility Exterior"
            className="w-full h-full object-cover rounded-4xl"
            loading="lazy" // Lazy load image for improved performance
          />
        </div>

        {/* Text Section */}
        <div data-aos="fade-left">
          <h1 className="font-bold py-3 text-xl md:text-3xl">
            Advanced Manufacturing Facilities for Biomolecules and Supplements Across Two Strategic Locations.
          </h1>

          <p className="py-3 text-lg md:text-xl">
            Biomed International operates two distinct manufacturing units located in different regions.
          </p>
          <p className="py-3 text-lg md:text-xl">
            Biomed Unit-I, located near Gudur Taluk in the Tirupati district, is fully dedicated to biomolecule production. The facility follows comprehensive environmental standards during every phase of manufacturing.
          </p>
          <p className="py-3 text-lg md:text-xl">
            The facility spans 150,000 sq. ft. and includes an administration block, two production blocks, a warehouse, R&D and quality control laboratories, utility blocks, and more.
          </p>
          <p className="py-3 text-lg md:text-xl">
            A dedicated cleanroom environment is in place for the manufacturing of pharmaceutical, nutraceutical, and food supplement products. Biomed’s infrastructure is robust, supported by a versatile platform and a highly experienced team.
          </p>
        </div>
      </div>
    </section>
  );
}
