import React from 'react'

export default function Footersection() {
  return (
    <section>
        <div className='py-8 bg-green-600 text-white px-10 md:px-25 xl:px-45 2xl:px-80 '>
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left ">
                <p className="text-lg md:text-3xl font-medium ">
                    Give more information regarding our products.
                </p>

                <a href="#" className="group relative flex items-center border border-green-600 text-green-600 px-5 py-3.5 rounded-full overflow-hidden transition-all duration-500 ease-in-out bg-white hover:bg-lime-400">

                {/* Background overlay for left-to-right animation */}
                <span className="absolute left-0 top-0 h-full w-0 bg-lime-400 group-hover:w-full transition-all duration-500 ease-in-out z-0"></span>

                {/* Text & Icon */}
                <span className="flex items-center z-10 relative transition-colors duration-500 group-hover:text-white">
                    Let’s Connect

                    {/* Icon */}
                    <div className="ml-2 bg-green-600 text-white group-hover:bg-white group-hover:text-green-600 rounded-full w-6 h-6 flex items-center justify-center transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                    </svg>
                    </div>
                </span>

                </a>

            </div>
        </div>
       

        <div className="px-10 md:px-25 xl:px-45 2xl:px-80  py-10">
                    <img src="/logo.png" alt="Biomed Logo" className="h-12 sm:h-14 pt-3" />
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium py-3">
                    We are happy to serve you.
                    </h3>
        </div>



        <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 md:gap-17 px-10 md:px-25 xl:px-45 2xl:px-80 pb-10">

            <div className='col-span-2'>
                <h4 className="text-xl md:text-2xl mb-4">
                    Established platform for the green environment.
                </h4>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                    Biomed International is the only company with a drug licence to manufacture
                    Chondroitin Sulfate Sodium as an API/Drug in India. The process is developed
                    in-house from lab scale to commercial production.
                </p>
            </div>

            <div>
                <h4 className="mb-4 text-lg">Phone Number</h4>
                <p className='text-lg md:text-xl'>9791154650</p>
                <p className='text-lg md:text-xl'>7995111285</p>
            </div>

            <div>
                <h4 className="mb-4 text-lg">Email Address</h4>
                <p className='text-lg md:text-xl'>info@biomedintl.in</p>
            </div>

            <div className='col-span-2'>
                <h4 className="mb-4 text-lg">Location</h4>
                <p className="font-medium text-lg md:text-xl mb-4">Unit – I</p>
                <p className="text-gray-700 mb-4 text-lg md:text-xl">
                Sy No: 51/1, Mekanuru Village Guduru Mandal,<br />
                Tirupati District, Andhra Pradesh<br />
                INDIA-524 410
                </p>
                <p className="font-medium text-lg md:text-xl mb-4">Unit – II</p>
                <p className="text-gray-700 text-lg md:text-xl">
                Sy No: 62P & 63P, Plot No.7, APIIC IP,<br />
                Attivaram Village, Ozili Mandal,<br />
                Tirupati District, Andhra Pradesh,<br />
                INDIA-524 421
                </p>
            </div>
        </div>



        <div className="border-t border-gray-300 py-10 px-10 md:px-25 xl:px-45 2xl:px-80  flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-5">
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start  text-lg md:text-xl">
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
        

    </section>
  )
}
