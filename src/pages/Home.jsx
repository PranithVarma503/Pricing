import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './PricingCards.css';
import { ComparisonDetails } from "../components/comparison";

const Home = () => {
    const navigate = useNavigate();
    const [plans, setPlans] = useState([]);
    const [isAnnual, setIsAnnual] = useState(true);

    const handleToggle = (billingType) => {
        setIsAnnual(billingType === 'annual');
    };

    useEffect(() => {
        fetch('/plans.json')
            .then(response => response.json())
            .then(data => setPlans(data));
    }, []);

    const handlePlanClick = (link, planType) => {
        if (link.startsWith('http')) {
            window.location.href = link;
        } else {
            navigate(`${link}/${planType}`);
        }
    };

    return (
        <div className="pricing-container">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "2rem 0",marginTop: "-2rem"  }}>
  <div style={{ display: "flex", justifyContent: "center", borderRadius: "9999px", padding: "0.25rem" }}>
    <button
      style={{
        padding: "0.5rem 1rem",
        borderRadius: "9999px",
        backgroundColor: isAnnual ? "white" : "transparent",
        border: isAnnual ? "1px solid #ccc" : "none",
      }}
      onClick={() => handleToggle("annual")}
    >
      Annual
    </button>
    <button
      style={{
        padding: "0.5rem 1rem",
        borderRadius: "9999px",
        backgroundColor: !isAnnual ? "#ef4444" : "transparent",
        color: !isAnnual ? "white" : "inherit",
        border: !isAnnual ? "1px solid #ef4444" : "none",
      }}
      onClick={() => handleToggle("monthly")}
    >
      Monthly
    </button>
  </div>
  {isAnnual && (
    <span style={{ color: "#4b5563", marginLeft: "1rem" }}>
      Save up to 16% with annual billing
    </span>
  )}
</div>

            <div className="plan-selection-container">
                {plans.map(plan => (
                    <div className={`plan-card ${plan.name === 'Pro' ? 'pro-card' : ''}`} key={plan.name} onClick={() => handlePlanClick(plan.link, plan.name)}>
                        <h2 className="plan-name">{plan.name}</h2>
                        {plan.mostPopular && <div className="most-popular">MOST POPULAR</div>}
                        {/* {plan.name === 'Pro' && <div className="save-badge">Save $40</div>} */}
                        <p className="price">
                            {isAnnual 
                                ? `${plan.annualPrice === "Contact sales" ? plan.annualPrice : (plan.annualPrice/13).toFixed(2)}/year`
                                : `${plan.price}/month`
                            }
                        </p>
                        <button className="choose-button">{plan.buttonText}</button>
                        <ul className="features-list">
                            {plan.features.map((feature, index) => (
                                <li className="feature-item" key={index}>
                                    <svg
                                        className="check-icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <ComparisonDetails /> 
        </div>
    );
};

export default Home;
