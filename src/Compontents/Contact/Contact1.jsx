import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact1() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      once: true,     // Only animate once
    });
  }, []);

  return (
    <section className="py-10 ">
      <div className="bg-gray-100 rounded-4xl py-7 md:py-12 lg:py-25">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-5 md:px-10 lg:px-5">
            {/* Contact Info */}
            <div className="veritcalLine py-5" data-aos="fade-up">
              <p className="pb-4 text-lg">Phone Number</p>
              <p className="text-lg">
                <a href="tel:1436513652165" className="hover:underline" title="Call 1436513652165">1436513652165</a>
              </p>
              <p className="text-lg">
                <a href="tel:4541561654547" className="hover:underline" title="Call 4541561654547">4541561654547</a>
              </p>

              <p className="py-2 text-lg">Email Address</p>
              <p className="text-lg">
                <a href="mailto:info@gmail.com" className="hover:underline" title="Email info@gmail.com">info@gmail.com</a>
              </p>
            </div>

            {/* Unit I */}
            <div className="veritcalLine py-5" data-aos="fade-up" data-aos-delay="200">
              <p className="pb-4 text-lg">Unit – I</p>
              <address className="not-italic text-lg leading-relaxed">
                Sy No: 62P & 63P, Plot No. 7, APIIC IP,<br />
                Attivaram Village, Ozili Mandal<br />
                Tirupati District, Andhra Pradesh<br />
                INDIA – 524 421
              </address>
            </div>

            {/* Unit II */}
            <div className="veritcalLine py-5" data-aos="fade-up" data-aos-delay="400">
              <p className="pb-4 text-lg">Unit – II</p>
              <address className="not-italic text-lg leading-relaxed">
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
