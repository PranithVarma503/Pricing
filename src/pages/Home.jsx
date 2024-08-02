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
        <div>
            <div className="flex items-center px-10 pt-10 bg-gray-100">
                <div className="flex space-x-1 bg-gray-300 p-1 rounded-full">
                    <button
                    className={`px-4 py-2 rounded-full ${isAnnual ? 'bg-white' : 'bg-transparent'}`}
                    onClick={() => handleToggle('annual')}
                    >
                    Annual
                    </button>
                    <button
                    className={`px-4 py-2 rounded-full ${!isAnnual ? 'bg-red-500 text-white' : 'bg-transparent'}`}
                    onClick={() => handleToggle('monthly')}
                    >
                    Monthly
                    </button>
                </div>
            <span className="text-gray-600 mx-4">{isAnnual ? 'Save up to 16% with annual billing' : ''}</span>
            </div>
             <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 space-y-6">
                <div className="plan-selection-container">
                {plans.map(plan => (
                    <div className="card" key={plan.name} onClick={() => handlePlanClick(plan.link, plan.name)}>
                        <h2>{plan.name}</h2>
                        {plan.mostPopular && <div className="most-popular">MOST POPULAR</div>}
                        {isAnnual 
                            ? <p className="price">{plan.annualPrice === "Contact sales" ? plan.annualPrice : (plan.annualPrice/13).toFixed(2)}<span>/{plan.billingPeriod}</span></p>
                            : <p className="price">{plan.price}<span>/{plan.billingPeriod}</span></p>
                        }
                        <p className="tours">{plan.tours}</p>
                        <button className="btn">{plan.buttonText}</button>
                        <ul>
                            {plan.features.map((feature, index) => (
                                <div className="flex font-medium" key={index}>
                                    <svg
                                        className="flex-shrink-0 w-4 h-4 text-blue-500 dark:text-blue-400 mr-2 mt-0.5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <li key={index}>{feature}</li>
                                </div>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <ComparisonDetails /> 
        </div>
        </div>
    );
};

export default Home;
