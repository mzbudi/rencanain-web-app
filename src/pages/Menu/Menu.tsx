import React from "react";
import MenuCard from "./Components/MenuCard";

const arr = Array(10).fill(0);

const Menu: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto flex flex-col">
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 px-4 py-4 gap-4">
        {arr.map((_, index) => (
          <MenuCard key={index} name="Nasi Goreng" price={15000} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
