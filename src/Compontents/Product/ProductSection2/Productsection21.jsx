import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Productsection21() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const applications = [
    "Type I: Tendon, cornea",
    "Type II: Cartilage",
    "Type III: Blood vessels",
  ];

  return (
    <section>
      <div className="bg-gray-200 rounded-4xl py-10 md:py-20 my-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-7 px-5 md:px-10 lg:px-5">

          {/* Collagen Structure */}
          <div data-aos="fade-right">
            <h2 className="font-bold text-xl md:text-3xl">Structure of Collagen</h2>
            <p className="py-3 text-lg md:text-xl">
              Chemical formula: C4H6N2O3R2. (C7H9N2O2R)<sub>n</sub>
            </p>
            <p className="py-3 text-lg md:text-xl">
              <span className="font-medium">CAS Number:</span> 9007-34-5
            </p>
          </div>

          {/* Company Introduction */}
          <div className="py-3" data-aos="fade-left">
            <h2 className="font-bold py-3 text-xl md:text-3xl">
              Function of Collagen
            </h2>
            <ul className="list-disc pl-5 text-md md:text-lg marker:text-green-600 marker:text-3xl">
              <li className="pb-3">Collagen is rigid and resistant to stretching for skin, also provides strength and elasticity.</li>
              <li className="pb-3">Collagen interacts directly with cells in at least three distinctive ways.</li>
              <li className="pb-3">Interacts with receptors that recognize an Arg-Gly-Asp-Thy sequence.</li>
              <li className="pb-3">Through adhesive proteins such as fibronectin and laminin.</li>
              <li className="pb-3">Via proteoglycans.</li>
              <li className="pb-3">Provides flexibility, support, and movement to cartilage.</li>
              <li className="pb-3">Strength, support, shape, and elasticity to the tissues.</li>
              <li className="pb-3">Collagen fills the sclera of the eye in crystalline form.</li>
              <li>Collagen protects delicate organs like kidneys and spleen.</li>
            </ul>

            <h2 className="font-bold py-3 text-base md:text-lg">
              The collagen can be divided into two groups: Fibrillar Collagen and Non-Fibrillar Collagen
            </h2>

            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {applications.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-600"></span>
                  <p className="text-md md:text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
