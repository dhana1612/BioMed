import React from "react";

const CertificationsSection = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Content */}
        <div className="mb-10">
          <p className="text-green-600 text-base sm:text-lg md:text-xl font-medium flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
            Our Certifications
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Global Standards, Proven Excellence
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-2xl">
              Our commitment to quality, safety, and compliance is reflected in
              the certifications we proudly hold. Each certificate is a testament
              to our adherence to international regulatory standards, our dedication
              to continuous improvement, and our pursuit of excellence in every
              process.
            </p>
          </div>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 items-center">
          <img
            src="/images/fssai.png"
            alt="FSSAI"
            className="w-24 sm:w-28 md:w-55 object-contain"
          />
          <img
            src="/images/andhra.png"
            alt="Andhra Pradesh Drugs Control"
            className="w-24 sm:w-28 md:w-55 object-contain"
          />
          <img
            src="/images/sqa.png"
            alt="SQA"
            className="w-24 sm:w-28 md:w-55 object-contain"
          />
          <img
            src="/images/bmg.png"
            alt="BMG"
            className="w-24 sm:w-28 md:w-55 object-contain"
          />
          <img
            src="/images/halal.png"
            alt="Halal"
            className="w-24 sm:w-28 md:w-55 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
