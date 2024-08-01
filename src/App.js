import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PaymentPage } from "./pages/PaymentPage";
import { OrderPage } from "./pages/OrderPage";
import CameraPage from "./pages/CameraPage";
import { Home } from "./pages/Home";

function App() {
  const [orderSummary, setOrderSummary] = useState({
    plan: null,
    cameras: [] 
  });

  const addPlanToOrder = (planIndex, tours, seats) => {
    setOrderSummary((prevSummary) => ({
      ...prevSummary,
      plan: { planIndex, tours, seats }
    }));
  };

  const addCameraToOrder = (camera) => {
    setOrderSummary((prevSummary) => ({
      ...prevSummary,
      cameras: [...prevSummary.cameras, camera]
    }));
  };

  return (
    <Router>
      <div>
        <Home />
        <Routes>
          <Route
            path="/pricing"
            element={
              <PaymentPage
                addPlanToOrder={addPlanToOrder}
                orderSum={orderSummary}
              />
            }
          />
          <Route
            path="/cameras"
            element={
              <CameraPage
                addCameraToOrder={addCameraToOrder}
                orderSum={orderSummary}
              />
            }
          />
          <Route
            path="/order"
            element={<OrderPage orderSum={orderSummary} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
