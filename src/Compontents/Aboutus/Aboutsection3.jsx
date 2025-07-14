import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Aboutsection3() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="pb-10 mx-1 md:mx-10 lg:mx-20">
      <div className="rounded-4xl py-10 md:py-20 lg:py-30 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 md:gap-7 px-5">

          {/* Intro Block */}
          <div className="py-3" data-aos="fade-up">
            <h1 className="font-bold py-3 text-xl md:text-3xl">Meet The Promoters</h1>
            <p className="py-3 text-lg md:text-xl">
              Biomed International is a life science company committed to the well-being of people.
            </p>

            <div className="bg-gray-100 rounded-xl py-10 px-8 text-center w-fit mx-auto">
              <p className="text-3xl font-semibold text-green-600">
                30<span className="text-green-700">+</span>
              </p>
              <p className="mt-1 text-gray-700">Years of Experience</p>
            </div>
          </div>

          {/* Promoter 1 */}
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img
                src="https://www.animationkolkata.com/blog/wp-content/uploads/2023/04/image5.jpeg"
                alt="Portrait of Pratap Reddy Maddali"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="font-semibold text-gray-800">Pratap Reddy Maddali</p>
                <p className="text-gray-600 text-sm">M.Sc, M.Phil in Synthetic Organic Chemistry</p>
              </div>
            </div>
          </div>

          {/* Promoter 2 */}
          <div data-aos="fade-up" data-aos-delay="400">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img
                src="https://www.animationkolkata.com/blog/wp-content/uploads/2023/04/image5.jpeg"
                alt="Portrait of Co-founder of Biomed International"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="font-semibold text-gray-800">Pratap Reddy Maddali</p>
                <p className="text-gray-600 text-sm">M.Sc, M.Phil in Synthetic Organic Chemistry</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
