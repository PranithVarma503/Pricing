import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PaymentPage } from "./pages/PaymentPage";
import { OrderPage } from "./pages/OrderPage";
import CameraPage from "./pages/CameraPage";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import EnterpriseContact from "./pages/EnterpriseContact";
import CaptureServicesPage from "./pages/CaptureServicesPage";

function App() {
  const [orderSummary, setOrderSummary] = useState({
    plan: null,
    cameras: [],
    captureServices: null,
    noCameraOption: null
  });

  const addPlanToOrder = (planIndex, tours, seats, annual) => {
    setOrderSummary((prevSummary) => ({
      ...prevSummary,
      plan: { planIndex, tours, seats, annual }
    }));
  };

  const removePlan = () => {
    setOrderSummary((prevSummary) => ({
      ...prevSummary,
      plan: null
    }));
  };

  const addCameraToOrder = (camera) => {
    setOrderSummary((prevSummary) => ({
      ...prevSummary,
      cameras: [...prevSummary.cameras, camera]
    }));
  };

  const addCaptureServiceToOrder = (service) => {
    console.log("Passing addCaptureServiceToOrder:", addCaptureServiceToOrder);
    setOrderSummary((prevSummary) => ({
      ...prevSummary,
      CaptureServices: service
    }));
  };
  

  const removeCameraFromOrder = (cameraId) => {
    setOrderSummary((prevOrderSummary) => ({
      ...prevOrderSummary,
      cameras: prevOrderSummary.cameras.filter(
        (camera) => camera.id !== cameraId
      )
    }));
  };

  const setNoCameraOption = (option) => {
    setOrderSummary((prevOrderSummary) => ({
      ...prevOrderSummary,
      noCameraOption: option
    }));
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/pricing/:planType"
            element={
              <PaymentPage
                addPlanToOrder={addPlanToOrder}
                removePlan={removePlan}
                orderSum={orderSummary}
                setNoCameraOption={setNoCameraOption}
                removeCameraFromOrder={removeCameraFromOrder}
              />
            }
          />
          <Route
            path="/cameras"
            element={
              <CameraPage
                addCameraToOrder={addCameraToOrder}
                removeCameraFromOrder={removeCameraFromOrder}
                orderSum={orderSummary}
                setNoCameraOption={setNoCameraOption}
              />
            }
          />
          <Route
            path="/enterprise/Enterprise"
            element={<EnterpriseContact />}
          />
          <Route
            path="/capture-services"
            element={
              <CaptureServicesPage
                addCaptureServiceToOrder={addCaptureServiceToOrder}
                orderSum={orderSummary}
              />
            }
          />
          <Route
            path="/order"
            element={
              <OrderPage
                orderSum={orderSummary}
                removeCameraFromOrder={removeCameraFromOrder}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
