import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="Contact" className="bg-white">
      {/* Header */}
      <div className="bg-cyan-500 py-10 text-center px-4">
        <p className="text-white text-xl font-semibold">
          Pratika Rane{" "}
          <span className="underline underline-offset-4 decoration-white">
            Contact Info
          </span>
        </p>
        <p className="text-white text-sm sm:text-base p-1">
          A dedicated professional with a passion for precision in pharma
          <br />
          compliance.
        </p>
      </div>

      {/* Centered White Box */}
      <div className="flex justify-center py-10 px-4">
        <div className="w-full max-w-6xl bg-white rounded-lg flex flex-col md:flex-row overflow-hidden border border-gray-200">
          {/* Left Contact Info */}
          <div className="relative bg-cyan-500 text-white p-10 flex flex-col justify-between md:flex-[0.35] overflow-hidden md:overflow-visible">
            {/* Decorative Circles */}
            <div className="absolute w-32 h-32 md:w-40 md:h-40 bg-cyan-400 opacity-50 rounded-full -bottom-10 -left-10 md:-bottom-10 md:-left-10"></div>
            <div className="absolute w-44 h-44 md:w-60 md:h-60 bg-cyan-300 opacity-30 rounded-full -bottom-10 -right-10 md:-bottom-20 md:right-0"></div>

            {/* Content */}
            <div>
              <h3 className="text-3xl font-semibold mb-2 py-0">
                Contact Information
              </h3>
              <p className="mt-3 text-sm px-1">
                Say something to start a live chat!
              </p>
              <div className="space-y-4 py-10 mt-10">
                <div className="flex items-center text-sm space-x-3">
                  <FaPhoneAlt />
                  <span>+91 9886260846</span>
                </div>
                <div className="flex items-center text-sm space-x-3">
                  <FaEnvelope />
                  <span>pratikarane1st@gmail.com</span>
                </div>
                <div className="flex items-start text-sm space-x-3">
                  <div className="pt-1">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="">
                    <p>201 Mathrusai apartment</p>
                    <p>Pothinamallaya palem,</p>
                    <p>Visakhapatnam, Andhra Pradesh</p>
                    <p>530041.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="relative z-7 flex space-x-4 mt-8">
              <a
                href="#"
                className="w-8 h-8 bg-transparent text-cyan-600 rounded-full flex items-center justify-center "
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-transparent text-cyan-600 rounded-full flex items-center justify-center"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-transparent text-cyan-600 rounded-full flex items-center justify-center"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Right Contact Form */}
          <form className="p-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:flex-[0.65]">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">First Name</label>
              <input
                type="text"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Last Name</label>
              <input
                type="text"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div className="flex flex-col md:col-span-1">
              <label className="text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div className="flex flex-col md:col-span-1">
              <label className="text-sm text-gray-600 mb-1">Phone Number</label>
              <input
                type="tel"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label className="text-sm text-gray-600 mb-1">Message</label>
              <textarea
                rows={4}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              ></textarea>
            </div>
            <div className="flex flex-col ">
              {/* Button */}
              <div className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition-colors w-fit">
                <button type="submit">Send Message</button>
              </div>

              {/* Image below button */}
              <img
                src="/images/arrow.png" // Replace with actual image path
                alt="Supporting visual"
                className="mt-2 w-30 h-auto" // Adjust width as needed
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
