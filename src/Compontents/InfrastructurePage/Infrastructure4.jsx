import React from 'react';

export default function Infrastructure4() {
  return (
    <section
      className="py-10 mx-5 md:mx-10 lg:mx-20"
      aria-label="Biomed Quality Control and Assurance"
    >
      <div className="bg-gray-100 rounded-4xl py-2 md:py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-17 px-5 md:px-10 lg:px-25 2xl:px-60 py-5">

          {/* Title */}
          <div>
            <h1 className="text-xl md:text-3xl font-bold">
              Quality Control and Assurance
            </h1>
          </div>

          {/* Description */}
          <div className="col-span-2">
            <p className="py-3 text-lg md:text-xl">
              Our advanced in-house quality control laboratory is equipped with state-of-the-art imported instruments, including a UV Spectrophotometer, 21 CFR-compliant Digital Polarimeter, Gas Chromatograph (GC), and High-Performance Liquid Chromatograph (HPLC). We maintain strict hygiene and environmental controls to ensure top-tier product integrity.
            </p>

            <p className="py-3 text-lg md:text-xl">
              Quality control is essential to ensuring product safety, consistency, and efficacy. Our process includes rigorous testing, inspections, and adherence to global regulatory standards at every production stage. From raw material selection to labeling and packaging, every detail is evaluated to meet excellence.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
