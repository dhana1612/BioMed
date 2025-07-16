import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home1() {
  const products = [
    {
      name: 'Chondroitin Sulfate Sodium',
      image: '/Shared/Newfolder/Home_abouts.jpg',
    },
    {
      name: 'Collagen',
      image: '/Shared/Newfolder/Home_abouts.jpg',
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      className="relative mb-10 sm:mb-16 md:mb-20 lg:mb-24 mx-5 md:mx-10 lg:mx-20"
      aria-label="Product Showcase Section"
    >
      <div className="bg-gray-200 rounded-2xl py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="px-5 max-w-7xl mx-auto">

          <p className="py-3 text-lg  flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
              Products
            </p>

          <p 
            className="text-xl sm:text-2xl md:text-2xl font-bold mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our Advanced Biotech Offerings
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {products.map((product, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-md relative group"
                data-aos="zoom-in"
                data-aos-delay={`${index * 200}`} // stagger effect!
              >
                <img
                  src={product.image}
                  alt={`${product.name} - Biomed International product`}
                  className="w-full h-60 sm:h-72 md:h-80 lg:h-96 object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
                />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm font-medium">
                  {product.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
