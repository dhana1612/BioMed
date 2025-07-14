import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Productsection12() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: false,   // animate every time the element enters the view
    });
  }, []);

  return (
    <section className="pt-1 md:pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 px-5 md:px-10 lg:px-5 h-260">
          {/* Left Static Block */}
          <div data-aos="fade-right">
            <h1 className="font-bold text-xl md:text-3xl">Structure of Collagen</h1>
            <p className="py-3 text-lg md:text-xl">
              Chemical formula: C4H6N2O3R2. (C7H9N2O2R)n
            </p>
            <p className="py-3 text-lg md:text-xl">
              <span>CAS Number:</span> 9007-34-5
            </p>
          </div>

          {/* Right Scrollable Block */}
          <div className="overflow-y-scroll no-scrollbar scroll-smooth col-span-2 h-[1000px]">
            <div data-aos="fade-up">
              <h1 className="font-bold py-3 text-xl md:text-3xl">
                Core Capabilities or Distinctive Competencies.
              </h1>

              <h1 className="font-bold py-3 text-xl md:text-3xl">
                Research and Development facilities
              </h1>
              <hr />

              <p className="py-3 text-lg md:text-xl">
                Biomed International has a well equipped R&D (Research and Development)
                facility with a sophisticated, trained, and qualified team.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <h1 className="font-bold py-3 text-2xl">
                Manufacturing facilities & Product packing facilities
              </h1>
              <hr />

              <p className="py-3 text-lg md:text-xl">
                Biomed International adheres to standardized operating procedures
                and robust quality control systems, ensuring hygienic and controlled
                conditions throughout the plant. We maintain strict qualifications
                for all reactors and equipment.
              </p>
              <p className="py-3 text-lg md:text-xl">
                Our plant features a specialized block dedicated to the manufacturing
                and packing of products. A distinct area is allocated for essential
                equipment, including dryers, mills, blenders, ANFD, and spray dryers.
              </p>
              <p className="py-3 text-lg md:text-xl">
                Biomed International adheres to standardized operating procedures
                and robust quality control systems, ensuring hygienic and controlled
                conditions throughout the plant. We maintain strict qualifications
                for all reactors and equipment.
              </p>
              <p className="py-3 text-lg md:text-xl">
                Our plant features a specialized block dedicated to the manufacturing
                and packing of products. A distinct area is allocated for essential
                equipment, including dryers, mills, blenders, ANFD, and spray dryers.
              </p>
              <p className="py-3 text-lg md:text-xl">
                The Agitated Nutsche Filter is state-of-the-art equipment designed to
                streamline crystallization and drying while minimizing human contact
                during final product isolation. This advanced system ensures high
                quality output and provides environmental protection by minimizing
                solvent vaporization.
              </p>
              <p className="py-3 text-lg md:text-xl">
                The Agitated Nutsche Filter efficiently separates solids from liquids
                using pressure or vacuum drying within a closed system. It is used
                for filtration, washing, and drying in both pharmaceutical and food
                industries.
              </p>
                            <p className="py-3 text-lg md:text-xl">
                The Agitated Nutsche Filter is state-of-the-art equipment designed to
                streamline crystallization and drying while minimizing human contact
                during final product isolation. This advanced system ensures high
                quality output and provides environmental protection by minimizing
                solvent vaporization.
              </p>
              <p className="py-3 text-lg md:text-xl">
                The Agitated Nutsche Filter efficiently separates solids from liquids
                using pressure or vacuum drying within a closed system. It is used
                for filtration, washing, and drying in both pharmaceutical and food
                industries.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
              <h1 className="font-bold py-3 text-xl md:text-3xl">
                Another Section Example
              </h1>

              <p className="py-3 text-lg md:text-xl">
                This is an extra block to demonstrate scroll animations continuing as you scroll.
              </p>
            </div>
          </div>
        </div>

        {/* YouTube Embed */}
        <div className="md:px-10 lg:px-5 py-10" data-aos="fade-up">
          <div className="relative w-full" style={{ paddingTop: '40%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
