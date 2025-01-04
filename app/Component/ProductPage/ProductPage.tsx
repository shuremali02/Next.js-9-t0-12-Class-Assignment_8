"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/Productcard";
import { Watch } from "@/app/_lib/data";
import Link from "next/link";

export default function ProductPage() {
  const [product, setProduct] = useState<Watch[]>([]);
  const [loading, setLoading]= useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await fetch("/api");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
      setLoading(false)
    };
    fetchProducts();
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    )
  }
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">Discover Our Watches</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.map((Product, index) => (
          <Link key={index} href={`/Product/${Product.id}`}>
            <div className="block shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
              <ProductCard {...Product} />
            </div>
          </Link>
        ))}
      </div>
      {!product && (
        <p className="text-center text-gray-600 mt-8">No products available at the moment. Please wait and check .</p>
      )}
    </div>
  );
}
