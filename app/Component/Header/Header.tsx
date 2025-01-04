"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname();

  const Routes = [
    { href: "/", name: "Home" },
    { href: "/Product", name: "Product" },
    { href: "/About", name: "About" },
    { href: "/Contact", name: "Contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="h-[72px] py-6 border-[#676767] border-y-[1px] flex items-center  bg-white md:justify-center justify-between  px-4">
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        {Routes.map((route, index) => (
          <Link href={route.href} key={index}>
            <div className="relative flex flex-col items-center group">
              <span
                className={`${
                  pathname === route.href
                    ? "font-bold text-black underline underline-offset-2"
                    : "text-gray-800"
                }`}
              >
                {route.name}
              </span>
              {pathname === route.href && (
                <span className="absolute bottom-[-6px] h-2 w-2 bg-black rounded-full"></span>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? (
            <FiX size={28} className="text-black" />
          ) : (
            <FiMenu size={28} className="text-black" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-50 flex flex-col justify-center items-center transition-all duration-300">
          <div className="flex flex-col gap-6 text-center">
            {Routes.map((route, index) => (
              <Link
                href={route.href}
                key={index}
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                <span
                  className={`text-lg font-semibold ${
                    pathname === route.href ? "text-blue-500" : "text-white"
                  }`}
                >
                  {route.name}
                </span>
              </Link>
            ))}
          </div>
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white focus:outline-none"
          >
            <FiX size={28} />
          </button>
        </div>
      )}
    </div>
  );
}
