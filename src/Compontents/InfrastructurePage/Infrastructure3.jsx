import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Infrastructure3() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="pb-15" aria-label="Spray Drying Technology at Biomed International">
      <div className="px-5 md:px-10 lg:px-5 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-10">

          <div className='col-span-2' data-aos="fade-right">
            <img
              src="/Shared/Newfolder/IMG_20250625_144241.jpg"
              alt="Spray drying equipment used in Biomed facility"
              className="w-full h-full object-cover rounded-4xl"
              loading="lazy"
            />
          </div>

          <div className="col-span-3" data-aos="fade-left">
            <h1 className="font-bold py-3 text-xl md:text-3xl">
              Optimizing Product Quality with Efficient Spray Drying Technology
            </h1>

            <h2 className="font-bold py-3 text-lg md:text-2xl">
              Advantages of Spray Drying: Efficient, Controlled, and High-Quality Production
            </h2>

            <p className="py-3 text-lg md:text-xl text-gray-600">
              This process enables drying in a single operation with minimal human contact,
              ensuring safe and efficient handling. Spray drying allows precise control over
              particle size and shape, producing uniform and highly concentrated powders with
              excellent solubility.
            </p>
            <p className="py-3 text-lg md:text-xl text-gray-600">
              Designed for sterile environments, spray dryers are ideal for heat-sensitive or
              oxidizable substances. The resulting powders can also be easily compressed into
              tablet forms.
            </p>
            <p className="py-3 text-lg md:text-xl text-gray-600">
              The technique atomizes solutions, slurries, or emulsions into fine droplets, which
              are then dried by controlled hot air to form solid powders. This simplifies both
              handling and packaging processes.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 py-7">
              <div data-aos="fade-up">
                <img
                  src="/Shared/Newfolder/IMG_20250625_145113.jpg"
                  alt="High-efficiency spray drying process at Biomed"
                  className="w-full h-full object-cover rounded-4xl"
                  loading="lazy"
                />
              </div>
              <div data-aos="fade-up">
                <p className="py-3 text-lg md:text-xl text-gray-600">
                  Due to its efficiency and reliability, spray drying is widely used in both food
                  and pharmaceutical industries, offering consistent quality and superior results
                  over traditional drying methods.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
