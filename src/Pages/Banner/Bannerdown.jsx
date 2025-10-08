import React from "react";
import image from "../../assets/hero.png";

const Bannerdown = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center mt-5">
        <img className="w-3/6" src={image} alt="" />
      </div>
      <div className="bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] mb-10 p-10">
        <h1 className="text-center text-white my-5 text-4xl font-extrabold">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-20">
          <div className="text-white flex flex-col items-center">
            <p>Total Downloads</p>
            <h1 className="text-2xl font-bold">29.6M</h1>
            <p>21% more than last month</p>
          </div>
          <div className="text-white flex flex-col items-center">
            <p>Total Reviews</p>
            <h1 className="text-2xl font-bold">906K</h1>
            <p>46% more than last month</p>
          </div>
          <div className="text-white flex flex-col items-center">
            <p>Active Apps</p>
            <h1 className="text-2xl font-bold">132+</h1>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannerdown;
