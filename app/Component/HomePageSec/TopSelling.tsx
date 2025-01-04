import React from 'react';
import ProductCard from '../ProductCard/Productcard';
import { Button } from '@/components/ui/button';

export default function TopSelling() {
  const SellingProducts = [
    {
      id: 1,
      name: 'Omega Seamaster',
      price: 5000,
      description: 'A timeless luxury watch for all occasions.',
      image: "https://i.pinimg.com/736x/c1/fc/76/c1fc763310894c34231ac648ce3e99f6.jpg",
    },
    {
      id: 2,
      name: 'Rolex Submariner',
      price: 8000,
      description: 'Iconic design and exceptional performance.',
      image: "https://i.pinimg.com/736x/4f/27/45/4f27455a8e93910904abdfb9a4a02642.jpg",
    },
    {
      id: 3,
      name: 'Casio G-Shock',
      price: 150,
      description: 'Durable and stylish for everyday wear.',
      image: "https://i.pinimg.com/736x/c6/4a/3f/c64a3f03a1c5bbcbe5c68f9e3262f18a.jpg",
    },
    {
      id: 4,
      name: 'Fossil Gen 5',
      price: 295,
      description: 'A modern smartwatch with classic aesthetics.',
      image: "https://i.pinimg.com/736x/0c/38/1c/0c381c4b5de78a2c569160120b44c499.jpg",
    },
  ];

  return (
    <div className="flex flex-col space-y-4 items-center justify-center p-6">
      {/* Section Title */}
      <div>
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-primary text-center">
          Top Selling Watches
        </h1>
      </div>

      {/* Products Grid */}
      <div className="w-full">
        <div className="grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-4">
          {SellingProducts.map((product) => (
            <div key={product.id} className="flex-shrink-0">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="flex items-center px-10 py-6 w-full justify-center">
        <Button className="w-full max-w-xs md:max-w-fit md:w-auto p-4 md:p-6 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition">
          View All Watches
        </Button>
      </div>
    </div>
  );
}
