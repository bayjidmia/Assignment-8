import React, { useEffect, useState } from "react";
import Install from "./Install";

const Installlist = () => {
  const [installlist, setinstalllist] = useState([]);

  useEffect(() => {
    const savedlist = JSON.parse(localStorage.getItem("installlist"));
    if (savedlist) setinstalllist(savedlist);
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex flex-col justify-center items-center mt-20 mb-10">
        <h1 className="text-2xl font-bold text-black">Your Installed Apps</h1>
        <p className="text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between mb-3">
        <h2> ({installlist.length})Apps Found</h2>
        <select className="btn">
          <option value="size">Sort By Size</option>
          <option value="name">Sort By Name</option>
        </select>
      </div>

      <div className="mb-5 px-10">
        {installlist.map((install) => (
          <Install
            install={install}
            key={install.id}
            setinstalllist={setinstalllist}
          ></Install>
        ))}
      </div>
    </div>
  );
};

export default Installlist;
