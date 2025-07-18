import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Health_and_Mobility() {
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
              src="/Shared/Newfolder/CSS_Section.jpg"
              alt="Spray drying equipment used in Biomed facility"
              className="w-full h-full object-cover rounded-4xl"
              loading="lazy"
            />
          </div>

          <div className="col-span-1 lg:col-span-3" data-aos="fade-left">
            <h1 className="font-bold py-3 text-xl md:text-3xl">
              Improves Your Joints Health and Mobility.
            </h1>

            <h2 className="font-bold py-3 text-base md:text-lg">
              Chondroitin Sulfate Sodium is a naturally occurring glycosaminoglycan widely used as a dietary supplement to support joint health. It is a key component of cartilage, contributing to its elasticity and resilience.
            </h2>

            <ul className="list-disc pl-5 text-md md:text-xl marker:text-green-600 marker:text-3xl text-gray-600">
              <li className="pb-3">Chondroitin sulfate sodium occurs naturally in the body, and it is also derived from animal sources like bovine cartilage, shark cartilage.</li>
              <li className="pb-3">Chondroitin sulfate sodium is also produced synthetically. The word chondroitin comes from the Greek word Chondros, which means cartilage.</li>
              <li className="pb-3">Chondroitin sulfate sodium is one type of glycosaminoglycan.</li>
              <li className="pb-3">Chondroitin sulfate sodium consists of linear polysaccharide chains; it is composed of repeating disaccharide unit Glucuronic acid (GlcA) and N-acetyl galactosamine (GalNAc).</li>
              <li className="pb-3">Chondroitin sulfate sodium is one of the building blocks of cartilage in the joints breakdown. Chondroitin sulfate sodium is a dietary supplement that helps cartilage retain water and gives elasticity.</li>
              <li className="pb-3">According to various positions of sulfate, there are different types of Chondroitin sulfate sodium, Chondroitin 4- sulfate, Chondroitin 6- sulfate, Chondroitin 2, 6- sulfate (chondroitin sulfate-D), Chondroitin 4, 6- sulfate (chondroitin sulfate-E); it is extracted and isolated from Squid cartilage for the first time.</li>
              <li>Chondroitin sulfate-B is also known as Dermatan sulfate.</li>
            </ul>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 py-7">
              <div>
                <img
                  src="/Shared/Newfolder/joint-injuries-of-the-body.jpg"
                  alt="High-efficiency spray drying process at Biomed"
                  className="w-full h-full object-cover rounded-4xl"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="font-bold py-3 text-base md:text-lg">Two main types of Chondroitin sulfate sodium</h2>
                <p className="py-3 text-lg md:text-xl text-gray-600">
                  <span className="font-bold py-3 text-base md:text-lg">Sulfate A:</span> Sulfated at position 4, also known as Chondroitin 4- sulfate. It is extracted from bovine cartilage.
                </p>
                <p className="py-3 text-lg md:text-xl text-gray-600">
                  <span className="font-bold py-3 text-base md:text-lg">Sulfate C:</span> Sulfated at position 6, also known as Chondroitin 6- sulfate. It is extracted from Shark Cartilage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
