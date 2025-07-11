import React from "react";
import { CheckCircle, FlaskConical, Leaf } from "lucide-react";

const ExcellenceSection = () => {
  return (
    <section className="py-12 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[30%_70%] gap-10 items-stretch">
        {/* Left Image */}
        <div className="h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hiddengit init">
          <img
            src="/Shared/images/Image2.jpg" // ✅ Correct path for public
            alt="Lab"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-between ">
          <div>
            <p className="text-green-600 flex items-center gap-2 mb-2">
              <span className="h-3 w-3 rounded-full bg-green-600"></span>
              <span className="text-base md:text-2xl font-medium">
                Our Pillars of Excellence
              </span>
            </p>
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Innovating Health with Premium Chondroitin Sulfate Sodium and
              Collagen Solutions in a Sustainable Environment
            </h2>
            <p className="text-gray-600 mb-8 text-base md:text-xl">
              At the forefront of green biotechnology, we specialize in the
              development and production of high-purity Chondroitin Sulfate
              Sodium and Collagen, designed to meet the evolving needs of the
              pharmaceutical, nutraceutical, and cosmetic industries.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Innovation */}
              <div className="flex items-start gap-4">
                <div className="bg-green-600 p-2 rounded-md text-white">
                  <FlaskConical size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-base md:text-xl ">Innovation</h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    Leading the way in green biotechnology with cutting-edge
                    Chondroitin Sulfate Sodium and Collagen products developed
                    from lab-scale to commercial production.
                  </p>
                </div>
              </div>

              {/* Quality */}
              <div className="flex items-start gap-4">
                <div className="bg-green-600 p-2 rounded-md text-white">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-base md:text-xl">Quality</h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    Committed to excellence with high-quality, USP/BP grade
                    ingredients, supported by sophisticated in-house testing and
                    R&D facilities.
                  </p>
                </div>
              </div>

              {/* Consistency */}
              <div className="flex items-start gap-4">
                <div className="bg-green-600 p-2 rounded-md text-white">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-base md:text-xl">Consistency</h4>
                  <p className="text-gray-600 text-sm md:text-lg">
                    Delivering reliable quality with strict process controls and
                    continuous improvement.
                  </p>
                </div>
              </div>

              {/* Sustainability */}
              <div className="flex items-start gap-4">
                <div className="bg-green-600 p-2 rounded-md text-white">
                  <Leaf size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-base md:text-xl">Sustainability</h4>
                  <p className="text-gray-600 text-sm md:text-lg">
                    Fostering a greener future with eco-friendly manufacturing
                    processes and an environmentally conscious facility.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <button className="flex items-center border border-green-600 text-green-600 font-medium px-5 py-2 rounded-full hover:bg-green-50 transition">
              Let’s Connect
              <span className="ml-2 bg-green-600 text-white p-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcellenceSection;
 