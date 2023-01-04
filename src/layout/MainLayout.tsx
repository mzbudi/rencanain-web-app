import React from "react";
import { Outlet } from "react-router-dom";
import SidebarLayout from "./SidebarLayout";

const MainLayout: React.FC = () => {
  return (
    <div className="flex h-screen min-h-screen">
      <SidebarLayout />
      <main className="px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
