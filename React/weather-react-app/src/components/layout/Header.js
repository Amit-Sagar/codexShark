import React from "react";

const Header = () => {
  return (
    <header className="flex gap-12 items-center bg-[#065f46] backdrop-blur-md sm:p-10 h-14 ">
      <div className="flex gap-6">
        <img
          src="https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/d9/8a/60/d98a60b7-19e2-ddb9-d777-b8a8692a46b5/AppIcon-1x_U007emarketing-0-10-0-85-220.png/512x512bb.jpg"
          className="ml-2 sm:ml-0 h-7 sm:h-10 object-cover"
        />
        <h1 className="text-[#fffbeb] text-xl">WeatherWen</h1>
      </div>

      <h1 className="text-[#fed7aa] mb-2">Home</h1>
    </header>
  );
};

export default Header;
