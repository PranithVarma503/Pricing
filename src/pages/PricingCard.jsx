import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import { OrderSummary } from "../components/OrderSummary";
import OptionsTab from "./OptionsTab";
import NoCameraModal from "../components/NoCameraModal";

export const pricingPlans = [
  {
    name: "Pro",
    basePrice: 19,
    annualPrice: 189,
    extraSeatPrice: 19,
    toursOptions: [3, 5, 8, 10],
    seatsOptions: [1, 2, 3, 4],
    extraTourPrice: 2,
    features: [
      "Pro plan includes 1 seat at $19",
      "Extra seat cost $19",
      "3 active tours, $2 extra for each up to 10 tours",
      "Three Published Projects",
      "Unlimited scenes and photos per project",
      "Scene types like 360 photos, 360 video, 2D images",
      "Access to a limited portfolio of demo tours",
      "Share, embed, and display projects anywhere"
    ]
  },
  {
    name: "Pro Plus",
    basePrice: 49,
    annualPrice: 549,
    extraSeatPrice: 29,
    toursOptions: [10, 15, 20, 30],
    seatsOptions: [2, 3, 4, 5],
    extraTourPrice: 1.6,
    features: [
      "Pro Plus plan includes 2 seats at $49",
      "Extra seats cost $29",
      "10 active tours, then $1.6 each up to 30 tours",
      "Unlimited Published Projects",
      "Whitelabel / Bring your own URL",
      "Team Collaboration",
      "Tour Privacy Settings",
      "CloudPano Live in-tour Video Chat",
      "Complete access to all features",
      "Google Street View Uploading"
    ],
    isMostPopular: true
  },
  {
    name: "Business",
    basePrice: 197,
    annualPrice: 2169,
    extraSeatPrice: 29,
    toursOptions: [30, 50, 100, 150],
    seatsOptions: [5, 6, 7, 8],
    extraTourPrice: 1.4,
    features: [
      "Business plan includes 5 seats at $197",
      "Extra seats cost $29",
      "30 active tours, up to 150 at $1.40 each",
      "Dedicated Account Manager",
      "Team Training and Onboarding",
      "Multiple Seats Discount",
      "On Location 360º Photography"
    ]
  }
];

export const calculatePrice = (plan, selectedTours, seats, isAnnual) => {
  const extraTours =
    selectedTours > plan.toursOptions[0]
      ? selectedTours - plan.toursOptions[0]
      : 0;

  const price = isAnnual
    ? plan.annualPrice +
      extraTours * plan.extraTourPrice +
      (seats - plan.seatsOptions[0]) * plan.extraSeatPrice
    : plan.basePrice +
      extraTours * plan.extraTourPrice +
      (seats - plan.seatsOptions[0]) * plan.extraSeatPrice;

  return price;
};

function PricingCard({
  addPlanToOrder,
  orderSum,
  setNoCameraOption,
  removePlan,
  removeCameraFromOrder
}) {
  const getPlan = orderSum?.plan;
  const selectedIndex = getPlan?.planIndex || null;
  const [tours, setTours] = useState(
    pricingPlans.map((plan, index) =>
      selectedIndex !== null && index === selectedIndex
        ? plan.tours
        : plan.toursOptions[0]
    )
  );

  const [seats, setSeats] = useState(
    pricingPlans.map((plan, index) =>
      selectedIndex !== null && index === selectedIndex
        ? plan.seats
        : plan.seatsOptions[0]
    )
  );

  const [prices, setPrices] = useState([]);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(
    orderSum?.plan?.planIndex || null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [navigateToCaptureServices, setNavigateToCaptureServices] =
    useState(false);
  const [isAnnual, setIsAnnual] = useState(getPlan?.annual || true);

  useEffect(() => {
    setPrices(
      pricingPlans.map(
        (plan, index) =>
          calculatePrice(plan, tours[index], seats[index], isAnnual) || 0
      )
    );
  }, [isAnnual, seats, tours]);

  const handleToggle = (billingType) => {
    setIsAnnual(billingType === "annual");
  };

  const handleNoCameraNeeded = () => {
    setIsModalOpen(true);
  };

  // Your other code here

  const closeModal = (selectedOption) => {
    if (selectedOption) {
      setNoCameraOption(selectedOption);
      if (selectedOption === "I plan to hire someone to capture for me") {
        setNavigateToCaptureServices(true);
      }
    }
    setIsModalOpen(false);
  };

  const handleSliderChange = (index, e) => {
    const newTours = [...tours];
    const newPrices = [...prices];
    const selectedTours = parseInt(e.target.value);

    newTours[index] = selectedTours;

    const plan = pricingPlans[index];
    const newPrice = calculatePrice(
      plan,
      selectedTours,
      seats[index],
      isAnnual
    );
    newPrices[index] = newPrice;

    setTours(newTours);
    setPrices(newPrices);
  };

  const handleSeatsChange = (index, e) => {
    const newSeats = [...seats];
    const newPrices = [...prices];
    const selectedSeats = parseInt(e.target.value);

    newSeats[index] = selectedSeats;

    const plan = pricingPlans[index];
    const newPrice = calculatePrice(
      plan,
      tours[index],
      selectedSeats,
      isAnnual
    );
    newPrices[index] = newPrice;

    setSeats(newSeats);
    setPrices(newPrices);
  };

  const handleSelectPlan = (index, unselectPlan) => {
    if (unselectPlan) {
      setSelectedPlanIndex(null);
      removePlan();
    } else {
      setSelectedPlanIndex(index);
      addPlanToOrder(index, tours[index], seats[index], isAnnual);
    }
  };

  const renderSliderLabels = (options) => {
    return options.map((label, index) => (
      <span key={index} className="inline-block">
        {label}
      </span>
    ));
  };

  return (
    <>
      <OptionsTab />
      <div className="flex items-center px-10 pt-10 bg-gray-100">
        <div className="flex space-x-1 bg-gray-300 p-1 rounded-full">
          <button
            className={`px-4 py-2 rounded-full ${
              isAnnual ? "bg-white" : "bg-transparent"
            }`}
            onClick={() => handleToggle("annual")}
          >
            Annual
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              !isAnnual ? "bg-red-500 text-white" : "bg-transparent"
            }`}
            onClick={() => handleToggle("monthly")}
          >
            Monthly
          </button>
        </div>
        <span className="text-gray-600 mx-4">
          {isAnnual ? "Save up to 16% with annual billing" : ""}
        </span>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-8"
        style={{ padding: "30px" }}
      >
        {pricingPlans.map((plan, planIndex) => {
          const toursOptions = plan.toursOptions;
          const seatsOptions = plan.seatsOptions;
          const updatedPlan = {
            ...plan,
            tours: tours[planIndex],
            seats: seats[planIndex]
          };

          return (
            <div
              key={planIndex}
              className={`relative max-w-xs w-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform ${
                selectedPlanIndex === planIndex
                  ? "border-purple-600"
                  : "hover:scale-105"
              } dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between`}
            >
              {plan.isMostPopular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              <div>
                <h6 className="text-xl font-bold text-gray-800 dark:text-gray-200 text-left">
                  {updatedPlan.name}
                </h6>
                <div className="flex justify-start items-center mb-4 mt-4">
                  {updatedPlan.oldPrice && (
                    <span className="line-through text-gray-400 dark:text-gray-600">
                      ${updatedPlan.oldPrice}
                    </span>
                  )}
                  {isAnnual
                    ? updatedPlan.annualPrice !== null && (
                        <>
                          <span className="text-3xl font-extrabold text-gray-900 dark:text-white ml-2">
                            ${prices[planIndex]?.toFixed(2)}
                          </span>
                          <span className="text-lg font-normal text-gray-500 dark:text-gray-400">
                            /yr
                          </span>
                        </>
                      )
                    : updatedPlan.basePrice !== null && (
                        <>
                          <span className="text-3xl font-extrabold text-gray-900 dark:text-white ml-2">
                            ${prices[planIndex].toFixed(2)}
                          </span>
                          <span className="text-lg font-normal text-gray-500 dark:text-gray-400">
                            /mo
                          </span>
                        </>
                      )}
                </div>
                <div className="mb-4">
                  <div className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    {updatedPlan.tours}
                  </div>
                  <span className="text-lg font-normal text-gray-500 dark:text-gray-400">
                    Tours
                  </span>
                </div>
                <div className="relative mt-6">
                  <label
                    htmlFor={`tours-range-input-${planIndex}`}
                    className="sr-only"
                  >
                    Number of Tours
                  </label>
                  <input
                    id={`tours-range-input-${planIndex}`}
                    type="range"
                    value={updatedPlan.tours}
                    min={toursOptions[0]}
                    max={toursOptions[toursOptions.length - 1]}
                    step="1"
                    className="w-full h-4 appearance-none rounded-lg bg-gray-200"
                    onChange={(e) => handleSliderChange(planIndex, e)}
                    list={`tickmarks-${planIndex}`}
                    style={{
                      background: `linear-gradient(to right, #1E3A8A 0%, #1E3A8A ${
                        ((updatedPlan.tours - toursOptions[0]) /
                          (toursOptions[toursOptions.length - 1] -
                            toursOptions[0])) *
                        100
                      }%, #E5E7EB ${
                        ((updatedPlan.tours - toursOptions[0]) /
                          (toursOptions[toursOptions.length - 1] -
                            toursOptions[0])) *
                        100
                      }%, #E5E7EB 100%)`
                    }}
                  />
                  <datalist id={`tickmarks-${planIndex}`}>
                    {toursOptions.map((option, i) => (
                      <option key={i} value={option} label={option}></option>
                    ))}
                  </datalist>
                  <div className="flex justify-between mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {renderSliderLabels(toursOptions)}
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {updatedPlan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex text-left font-semibold items-start text-sm font-medium leading-snug text-gray-700 dark:text-gray-300"
                    >
                      <svg
                        className="flex-shrink-0 w-4 h-4 text-blue-500 dark:text-blue-400 mr-2 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      <div>
                        {i === 1 && (
                          <select
                            value={updatedPlan.seats}
                            onChange={(e) => handleSeatsChange(planIndex, e)}
                            className="ml-1 mr-1 p-1 border border-gray-300 rounded-lg text-sm font-medium"
                          >
                            {seatsOptions.map((option, i) => (
                              <option key={i} value={option}>
                                {option} seats
                              </option>
                            ))}
                          </select>
                        )}
                        {feature}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                onClick={() =>
                  handleSelectPlan(planIndex, selectedPlanIndex === planIndex)
                }
                className={`w-full mt-4 px-5 py-2.5 text-lg font-medium text-white rounded-lg focus:ring-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 focus:ring-blue-200 dark:focus:ring-blue-900`}
              >
                {selectedPlanIndex === planIndex ? "Unselect" : "Choose plan"}
              </button>
            </div>
          );
        })}
        <OrderSummary
          orderSum={orderSum}
          removeCameraFromOrder={removeCameraFromOrder}
          navigateToCaptureServices={() => setNavigateToCaptureServices(true)}
          handleNoCameraNeeded={() => handleNoCameraNeeded()}
          isAnnual={isAnnual}
        />
        {isModalOpen && <NoCameraModal closeModal={closeModal} />}
      </div>
    </>
  );
}

export default PricingCard;
