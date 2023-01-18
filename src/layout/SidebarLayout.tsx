import React from "react";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";

const listOfItems: Array<string[]> = [
  ["💵", "Expense Tracker", "expense-tracker"],
  ["🍔", "Menu", "menu"],
  ["💎", "Assets Counter", "assets-counter"],
  ["📊", "Analytics", "analytics"],
  ["🚪", "Exit", "logout"],
];

const SidebarLayout: React.FC = () => {
  const { collapsed, collapseSidebar } = useProSidebar();

  const { pathname } = useLocation();

  const sidebarMenuItem = (list: Array<string[]>) => {
    return list.map((item: string[], idx: number) => {
      if (collapsed) {
        return (
          <MenuItem
            key={idx}
            routerLink={<Link to={`/${item[2]}`} />}
            active={pathname === `/${item[2]}`}
          >
            {item[0]}
          </MenuItem>
        );
      } else {
        return (
          <MenuItem
            prefix={item[0]}
            key={idx}
            routerLink={<Link to={`/${item[2]}`} />}
            active={pathname === `/${item[2]}`}
          >
            {item[1]}
          </MenuItem>
        );
      }
    });
  };

  const sidebarResponsiveImage = () => {
    if (collapsed) {
      return (
        <img
          className="w-10 h-10 hover:scale-125 rounded-full border-2 border-white shadow-md object-cover object-center bg-gray-100 overflow-hidden outline-none focus:outline-none ease-linear transition-all duration-150 cursor-pointer hover:shadow-lg hover:border-gray-300 hover:bg-gray-200 hover:text-gray-800 hover:opacity-75"
          src="https://picsum.photos/200/300"
          alt="Rounded avatar"
        ></img>
      );
    } else {
      return (
        <img
          className="w-24 h-24 hover:scale-110 rounded-full border-2 border-white shadow-md object-cover object-center bg-gray-100 overflow-hidden outline-none focus:outline-none ease-linear transition-all duration-150 cursor-pointer hover:shadow-lg hover:border-gray-300 hover:bg-gray-200 hover:text-gray-800 hover:opacity-75"
          src="https://picsum.photos/200/300"
          alt="Rounded avatar"
        ></img>
      );
    }
  };

  console.log("collapsed: ", collapsed);

  return (
    <Sidebar
      transitionDuration={1000}
      collapsedWidth="60px"
      className="h-screen"
    >
      <div
        className={`${
          collapsed ? "h-20" : "h-40"
        } flex mx-auto justify-center items-center flex-col`}
        onClick={() => {
          collapseSidebar();
        }}
      >
        {sidebarResponsiveImage()}
        {collapsed ? "" : "Rencanain"}
      </div>
      <Menu>
        <SubMenu
          defaultOpen
          prefix={collapsed ? "" : "📚"}
          label={collapsed ? "📚" : "Dashboard"}
        >
          <MenuItem
            prefix="📚"
            routerLink={<Link to="/" />}
            active={pathname === "/"}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            prefix="⛹️‍♂️&nbsp;"
            routerLink={<Link to={"/profile"} />}
            active={pathname === "/profile"}
          >
            Profile
          </MenuItem>
        </SubMenu>
        {sidebarMenuItem(listOfItems)}
      </Menu>
    </Sidebar>
  );
};

export default SidebarLayout;
