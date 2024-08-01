import React from 'react';
import { FaCheck, FaTimes, FaDollarSign, FaInfoCircle } from 'react-icons/fa';

export const ComparisonDetails = () => {

  const pricingComparisionData = [
    {
      "feature": "Extra seat cost",
      "Pro": "1 seat, $19",
      "Pro Plus": "2 seats, $49 a month",
      "Business": "5 seats, $197",
      "Enterprise": "$399+"
    },
    {
      "feature": "Per tour",
      "Pro": "19",
      "Pro Plus": "29",
      "Business": "29",
      "Enterprise": ""
    },
    {
      "feature": "Video Minutes",
      "Pro": "includes 3 active tours, then $2 extra up to 10 tours",
      "Pro Plus": "includes 10 tours, then $1.60 extra per tour per month, up to 30 tours",
      "Business": "Includes 30 tours, up to 150, at $1.40 per tour per month",
      "Enterprise": "150 tours +"
    },
    {
      "feature": "CloudPano live",
      "Pro": "1 min per tour, add'l min $10",
      "Pro Plus": "10 min per tour, add'l min $7",
      "Business": "",
      "Enterprise": ""
    },
    {
      "feature": "Embed spins on your dealership site",
      "Pro": "Not Included",
      "Pro Plus": "Included",
      "Business": "Included",
      "Enterprise": ""
    },
    {
      "feature": "SOC-1 Compliant Infrastructure",
      "Pro": "Not Included",
      "Pro Plus": "Not Included",
      "Business": "Not Included",
      "Enterprise": "Included"
    },
    {
      "feature": "ADA Compliance",
      "Pro": "Not Included",
      "Pro Plus": "Not Included",
      "Business": "Not Included",
      "Enterprise": "Included"
    },
    {
      "feature": "Whitelabel and Resell CloudPano",
      "Pro": "$99 a month",
      "Pro Plus": "$99 a month",
      "Business": "$69 a month",
      "Enterprise": "Included"
    },
    {
      "feature": "Enterprise Level Named Support Person",
      "Pro": "Not Included",
      "Pro Plus": "Not Included",
      "Business": "Included!",
      "Enterprise": "Call us"
    },
    {
      "feature": "Measurement Studio Addon",
      "Pro": "Not Included",
      "Pro Plus": "Not Included",
      "Business": "Not Included",
      "Enterprise": "Included"
    },
    {
      "feature": "Minimum total value",
      "Pro": "$97 a month, for all tours",
      "Pro Plus": "$97 a month, for all tours",
      "Business": "Included",
      "Enterprise": "Included"
    },
    {
      "feature": "Maximum Total Value (max tours for the plan, and buy an extra seat)",
      "Pro": "116",
      "Pro Plus": "146",
      "Business": "197",
      "Enterprise": "399"
    },
    {
      "feature": "Additional Value",
      "Pro": "149",
      "Pro Plus": "207",
      "Business": "394",
      "Enterprise": "$100,000"
    }
  ]

  const renderIcon = (value) => {
    if (value.includes('Included') || value.includes('Call us') || value.includes('Included!')) {
      return <FaCheck className="text-green-500" />;
    }
    if (value.includes('Not Included')) {
      return <FaTimes className="text-red-500" />;
    }
    if (value.includes('$')) {
      return <FaDollarSign className="text-yellow-500" />;
    }
    return value;
  };

  return (
    <div className="mt-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Comparison Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
              <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pro</th>
              <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pro Plus</th>
              <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Business</th>
              <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enterprise</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800">
            {pricingComparisionData?.map((data, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50 dark:bg-gray-700" : ""}>
                <td className="py-4 px-6 border-b border-gray-200 dark:border-gray-700 flex items-center">
                  {data.feature}
                  <FaInfoCircle className="ml-2 text-gray-400" />
                </td>
                <td className="py-4 px-6 border-b border-gray-200 dark:border-gray-700 text-center">{renderIcon(data.Pro)}</td>
                <td className="py-4 px-6 border-b border-gray-200 dark:border-gray-700 text-center">{renderIcon(data['Pro Plus'])}</td>
                <td className="py-4 px-6 border-b border-gray-200 dark:border-gray-700 text-center">{renderIcon(data.Business)}</td>
                <td className="py-4 px-6 border-b border-gray-200 dark:border-gray-700 text-center">{renderIcon(data.Enterprise)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
