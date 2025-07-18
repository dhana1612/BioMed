import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact2() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-5 md:py-10" aria-labelledby="contact-section">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-5">
          <div className="flex flex-col justify-between bg-white rounded-xl p-2" data-aos="fade-up">
            <h1 id="contact-section" className="font-bold py-3 text-2xl">
              Let's Connect & Explore.
            </h1>

            <form
              className="space-y-6 py-5 flex flex-col h-full justify-between"
              method="POST"
              action="/api/contact"
              aria-label="Contact form"
            >
              <div className="space-y-6">
                <label className="sr-only" htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full bg-gray-100 rounded-full px-6 py-4 text-gray-700 focus:outline-none"
                  required
                  aria-required="true"
                />

                <label className="sr-only" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full bg-gray-100 rounded-full px-6 py-4 text-gray-700 focus:outline-none"
                  required
                />

                <label className="sr-only" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full bg-gray-100 rounded-full px-6 py-4 text-gray-700 focus:outline-none"
                />

                <label className="sr-only" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  className="w-full bg-gray-100 rounded-2xl px-6 py-4 h-48 text-gray-700 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-fit relative group flex items-center gap-3 px-3 py-3 border border-green-600 rounded-full text-black font-medium overflow-hidden transition-colors duration-300"
                aria-label="Submit contact form"
              >
                <span className="absolute inset-0 bg-green-600 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out rounded-full"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Submit Form
                </span>
                <div className="relative z-10 flex items-center justify-center w-7 h-7 rounded-full bg-green-600 group-hover:bg-white transition-colors duration-300">
                  <span className="text-white group-hover:text-green-600 transition-colors duration-300">
                    &#10140;
                  </span>
                </div>
              </button>
            </form>
          </div>

          <div className="flex" data-aos="fade-up">
            <iframe
              title="Biomed International location map"
              className="w-full h-full min-h-[600px] rounded-3xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.946708721909!2d78.48667151482155!3d17.385044088079344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973f3db59cbb%3A0x90d2e5a2c07b8e4b!2sSoubhagya%20Go%20Sadan!5e0!3m2!1sen!2sin!4v1689492751346!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
