"use client";

import Link from "next/link";

export default function ShipmentTracking() {
  const shipmentDetails = {
    orderId: "ORD123456",
    status: "In Transit",
    estimatedDelivery: "Jan 8, 2025",
    currentLocation: "Chicago, IL",
  };

  const statuses = [
    { step: "Order Confirmed", completed: true },
    { step: "Shipped", completed: true },
    { step: "In Transit", completed: true },
    { step: "Out for Delivery", completed: false },
    { step: "Delivered", completed: false },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-md p-6 max-w-xl w-full">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Shipment Tracking
        </h1>

        {/* Shipment Details */}
        <div className="mb-8">
          <p className="text-gray-600">
            <strong>Order ID:</strong> {shipmentDetails.orderId}
          </p>
          <p className="text-gray-600">
            <strong>Status:</strong> {shipmentDetails.status}
          </p>
          <p className="text-gray-600">
            <strong>Estimated Delivery:</strong> {shipmentDetails.estimatedDelivery}
          </p>
          <p className="text-gray-600">
            <strong>Current Location:</strong> {shipmentDetails.currentLocation}
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Delivery Progress</h2>
          <ol className="relative border-l border-gray-300">
            {statuses.map((status, index) => (
              <li key={index} className="mb-4">
                <div
                  className={`absolute w-3 h-3 -left-[6.5px] rounded-full ${
                    status.completed ? "bg-green-500" : "bg-gray-300"
                  }`}
                ></div>
                <p
                  className={`ml-6 text-gray-800 ${
                    status.completed ? "font-bold" : "text-gray-500"
                  }`}
                >
                  {status.step}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Back Button */}
        <div className="flex justify-center">
          <Link href="/">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
