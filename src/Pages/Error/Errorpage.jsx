import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import Error from "../Error2/Error";

const Errorpage = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar></Navbar>
      <Error></Error>
      <Footer></Footer>
    </div>
  );
};

export default Errorpage;
