import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useLoaderData } from "react-router";

const Allapps = () => {
  const allapps = useLoaderData();
  console.log(allapps);

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex flex-col justify-center items-center text-center mt-8">
        <h1 className="text-4xl text-black font-extrabold">
          Our All Applications
        </h1>
        <p className="text-[#627382] mt-3">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex  justify-between mt-10 mr-5 ml-5 mb-10">
        <h1>() Apss Found</h1>
        <div className="relative w-1/2 lg:w-full max-w-sm">
          <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-[#627382] text-xl pointer-events-none" />
          <input
            className=" border border-[#D2D2D2] w-full h-[44px]  pl-10 pr-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
            type="search"
            name=""
            placeholder="search Apps"
            id=""
          />
        </div>
      </div>
    </div>
  );
};

export default Allapps;
