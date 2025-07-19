import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Aboutsection2() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="mx-2 md:mx-10 lg:mx-20">
      <div className="bg-gray-100 rounded-4xl py-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-10 px-5 md:px-10 lg:px-5 max-w-7xl mx-auto">

          <div className="py-3" data-aos="fade-right">
            <h1 className="font-bold py-3 text-xl md:text-3xl text-gray-900">
              Leading the Future of Life Sciences Since 2014
            </h1>

            <ul className="list-disc pl-5 text-md md:text-xl marker:text-green-600 marker:text-3xl text-gray-600">
              <li className="pb-3">
                Biomed International is a life science company committed to the well-being of people.
              </li>
              <li className="pb-3">
                A trusted partner for leading pharma, nutraceutical, and food supplement companies across India and globally.
              </li>
              <li className="pb-3">
                We are committed to delivering high-quality products in both domestic and global markets.
              </li>
              <li className="pb-3">
                Biomed was established in 2014 and began commercial production in 2016, on 4 acres of land surrounded by lush greenery.
              </li>
              <li className="pb-3">
                The facility is strategically located 10 KM from National Highway 45, near Guduru Junction, and 150 KM from Chennai International Airport and Seaport.
              </li>
              <li className="pb-3">
                We manufacture Chondroitin Sulfate Sodium (USP/BP grade) and various types of Collagen: Fish, Bovine, and Chicken.
              </li>
              <li className="pb-3">
                Our advanced in-house testing lab and R&D facility are equipped with imported instruments like UV Spectrophotometer, Digital Polarimeter (21 CFR Compliant), GC, and HPLC.
              </li>
              <li className="pb-3">
                The premises include stability chambers operating at different temperature settings.
              </li>
              <li>
                A dedicated manufacturing zone features equipment such as Spray Dryers and ANFD (Agitated Nutsche Filter Dryer).
              </li>
            </ul>
          </div>

          <div data-aos="fade-left">
            <img
              src="/Shared/Newfolder/HeroSection_Image.jpg"
              alt="Biomed production infrastructure and facility"
              className="w-full h-full object-cover rounded-4xl"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
