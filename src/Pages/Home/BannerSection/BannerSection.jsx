import React from "react";
import Banner from "./Banner";
import Links from "./Links";

const BannerSection = () => {
  return (
    <div className="primaryBgColor py-10">
      <div className="md:flex my-container gap-10 justify-between items-center">
        <div className="my-2  md:w-1/2">
          <Banner></Banner>
        </div>
        <div className=" md:w-1/2">
          <Links></Links>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
