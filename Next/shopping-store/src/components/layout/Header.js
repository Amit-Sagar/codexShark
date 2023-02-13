import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center space-x-5">
      <div className="flex md:ml-10 items-center mt-2">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
        </div>
        <div className="ml-3 font-medium">
          <h1 className="text-xl text-center text-green-600">
            Shop<span className="text-blue-900">ify</span>
          </h1>
        </div>
      </div>
      <div className="mt-2">
        <ul className="flex items-center space-x-2 font-medium">
          <Link href={"/"}>
            <li>Tshirts</li>
          </Link>
          <Link href={"/"}>
            <li>Hoodies</li>
          </Link>
          <Link href={"/"}>
            <li>Stickers</li>
          </Link>
          <Link href={"/"}>
            <li>Mugs</li>
          </Link>
        </ul>
      </div>
      <div className="flex absolute right-5 top-3 h-[40px]">
        <AiOutlineShoppingCart className="text-2xl md:text-3xl cursor-pointer" />
        <span className="mt-[-8px]">0</span>
      </div>
    </div>
  );
};

export default Header;
