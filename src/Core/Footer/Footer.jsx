import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <footer>
      {/* Call to Action */}
      <div className='py-8 bg-green-600 text-white mb-5' data-aos="fade-up">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center text-center md:text-left gap-3 px-5 md:px-10 lg:px-5">
          <p className="text-lg md:text-3xl font-medium">
            Give more information regarding our products.
          </p>

          <a
            href="/contact"
            title="Contact us"
            className="group relative flex items-center border border-green-600 text-green-600 px-5 py-3.5 rounded-full overflow-hidden transition-all duration-500 ease-in-out bg-white hover:bg-lime-400"
          >
            <span className="absolute left-0 top-0 h-full w-0 bg-lime-400 group-hover:w-full transition-all duration-500 ease-in-out z-0"></span>
            <span className="flex items-center z-10 relative transition-colors duration-500 group-hover:text-white">
              Let’s Connect
              <div className="ml-2 bg-green-600 text-white group-hover:bg-white group-hover:text-green-600 rounded-full w-6 h-6 flex items-center justify-center transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </span>
          </a>
        </div>
      </div>

      {/* Logo & Tagline */}
      <div className="pb-7" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-5">
         <a href="/" title="Go to specific section">
            <img 
              src="/Shared/Newfolder/logo.png" 
              alt="Biomed International Logo" 
              className="h-30 py-2" 
              loading="lazy" 
            />
          </a>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium py-2">
            We are happy to serve you.
          </h3>
        </div>
      </div>

      {/* Contact Info */}
      <div className="pb-7" data-aos="fade-up">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-5 md:gap-8 px-5 md:px-10 lg:px-5">
          <div className='col-span-2'>
            <h4 className="text-xl md:text-xl mb-4 font-bold">
              Established platform for the green environment.
            </h4>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              Biomed International is the only company with a drug licence to manufacture
              Chondroitin Sulfate Sodium as an API/Drug in India. The process is developed
              in-house from lab scale to commercial production.
            </p>
          </div>

          <div className='col-span-2 lg:col-span-1'>
            <h4 className="mb-4 text-lg font-bold">Phone Number</h4>
            <p className='text-lg md:text-xl'>
              <a href="tel:+919791154650" className="hover:underline text-gray-600">9791154650</a>
            </p>
            <p className='text-lg md:text-xl'>
              <a href="tel:+917995111285" className="hover:underline text-gray-600">7995111285</a>
            </p>
          </div>

          <div className='col-span-2 lg:col-span-1'>
            <h4 className="mb-4 text-lg font-bold">Email Address</h4>
            <p className='text-lg md:text-xl'>
              <a href="mailto:info@biomedintl.in" className="hover:underline text-gray-600">info@biomedintl.in</a>
            </p>
          </div>

          <div className='col-span-2'>
            <h4 className="mb-4 text-lg font-bold">Location</h4>
            <p className="font-medium text-lg md:text-xl mb-4">Unit – I</p>
            <p className="text-gray-600 mb-4 text-lg md:text-xl">
              Sy No: 51/1, Mekanuru Village Guduru Mandal,<br />
              Tirupati District, Andhra Pradesh<br />
              INDIA-524 410
            </p>
            <p className="font-medium text-lg md:text-xl mb-4">Unit – II</p>
            <p className="text-gray-600 text-lg md:text-xl">
              Sy No: 62P & 63P, Plot No.7, APIIC IP,<br />
              Attivaram Village, Ozili Mandal,<br />
              Tirupati District, Andhra Pradesh,<br />
              INDIA-524 421
            </p>
          </div>
        </div>
      </div>

      {/* Footer Nav */}
      <nav
        aria-label="Footer Navigation"
        className="border-t border-gray-300 py-10"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-5 px-5 md:px-10 lg:px-5">
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start text-lg md:text-xl">
            <a href="/" className="hover:text-green-600" title="Go to Home page">Home</a>
            <a href="/about-us" className="hover:text-green-600" title="Learn more About Us">About Us</a>
            <a href="/infrastructure" className="hover:text-green-600" title="Explore our Infrastructure">Infrastructure</a>
            <a href="/contact" className="hover:text-green-600" title="Contact Us">Contact Us</a>
          </div>
          <div className="text-center md:text-right text-base">
            © 2025 Biomed International
          </div>
        </div>
      </nav>
    </footer>
  );
};
