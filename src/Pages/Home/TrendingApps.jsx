import React from "react";

import Tapp from "./Tapp";

const TrendingApps = ({ allapps }) => {
  console.log(allapps);
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className=" flex flex-col justify-center items-center mb-5 text-center">
        <h1 className="text-4xl text-[#001931] font-extrabold">
          Trending Apps
        </h1>
        <p className="text-[#627382] mt-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {allapps.map((allapp) => (
          <Tapp allapp={allapp} key={allapp.id}></Tapp>
        ))}
      </div>
    </div>
  );
};

export default TrendingApps;
