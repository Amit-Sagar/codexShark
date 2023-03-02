import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-cyan-900 via-cyan-800 to-cyan-700 py-6 px-10">
      <div className="flex">
        <h1 className="w-[13%] text-xl text-white">Monuments Trip</h1>
        <div className="flex w-3/4">
          <p className="text-md text-gray-500 sm:border-l-2 sm:border-gray-200 mt-1">
            © 2023 Monuments Trip |
          </p>
          <p className="mt-1 text-gray-500 text-md">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
