import React from "react";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div className="navbar bg-gradient-to-r from-blue-500 to-purple-600 py-2 px-4 flex justify-between items-center h-16">
      <div className="logo flex items-center">
        <img src="/logo.png" alt="CloudPano Logo" className="h-10 mr-2" />
        <span className="text-white text-2xl font-semibold"></span>
      </div>
      <div className="text-sm font-medium text-white">
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                isActive
                  ? "inline-block py-2 text-white border-b-2 border-white"
                  : "inline-block py-2 text-white hover:text-gray-300"
              }
            >
              Plans
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cameras"
              className={({ isActive }) =>
                isActive
                  ? "inline-block py-2 text-white border-b-2 border-white"
                  : "inline-block py-2 text-white hover:text-gray-300"
              }
            >
              Cameras
            </NavLink>
          </li>
        </ul>
      </div>
      <a
        href="https://app.cloudpano.com/login"
        className="login bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700"
      >
        Login
      </a>
    </div>
  );
};
