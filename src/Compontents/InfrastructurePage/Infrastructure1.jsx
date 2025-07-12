import React from 'react';

export default function Infrastructure1() {
  return (
    <section className="py-10 mx-5 md:mx-10 lg:mx-20" aria-label="Biomed Infrastructure Overview">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-17 px-5 md:px-10 lg:px-25 2xl:px-60">

        {/* Image Section */}
        <div>
          <img
            src="https://toonzacademy.com/wp-content/uploads/learn-advanced-animation-courses-.webp"
            alt="Biomed International Manufacturing Facility Exterior"
            className="w-full h-full object-cover rounded-4xl"
          />
        </div>

        {/* Text Section */}
        <div>
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
