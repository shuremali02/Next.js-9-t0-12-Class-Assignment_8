"use client";
import { useCart ,} from '@/app/Context/CartContext';
import Image from 'next/image';
import React from 'react';


export default function Cart() {
    const {cart, decrementQuantity,totalPrice, removeOneFromCart,clearCart, incrementQuantity} = useCart();
console.log("Cart Context Data:",  cart);


  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>
        
        {/* Cart Items */}
        <div className="bg-white shadow-md rounded-lg p-6">
          {cart.length > 0 ? (
            <div className="space-y-6">
              {cart.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.image} 
                      alt={item.name} 
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-md shadow"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                      <p className="font-bold text-gray-800">${item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    {/* Quantity Controls */}
                    <button
                      onClick={() => decrementQuantity(item.id)}
                      className="px-3 py-1 text-sm font-bold bg-gray-200 rounded-md shadow hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="text-sm font-medium">{item.quantity}</span>
                    <button
                      onClick={() => incrementQuantity(item.id)}
                      className="px-3 py-1 text-sm font-bold bg-gray-200 rounded-md shadow hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex items-center space-x-4">
                    {/* Remove Button */}
                    <button
                      onClick={() => removeOneFromCart(item.id)}
                      className="px-3 py-1 text-sm font-bold text-red-500 bg-red-100 rounded-md shadow hover:bg-red-200"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}
        </div>

        {/* Summary Section */}
        {cart.length > 0 && (
          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Total Price:</h2>
              <p className="text-xl font-bold text-green-600">${totalPrice}</p>
            </div>
            <div className="flex space-x-4">
              {/* Clear Cart Button */}
              <button
                onClick={clearCart}
                className="w-full px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow hover:bg-red-600"
              >
                Clear Cart
              </button>
              {/* Place Order Button */}
              <button
                onClick={()=>window.location.href="/OrderPlaced"}
                className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600"
              >
                Place Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
