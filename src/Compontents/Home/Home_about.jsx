import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home_about() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-3 md:py-6">
      <div className="rounded-4xl py-3 md:py-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-10 md:gap-8 px-5 md:px-10 lg:px-5 h-full">
          
          <div className="col-span-1 lg:col-span-2 h-full" data-aos="fade-right">
            <div className="h-full flex flex-col justify-between">
              <div className="bg-gray-200 py-10 px-5 rounded-4xl">
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-white font-semibold">
                    C1
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center text-white font-semibold">
                    C2
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gray-500 flex items-center justify-center text-white font-semibold">
                    C3
                  </div>
                </div>
                <div className="flex items-center space-x-2 py-2 px-3">
                  <div className="w-20 h-16 bg-green-500 text-white rounded-full flex items-center justify-center ">
                    <span className="md:text-xl font-semibold">+</span>
                  </div>
                  <span className="text-gray-600 text-lg md:text-xl">50K+ Customers</span>
                </div>
              </div>
              <img
                src="/Shared/Newfolder/About_Section.jpg"
                alt="Biomed production team working in lab"
                className="w-full h-full pt-10 object-cover object-center rounded-4xl transition-transform duration-500 ease-in-out hover:scale-105 hover:opacity-90"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-3 h-full" data-aos="fade-up">
            <img
              src="/Shared/Newfolder/About_Section1.jpg"
              alt="Biomed equipment facility"
              className="w-full h-full object-cover object-center rounded-4xl transition-transform duration-500 ease-in-out hover:scale-105 hover:opacity-90"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col justify-between py-3 md:col-span-2 lg:col-span-4 h-full" data-aos="fade-left">
            <div>
              <p className="py-3 text-lg md:text-xl flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <strong>Biomed International</strong>
              </p>

              <h1 className="font-bold py-3 text-xl md:text-3xl">
                Biomed International: Pioneers in Green Biotechnology
              </h1>

              <p className="py-3 text-lg md:text-xl text-gray-600">
                At Biomed International, we are dedicated to advancing the life sciences with a commitment to sustainability and quality. Established in 2014, our state-of-the-art facility, located amidst lush green surroundings, is a testament to our dedication to environmental stewardship and cutting-edge innovation. Since beginning commercial production in 2016, we have positioned ourselves as a leading manufacturer of high-quality Chondroitin Sulfate Sodium and Collagen products, including Fish, Bovine, and Chicken Collagen. Our strategic location, just 10 KM from National Highway 45 and within easy reach of major transportation hubs, ensures efficient delivery of our products both domestically and globally.
              </p>

              <p className="py-3 text-lg md:text-xl text-gray-600">
               Our in-house expertise spans from lab-scale development to large-scale production, supported by sophisticated testing and R&D facilities. Equipped with advanced technology such as UV Spectrophotometers, Digital Polarimeters, and HPLC systems, we guarantee the highest standards of quality and compliance.
              </p>
            </div>

            <div className="pt-5">
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
