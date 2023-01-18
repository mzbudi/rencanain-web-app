import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Menu from "./pages/Menu/Menu";

// layout
import MainLayout from "./layout/MainLayout";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/expense-tracker" element={<Menu />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/assets-counter" element={<Profile />} />
          <Route path="/analytics" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
