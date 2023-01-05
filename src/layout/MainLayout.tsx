import React from "react";
import { Outlet } from "react-router-dom";
import SidebarLayout from "./SidebarLayout";
import NavbarLayout from "./NavbarLayout";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <SidebarLayout />
        <div className="flex flex-col flex-1">
          <NavbarLayout />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
