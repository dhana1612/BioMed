import React from 'react';

export default function Infrastructure3() {
  return (
    <section
      className="py-10 mx-5 md:mx-10 lg:mx-20"
      aria-label="Spray Drying Technology at Biomed International"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-17 px-5 md:px-10 lg:px-25 2xl:px-60">
        {/* Left Image */}
        <div>
          <img
            src="https://i.pinimg.com/736x/64/da/8b/64da8bcf754930d03c279d916270cd66.jpg"
            alt="Spray drying equipment used in Biomed facility"
            className="w-full h-full object-cover rounded-4xl"
          />
        </div>

        {/* Right Text Section */}
        <div className="col-span-2">
          <h1 className="font-bold py-3 text-xl md:text-3xl">
            Optimizing Product Quality with Efficient Spray Drying Technology
          </h1>

          <h2 className="font-bold py-3 text-lg md:text-2xl">
            Advantages of Spray Drying: Efficient, Controlled, and High-Quality Production
          </h2>

          <p className="py-3 text-lg md:text-xl">
            This process enables drying in a single operation with minimal human contact, ensuring safe and efficient handling. Spray drying allows precise control over particle size and shape, producing uniform and highly concentrated powders with excellent solubility.
          </p>
          <p className="py-3 text-lg md:text-xl">
            Designed for sterile environments, spray dryers are ideal for heat-sensitive or oxidizable substances. The resulting powders can also be easily compressed into tablet forms.
          </p>
          <p className="py-3 text-lg md:text-xl">
            The technique atomizes solutions, slurries, or emulsions into fine droplets, which are then dried by controlled hot air to form solid powders. This simplifies both handling and packaging processes.
          </p>

          {/* Bottom Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 py-7">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT1pM5TY5flITYDamydaH2p9DkhmVCoEMqrl5rDsM93b33c__8jQXUl9AvmhAQm9U9-Vo&usqp=CAU"
                alt="High-efficiency spray drying process at Biomed"
                className="w-full h-full object-cover rounded-4xl"
              />
            </div>
            <div>
              <p className="py-3 text-lg md:text-xl">
                Due to its efficiency and reliability, spray drying is widely used in both food and pharmaceutical industries, offering consistent quality and superior results over traditional drying methods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
