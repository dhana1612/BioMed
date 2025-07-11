import React from 'react';

const Header = () => {
  return (
    <>
      {/* Top Contact Bar */}
      <div className="flex flex-wrap justify-between items-center px-4 md:px-10 lg:px-20 py-2 text-sm text-gray-700 border-b">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          {/* Email */}
          <div className="flex items-center gap-2">
            <i className="fi fi-rr-envelope text-lg mt-[1px]"></i>
            <span className="text-[15px] font-medium">info@biomedintl.in</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <i className="fi fi-rr-phone-call text-lg mt-[1px]"></i>
            <span className="text-[15px] font-medium">9791154650</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="flex flex-wrap items-center justify-between px-4 md:px-10 lg:px-20 py-4">
        {/* Left: Logo + Menu */}
        <div className="flex items-center space-x-10">
          {/* Logo */}
          <div>
            <img src="/logo.png" alt="Logo" className="h-14 object-contain" />
          </div>

          {/* Menu Items (hidden on small screens) */}
          <ul className="hidden md:flex space-x-8 lg:space-x-10 text-gray-800 font-medium text-base ps-20">
            <li><a href="#" className="hover:text-green-600">Home</a></li>
            <li><a href="#" className="hover:text-green-600">About Us</a></li>
            <li><a href="#" className="hover:text-green-600">Infrastructure</a></li>
            <li className="relative group">
              <a href="#" className="hover:text-green-600 flex items-center gap-1">
                Products
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mt-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Button */}
        <div className="mt-4 md:mt-0">
          <a
            href="#"
            className="group relative flex items-center border border-green-600 text-green-600 px-5 py-3.5 rounded-full overflow-hidden transition-colors duration-500"
          >
            <span className="absolute left-0 top-0 h-full w-0 bg-green-600 group-hover:w-full transition-all duration-500 ease-in-out z-0 rounded-full"></span>

            <span className="flex items-center z-10 relative text-green-600 group-hover:text-white transition-colors duration-500">
              Contact Us
              <div className="bg-green-600 group-hover:bg-white text-white group-hover:text-green-600 rounded-full w-6 h-6 flex items-center justify-center ml-2 transition-colors duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
