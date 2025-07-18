import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact1() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-10 mx-5 lg:mx-20" style={{ scrollBehavior: 'smooth' }}>
      <div className="bg-gray-100 rounded-4xl py-7 md:py-12 lg:py-25">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-5 md:px-10 lg:px-5">
            <div className="veritcalLine py-5" data-aos="fade-up">
              <p className="pb-4 text-lg font-bold">Phone Number</p>
              <p className="text-lg text-gray-600">
                <a href="tel:1436513652165" className="hover:underline hover:text-blue-500" title="Call 1436513652165">1436513652165</a>
              </p>
              <p className="text-lg text-gray-600">
                <a href="tel:4541561654547" className="hover:underline hover:text-blue-500" title="Call 4541561654547">4541561654547</a>
              </p>
              <p className="py-2 text-lg font-bold">Email Address</p>
              <p className="text-lg text-gray-600">
                <a href="mailto:info@gmail.com" className="hover:underline hover:text-blue-500" title="Email info@gmail.com">info@gmail.com</a>
              </p>
            </div>

            <div className="veritcalLine py-5" data-aos="fade-up">
              <p className="pb-4 text-lg font-bold">Unit – I</p>
              <address className="not-italic text-lg leading-relaxed text-gray-600">
                Sy No: 62P & 63P, Plot No. 7, APIIC IP,<br />
                Attivaram Village, Ozili Mandal<br />
                Tirupati District, Andhra Pradesh<br />
                INDIA – 524 421
              </address>
            </div>

            <div className="veritcalLine py-5" data-aos="fade-up">
              <p className="pb-4 text-lg font-bold">Unit – II</p>
              <address className="not-italic text-lg leading-relaxed text-gray-600">
                Sy No: 62P & 63P, Plot No. 7, APIIC IP,<br />
                Attivaram Village, Ozili Mandal<br />
                Tirupati District, Andhra Pradesh<br />
                INDIA – 524 421
              </address>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
