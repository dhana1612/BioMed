import React from 'react';

export default function Productsection21() {
  return (
    <section className="mx-5 md:mx-10 lg:mx-20">
      <div className="bg-gray-100 rounded-4xl py-10 md:py-20 lg:py-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 md:px-10 lg:px-25 2xl:px-60">

          {/* Collagen Structure */}
          <div>
            <h2 className="font-bold py-3 text-xl md:text-3xl">Structure of Collagen</h2>
            <p className="py-3 text-lg md:text-xl">Chemical formula: C4H6N2O3R2. (C7H9N2O2R)<sub>n</sub></p>
            <p className="py-3 text-lg md:text-xl"><span className="font-medium">CAS Number:</span> 9007-34-5</p>
          </div>

          {/* Company Introduction */}
          <div className="py-3">
            <h2 className="font-bold py-3 text-xl md:text-3xl">Leading the Future of Life Sciences Since 2014</h2>
            <ul className="list-disc pl-5 text-lg md:text-xl">
              <li className="pb-3">Biomed International is a life science company committed to the well-being of people.</li>
              <li className="pb-3">Trusted partner for leading pharmaceutical, nutraceutical, and food supplement companies in India and globally.</li>
              <li className="pb-3">Dedicated to delivering high-quality products in both domestic and international markets.</li>
              <li className="pb-3">Established in 2014, with commercial production starting in 2016, the company is located on 4 acres of lush green land.</li>
              <li className="pb-3">Strategically located 10 km from National Highway 45, near Gudur railway junction, and 150 km from Chennai International Airport and seaport.</li>
              <li className="pb-3">Manufactures Chondroitin Sulfate Sodium (USP/BP grade) and various types of collagen: fish, bovine, and chicken.</li>
              <li className="pb-3">In-house testing laboratory and R&D facility equipped with imported instruments like UV Spectrophotometer, Digital Polarimeter (21 CFR compliant), GC, and HPLC.</li>
              <li className="pb-3">Equipped with stability chambers maintained at different temperatures.</li>
              <li className="pb-3">Manufacturing includes specialized facilities like Spray Dryers and Agitated Nutsche Filter Dryers (ANFDs).</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
