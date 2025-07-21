import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact2() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://biomedintl.com/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setStatus(result.message || 'Message sent successfully!');
      setSubmitted(true);
    } catch (error) {
      setStatus('Something went wrong. Please try again later.');
    }
  };

  const getStatusColor = () => {
    return status?.toLowerCase().includes("success") ? 'text-green-600' : 'text-red-600';
  };

  return (
    <section className="py-5 md:py-10" aria-labelledby="contact-section">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-5">
          <div
            className="flex flex-col justify-between bg-white rounded-xl p-6 shadow-md"
            data-aos="fade-up"
          >
            <h1 id="contact-section" className="font-bold py-3 text-2xl">
              Let's Connect & Explore.
            </h1>

            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <svg
                  className="w-20 h-20 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <h2 className="text-xl font-semibold text-green-600">Thank you!</h2>
                <p className={`text-gray-600 ${getStatusColor()}`}>{status}</p>
              </div>
            ) : (
              <form
                className="space-y-6 py-5 flex flex-col h-full justify-between"
                onSubmit={handleSubmit}
                aria-label="Contact form"
              >
                <div className="space-y-6">
                  <input
                    id="user_name"
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    className="w-full bg-gray-100 rounded-full px-6 py-4 text-gray-700 focus:outline-none"
                    required
                    value={formData.user_name}
                    onChange={handleChange}
                  />
                  <input
                    id="user_email"
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    className="w-full bg-gray-100 rounded-full px-6 py-4 text-gray-700 focus:outline-none"
                    required
                    value={formData.user_email}
                    onChange={handleChange}
                  />
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full bg-gray-100 rounded-full px-6 py-4 text-gray-700 focus:outline-none"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    className="w-full bg-gray-100 rounded-2xl px-6 py-4 h-48 text-gray-700 focus:outline-none resize-none"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="w-fit relative group flex items-center gap-3 px-4 py-3 border border-green-600 rounded-full text-black font-medium overflow-hidden transition-colors duration-300"
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

                {status && (
                  <p className={`text-xl text-center pt-2 font-bold ${getStatusColor()}`}>{status}</p>
                )}
              </form>
            )}
          </div>

          <div className="flex" data-aos="fade-up">
            <iframe
              title="Biomed International location map"
              className="w-full h-full min-h-[600px] rounded-3xl"
              src="https://www.google.com/maps/embed?pb=..."
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
