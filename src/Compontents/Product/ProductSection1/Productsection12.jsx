import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Productsection12() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: false,   // animate every time the element enters the view
    });
  }, []);

  return (
    <section className="pt-1 md:pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 px-5 md:px-10 lg:px-5 ">
          {/* Left Static Block */}
          <div data-aos="fade-right">
            <h1 className="font-bold text-xl md:text-3xl">Molecular Structure:</h1>
            <p className="py-3 text-lg md:text-xl">
              Chemical structure of chondroitin sulfate sodium chain. Chondroitin-4-sulfate: R1 = H; R2 = SO3H; R3 = H. Chondroitin-6-sulfate: R1 = SO3H; R2, R3 = H.
            </p>
            <p className="py-3 text-lg md:text-xl">
              <span className="font-bold py-3 text-base md:text-lg">Molecular formula:</span>  C14H22NaO16S
            </p>
          </div>

          {/* Right Scrollable Block */}
          <div className="overflow-y-scroll no-scrollbar scroll-smooth col-span-1  h-[800px]">
            <div data-aos="fade-up ">
                <h5 className="font-bold py-3 text-md md:text-xl">CAS NO: 9082-07-9</h5>
                <ul className="list-disc pl-5 text-md md:text-lg marker:text-green-600 marker:text-3xl">
                  <li className="pb-3">Chondroitin sulfate sodium is enzymatically dissolved, precipitated, crystallized, dried, and finally gets the finished product.</li>
                  <li className="pb-3">It is a white/off-white/pale yellow-colored powder, odorless, and tasteless. Easily soluble in water, insoluble in ethanol, acetone, and other organic solvents.</li>
                  <li>Chondroitin sulfate sodium is a hygroscopic powder.</li>
                </ul>

                <h5 className="font-bold py-3 text-md md:text-xl">Complex properties of Chondroitin sulfate sodium:</h5>
                <ul className="list-disc pl-5 text-md md:text-lg marker:text-green-600 marker:text-3xl">
                  <li className="pb-3">Chondroitin sulfate sodium is a kind of negatively charged polysaccharide, and it has many free carboxyl and sulfate groups throughout its chain.</li>
                  <li>Chondroitin sulfate sodium could interact with metal ions and some other substrates with a positive charge..</li>
                </ul>


                <h5 className="font-bold py-3 text-md md:text-xl">Complex properties of Chondroitin sulfate sodium:</h5>
                <ul className="list-disc pl-5 text-md md:text-lg marker:text-green-600 marker:text-3xl">
                  <li className="pb-3">Chondroitin sulfate sodium primarily protects collagen fibers, promotes the growth of fibers in the matrix, and improves blood circulation.</li>
                  <li className="pb-3">It facilitates the absorption of serums and the reduction of inflammation.</li>
                  <li className="pb-3">In cartilage, chondroitin binds collagen and holds fibers in a tight, strong network.</li>
                  <li>Chondroitin sulfate sodium is an anti-coagulant (blood thinner) because it is similar to Heparin. It also improves blood thinning effects.

</li>
                </ul>
            
            </div>

          </div>
        </div>

        {/* YouTube Embed */}
        <div className="md:px-10 lg:px-5 py-10" data-aos="fade-up">
          <div className="relative w-full" style={{ paddingTop: '40%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
