"use client";
import React from "react";

export default function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className=" text-black py-6 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">About Us</h1>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="max-w-7xl mx-auto p-6">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-6">
            Welcome to Watch Hub, your trusted destination for premium watches. Our
            journey began with a passion for precision and timeless elegance, aiming
            to bring the finest timepieces to watch enthusiasts worldwide.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-6">
            At Watch Hub, we believe that a watch is more than just a time-telling
            device—it’s a statement of style, a marker of milestones, and a
            connection to moments that matter. We strive to offer an unmatched
            selection of watches that cater to diverse tastes and preferences.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Curated selection of premium watches from top brands.</li>
            <li>Dedicated customer service to assist with your needs.</li>
            <li>Secure and hassle-free shopping experience.</li>
            <li>Exclusive collections and limited editions.</li>
          </ul>
        </section>
      </main>

      
    </div>
  );
}
