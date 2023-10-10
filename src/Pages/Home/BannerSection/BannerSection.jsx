import React from "react";
import Banner from "./Banner";
import Links from "./Links";

const BannerSection = () => {
  return (
    <div className="primaryBgColor py-5">
      <div className="flex my-container gap-6 justify-between items-center">
        <div className="w-1/2">
          <Banner></Banner>
        </div>
        <div className="w-1/2">
          <Links></Links>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
