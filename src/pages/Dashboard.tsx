import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container mx-8 bg-amber-400">
      <Link to="profile">Profile</Link>
      <span className="mx-4">|</span>
      <Link to="dashboard">Dashboard</Link>
    </div>
  );
};

export default Dashboard;
