import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Infrastructure4() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="pb-10 mx-2 md:mx-10" aria-label="Biomed Quality Control and Assurance">
      <div className="bg-gray-200 rounded-4xl py-5 md:py-8 lg:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-5 py-3">

          <div data-aos="fade-right">
            <h1 className="text-xl md:text-3xl font-bold">
              Quality Control and Assurance
            </h1>
          </div>

          <div className="col-span-2" data-aos="fade-left">
            <p className="text-lg md:text-xl text-gray-600">
              Our advanced in-house quality control laboratory is equipped with state-of-the-art imported instruments, including a UV Spectrophotometer, 21 CFR-compliant Digital Polarimeter, Gas Chromatograph (GC), and High-Performance Liquid Chromatograph (HPLC). We maintain strict hygiene and environmental controls to ensure top-tier product integrity.
            </p>

            <p className="py-3 text-lg md:text-xl text-gray-600">
              Quality control is essential to ensuring product safety, consistency, and efficacy. Our process includes rigorous testing, inspections, and adherence to global regulatory standards at every production stage. From raw material selection to labeling and packaging, every detail is evaluated to meet excellence.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
