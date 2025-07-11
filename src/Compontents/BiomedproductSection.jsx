import React from 'react';

const BiomedproductSection = () => {
  const products = [
    {
      name: 'Chondroitin Sulfate Sodium',
      image: '/public/Shared/images/Image1.jpg', // Make sure your path works in production!
    },
    {
      name: 'Collagen',
      image: '/public/Shared/images/Image2.jpg',
    },
  ];

  return (
    <section className="relative my-10 sm:my-16 md:my-20 lg:my-24 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="bg-gray-50 rounded-2xl py-10 sm:py-14 md:py-16 lg:py-20 max-w-screen-2xl mx-auto">
        <div className="px-4 sm:px-6 md:px-10">
          <p className="text-green-600 text-lg sm:text-xl font-medium mb-2 lg:mx-20">• Products</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 lg:mx-20">Our Advanced Biotech Offerings</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:mx-20">
            {products.map((product, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-md relative group"
              >
                <img
                  src={product.image}
                  alt={product.name}
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
};

export default BiomedproductSection;
