import React from 'react';
import { useNavigate } from 'react-router-dom';

const OptionsTab = () => {
  const navigate = useNavigate();

  const handleNavLinkClick = (text) => {
    if (text === 'plans') {
      navigate('/pricing/pro');
    } else if (text === 'cameras') {
      navigate('/cameras');
    } else {
      navigate('/capture-services');
    }
  };

  return (
    <div>
      <ul className="flex space-x-5 justify-right py-4">
        <li
          onClick={() => handleNavLinkClick('plans')}
          style={{
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
            padding: '8px 16px',
          }}
          className="hover:shadow-lg group"
        >
          <p className="inline-block text-black group-hover:text-purple-500 group-hover:underline">
            Plans
          </p>
        </li>
        <li
          onClick={() => handleNavLinkClick('cameras')}
          style={{
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
            padding: '8px 16px',
          }}
          className="hover:shadow-lg group"
        >
          <p className="inline-block text-black group-hover:text-purple-500 group-hover:underline">
            Cameras
          </p>
        </li>
        <li
          onClick={() => handleNavLinkClick('services')}
          style={{
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
            padding: '8px 16px',
          }}
          className="hover:shadow-lg group"
        >
          <p className="inline-block text-black group-hover:text-purple-500 group-hover:underline">
            Capture Services
          </p>
        </li>
      </ul>
    </div>
  );
};

export default OptionsTab;
