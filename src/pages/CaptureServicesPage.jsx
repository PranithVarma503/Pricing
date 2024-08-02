import React, { useState } from "react";
import { OrderSummary } from "../components/OrderSummary";
import OptionsTab from "./OptionsTab";

const CaptureServicesPage = ({ addCaptureServiceToOrder, orderSum }) => {
  const [levels, setLevels] = useState("");
  const [sqFt, setSqFt] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleOrderNowClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <OptionsTab />
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 space-y-6 md:space-y-0 md:space-x-6 p-6">
        <div className="max-w-lg mx-auto bg-white border border-gray-200 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            CloudPano Capture Services™
          </h3>
          <div className="flex items-center">
            <div className="w-1/3">
              <img
                src="capture.png"
                alt="CloudPano Technician"
                className="rounded-lg"
              />
            </div>
            <div className="w-2/3 ml-4">
              <div className="text-xl font-bold text-gray-800 mb-2">
                Starting at $238*
              </div>
              <div className="text-gray-600 mb-2">Made by CloudPano</div>
              <div className="text-gray-600 mb-2">
                It’s simple -- Provide details of the space, buy a plan, and
                we’ll capture your space!
              </div>
              <ul className="text-gray-600 mb-4 space-y-2">
                <li>✔ A digital twin of your property</li>
                <li>✔ Delivered as fast as 24-48 hours</li>
                <li>✔ Created by a CloudPano certified Capture Technician</li>
                <li>✔ Captured with a CloudPano professional 3D camera</li>
                <li>✔ Satisfaction guaranteed</li>
                <li>✔ Available in select regions</li>
              </ul>
              <button
                type="button"
                onClick={handleOrderNowClick}
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
          <div className="w-full md:w-1/3">
            <OrderSummary
              orderSum={orderSum}
              isAnnual={orderSum?.plan?.annual || false}
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg p-6 w-full max-w-lg mx-auto">
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
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
      )}
    </div>
  );
};

export default CaptureServicesPage;
