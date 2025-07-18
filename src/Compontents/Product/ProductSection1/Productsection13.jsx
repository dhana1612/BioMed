import React, { useEffect } from 'react';
import { Heart } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Productsection13() {
  const cards = [
    {
      title: "Joint health treatment",
      description:
        "Oral supplements help manage joint discomfort in knees, hips, hands, and spine while slowing joint condition progression.",
    },
    {
      title: "Skin health supports",
      description:
        "Helps manage chronic skin conditions, fights wrinkles and fine lines, keeps skin hydrated, and supports elasticity.",
    },
    {
      title: "Maintains Healthy Eyes",
      description:
        "Used in dry eye drops and FDA-approved for cataract surgery. Helps preserve corneas during transplant surgery.",
    },
    {
      title: "Lower risk of Heart attacks",
      description:
        "Anti-thrombogenic properties help prevent the formation of blood clots in the bloodstream.",
    },
  ];

  const applications = [
    "Oral care products",
    "Skin care products",
    "Hair care products",
    "Sunscreen products",
    "Nail and lip care products",
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="pb-10" aria-label="Chondroitin Sulfate Sodium Health Benefits">
      <div className="max-w-7xl mx-auto py-1 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 md:px-10 lg:px-5">
          <div data-aos="fade-right">
            <h1 className="font-bold py-3 text-xl md:text-3xl">
              Health Benefits of Chondroitin Sulfate Sodium
            </h1>
            <p className="py-3 text-lg md:text-xl text-gray-600">
              Chondroitin sulfate sodium provides the building blocks for the body to produce new cartilage.
            </p>
            <p className="py-3 text-lg md:text-xl text-gray-600">
              It can supplement calcium, helping prevent <span className="font-bold">OSTEOARTHRITIS</span> and reduce back pain, shoulder pain, and arthritis.
            </p>
            <p className="py-3 text-lg md:text-xl text-gray-600">Decreases joint pain and inflammation.</p>
            <p className="py-3 text-lg md:text-xl text-gray-600">
              Used in dietary supplements as an alternative medicine to treat <span className="font-bold">OSTEOARTHRITIS</span> and <span className="font-bold">CATARACTS</span>.
            </p>
            <p className="py-3 text-lg md:text-xl text-gray-600">
              Activates connective tissues and cells, helping repair cartilage tissue and prevent degradation.
            </p>

            <div className="py-3 h-80 md:h-110 lg:h-130">
              <img
                src="/Shared/Newfolder/ChatGPT Image Jul 17, 2025, 06_39_23 PM.png"
                alt="Chondroitin sulfate sodium health benefits"
                className="w-full h-full rounded-4xl"
                loading="lazy"
              />
            </div>
          </div>

          <div data-aos="fade-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 py-5">
              {cards.map((card, index) => (
                <div key={index} className="h-full">
                  <div className="relative group overflow-hidden bg-gray-100 rounded-3xl h-full flex flex-col justify-between py-10 px-6 transition-transform duration-300 hover:shadow-lg">
                    <div className="absolute inset-0 bg-green-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
                    <div className="relative z-10 transition-colors duration-500 group-hover:text-white">
                      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-green-600 transition-colors duration-500 group-hover:bg-white">
                        <Heart className="w-6 h-6 text-white group-hover:text-green-600 transition-colors duration-500" />
                      </div>
                      <h2 className="py-2 font-bold text-lg md:text-xl">{card.title}</h2>
                      <p className="py-2 text-md md:text-xl text-gray-600">{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <hr className="my-6" />

            <div className="px-3">
              <h2 className="font-bold py-5 text-xl">Applications of Chondroitin Sulfate Sodium:</h2>
              <div className="flex flex-wrap gap-x-10 gap-y-4">
                {applications.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-600"></span>
                    <p className="text-md md:text-lg text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
