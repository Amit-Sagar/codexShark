import React from "react";
import { CryptoState } from "./Context";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { currency, symbol, setCurrency } = CryptoState();
  const navigate = useNavigate();
  return (
    <header className="flex justify-evenly sm:justify-between items-center bg-black/[0.1] shadow-sm shadow-white p-10 h-14">
      <div>
        <h1
          className=" text-[#fdd141] cursor-pointer text-2xl font-bold"
          onClick={() => navigate("/")}
        >
          Crypto Matrix
        </h1>
      </div>
      <select
        name=""
        id="demo-simple-select"
        className="bg-gray-600 px-2 py-1 rounded-md"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        <option value="INR">INR</option>
        <option value="USD">USD</option>
      </select>
    </header>
  );
};

export default Header;
