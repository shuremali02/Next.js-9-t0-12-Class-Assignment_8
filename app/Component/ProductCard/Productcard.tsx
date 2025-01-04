import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const ProductCard = ({ id, name, price, description, image }:ProductCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative h-56 w-full">
        <Image
          src={image}
          alt={name}
          height={200}
          width={200}
          className="h-full w-full object-cover rounded-md"

        />
        <span className="absolute top-2 left-2 bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded">
          New
        </span>
      </div>

      {/* Product Details */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600 text-sm mt-1">{description.slice(0,140)}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-teal-600">${price}</span>
          <Link href={`/Product/${id}`}>
          <button
            className="bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-700 transition duration-300"
          >
            View Product 
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
