import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";

const listOfItems: Array<string[]> = [
  ["💵", "Expense Tracker"],
  ["💎", "Assets Counter"],
  ["📈", "Stocks"],
  ["📊", "Analytics"],
  ["🚪", "Exit"],
];

const SidebarLayout: React.FC = () => {
  const { collapsed } = useProSidebar();

  const sidebarMenuItem = (list: Array<string[]>) => {
    return list.map((item: string[], idx: number) => {
      if (collapsed) {
        return <MenuItem key={idx}> {item[0]} </MenuItem>;
      } else {
        return (
          <MenuItem prefix={item[0]} key={idx}>
            {item[1]}
          </MenuItem>
        );
      }
    });
  };

  return (
    <Sidebar breakPoint="md" transitionDuration={1000}>
      <div className="py-3 px-3 text-center">
        <img
          className="w-16 h-16 rounded-full mx-auto mb-3 border-2 border-white shadow-md object-cover object-center bg-gray-100 overflow-hidden outline-none focus:outline-none ease-linear transition-all duration-150 cursor-pointer hover:shadow-lg hover:border-gray-300 hover:bg-gray-200 hover:text-gray-800 hover:opacity-75"
          src="https://picsum.photos/200/300"
          alt="Rounded avatar"
        ></img>
        <span className="text-black">Rencanain</span>
      </div>
      <Menu>
        <SubMenu
          prefix={collapsed ? "" : "📚"}
          label={collapsed ? "📚" : "Dashboard"}
        >
          <MenuItem prefix="📚" routerLink={<Link to="/" />}>
            Dashboard
          </MenuItem>
          <MenuItem prefix="⛹️‍♂️&nbsp;" routerLink={<Link to={"/profile"} />}>
            Profile
          </MenuItem>
        </SubMenu>
        {sidebarMenuItem(listOfItems)}
      </Menu>
    </Sidebar>
  );
};

export default SidebarLayout;
