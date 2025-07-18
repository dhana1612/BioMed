import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Infrastructure2() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-10 mx-2 md:mx-10" aria-label="Biomed Infrastructure Core Capabilities">
      <div className="bg-gray-200 rounded-4xl py-10 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 md:px-10 lg:px-5">

          <div data-aos="fade-right">
            <h1 className="font-bold py-3 text-xl md:text-3xl">
              Core Capabilities and Distinctive Competencies
            </h1>

            <h2 className="font-bold py-3 text-lg md:text-2xl">
              Research and Development Facilities
            </h2>
            <hr aria-hidden="true" className="border-t-2 border-gray-400" />

            <p className="py-3 text-lg md:text-xl text-gray-600">
              Biomed International is equipped with a highly sophisticated R&D facility, backed by a qualified and trained research team, focused on innovation and quality enhancement.
            </p>

            <h2 className="font-bold py-3 text-lg md:text-2xl">
              Manufacturing and Product Packing Facilities
            </h2>
            <hr aria-hidden="true" className="border-t-2 border-gray-400" />

            <p className="py-3 text-lg md:text-xl text-gray-600">
              We follow rigorous standard operating procedures and quality control systems, ensuring hygienic and controlled environments throughout the facility. All reactors and equipment are fully qualified.
            </p>
            <p className="py-3 text-lg md:text-xl text-gray-600">
              The facility includes a specialized block for manufacturing and packing, as well as a dedicated section housing key equipment like dryers, mills, blenders, ANFDs, and spray dryers.
            </p>
            <p className="py-3 text-lg md:text-xl text-gray-600">
              Our Agitated Nutsche Filter (ANFD) is a state-of-the-art system for crystallization and drying, minimizing human contact during final product isolation and preventing solvent vapor exposure.
            </p>
            <p className="py-3 text-lg md:text-xl text-gray-600">
              This advanced ANFD system is widely used in both pharmaceutical and food industries for its efficiency in filtration, washing, and vacuum drying—all within a sealed, high-safety environment.
            </p>
          </div>

          <div data-aos="fade-left">
            <img
              src="/Shared/Newfolder/IMG_20250625_150419 (1).jpg"
              alt="Biomed R&D and Manufacturing Facility"
              className="w-full h-full object-cover rounded-4xl"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
