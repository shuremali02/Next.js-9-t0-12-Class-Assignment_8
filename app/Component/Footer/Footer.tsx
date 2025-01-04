import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white font-medium shadow-md p-5">
      {/* Grid Layout for Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Shop Categories */}
          <div className="flex flex-col p-6">
            <h1 className="font-semibold text-lg mb-2">Shop Categories</h1>
            <p className="hover:text-gray-400 cursor-pointer">Luxury Watches</p>
            <p className="hover:text-gray-400 cursor-pointer">Casual Watches</p>
            <p className="hover:text-gray-400 cursor-pointer">Smart Watches</p>
            <p className="hover:text-gray-400 cursor-pointer">Limited Edition</p>
            <Link href="/categories" className="text-gray-400 hover:underline mt-2">Explore All</Link>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col p-6">
            <h1 className="font-semibold text-lg mb-2">Quick Links</h1>
            <Link href="/about" className="text-gray-400 hover:underline">About Us</Link>
            <Link href="/contact" className="text-gray-400 hover:underline">Contact Us</Link>
            <Link href="/faq" className="text-gray-400 hover:underline">FAQs</Link>
            <Link href="/return-policy" className="text-gray-400 hover:underline">Return Policy</Link>
            <Link href="/warranty" className="text-gray-400 hover:underline">Warranty Info</Link>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col p-6">
            <h1 className="font-semibold text-lg mb-2">Stay Connected</h1>
            <p>Email: support@watchhub.com</p>
            <p>Phone: +1-800-123-4567</p>
            <p>Follow us on:</p>
            <div className="flex space-x-4 mt-2">
              <Link href="https://www.linkedin.com/" className="text-blue-400 hover:underline">LinkedIn</Link>
              <Link href="https://www.facebook.com/" className="text-blue-400 hover:underline">Facebook</Link>
              <Link href="https://www.instagram.com/" className="text-pink-400 hover:underline">Instagram</Link>
              <Link href="https://www.twitter.com/" className="text-blue-400 hover:underline">Twitter</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Navigation Links */}
          <div className='flex space-x-4'>
            <Link href={'/'} className='transform hover:scale-105'> Home </Link>
            <Link href={'/categories'} className='transform hover:scale-105'> Categories </Link>
            <Link href={'/deals'} className='transform hover:scale-105'> Deals </Link>
            <Link href={'/new-arrivals'} className='transform hover:scale-105'> New Arrivals </Link>
            <Link href={'/contact'} className='transform hover:scale-105'> Contact </Link>
          </div>

          {/* Footer Message */}
          <div className='flex items-center space-x-4 mt-4 md:mt-0'>
            <p>© 2024 Watch Hub. Timeless elegance for everyone.</p>
          </div>

          {/* Country/Location */}
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <p>Worldwide Shipping Available</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
