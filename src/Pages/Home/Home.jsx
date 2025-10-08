import React from "react";
import Banner from "../Banner/Banner";
import TrendingApps from "./TrendingApps";
import { useLoaderData, useNavigation } from "react-router";
import image from "../../assets/logo.png";

const Home = () => {
  const allapps = useLoaderData();
  console.log(allapps);
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return (
      <p className="text-center text-lg animate-spin font-semibold">
        <img src={image} alt="" />
        Loading...
      </p>
    );
  }

  return (
    <div>
      <Banner></Banner>
      <TrendingApps allapps={allapps}></TrendingApps>
    </div>
  );
};

export default Home;
