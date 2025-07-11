import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 w-full">
      {/* Top green banner */}
      <div className="bg-green-700 text-white px-4 sm:px-8 lg:px-60 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-xl sm:text-2xl lg:text-3xl font-medium mb-4 md:mb-0">
          Give more information regarding our products.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-6 py-2 bg-white text-green-600 border border-white rounded-full font-medium hover:bg-green-600 hover:text-white transition"
        >
          Let’s Connect
          <span className="ml-2 bg-green-600 text-white hover:bg-white hover:text-green-600 rounded-full w-6 h-6 flex items-center justify-center transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </a>
      </div>

      {/* Logo and Heading */}
      <div className="px-4 sm:px-8 lg:px-60 pt-10">
        <img src="/logo.png" alt="Biomed Logo" className="h-12 sm:h-14 mb-4" />
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4">
          We are happy to serve you.
        </h3>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-8 lg:px-60 pt-6 pb-12 flex flex-col lg:flex-row justify-between gap-12">
        {/* Left Side */}
        <div className="max-w-xl">
          <h4 className="text-2xl sm:text-3xl font-semibold mb-4">
            Established platform for the green environment.
          </h4>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Biomed International is the only company with a drug licence to manufacture
            Chondroitin Sulfate Sodium as an API/Drug in India. The process is developed
            in-house from lab scale to commercial production.
          </p>
        </div>

        {/* Right Side: Contact Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-base">
          {/* Phone */}
          <div>
            <h4 className="font-semibold mb-1 text-lg">Phone Number</h4>
            <p>9791154650</p>
            <p>7995111285</p>
          </div>

          {/* Email */}
          <div>
            <h4 className="font-semibold mb-1 text-lg">Email Address</h4>
            <p>info@biomedintl.in</p>
          </div>

          {/* Location */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h4 className="font-semibold mb-2 text-lg">Location</h4>
            <p className="font-medium">Unit – I</p>
            <p className="text-gray-700 mb-4">
              Sy No: 51/1, Mekanuru Village Guduru Mandal,<br />
              Tirupati District, Andhra Pradesh<br />
              INDIA-524 410
            </p>
            <p className="font-medium">Unit – II</p>
            <p className="text-gray-700">
              Sy No: 62P & 63P, Plot No.7, APIIC IP,<br />
              Attivaram Village, Ozili Mandal,<br />
              Tirupati District, Andhra Pradesh,<br />
              INDIA-524 421
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t border-gray-300 py-4 px-4 sm:px-8 lg:px-60 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start mb-2 md:mb-0 text-base">
          <a href="#" className="hover:text-green-600">Home</a>
          <a href="#" className="hover:text-green-600">About Us</a>
          <a href="#" className="hover:text-green-600">Infrastructure</a>
          <a href="#" className="hover:text-green-600">Products</a>
          <a href="#" className="hover:text-green-600">Contact Us</a>
        </div>
        <div className="text-center md:text-right text-base">
          © 2025 Biomed International
        </div>
      </div>
    </footer>
  );
};
