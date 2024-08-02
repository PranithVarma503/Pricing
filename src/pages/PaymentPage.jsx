import React from "react";
import PricingCard from "./PricingCard";

export const PaymentPage = ({ addPlanToOrder, orderSum, setNoCameraOption, removePlan, removeCameraFromOrder }) => {
  return (
    <div className="App">
      <PricingCard addPlanToOrder={addPlanToOrder} orderSum={orderSum} setNoCameraOption={setNoCameraOption} removePlan={removePlan} removeCameraFromOrder={removeCameraFromOrder} />
    </div>
  );
};