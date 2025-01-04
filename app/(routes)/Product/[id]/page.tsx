"use client";
import { PiShoppingCart } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { useCart } from "@/app/Context/CartContext";
import Image from "next/image";
import { Watch } from "@/app/_lib/data";

interface Item extends Watch{
  quantity:number
}

export default function ProductId({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Item>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
 const {addToCart}=useCart();
 function HandleCart (){
  if(product){
    addToCart(product as Item)
    alert(`${product.name} added to the cart`)
  }
 }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/api");
        const data: Item[] = await response.json();
        console.log(data);

        const productId = parseInt(params.id);
        const matchedProduct = data.find((item) => item.id === productId);

        if (matchedProduct) {
          setProduct(matchedProduct);
        } else {
          setError("Product not found.");
        }
      } catch (err) {
        setError("Failed to fetch product data.",);
        console.log(err)
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 mt-10">{error}</div>;
  }

  if (!product) {
    return <div className="text-center text-gray-500 mt-10">No product data.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Main Image and Thumbnails */}
        <div>
          <Image
            src={product.image}
            alt={product.name}
            className="rounded-lg w-full h-auto object-cover mb-6"
            height={200}
            width={200}
          />
          <div className="flex gap-4">
            <Image
              src={product.image}
              alt="Thumbnail 1"
              height={200}
              width={200}
              className="w-20 h-20 rounded-lg object-cover cursor-pointer hover:ring-2 hover:ring-blue-600"
            />
            <Image
              src={product.image}
              alt="Thumbnail 2"
              height={200}
              width={200}
              className="w-20 h-20 rounded-lg object-cover cursor-pointer hover:ring-2 hover:ring-blue-600"
            />
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">{product.description}</p>
          <p className="text-2xl font-semibold text-gray-700 mb-8">${product.price}</p>

          {/* Availability Section */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Availability:
            <span className="text-lg font-medium text-green-600 ml-2">In Stock</span></h3>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-6">
            <button onClick={HandleCart} className = "flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 shadow-lg">
              <PiShoppingCart size={24} />
              <span className="text-lg font-medium">Add to Cart</span>
            </button>
            <button className="flex items-center gap-2 bg-red-500 text-white px-5 py-3 rounded-lg hover:bg-red-600 shadow-lg">
              <FaRegHeart size={24} />
              <span className="text-lg font-medium">Wishlist</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
