import React from "react";

export default function CertificationsSection() {
  const certifications = [
    { src: "https://cdn.dribbble.com/userupload/5332605/file/original-44cc2e7058108f3bf07b21890b296120.jpg?resize=400x0", alt: "FSSAI Certification" },
    { src: "https://static.vecteezy.com/system/resources/previews/004/907/761/non_2x/ad-letter-logo-design-with-creative-modern-trendy-typography-vector.jpg", alt: "Andhra Pradesh Drugs Control Certification" },
    { src: "https://static.vecteezy.com/system/resources/previews/050/096/878/non_2x/handshake-partnership-business-inspiration-logo-design-vector.jpg", alt: "SQA Certification" },
    { src: "https://media.istockphoto.com/id/1346323408/vector/creative-people-logo-template-design-vector-illustration-design-editable-resizable-eps-10.jpg?s=612x612&w=0&k=20&c=PAgg6B-8nc2vYQIim5sQZgB2Qvq3Hp1w1kB8JwkiDVk=", alt: "BMG Certification" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ57kfWiMF4WQB64nut3yYsZDxX7KNKYR60Qg&s", alt: "Halal Certification" },
  ];

  return (
    <section className="bg-white py-10 px-5 md:px-20 lg:px-45">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <p className="text-green-600 text-lg md:text-xl font-medium flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full inline-block" />
            Our Certifications
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4">
            <h2 className="text-2xl  md:text-3xl font-semibold">
              Global Standards, Proven Excellence
            </h2>
            <p className="text-gray-700 text-lg md:text-xl max-w-2xl">
              Our commitment to quality, safety, and compliance is reflected in
              the certifications we proudly hold. Each certificate is a testament
              to our adherence to international regulatory standards and our
              pursuit of excellence across all operations.
            </p>
          </div>
        </div>

        {/* Certification Logos */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 items-center">
          {certifications.map((cert, index) => (
            <img
              key={index}
              src={cert.src}
              alt={cert.alt}
              className="w-35 md:w-50 object-contain"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
