import React from 'react';

export default function Aboutsection3() {
  return (
    <section className="py-10 mx-5 md:mx-10 lg:mx-20">
      <div className="rounded-4xl py-10 md:py-20 lg:py30">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-10 px-5 md:px-10 lg:px-25 2xl:px-60">

          {/* Intro Block */}
          <div className="py-3">
            <h1 className="font-bold py-3 text-xl md:text-3xl">Meet The Promoters</h1>
            <p className="py-3 text-lg md:text-xl">
              Biomed International is a life science company committed to the well-being of people.
            </p>

            <div className="bg-gray-100 rounded-xl py-10 px-25 text-center w-fit">
              <p className="text-3xl font-semibold text-green-600">30<span className="text-green-700">+</span></p>
              <p className="mt-1 text-gray-700">Years of Experience</p>
            </div>
          </div>

          {/* Promoter 1 */}
          <div>
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
          <div>
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
