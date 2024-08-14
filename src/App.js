import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PaymentPage } from "./pages/PaymentPage";
import { OrderPage } from "./pages/OrderPage";
import CameraPage from "./pages/CameraPage";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import EnterpriseContact from "./pages/EnterpriseContact";
import CaptureServicesPage from "./pages/CaptureServicesPage";
import OrderSuccessPage from "./components/OrderSuccessPage";

function App() {
    const [orderSummary, setOrderSummary] = useState({
        plan: null,
        cameras: [],
        captureServices: null,
        noCameraOption: null,
    });

    const addPlanToOrder = (planIndex, tours, seats, annual) => {
        setOrderSummary((prevSummary) => ({
            ...prevSummary,
            plan: { planIndex, tours, seats, annual },
        }));
    };

    const removePlan = () => {
        setOrderSummary((prevSummary) => ({
            ...prevSummary,
            plan: null,
        }));
    };

    const addCameraToOrder = (camera) => {
        setOrderSummary((prevSummary) => ({
            ...prevSummary,
            cameras: [...prevSummary.cameras, camera],
        }));
    };

    const addCaptureServiceToOrder = (service) => {
        setOrderSummary((prevSummary) => ({
            ...prevSummary,
            captureServices: service,
        }));
    };

    const removeCameraFromOrder = (cameraId) => {
        setOrderSummary((prevOrderSummary) => ({
            ...prevOrderSummary,
            cameras: prevOrderSummary.cameras.filter(
                (camera) => camera.id !== cameraId
            ),
        }));
    };

    const setNoCameraOption = (option) => {
        setOrderSummary((prevOrderSummary) => ({
            ...prevOrderSummary,
            noCameraOption: option,
        }));
    };

    return (
        <Router>
            <div style={{ position: "relative", minHeight: "100vh", background: "linear-gradient(to bottom, #ffffff, #f3f4f6)" }}>
                {/* Navbar */}
                <Navbar />

                {/* SVG Background Header */}
                <header style={{ position: "absolute", top: 0, left: 0, width: "100%", zIndex: 1 }}>
                    <svg
                        width="1366"
                        height="313"
                        viewBox="0 0 1366 313"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ width: "100%", height: "auto" }}
                    >
                        <path
                            d="M1403 102.3L1323 131.587C1243 160.434 1083 219.666 923 207.6C763 195.534 603 114.366 443 119.85C283 125.334 123 219.666 43 266.063L-37 312.9V-3H43C123 -3 283 -3 443 -3C603 -3 763 -3 923 -3C1083 -3 1243 -3 1323 -3H1403V102.3Z"
                            fill="url(#paint0_linear)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear"
                                x1="4.00004"
                                y1="78.0001"
                                x2="1369"
                                y2="68.5001"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#59C6C9" />
                                <stop offset="0.513628" stopColor="#0099FF" />
                                <stop offset="1" stopColor="#7634E1" />
                            </linearGradient>
                        </defs>
                    </svg>
                </header>

                {/* Routes */}
                <div style={{ position: "relative", zIndex: 2, paddingTop: "50px" }}>
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
                                    addCaptureServiceToOrder={addCaptureServiceToOrder}
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
                        <Route path="/success-message" element={<OrderSuccessPage />} />
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
            </div>
        </Router>
    );
}

export default App;
