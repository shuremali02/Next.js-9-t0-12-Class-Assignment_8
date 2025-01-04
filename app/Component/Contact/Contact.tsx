"use client";

import React from "react";

export default function ContactPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black mb-8">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Have any questions or concerns? Feel free to reach out to us using the form below. We&#39;ll get back to you as soon as possible!
        </p>

        <div className="bg-white shadow-md rounded-lg p-6 md:p-10">
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Enter the subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Write your message here..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-black font-semibold  rounded-lg hover:bg-blue-300  transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="text-center text-gray-600 mt-12">
          <p>
            Or reach out to us directly at: <span className="font-semibold">support@example.com</span>
          </p>
          <p>Phone: +1 234 567 890</p>
          <p className="mt-4">
            Visit us at:
            <br />
            123 Example Street, Suite 456, City, Country
          </p>
        </div>
      </div>
    </div>
  );
}
