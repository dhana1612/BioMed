import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home_about() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="pb-10">
      <div className="rounded-4xl pb-10 md:py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-10 md:gap-8 px-5 md:px-10 lg:px-5">
        
          {/* Image Left */}
          <div className="col-span-1 lg:col-span-2" data-aos="fade-right">
            <img
              src="/Shared/Newfolder/home1.png"
              alt="Biomed production team working in lab"
              className="w-full h-full object-cover rounded-4xl transition-transform duration-500 ease-in-out hover:scale-105 hover:opacity-90"
            />
          </div>

          {/* Image Center */}
          <div className="lg:col-span-3" data-aos="fade-up" data-aos-delay="200">
            <img
              src="/Shared/Newfolder/Home_about.jpg"
              alt="Biomed equipment facility"
              className="w-full h-full object-cover rounded-4xl transition-transform duration-500 ease-in-out hover:scale-105 hover:opacity-90"
            />
          </div>

          {/* Text Content */}
          <div
            className="flex flex-col justify-between py-3 md:col-span-2 lg:col-span-4"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div>
              <p className="py-3 text-lg md:text-xl flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                Biomed International
              </p>

              <h1 className="font-bold py-3 text-xl md:text-3xl">
                Biomed International: Pioneers in Green Biotechnology
              </h1>

              <p className="py-3 text-lg md:text-xl">
                At Biomed International, we are dedicated to advancing the life
                sciences with a commitment to sustainability and quality.
                Established in 2014, our state-of-the-art facility, located
                amidst lush green surroundings, is a testament to our dedication
                to environmental stewardship and cutting-edge innovation. Since
                beginning commercial production in 2016, we have positioned
                ourselves as a leading manufacturer of high-quality Chondroitin
                Sulfate Sodium and Collagen products, including Fish, Bovine,
                and Chicken Collagen. Our strategic location, just 10 KM from
                National Highway 45 and within easy reach of major
                transportation hubs, ensures efficient delivery of our products
                both domestically and globally.
              </p>

              <p className="py-3 text-lg md:text-xl ">
                Our in-house expertise spans from lab-scale development to
                large-scale production, supported by sophisticated testing and
                R&D facilities. Equipped with advanced technology such as UV
                Spectrophotometers, Digital Polarimeters, and HPLC systems, we
                guarantee the highest standards of quality and compliance.
              </p>
            </div>

            {/* CTA Button INSIDE Text Content */}
            <div className="pt-5" data-aos="fade-up" data-aos-delay="800">
              <button
                type="button"
                className="w-fit relative group flex items-center gap-3 px-5 py-3 border border-green-600 rounded-full text-black font-medium overflow-hidden transition-colors duration-300"
                aria-label="Navigate to contact section"
                onClick={() => (window.location.href = '/contact')}
              >
                <span className="absolute inset-0 bg-green-600 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out rounded-full"></span>

                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Let's Connect
                </span>

                <div className="relative z-10 flex items-center justify-center w-7 h-7 rounded-full bg-green-600 group-hover:bg-white transition-colors duration-300">
                  <span className="text-white group-hover:text-green-600 transition-colors duration-300">
                    &#10140;
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
