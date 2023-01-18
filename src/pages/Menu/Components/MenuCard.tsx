import React from "react";

interface MenuCardProps {
  name: string;
  price: number;
}

const rupiah = (value: number) => {
  return value.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
};

const MenuCard: React.FC<MenuCardProps> = ({ name, price }) => {
  return (
    <div className="flex-1 pb-2 block bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <img
        src="https://picsum.photos/200/300"
        alt="Nasi Goreng"
        className="w-full h-64 object-fill rounded-t-lg mb-2"
      />

      <div className="flex flex-col mx-2">
        <h5 className="text-lg my-2 font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>

        <p className="font-normal my-2 text-gray-700 dark:text-gray-400">
          {rupiah(price)}
        </p>

        <button className="bg-primary mt-2 hover:bg-borderPrimary focus:outline-none text-gray-800 font-bold py-2 px-4 rounded-[4px]">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
