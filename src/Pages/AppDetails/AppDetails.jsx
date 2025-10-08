import React from "react";
import { useLoaderData, useParams } from "react-router";
import image1 from "../../assets/icon-downloads.png";
import image2 from "../../assets/icon-ratings.png";
import image3 from "../../assets/icon-review.png";
import AppCgart from "./AppCgart";

const AppDetails = () => {
  const { id } = useParams();
  console.log(id);
  const appsid = parseInt(id);

  const data = useLoaderData();
  console.log(data);
  const singleApp = data.find((app) => app.id === appsid);
  console.log(singleApp);
  const ratings = singleApp.ratings;
  return (
    <div className="max-w-[1440px] mx-auto px-20">
      <div className="flex flex-col md:flex-row w-full  gap-10 mt-8 mb-8">
        <div>
          <img className="h-[350px]" src={singleApp.image} alt="" />
        </div>
        <div className="h-[350px] w-full">
          <div>
            <h1 className="text-xl font-bold text-black">{singleApp.title}</h1>
            <p className="mt-3">
              Developed by :{" "}
              <span className="bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] bg-clip-text text-transparent font-bold">
                {singleApp.companyName}
              </span>
            </p>
          </div>
          <div className="border border-gray-300 w-full mt-10 "></div>
          <div className="flex mt-10">
            <div className="mr-8">
              <img src={image1} alt="" />
              <p className="mt-1">Downloads</p>
              <h2 className="text-black text-xl font-bold mt-2">
                {singleApp.downloads}M
              </h2>
            </div>
            <div className="mr-8">
              <img src={image2} alt="" />
              <p className="mt-1">Average Ratings</p>
              <h2 className="text-black text-xl font-bold mt-2">
                {singleApp.ratingAvg}
              </h2>
            </div>
            <div>
              <img src={image3} alt="" />
              <p className="mt-1">Total Reviews</p>
              <h2 className="text-black text-xl font-bold mt-2">
                {singleApp.reviews}k
              </h2>
            </div>
          </div>
          <div className="mt-10">
            <button className="btn btn-success text-white">
              Install Now ({singleApp.size}MB)
            </button>
          </div>
        </div>
      </div>
      <div className="border border-gray-300 w-full mt-10 mb-5 "></div>
      <div className="w-full flex justify-center md:w-full h-[300px]">
        <AppCgart ratings={ratings}></AppCgart>
      </div>

      <div className="mb-5">
        <h2 className="mt-5 text-xl text-black font-bold">Description</h2>
        <p className="mt-3 text-[#627382]">{singleApp.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
