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
        <section
      className="pb-15"
      aria-label="Spray Drying Technology at Biomed International"
    >
      <div className="px-5 md:px-10 lg:px-5 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 md:gap-10">
          {/* Left Image */}
          <div data-aos="fade-right">
            <img
              src="https://i.pinimg.com/736x/64/da/8b/64da8bcf754930d03c279d916270cd66.jpg"
              alt="Spray drying equipment used in Biomed facility"
              className="w-full h-full object-cover rounded-4xl"
            />
          </div>

          {/* Right Text Section */}
          <div className="col-span-2" data-aos="fade-left">
            <h1 className="font-bold py-3 text-xl md:text-3xl" data-aos="fade-up" data-aos-delay="100">
              Supports skin, joints, and tissues.
            </h1>

            <h2 className="font-bold py-3 text-base md:text-lg" data-aos="fade-up" data-aos-delay="200">
              Collagen is a vital protein found throughout the body, providing structural support to skin, bones, tendons, and ligaments. As the most abundant protein in the human body, collagen plays a crucial role in maintaining skin elasticity, joint flexibility, and overall tissue strength.
            </h2>

            <ul className="list-disc pl-5 text-md md:text-lg marker:text-green-600 marker:text-3xl">
                  <li className="pb-3">The word ‘collagen’ is derived from the Greek word ‘kola,’ meaning glue-producing in the French word, Collagene.</li>
                  <li className="pb-3">Collagen is a protein made of amino acids that provides structure, support, and strength throughout the body. It’s a building block for bones, skin, hair, muscles, tendons, and ligaments.</li>
                  <li className="pb-3">Collagen is a fibrous protein, rich in proline and glycine.</li>
                  <li>It’s a vital part of connective tissue and is highly essential to hold body cells together. Collagen is one of the best possible sources of all essential amino acids.</li>
            </ul>

            {/* Bottom Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 py-7">
              <div data-aos="zoom-in" data-aos-delay="600">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT1pM5TY5flITYDamydaH2p9DkhmVCoEMqrl5rDsM93b33c__8jQXUl9AvmhAQm9U9-Vo&usqp=CAU"
                  alt="High-efficiency spray drying process at Biomed"
                  className="w-full h-full object-cover rounded-4xl"
                />
              </div>
              <div data-aos="fade-left" data-aos-delay="700">
                <ul className="list-disc pl-5 text-md md:text-lg marker:text-green-600 marker:text-3xl">
                  <li className="pb-3">Chondroitin sulfate sodium is one of the building blocks of cartilage in the joints breakdown. Chondroitin sulfate sodium is a dietary supplement that helps cartilage retain water and gives elasticity.</li>
                  <li>Collagen helps replace dead skin cells and reduce blood clots.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
