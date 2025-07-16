import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Aboutsection1() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="pb-10">
      <div className="rounded-4xl pb-10 md:py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-10 md:gap-8 px-5 md:px-10 lg:px-5">
          {/* Image Left */}
          <div className="col-span-1 lg:col-span-2" data-aos="fade-right">
            <img
              src="https://www.animationkolkata.com/blog/wp-content/uploads/2023/04/image5.jpeg"
              alt="Biomed production team working in lab"
              className="w-full h-full object-cover rounded-4xl"
              loading="lazy" // Lazy load images for performance
            />
          </div>

          {/* Image Center */}
          <div className="lg:col-span-3" data-aos="fade-up" data-aos-delay="200">
            <img
              src="https://www.animationkolkata.com/blog/wp-content/uploads/2023/04/image5.jpeg"
              alt="Biomed equipment facility"
              className="w-full h-full object-cover rounded-4xl"
              loading="lazy"
            />
          </div>

          {/* Text Content */}
          <div className="py-3 md:col-span-2 lg:col-span-4" data-aos="fade-left" data-aos-delay="400">
            <p className="py-3 text-lg md:text-xl flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              What We Do
            </p>

            <h1 className="font-bold py-3 text-xl md:text-3xl">
              Biomed International: Pioneers in Green Biotechnology
            </h1>

            <p className="py-3 text-lg md:text-xl">
              Our in-house expertise spans from lab-scale development to large-scale production,
              supported by sophisticated testing and R&D facilities.
            </p>

            <hr aria-hidden="true" />

            <div className="py-3 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8">
              <div data-aos="zoom-in" data-aos-delay="500">
                <h5 className="font-bold py-3 text-md md:text-xl">Our Mission</h5>
                <p className="py-3 text-md md:text-lg">
                  Guided by integrity and transparency, we strive to deliver high-quality
                  pharmaceutical and nutraceutical products. Through trust, teamwork, and a
                  commitment to excellence, we ensure superior standards for every customer we
                  serve.
                </p>
              </div>

              <div data-aos="zoom-in" data-aos-delay="700">
                <h5 className="font-bold py-3 text-md md:text-xl">Our Vision</h5>
                <ul className="list-disc pl-5 text-md md:text-lg marker:text-green-600 marker:text-3xl">
                  <li className="pb-3">Quality is our first priority — improve quality, automatically improve production.</li>
                  <li className="pb-3">We believe in customer satisfaction and lasting relationships.</li>
                  <li>To provide the best clinical trials for efficacy and safety of products.</li>
                </ul>
              </div>
            </div>

            <hr aria-hidden="true" />

            <div className="py-5" data-aos="fade-up" data-aos-delay="800">
              <button
                type="button"
                className="w-fit relative group flex items-center gap-3 px-5 py-3 border border-green-600 rounded-full text-black font-medium overflow-hidden transition-colors duration-300"
                aria-label="Navigate to contact section"
                onClick={() => window.location.href = '/contact'}
              >
                <span className="absolute inset-0 bg-green-600 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out rounded-full"></span>

                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Let's Connect
                </span>

                <div className="relative z-10 flex items-center justify-center w-7 h-7 rounded-full bg-green-600 group-hover:bg-white transition-colors duration-300">
                  <span className="text-white group-hover:text-green-600 transition-colors duration-300">
                    &#10140;
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
