import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CertificationsSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const certifications = [
    {
      src: "https://cdn.dribbble.com/userupload/5332605/file/original-44cc2e7058108f3bf07b21890b296120.jpg?resize=400x0",
      alt: "FSSAI Certification",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/004/907/761/non_2x/ad-letter-logo-design-with-creative-modern-trendy-typography-vector.jpg",
      alt: "Andhra Pradesh Drugs Control Certification",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/050/096/878/non_2x/handshake-partnership-business-inspiration-logo-design-vector.jpg",
      alt: "SQA Certification",
    },
    {
      src: "https://media.istockphoto.com/id/1346323408/vector/creative-people-logo-template-design-vector-illustration-design-editable-resizable-eps-10.jpg?s=612x612&w=0&k=20&c=PAgg6B-8nc2vYQIim5sQZgB2Qvq3Hp1w1kB8JwkiDVk=",
      alt: "BMG Certification",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ57kfWiMF4WQB64nut3yYsZDxX7KNKYR60Qg&s",
      alt: "Halal Certification",
    },
  ];

  return (
    <section className="bg-white pb-10">
      <div className="px-5 md:px-10 lg:px-5 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
           <p className="py-3 text-lg md:text-xl  flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
               Our Certifications
                </p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-4">
            <h2
              className="text-2xl md:text-3xl font-semibold col-span-2"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Global Standards, Proven Excellence
            </h2>
            <p
              className="text-gray-700 text-lg md:text-xl max-w-2xl col-span-3"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              Our commitment to quality, safety, and compliance is reflected in
              the certifications we proudly hold. Each certificate is a testament
              to our adherence to international regulatory standards and our
              pursuit of excellence across all operations.
            </p>

          </div>
        </div>

        {/* Certification Logos */}
        <div
          className="flex flex-wrap justify-center gap-6 sm:gap-8 items-center"
          data-aos="zoom-in-up"
          data-aos-delay="300"
        >
          {certifications.map((cert, index) => (
            <img
              key={index}
              src={cert.src}
              alt={cert.alt}
              className="w-35 md:w-55 object-contain"
              loading="lazy"
              data-aos="fade-up"
              data-aos-delay={400 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
