import React from "react";
import BannerUp from "./BannerUp";
import Bannerdown from "./Bannerdown";

const Banner = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <BannerUp></BannerUp>
      <Bannerdown></Bannerdown>
    </div>
  );
};

export default Banner;
