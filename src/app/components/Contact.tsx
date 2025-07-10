import React from "react";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn 
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="Contact" className="bg-white">
      {/* Header */}
      <div className="bg-cyan-500 py-10 text-center px-4">
        <h2 className="text-white text-2xl sm:text-3xl font-semibold">
          Pratika Rane <span className="underline underline-offset-4 decoration-white">Contact Info</span>
        </h2>
        <p className="text-white mt-2 text-sm sm:text-base">
          A dedicated professional with a passion for precision in pharma<br></br> 
          compliance.
        </p>
      </div>

      {/* Centered White Box */}
      <div className="flex justify-center py-10 px-4">
        <div className="w-full max-w-6xl bg-white rounded-lg flex flex-col md:flex-row overflow-hidden border border-gray-200">
          {/* Left Contact Info */}
          <div className="relative bg-cyan-500 text-white p-10 flex flex-col justify-between w-full md:w-1/2">
            {/* Circles */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-400 opacity-50 rounded-full"></div>
            <div className="absolute -bottom-20 right-0 w-60 h-60 bg-cyan-300 opacity-30 rounded-full"></div>

            {/* Content */}
            <div>
              <h3 className="text-3xl font-semibold mb-2 py-0">Contact Information</h3>
              <p className="mt-3 text-sm px-1">Say something to start a live chat!</p>
              <div className="space-y-4 py-10 mt-10">
                <div className="flex items-center text-sm space-x-3">
                  <FaPhoneAlt />
                  <span>+102 3456 789</span>
                </div>
                <div className="flex items-center text-sm space-x-3">
                  <FaEnvelope />
                  <span>demo@gmail.com</span>
                </div>
                <div className="flex items-center text-sm space-x-3">
                  <FaMapMarkerAlt />
                  <span >
                    132 Dartmouth Street Boston,<br />
                    Massachusetts 02156 United States
                  </span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="relative z-10 flex space-x-4 mt-8">
              <a href="#" className="w-8 h-8 bg-trasparent text-cyan-500 rounded-full flex items-center justify-center border-white">
                <FaFacebookF />
              </a>
              <a href="#" className="w-8 h-8 bg-transparent text-cyan-500 rounded-full flex items-center justify-center">
                <FaTwitter />
              </a>
              <a href="#" className="w-8 h-8 bg-transparent text-cyan-500 rounded-full flex items-center justify-center">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Right Contact Form */}
          <form className="w-full md:w-1/2 p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">First Name</label>
              <input
                type="text"
                placeholder=""
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Last Name</label>
              <input
                type="text"
                placeholder=""
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div className="flex flex-col md:col-span-1">
              <label className="text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                placeholder=""
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div className="flex flex-col md:col-span-1">
              <label className="text-sm text-gray-600 mb-1">Phone Number</label>
              <input
                type="tel"
                placeholder=""
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label className="text-sm text-gray-600 mb-1">Message</label>
              <textarea
                placeholder=""
                rows={4}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              ></textarea>
            </div>
            <div className="flex items-center bg-cyan-500 text-white px-6 py-3 rounded hover:bg-cyan-600 transition-colors">
              <button
                type="submit"
                className=""
              > Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
