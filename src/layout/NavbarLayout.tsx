import React, { useState } from "react";
// import { Link } from "react-router-dom";

const NavbarLayout: React.FC = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <header>
      <nav className="w-full grow bg-white shadow">
        <div className="justify-between px-2 pb-1 mx-auto md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="a">
                <h2 className="text-2xl font-bold text-gray-600 hover:text-blue-600 cursor-pointer hover:text-blue-600 hover:scale-125 ease-linear transition-all duration-150 outline-none focus:outline-none">
                  LOGO
                </h2>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-gray-600 hover:text-blue-600 cursor-pointer hover:text-blue-600 hover:scale-125 ease-linear transition-all duration-150 outline-none focus:outline-none">
                  <a href="a">Home</a>
                </li>
                <li className="text-gray-600 hover:text-blue-600 cursor-pointer hover:text-blue-600 hover:scale-125 ease-linear transition-all duration-150 outline-none focus:outline-none">
                  <a href="a">Contact US</a>
                </li>
                <li>
                  <img
                    className="w-10 h-10 hover:scale-125 rounded-full border-2 border-white shadow-md object-cover object-center bg-gray-100 overflow-hidden outline-none focus:outline-none ease-linear transition-all duration-150 cursor-pointer hover:shadow-lg hover:border-gray-300 hover:bg-gray-200 hover:text-gray-800 hover:opacity-75"
                    src="https://picsum.photos/200/300"
                    alt="Rounded avatar"
                  ></img>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 cursor-pointer hover:text-blue-600 hover:scale-125 ease-linear transition-all duration-150 outline-none focus:outline-none"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarLayout;
