import React from "react";
import { NavLink } from "react-router";
import { FaGithub } from "react-icons/fa6";
import image from "../../assets/logo.png";

const Navbar = () => {
  const handleClick = () => {
    window.location.href = "https://github.com/bayjidmia";
  };
  const link = (
    <>
      <NavLink
        to={"/Home"}
        className="mr-4 font-bold hover:underline hover:text-[#9F62F2]"
      >
        Home
      </NavLink>
      <NavLink
        to={"/apps"}
        className="mr-4 font-bold hover:underline hover:text-[#9F62F2]"
      >
        Apps
      </NavLink>
      <NavLink className="mr-4 font-bold hover:underline hover:text-[#9F62F2]">
        Installation
      </NavLink>
    </>
  );
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <a className="text-xl font-bold flex text-center items-center text-[#632EE3] ">
            {" "}
            <img className="w-[40px] h-[40px] mr-2" src={image} alt="" />{" "}
            HERO.IO
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          <a
            onClick={handleClick}
            className="btn text-white rounded-[4px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] "
          >
            {" "}
            <FaGithub /> Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
