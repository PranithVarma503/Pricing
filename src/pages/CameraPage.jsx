import React from "react";
import { OrderSummary } from "../components/OrderSummary";

const cameraPlans = [
  {
    id: 1,
    name: "Insta360 X3 + Tripod",
    price: 449,
    image: "/item1.jpeg"
  },
  {
    id: 2,
    name: "Ricoh Theta X + Tripod",
    price: 799.95,
    image: "/item2.jpeg"
  },
  {
    id: 3,
    name: "Ricoh Theta Z1 + Tripod",
    price: 1049,
    image: "/item3.jpeg"
  },
];

const CameraPage = ({ addCameraToOrder, orderSum }) => {
  const addToCart = (camera) => {
    addCameraToOrder(camera); 
  }; 

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 space-y-6 md:space-y-0 md:space-x-6 p-6"> 
      <div className="w-full md:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> 
        {cameraPlans.map((camera) => (
          <div
            key={camera.id}
            className="max-w-xs w-full h-min p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between"
          > 
            <div>
              <img
                src={camera.image}
                alt={camera.name}
                className="w-full h-48 object-cover mb-4 rounded-lg transition-transform transform hover:scale-110"
              />
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                {camera.name}
              </h3>
              <div className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                ${camera.price.toFixed(2)}
              </div>
            </div>
            <button
              type="button"
              onClick={() => addToCart(camera)}
              className="w-full mt-4 px-5 py-2.5 text-lg font-medium text-white rounded-lg focus:ring-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 focus:ring-blue-200 dark:focus:ring-blue-900 transition-colors"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
      <div className="w-full md:w-1/5">  
        <OrderSummary orderSum={orderSum} /> 
      </div>
    </div>
  );
}; 

export default CameraPage;
