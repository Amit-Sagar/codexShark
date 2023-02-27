import React from "react";

const Footer = () => {
  return (
    <footer className="mt-2 p-4 bg-[#1e293b]">
      <div className="flex gap-4 sm:ml-10">
        <img
          src="https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/d9/8a/60/d98a60b7-19e2-ddb9-d777-b8a8692a46b5/AppIcon-1x_U007emarketing-0-10-0-85-220.png/512x512bb.jpg"
          className="h-7 sm:h-10  object-cover"
        />
        <h1 className="text-[#fffbeb] text-xl">WeatherWen</h1>
        <p className="text-md text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-2">
          © 2023 WeatherWen |
        </p>
        <p className="mt-2 text-gray-500 text-md">All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
