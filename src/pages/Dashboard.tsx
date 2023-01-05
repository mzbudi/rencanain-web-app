import React from "react";
import { Link } from "react-router-dom";
import { useProSidebar } from "react-pro-sidebar";

const Dashboard: React.FC = () => {
  const { collapseSidebar } = useProSidebar();
  return (
    <div className="container">
      <div>
        <Link to="profile">Profile</Link>
        <span className="mx-4">|</span>
        <Link to="dashboard">Dashboard</Link>
      </div>
      <div>
        <button
          onClick={() => {
            collapseSidebar();
          }}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Toogle
          </span>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
