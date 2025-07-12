import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="flex flex-wrap justify-between items-center px-4 md:px-10 lg:px-20 py-2 text-sm text-gray-700 border-b">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <i className="fi fi-rr-envelope text-lg mt-[1px]" aria-hidden="true"></i>
            <a href="mailto:info@biomedintl.in" className="text-[15px] font-medium hover:underline" title="Email Biomed International">info@biomedintl.in</a>
          </div>
          <div className="flex items-center gap-2">
            <i className="fi fi-rr-phone-call text-lg mt-[1px]" aria-hidden="true"></i>
            <a href="tel:+919791154650" className="text-[15px] font-medium hover:underline" title="Call Biomed International">9791154650</a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="px-4 md:px-10 lg:px-20 py-4 border-b relative z-50" aria-label="Main Navigation">
        <div className="flex items-center justify-start space-x-6 w-full">
          {/* Logo */}
          <a href="/" title="Go to Homepage">
            <img src="/logo.png" alt="Biomed International Logo" className="h-14 object-contain" />
          </a>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-3xl ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 lg:space-x-10 text-gray-800 font-medium text-base ml-10">
            <li><a href="/" className="hover:text-green-600 no-underline" title="Home">Home</a></li>
            <li><a href="/About Us" className="hover:text-green-600 no-underline" title="About Us">About Us</a></li>
            <li><a href="/Infrastructure" className="hover:text-green-600 no-underline" title="Infrastructure">Infrastructure</a></li>
            <li className="relative group">
              <a href="#" className="hover:text-green-600 no-underline flex items-center gap-1" title="Products">
                Products
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mt-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <ul className="absolute top-full left-0 mt-2 w-56 bg-green-600 text-white rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                <li>
                  <a href="/Product/Chrondroitin Sulfate sodium" className="block px-5 py-3 hover:bg-green-700 rounded-t-2xl no-underline" title="Chondroitin Sulfate Sodium">
                    Chondroitin Sulfate Sodium
                  </a>
                </li>
                <li>
                  <a href="/Product/Collagen" className="block px-5 py-3 hover:bg-green-700 rounded-b-2xl no-underline" title="Collagen">
                    Collagen
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* Contact Us Button */}
          <div className="hidden md:block ml-auto">
            <a
              href="/Contact"
              className="group relative flex items-center border border-green-600 text-green-600 px-5 py-3.5 rounded-full overflow-hidden transition-colors duration-500 no-underline"
              title="Contact Us"
            >
              <span className="absolute left-0 top-0 h-full w-0 bg-green-600 group-hover:w-full transition-all duration-500 ease-in-out z-0 rounded-full"></span>
              <span className="flex items-center z-10 relative text-green-600 group-hover:text-white transition-colors duration-500">
                Contact Us
                <div className="bg-green-600 group-hover:bg-white text-white group-hover:text-green-600 rounded-full w-6 h-6 flex items-center justify-center ml-2 transition-colors duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </span>
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 text-gray-800 font-medium" aria-label="Mobile Navigation">
            <a href="/" className="block hover:text-green-600 no-underline" title="Home">Home</a>
            <a href="/About Us" className="block hover:text-green-600 no-underline" title="About Us">About Us</a>
            <a href="/Infrastructure" className="block hover:text-green-600 no-underline" title="Infrastructure">Infrastructure</a>

            <details className="group">
              <summary className="cursor-pointer hover:text-green-600 no-underline" title="Products">Products</summary>
              <div className="ml-4 mt-2 space-y-2 text-white bg-green-600 rounded-lg p-3">
                <a href="/Product/Chrondroitin Sulfate sodium" className="block hover:bg-green-700 rounded px-2 py-1 no-underline" title="Chondroitin Sulfate Sodium">Chondroitin Sulfate Sodium</a>
                <a href="/Product/Collagen" className="block hover:bg-green-700 rounded px-2 py-1 no-underline" title="Collagen">Collagen</a>
              </div>
            </details>

            <a href="/Contact" className="inline-block mt-4 text-green-600 border border-green-600 px-5 py-3 rounded-full hover:bg-green-600 hover:text-white transition-all no-underline" title="Contact Us">
              Contact Us
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
