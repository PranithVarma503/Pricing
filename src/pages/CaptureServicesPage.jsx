import React, { useState } from "react";
import { OrderSummary } from "../components/OrderSummary";
import OptionsTab from "./OptionsTab";

const CaptureServicesPage = ({ addCaptureServiceToOrder, orderSum }) => {
  const [levels, setLevels] = useState("");
  const [sqFt, setSqFt] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleAddCaptureService = () => {
    const service = {
      levels,
      sqFt,
      zipCode,
      price: 10000,
      name: "Capture Services"
    };
    // addCaptureServiceToOrder(service);
  };

  return (
    <div>
      <OptionsTab />
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 space-y-6 md:space-y-0 md:space-x-6 p-6">
        <div className="max-w-lg mx-auto bg-white border border-gray-200 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Matterport Capture Services™
          </h3>
          <div className="flex items-center">
            <div className="w-1/3">
              <img
                src="capture.png"
                alt="Matterport Technician"
                className="rounded-lg"
              />
            </div>
            <div className="w-2/3 ml-4">
              <div className="text-xl font-bold text-gray-800 mb-2">
                Starting at $238*
              </div>
              <div className="text-gray-600 mb-2">Made by Matterport</div>
              <div className="text-gray-600 mb-2">
                It’s simple -- Provide details of the space, buy a plan, and
                we’ll capture your space!
              </div>
              <ul className="text-gray-600 mb-4 space-y-2">
                <li>✔ A digital twin of your property</li>
                <li>✔ Delivered as fast as 24-48 hours</li>
                <li>✔ Created by a Matterport certified Capture Technician</li>
                <li>✔ Captured with a Matterport professional 3D camera</li>
                <li>✔ Satisfaction guaranteed</li>
                <li>✔ Available in select regions</li>
              </ul>
              <button
                type="button"
                className="w-full px-5 py-2.5 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200"
              >
                Order Now
              </button>
              <div className="mt-4 text-gray-500 text-sm">
                <p>
                  Additional information: Pricing varies by the size of your
                  space and we support spaces up to 30,000 sq ft. This service
                  is defaulted to a Starter plan, and is available for
                  Professional and Business Plans.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-4/5 grid grid-cols-1 gap-6">
          <div className="max-w-lg w-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform dark:bg-gray-800 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Capture Services
            </h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                # Levels
              </label>
              <input
                type="number"
                value={levels}
                onChange={(e) => setLevels(e.target.value)}
                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                # Sq Ft
              </label>
              <input
                type="number"
                value={sqFt}
                onChange={(e) => setSqFt(e.target.value)}
                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Zip Code
              </label>
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <button
              type="button"
              onClick={handleAddCaptureService}
              className="w-full mt-4 px-5 py-2.5 text-lg font-medium text-white rounded-lg focus:ring-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 focus:ring-blue-200 dark:focus:ring-blue-900"
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/">
          <OrderSummary
            orderSum={orderSum}
            isAnnual={orderSum?.plan?.annual || false}
          />
        </div>
      </div>
    </div>
  );
};

export default CaptureServicesPage;
