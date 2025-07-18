import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skins_and_joints() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="pb-15" aria-label="Collagen Supports Skin, Joints, and Tissues">
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
              Supports skin, joints, and tissues.
            </h1>

            <h2 className="font-bold py-3 text-base md:text-xl">
              Collagen is a vital protein found throughout the body, providing structural support to skin, bones, tendons, and ligaments. As the most abundant protein in the human body, collagen plays a crucial role in maintaining skin elasticity, joint flexibility, and overall tissue strength.
            </h2>

            <ul className="list-disc pl-5 text-md md:text-xl text-gray-600 marker:text-green-600 marker:text-3xl">
              <li className="pb-3">The word ‘collagen’ is derived from the Greek word ‘kola,’ meaning glue-producing in the French word, Collagene.</li>
              <li className="pb-3">Collagen is a protein made of amino acids that provides structure, support, and strength throughout the body. It’s a building block for bones, skin, hair, muscles, tendons, and ligaments.</li>
              <li className="pb-3">Collagen is a fibrous protein, rich in proline and glycine.</li>
              <li>It’s a vital part of connective tissue and is highly essential to hold body cells together. Collagen is one of the best possible sources of all essential amino acids.</li>
            </ul>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 py-7">
              <div data-aos="fade-up">
                <img
                  src="/Shared/Newfolder/Benifits.png"
                  alt="Benefits of collagen"
                  className="w-full h-full object-cover rounded-4xl"
                  loading="lazy"
                />
              </div>
              <div data-aos="fade-up">
                <ul className="list-disc pl-5 text-md md:text-xl marker:text-green-600 marker:text-3xl text-gray-600">
                  <li className="pb-3">Chondroitin sulfate sodium is one of the building blocks of cartilage in the joints breakdown. Chondroitin sulfate sodium is a dietary supplement that helps cartilage retain water and gives elasticity.</li>
                  <li>Collagen helps replace dead skin cells and reduce blood clots.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
