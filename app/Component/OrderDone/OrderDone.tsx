"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function OrderPlaced() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-md p-8 text-center">
        {/* Icon */}
        <div className="text-green-500 text-6xl mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m0 5a9 9 0 11-6-8.485M12 2v10m0 0l2-2m-2 2l-2-2"
            />
          </svg>
        </div>

        {/* Text */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Order Placed!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been successfully placed. 🎉
        </p>

        {/* Buttons */}
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition"
          >
            Back to Home
          </button>
          <Link href="/Product">
            <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md font-semibold hover:bg-gray-300 transition">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
