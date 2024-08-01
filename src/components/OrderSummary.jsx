import React from "react";
import { calculatePrice, pricingPlans } from "../pages/PricingCard";
import { useNavigate, useLocation } from "react-router-dom";

const findTotalCost = (orderSum) => {
  const plan = orderSum.plan;
  const camerasCost = orderSum.cameras.reduce(
    (sum, item) => sum + item.price,
    0
  );
  const planCost =
    plan !== null
      ? calculatePrice(pricingPlans[plan.planIndex], plan.tours, plan.seats)
      : 0;
  return (camerasCost + planCost).toFixed(2);
};

export const OrderSummary = ({ orderSum }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const plan = orderSum.plan;
  const cameras = orderSum.cameras;
  console.log(location.pathname); 

  const navigateToCamera = () => {
    navigate('/cameras')  
  }
  return (
    <div className="max-w-sm w-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        Order summary
      </h3>
      {plan === null && cameras.length === 0 ? (
        <div className="text-center text-gray-500 dark:text-gray-400 mb-6">
          Your cart is empty
        </div>
      ) : (
        <>
          {plan !== null && (
            <>
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg text-gray-800 dark:text-gray-200">
                  {pricingPlans[plan.planIndex].name}
                </span>
                <span className="text-lg font-extrabold text-gray-900 dark:text-white">
                  $
                  {calculatePrice(
                    pricingPlans[plan.planIndex],
                    plan.tours,
                    plan.seats
                  ).toFixed(2)}
                  /yr
                </span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-500 dark:text-gray-400">Tours</span>
                <span className="text-gray-900 dark:text-white">
                  {plan.tours}
                </span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-500 dark:text-gray-400">
                  Active Seats
                </span>
                <span className="text-gray-900 dark:text-white">
                  {plan.seats}
                </span>
              </div>
            </>
          )}
          {cameras.length > 0 && (
            <>
              <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">
                Cameras
              </h4>
              {cameras.map((camera, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mb-4"
                >
                  <span className="text-lg text-gray-800 dark:text-gray-200">
                    {camera.name}
                  </span>
                  <span className="text-lg text-gray-900 dark:text-white">
                    ${camera.price.toFixed(2)}
                  </span>
                </div>
              ))}
            </>
          )}
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg text-gray-800 dark:text-gray-200">
              Total
            </span>
            <span className="text-lg font-extrabold text-gray-900 dark:text-white">
              ${findTotalCost(orderSum)}
            </span>
          </div>
        </>
      )}
      <button
        type="button"
        className="w-full px-5 py-2.5 text-lg font-medium text-white bg-gray-600 rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-200 dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-900"
        onClick={navigateToCamera}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block w-5 h-5 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2a10 10 0 1 1-10 10 10 10 0 0 1 10-10zm0 5v5"></path>
          <line x1="12" y1="12" x2="15.09" y2="15.09"></line>
        </svg>
        {location.pathname === '/pricing' ? 'Next' : 'Secure '}  
      </button>
      <div className="mt-6">
        <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">
          Accepted payment methods
        </h4>
        <div className="flex space-x-2 justify-center mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
            alt="Visa"
            className="h-8"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
            alt="MasterCard"
            className="h-8"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg"
            alt="American Express"
            className="h-8"
          />
        </div>
        <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">
          Helpful links
        </h4>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:underline"
            >
              Shipping information
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:underline"
            >
              Returns policy
            </a>
          </li>
        </ul>
      </div>
    </div> 
  );
};
