import React, { useEffect } from 'react';
import { Heart } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ProductSection22() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const cards = [
    {
      title: "Joint health treatment",
      description:
        "Oral supplements help manage joint discomfort in knees, hips, hands, and spine while managing progression of joint conditions.",
    },
    {
      title: "Skin health supports",
      description:
        "Helps manage chronic skin conditions, fights wrinkles and fine lines, keeps skin hydrated and supports elasticity.",
    },
    {
      title: "Maintains Healthy Eyes",
      description:
        "Present in dry eye drops and FDA-approved for cataract surgery. Useful for preserving corneas during transplant surgery.",
    },
    {
      title: "Lower risk of Heart attacks",
      description:
        "Anti-thrombogenic properties help prevent the formation of blood clots in the bloodstream.",
    },
    {
      title: "Supports Bone Strength",
      description:
        "Helps maintain bone density and flexibility, supporting overall skeletal health.",
    },
    {
      title: "Improves Mobility",
      description:
        "Enhances joint lubrication and cushioning, improving movement and range of motion.",
    },
  ];

  return (
    <section
      className="py-10"
      aria-label="Chondroitin Sulfate Sodium Health Benefits"
    >
      <div className="max-w-7xl mx-auto py-2 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-10 lg:px-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className="h-full"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="relative group overflow-hidden bg-gray-100 rounded-3xl h-full flex flex-col justify-between py-20 px-6 transition-transform duration-300 hover:shadow-lg">
                {/* Green overlay */}
                <div className="absolute inset-0 bg-green-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />

                {/* Card content */}
                <div className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  {/* Icon container */}
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-green-600 transition-colors duration-500 group-hover:bg-white">
                    <Heart className="w-6 h-6 text-white group-hover:text-green-600 transition-colors duration-500" />
                  </div>

                  {/* Text content */}
                  <h2 className="py-2 font-bold text-lg md:text-xl">{card.title}</h2>
                  <p className="py-2 text-md md:text-lg">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
