import React from "react";
import PricingCard from "./PricingCard";

export const PaymentPage = ({ addPlanToOrder, orderSum }) => {
  return (
    <div className="App">
      <PricingCard addPlanToOrder={addPlanToOrder} orderSum={orderSum} />
    </div>
  );
};
