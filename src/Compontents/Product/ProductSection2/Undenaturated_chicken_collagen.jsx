import React from 'react';

export default function Undenaturated_chicken_collagen() {
  const benefits = [
    {
      id: 1,
      title: 'Artery health:',
      description: 'It helps keep arteries flexible and elastic, which may prevent atherosclerosis — a disease that can lead to heart attack and stroke.',
    },
    {
      id: 2,
      title: 'Joint Health:',
      description: 'UC-II helps lubricate joints, easing movement and reducing pain in individuals with osteoarthritis.',
    },
    {
      id: 3,
      title: 'Cartilage Protection:',
      description: 'Undenatured collagen promotes collagen and proteoglycan synthesis, helping protect and regenerate joint cartilage.',
    },
    {
      id: 4,
      title: 'Immunomodulatory Effects:',
      description: 'Undenatured collagen type II powder has been investigated for its immunomodulatory effects, potentially preventing the immune system from attacking joint tissues. This process may prevent the immune system from attacking the body’s collagen, particularly relevant in conditions where autoimmune responses affect joint tissues such as rheumatoid arthritis.',
    },
  ];

  return (
    <section>
      <div className="bg-gray-200 rounded-4xl py-10 md:py-20 my-5 mx-2 md:mx-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 px-5 md:px-10 lg:px-5 max-w-7xl mx-auto">
          <div data-aos="fade-right">
            <h1 className="font-bold text-xl md:text-3xl">UNDENATURED CHICKEN COLLAGEN TYPE-II:</h1>
            <p className="py-3 text-lg md:text-xl text-gray-600">
              Undenatured Type-II Collagen (UC-II), derived from chicken sternum cartilage, supports joint health, alleviates symptoms of osteoarthritis and rheumatoid arthritis, enhances bone strength, promotes healing, and reduces pain and stiffness in joints, back, and neck.
            </p>
          </div>

          <div className="overflow-y-scroll no-scrollbar scroll-smooth col-span-1 h-[800px] px-2" data-aos="fade-left">
            <div>
              

              <h5 className="font-bold py-3 text-md md:text-xl">Function of Type-I Collagen</h5>
              <ul className="list-disc pl-5 text-md md:text-xl marker:text-green-600 marker:text-3xl text-gray-600">
                <li className="pb-3">Promote the repair and regeneration of joint cartilage</li>
                <li className="pb-3">Increase bone density</li>
                <li className="pb-3">Improve healing ability of fracture</li>
                <li className="pb-3">Joint nutrition, inhibit joint inflammatory cytokines, relieve joint pain</li>
                <li className="pb-3">Improve emergency response ability, explosive power, excellent sports nutrition food</li>
                <li className="pb-3">Lubricate joints</li>
                <li>Promote the repair, reconstruction, and regeneration of osteonecrosis of the femoral head</li>
              </ul>

              <h5 className="font-bold py-3 text-md md:text-xl">Applications of Marine/Fish Collagen:</h5>
              <ul className="list-disc pl-5 text-md md:text-xl text-gray-600 marker:text-green-600 marker:text-3xl">
                <li className="pb-3">Undenatured chicken collagen type II is often associated with joint health and immune system modulation</li>
                <li>It is commonly used as a supplement to support joint function and alleviate conditions like osteoarthritis</li>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
