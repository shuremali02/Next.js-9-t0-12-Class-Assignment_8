"use client";
import React from "react";

export default function HeroSection() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video/short.mp4"
        autoPlay
        muted
        loop
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Your Next Shopping Destination!
        </h1>
        <p className="text-lg md:text-2xl mb-6 max-w-3xl">
          Explore the latest trends in fashion, electronics, and more. Experience seamless shopping with unbeatable deals and quick delivery.
        </p>
        <div className="flex space-x-4">
          <button onClick={()=>{window.location.href="/Product"}} className="px-9  py-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition">
            Shop Now
          </button>
        
        </div>
      </div>
    </div>
  );
}
