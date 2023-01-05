import React from "react";
import { Outlet } from "react-router-dom";
import SidebarLayout from "./SidebarLayout";
import NavbarLayout from "./NavbarLayout";

const MainLayout: React.FC = () => {
  return (
    <div className="flex h-screen min-h-screen">
      <SidebarLayout />
      {/* <div className="flex h-screen min-h-screen flex-col">
        <NavbarLayout /> */}
      <main className="px-8">
        <Outlet />
      </main>
    </div>
    // </div>
  );
};

export default MainLayout;
