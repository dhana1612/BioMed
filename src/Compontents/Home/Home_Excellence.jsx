import React, { useEffect } from 'react';
import { Heart } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home_Excellence() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-15" aria-label="Spray Drying Technology at Biomed International">
      <div className="px-5 md:px-10 lg:px-5 max-w-7xl mx-auto py-3 md:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-10" data-aos="fade-up">

          {/* Left Image */}
          <div className="col-span-1 lg:col-span-2">
            <img
              src="/Shared/Newfolder/Excellence1.jpeg"
              alt="Spray drying equipment used in Biomed facility"
              className="w-full h-full object-cover rounded-4xl transition-transform duration-500 ease-in-out hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Right Text Section */}
          <div className="col-span-1 lg:col-span-3">
            <p className="py-3 text-lg md:text-xl flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              Our Pillars of Excellence
            </p>

            <h2 className="font-bold py-3 text-lg md:text-2xl text-gray-600">
              Innovating Health with Premium Chondroitin Sulfate Sodium and Collagen Solutions in a Sustainable Environment
            </h2>

            <p className="py-3 text-lg md:text-xl text-gray-600">
              At the forefront of green biotechnology, we specialize in the development and production of high-purity Chondroitin Sulfate Sodium and Collagen, designed to meet the evolving needs of the pharmaceutical, nutraceutical, and cosmetic industries.
            </p>

            {/* Bottom Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 py-7">
              {/* Left Column */}
              <div className="flex flex-col" data-aos="fade-left">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-green-600 transition-colors duration-500 group-hover:bg-white">
                    <Heart className="w-6 h-6 text-white group-hover:text-green-600 transition-colors duration-500" />
                  </div>
                  <p className="py-3 text-lg md:text-xl font-bold">Innovation</p>
                </div>
                <p className="py-3 text-lg md:text-xl text-gray-600">
                  Due to its efficiency and reliability, spray drying is widely used in both food and pharmaceutical industries, offering consistent quality and superior results over traditional drying methods.
                </p>
              </div>

              {/* Right Column */}
              <div className="flex flex-col" data-aos="fade-left">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-green-600 transition-colors duration-500 group-hover:bg-white">
                    <Heart className="w-6 h-6 text-white group-hover:text-green-600 transition-colors duration-500" />
                  </div>
                  <p className="py-3 text-lg md:text-xl font-bold">Quality</p>
                </div>
                <p className="py-3 text-lg md:text-xl text-gray-600">
                  Due to its efficiency and reliability, spray drying is widely used in both food and pharmaceutical industries, offering consistent quality and superior results over traditional drying methods.
                </p>
              </div>

              {/* Image Section (Centering it between the two columns, with flexbox to maintain consistent height) */}
              <div className="flex justify-center items-center" data-aos="fade-up">
                <img
                  src="/Shared/Newfolder/Excellence.jpg"
                  alt="High-efficiency spray drying process at Biomed"
                  className="w-full h-auto max-h-[400px] object-cover rounded-4xl transition-transform duration-500 ease-in-out hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Left Column (Sustainability section) */}
              <div className="flex flex-col" data-aos="fade-right">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-green-600 transition-colors duration-500 group-hover:bg-white">
                    <Heart className="w-6 h-6 text-white group-hover:text-green-600 transition-colors duration-500" />
                  </div>
                  <p className="py-3 text-lg md:text-xl font-bold">Sustainability</p>
                </div>
                <p className="py-3 text-lg md:text-xl text-gray-600">
                  Due to its efficiency and reliability, spray drying is widely used in both food and pharmaceutical industries, offering consistent quality and superior results over traditional drying methods.
                </p>

                {/* Button */}
                <button
                  type="submit"
                  className="w-fit relative group flex items-center gap-3 px-3 py-3 border border-green-600 rounded-full text-black font-medium overflow-hidden transition-colors duration-300"
                  aria-label="Submit contact form"
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
      </div>
    </section>
  );
}
