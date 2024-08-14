import React, { useState } from "react";
import { OrderSummary } from "../components/OrderSummary";
import OptionsTab from "./OptionsTab";
import NoCameraModal from "../components/NoCameraModal";
import CaptureServicesPage from "./CaptureServicesPage";

const cameraPlans = [
  {
    id: 1,
    name: "Insta360 X3 + Tripod",
    price: 449,
    image: "/item1.jpeg",
  },
  {
    id: 2,
    name: "Ricoh Theta X + Tripod",
    price: 799.95,
    image: "/item2.jpeg",
  },
  {
    id: 3,
    name: "Mobile Phone Rotator Kit",
    price: 1049,
    image: "/cloudpano3.png",
  },
];

const CameraPage = ({
  addCameraToOrder,
  orderSum,
  removeCameraFromOrder,
  setNoCameraOption,
  addCaptureServiceToOrder,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [navigateToCaptureServices, setNavigateToCaptureServices] =
    useState(false);

  const addToCart = (camera) => {
    addCameraToOrder(camera);
  };

  const handleNoCameraNeeded = () => {
    setIsModalOpen(true);
  };

  const closeModal = (selectedOption) => {
    if (selectedOption) {
      setNoCameraOption(selectedOption);
      if (selectedOption === "I plan to hire someone to capture for me") {
        setNavigateToCaptureServices(true);
      }
    }
    setIsModalOpen(false);
  };

  const isInCart = (camera) => {
    return orderSum.cameras.some((item) => item.id === camera.id);
  };

  if (navigateToCaptureServices) {
    return (
      <CaptureServicesPage
        addCaptureServiceToOrder={addCaptureServiceToOrder}
        orderSum={orderSum}
      />
    );
  }

  return (
    <div
      style={{
        position: "relative",
        padding: "2rem",
        marginTop: "-2rem",
        minHeight: "100vh",
        backgroundColor: "transparent", // Ensure this does not cover SVG
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div style={{ width: "70%" }}>
        <OptionsTab />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            width: "100%",
          }}
        >
          {cameraPlans.map((camera) => (
            <div
              key={camera.id}
              style={{
                padding: "1.5rem",
                backgroundColor: "white",
                border: "1px solid #ccc",
                borderRadius: "0.5rem",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease-in-out",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <div>
                <img
                  src={camera.image}
                  alt={camera.name}
                  style={{
                    width: "100%",
                    height: "12rem",
                    objectFit: "cover",
                    marginBottom: "1rem",
                    borderRadius: "0.5rem",
                  }}
                />
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "600",
                    color: "#1f2937",
                    marginBottom: "0.5rem",
                  }}
                >
                  {camera.name}
                </h3>
                <div
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    color: "#111827",
                    marginBottom: "1rem",
                  }}
                >
                  ${camera.price.toFixed(2)}
                </div>
              </div>
              {isInCart(camera) ? (
                <div
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    fontSize: "1.125rem",
                    fontWeight: "500",
                    color: "white",
                    backgroundColor: "#6b7280",
                    textAlign: "center",
                    borderRadius: "0.5rem",
                  }}
                >
                  Already in cart
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => addToCart(camera)}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    fontSize: "1.125rem",
                    fontWeight: "500",
                    color: "white",
                    backgroundColor: "#000",
                    borderRadius: "0.5rem",
                    transition: "background-color 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#4b5563";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#000";
                  }}
                >
                  Add to cart
                </button>
              )}
            </div>
          ))}
        </div>

        {/* No Camera Needed Card */}
        <div
          style={{
            marginTop: "2rem",
            padding: "1.5rem",
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "0.5rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              fontStyle: "italic",
              fontSize: "1.125rem",
              color: "#4b5563",
              marginBottom: "1rem",
            }}
          >
            I already have a camera <span style={{ fontStyle: "normal" }}>or</span> I plan to hire someone to capture for me.
          </p>
          <button
            type="button"
            onClick={handleNoCameraNeeded}
            style={{
              width: "100%",
              padding: "1rem",
              fontSize: "1.125rem",
              fontWeight: "500",
              color: "white",
              backgroundColor: "#ef4444",
              borderRadius: "0.5rem",
              transition: "background-color 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#dc2626";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#ef4444";
            }}
          >
            No Camera Needed
          </button>
        </div>
      </div>

      {/* Order Summary */}
      <div style={{ width: "30%", marginLeft: "1rem" }}>
        <OrderSummary
          orderSum={orderSum}
          removeCameraFromOrder={removeCameraFromOrder}
          navigateToCaptureServices={() => setNavigateToCaptureServices(true)}
          handleNoCameraNeeded={() => handleNoCameraNeeded()}
          isAnnual={orderSum?.plan?.annual || false}
        />
      </div>

      {isModalOpen && <NoCameraModal closeModal={closeModal} />}
    </div>
  );
};

export default CameraPage;
