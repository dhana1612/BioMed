import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Types_of_collagen() {
  const benefits = [
    {
      id: 1,
      title: 'Healthier skin:',
      description:
        'Marine collagen helps to increase skin moisture and also protect harmful effects of UV exposure and photo aging.',
    },
    {
      id: 2,
      title: 'Reduce wrinkle:',
      description:
        'Marine collagen rebuilds the tissues to increase skin elasticity and reduce the wrinkles.',
    },
    {
      id: 3,
      title: 'Biotin:',
      description:
        'Marine collagen helps in strong nails and healthy hair.',
    },
    {
      id: 4,
      title: 'Healthy Diet:',
      description:
        'Marine collagen contains high in amino acids. It also contains additional nutrients and proteins that are essential for maintaining a balanced diet.',
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="pt-1 md:pt-20" aria-label="Types of Collagen and their Benefits">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 px-5 md:px-10 lg:px-5">
          <div data-aos="fade-right">
            <h1 className="font-bold text-xl md:text-3xl">Types of Collagen:</h1>
            <p className="py-3 text-lg md:text-xl text-gray-600">
              Various types of collagen are found. The most common collagens are Type-I and Type-II.
            </p>
          </div>

          <div className="overflow-y-scroll no-scrollbar scroll-smooth col-span-1 h-[800px] px-2" data-aos="fade-left">
            <div>
              <h5 className="font-bold py-3 text-md md:text-xl">Type-I Collagen</h5>
              <ul className="list-disc pl-5 text-md md:text-xl marker:text-green-600 marker:text-3xl text-gray-600">
                <li className="pb-3">Type-I collagen gives strength to your skin, bones, ligaments, and tendons.</li>
                <li className="pb-3">Marine collagen is a type-I collagen.</li>
                <li className="pb-3">Marine collagen, also known as fish collagen, comes from the skin and scales of fish.</li>
                <li>Marine collagen is rich in antioxidants and protects the skin from oxidation and aging.</li>
              </ul>

              <h5 className="font-bold py-3 text-md md:text-xl">Chemical structure of Type-I Collagen</h5>
              <div className="h-96 overflow-hidden rounded-xl py-3">
                <img
                  src="/Shared/Newfolder/collagen structure.png"
                  alt="Chemical structure of Type-I collagen"
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>

              <h5 className="font-bold py-3 text-md md:text-xl">Function of Type-I Collagen</h5>
              <ul className="list-disc pl-5 text-md md:text-xl marker:text-green-600 marker:text-3xl text-gray-600">
                <li className="pb-3">Type-I collagen provides structure to tendons and ligaments.</li>
                <li className="pb-3">Skin elasticity, strength, and anti-aging.</li>
                <li>Type-I collagen is essential when it comes to beauty benefits.</li>
              </ul>

              <h5 className="font-bold py-3 text-md md:text-xl">Applications of Marine/Fish Collagen:</h5>
              <ul className="list-disc pl-5 text-md md:text-xl text-gray-600 marker:text-green-600 marker:text-3xl">
                <li className="pb-3">Dermis regeneration</li>
                <li className="pb-3">Heart muscle reconstruction</li>
                <li>Promotes polarity nerve cells, alignment, and increases adhesion</li>
              </ul>

              <h5 className="font-bold py-3 text-md md:text-xl">Uses of Marine/Fish Collagen:</h5>
              <div className="collagen-benefits space-y-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.id}
                    className="benefit-item grid grid-cols-[minmax(60px,_auto)_1fr] p-3 gap-4 bg-white rounded-md items-stretch"
                  >
                    <div className="benefit-number bg-green-500 text-white text-2xl font-bold flex items-center justify-center">
                      0{benefit.id}
                    </div>
                    <div className="benefit-text flex flex-col justify-between">
                      <div className="benefit-title text-lg font-semibold pb-3">{benefit.title}</div>
                      <div className="benefit-description text-lg text-gray-600">{benefit.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              <h5 className="font-bold py-3 text-md md:text-xl">Type-II Collagen</h5>
              <ul className="list-disc pl-5 text-md md:text-lg marker:text-green-600 marker:text-3xl text-gray-600">
                <li className="pb-3">Type-I collagen gives strength to your skin, bones, ligaments, and tendons.</li>
                <li className="pb-3">Marine collagen is a type-I collagen.</li>
                <li className="pb-3">Marine collagen, also known as fish collagen, comes from the skin and scales of fish.</li>
                <li>Marine collagen is rich in antioxidants and protects the skin from oxidation and aging.</li>
              </ul>

              <h5 className="font-bold py-3 text-md md:text-xl">Chemical structure of Type-II Collagen</h5>
              <div className="h-96 overflow-hidden rounded-xl py-3">
                <img
                  src="/Shared/Newfolder/collagen structure.png"
                  alt="Chemical structure of Type-II collagen"
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>

              <h5 className="font-bold py-3 text-md md:text-xl">Function of Type-II Collagen</h5>
              <ul className="list-disc pl-5 text-md md:text-xl text-gray-600  marker:text-green-600 marker:text-3xl">
                <li className="pb-3">Type-I collagen provides structure to tendons and ligaments.</li>
                <li className="pb-3">Skin elasticity, strength, and anti-aging.</li>
                <li>Type-I collagen is essential when it comes to beauty benefits.</li>
              </ul>

              <h5 className="font-bold py-3 text-md md:text-xl">Applications of Marine/Fish Collagen:</h5>
              <ul className="list-disc pl-5 text-md md:text-xl text-gray-600 marker:text-green-600 marker:text-3xl">
                <li className="pb-3">Dermis regeneration</li>
                <li className="pb-3">Heart muscle reconstruction</li>
                <li>Promotes polarity nerve cells, alignment, and increases adhesion</li>
              </ul>

              <h5 className="font-bold py-3 text-md md:text-xl">Uses of Marine/Fish Collagen:</h5>
              <div className="collagen-benefits space-y-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.id}
                    className="benefit-item grid grid-cols-[minmax(60px,_auto)_1fr] p-3 gap-4 bg-white rounded-md items-stretch"
                  >
                    <div className="benefit-number bg-green-500 text-white text-2xl font-bold flex items-center justify-center">
                      0{benefit.id}
                    </div>
                    <div className="benefit-text flex flex-col justify-between">
                      <div className="benefit-title text-lg font-semibold pb-3">{benefit.title}</div>
                      <div className="benefit-description text-lg text-gray-600 ">{benefit.description}</div>
                    </div>
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
