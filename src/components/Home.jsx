import React from "react";
import SocialMedia from "./SocialMedia";
import Banner from "./Banner";
import Services from "./Services";

const Home = () => {
  return (
    <div className="w-full min-h-screen h-fit pb-10">
      <div className="w-full md:w-[75%] h-fit m-auto md:mt-20 ">
        <Banner />
        <Services />
        <SocialMedia />
      </div>
    </div>
  );
};

export default Home;
