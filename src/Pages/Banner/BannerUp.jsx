import React from "react";
import image from "../../assets/icons8-google-play-store-48.png";
import image2 from "../../assets/icons8-app-store-48.png";

const BannerUp = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center mt-20 ">
      <div>
        <h1 className="text-4xl font-extrabold">
          We Build <br />{" "}
          <span className="bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] bg-clip-text text-transparent ">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-[#627382] mt-4">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting . <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
      </div>

      <div className="mt-5">
        <button class="btn mr-6">
          {" "}
          <img className="w-[26px] h-[30px] " src={image} alt="" />
          Google Play
        </button>
        <button class="btn">
          {" "}
          <img className="w-[26px] h-[30px]" src={image2} alt="" /> App Store
        </button>
      </div>
    </div>
  );
};

export default BannerUp;
