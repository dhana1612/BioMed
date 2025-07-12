import React from 'react';

export default function Infrastructure2() {
  return (
    <section className="py-10 mx-5 md:mx-10 lg:mx-20">
      <div className="bg-gray-100 rounded-4xl py-10 md:py-20 lg:py30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-17 px-5 md:px-10 lg:px-25 2xl:px-60">

          {/* Text Section */}
          <div>
            <h1 className="font-bold py-3 text-xl md:text-3xl">
              Core Capabilities and Distinctive Competencies
            </h1>

            <h2 className="font-bold py-3 text-lg md:text-2xl">
              Research and Development Facilities
            </h2>
            <hr aria-hidden="true" />

            <p className="py-3 text-lg md:text-xl">
              Biomed International is equipped with a highly sophisticated R&D facility, backed by a qualified and trained research team, focused on innovation and quality enhancement.
            </p>

            <h2 className="font-bold py-3 text-lg md:text-2xl">
              Manufacturing and Product Packing Facilities
            </h2>
            <hr aria-hidden="true" />

            <p className="py-3 text-lg md:text-xl">
              We follow rigorous standard operating procedures and quality control systems, ensuring hygienic and controlled environments throughout the facility. All reactors and equipment are fully qualified.
            </p>
            <p className="py-3 text-lg md:text-xl">
              The facility includes a specialized block for manufacturing and packing, as well as a dedicated section housing key equipment like dryers, mills, blenders, ANFDs, and spray dryers.
            </p>
            <p className="py-3 text-lg md:text-xl">
              Our Agitated Nutsche Filter (ANFD) is a state-of-the-art system for crystallization and drying, minimizing human contact during final product isolation and preventing solvent vapor exposure.
            </p>
            <p className="py-3 text-lg md:text-xl">
              This advanced ANFD system is widely used in both pharmaceutical and food industries for its efficiency in filtration, washing, and vacuum drying—all within a sealed, high-safety environment.
            </p>
          </div>

          {/* Image Section */}
          <div>
            <img
              src="https://www.animationkolkata.com/blog/wp-content/uploads/2023/04/image5.jpeg"
              alt="Biomed R&D and Manufacturing Facility"
              className="w-full h-full object-cover rounded-4xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
