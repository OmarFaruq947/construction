import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-secondary h-screen sm:w-1/6 p-4">
      <div className="flex items-center mb-4">
        <h1 className="text-xl text-brand font-semibold">WeCons Ltd</h1>
      </div>
      <ul>
        <li className="mb-2 hover:bg-brand px-5 py-2 duration-300 text-gray-300 hover:text-secondary ">
          <Link to="/dashboard/user-dashboard" className="block ">
            Dashboard
          </Link>
        </li>
        <li className="mb-2 hover:bg-brand px-5 py-2 duration-300 text-gray-300 hover:text-secondary">
          <Link to="/dashboard/profile" className="block ">
            Profile
          </Link>
        </li>
        <li className="mb-2 hover:bg-brand px-5 py-2 duration-300 text-gray-300 hover:text-secondary">
          <Link to="/dashboard/booking" className="block ">
            Booking
          </Link>
        </li>
        <li className="mb-2 hover:bg-brand px-5 py-2 duration-300 text-gray-300 hover:text-secondary ">
          <Link to="/dashboard/feedback" className="block ">
            Feedback
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
