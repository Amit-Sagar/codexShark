import React from "react";

const Footer = () => {
  return (
    <footer className="mt-2 p-4 bg-slate-200">
      <div className="flex gap-4 sm:ml-10">
        <img
          src="https://images.template.net/wp-content/uploads/2014/09/Fitness-One-Logo.jpg"
          className="h-7 sm:h-10  object-cover"
        />
        <h1 className=" text-[#fdd141] cursor-pointer text-base sm:text-2xl font-bold">
          <span className="text-red-600">
            Fit
            <span className="text-amber-600">
              ne
              <span className="text-yellow-500">
                ss <span className="text-orange-400">One</span>
              </span>
            </span>
          </span>
        </h1>
        <p className="text-md text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-2">
          © 2023 Fitness One |
        </p>
        <p className="mt-2 text-gray-500 text-md">All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
