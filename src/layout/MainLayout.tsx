import React from "react";
import { Outlet } from "react-router-dom";
import SidebarLayout from "./SidebarLayout";
import NavbarLayout from "./NavbarLayout";

const MainLayout: React.FC = () => {
  return (
    <div className="flex h-screen">
      <SidebarLayout />
      <div className="flex flex-col flex-1 h-screen">
        <NavbarLayout />
        <main className="h-full overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
