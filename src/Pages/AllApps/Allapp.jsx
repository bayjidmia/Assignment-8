import React from "react";
import image from "../../assets/icon-ratings.png";
import image1 from "../../assets/icon-downloads.png";

const Allapp = ({ allapp }) => {
  console.log(allapp);
  return (
    <div>
      <div className="">
        <div className="card bg-[#FFFFFF] mb-10 mt-10 mr-5 ml-5 shadow-lg">
          <figure>
            <img
              className="w-[300px] bg-gray-200 rounded-[8px] p-4"
              src={allapp.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-center">{allapp.title}</h2>
          </div>
          <div className="flex justify-between">
            <button className="rounded-[6px] bg-[#F1F5E8] flex items-center p-2 ml-4 mb-4 ">
              <img className="w-4 h-4 mr-2" src={image1} alt="" />
              <p className="text-[#00D390] font-semibold">
                {" "}
                {allapp.downloads}M
              </p>
            </button>
            <button className=" rounded-[6px] bg-[#FFF0E1] flex items-center p-2 mr-4 mb-4">
              <img className="w-4 h-4 mr-2" src={image} alt="" />
              <p className="text-[#FF8811]"> {allapp.ratingAvg}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allapp;
