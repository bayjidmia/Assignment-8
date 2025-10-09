import React from "react";
import image1 from "../../assets/icon-downloads.png";
import image2 from "../../assets/icon-ratings.png";
import { toast } from "react-toastify";

const Install = ({ install, setinstalllist }) => {
  const handleremove = (id) => {
    const existinglist = JSON.parse(localStorage.getItem("installlist"));
    let updatelist = existinglist.filter((p) => p.id !== id);
    setinstalllist(updatelist);
    localStorage.setItem("installlist", JSON.stringify(updatelist));
  };

  return (
    <div className="mb-5">
      <div className="card p-5 bg-[#FFFFFF] card-xs shadow-sm">
        <div className="flex justify-between items-center">
          <div className="flex gap-5 items-center">
            <div>
              <img
                className="w-20 p-2 rounded-xl bg-gray-200 h-20"
                src={install.image}
                alt=""
              />
            </div>
            <div>
              <h1 className="mb-2 text-black">{install.title}</h1>
              <div className="flex items-center ml-3">
                <div className=" flex items-center">
                  <img className="w-4 h-4" src={image1} alt="" />
                  <h2 className="text-[#00D390]">{install.downloads}M</h2>
                </div>
                <div className="flex items-center ml-3">
                  <img className="w-4 h-4" src={image2} alt="" />
                  <h2 className="text-[#FF8811]">{install.ratingAvg}</h2>
                </div>
                <div className="ml-3">
                  <p className="text-[#627382]">{install.size} MB</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                handleremove(install.id);
                toast("the app uninstall");
              }}
              className="btn text-white btn-success"
            >
              Uninstall
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Install;
