import React from "react";
import Banner from "../Banner/Banner";
import TrendingApps from "./TrendingApps";
import { useLoaderData, useNavigation } from "react-router";

const Home = () => {
  const allapps = useLoaderData();
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-blue-500"></span>
      </div>
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
