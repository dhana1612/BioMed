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

    const collagen = [
    {
      id: 1,
      title: 'Aging Skin Health:',
      description:
        'Collagen peptides enhance skin, hair, and nail health by improving elasticity, hydration, and supporting repair and anti-aging.',
    },
    {
      id: 2,
      title: 'Gut Health:',
      description:
        'Collagen peptides, rich in glycine and glutamine, help maintain a healthy gut lining and support the repair of leaky gut and other digestive issues.',
    },
    {
      id: 3,
      title: 'May help Osteoarthritis symptoms:',
      description:
        'Bovine collagen may help alleviate pain and stiffness caused by osteoarthritis and rheumatoid arthritis, especially in joints like the hands, knees, and hips.',
    },
    {
      id: 4,
      title: 'May improve Muscle health',
      description:
        'It plays an important role to grow, repair and rebuild the muscle. They are bioavailable form of supplemental protein in the market. It can support muscle strength and may promote the synthesis of muscles',
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
                  src="/Shared/Newfolder/Type_Collagen.png"
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
                    className="benefit-item grid grid-cols-[minmax(90px,_auto)_1fr] p-3 gap-4 rounded-md items-stretch"
                  >
                  <div className="benefit-number w-[90px] h-[90px] bg-green-700 text-white text-2xl font-bold flex items-center justify-center rounded-xl relative overflow-hidden group">
                    <span className="z-10 relative">0{benefit.id}</span>
                    <div className="absolute inset-0 bg-green-400 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl origin-center z-0"></div>
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
                <li className="pb-3">Type-II collagen is a fibrillar Collagen.</li>
                <li className="pb-3">Collagen type-II is original from Bovine collagen and chicken collagen.</li>
                <li className="pb-3">Bovine collagen is a naturally occurring protein found in bovine cartilage.</li>
                <li className="pb-3">It makes the flexible cartilage that helps support your joints.</li>
                <li className="pb-3">Collagen peptide Type-II also known as Hydrolyzed Type-II Collagen.</li>
                <li className="pb-3">It is a protein, derived from animal Cartilage that has been broken down into peptides through enzymatic hydrolysis.</li>
                <li>These peptides are highly digestible and bioavailable.</li>
              </ul>

              <h5 className="font-bold py-3 text-md md:text-xl">Chemical structure of Type-II Collagen</h5>
              <div className="h-96 overflow-hidden rounded-xl py-3">
                <img
                  src="/Shared/Newfolder/Type2_collagen.png"
                  alt="Chemical structure of Type-II collagen"
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>

              <h5 className="font-bold py-3 text-md md:text-xl">Function of Type-II Collagen</h5>
              <ul className="list-disc pl-5 text-md md:text-xl text-gray-600  marker:text-green-600 marker:text-3xl">
                <li className="pb-3">Bovine collagen peptide Type-II collagen is highly bioactive and bioavailable</li>
                <li className="pb-3">It makes flexible cartilage, protection of bones at the joints.</li>
                <li className="pb-3">They reduce inflammation in the synovial fluid</li>
                <li>Type-II collagen cushions joints, enabling smooth and easy movement, also supporting the health of joints</li>
              </ul>

              <h5 className="font-bold py-3 text-md md:text-xl">Applications of Marine/Fish Collagen:</h5>
              <ul className="list-disc pl-5 text-md md:text-xl text-gray-600 marker:text-green-600 marker:text-3xl">
                <li className="pb-3">Cartilage regeneration</li>
                <li className="pb-3">It can help to build muscle mass</li>
                <li>It can support weight loss goals; it can be used as food additives</li>
              </ul>

              <h5 className="font-bold py-3 text-md md:text-xl">Uses of Marine/Fish Collagen:</h5>
              <div className="collagen-benefits space-y-4">
                {collagen.map((collagen) => (
                  <div
                    key={collagen.id}
                    className="benefit-item grid grid-cols-[minmax(90px,_auto)_1fr] p-3 gap-4 rounded-md items-stretch"
                  >
                    <div className="benefit-number w-[90px] h-[90px] bg-green-700 text-white text-2xl font-bold flex items-center justify-center rounded-xl relative overflow-hidden group">
                      <span className="z-10">0{collagen.id}</span>
                      <div className="absolute inset-0 bg-green-400 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl origin-center"></div>
                    </div>
                    <div className="benefit-text flex flex-col justify-between">
                      <div className="benefit-title text-lg font-semibold pb-3">{collagen.title}</div>
                      <div className="benefit-description text-lg text-gray-600">{collagen.description}</div>
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
