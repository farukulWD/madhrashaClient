import React from "react";
import logo from "../../../assets/logo.png";
import Container from "../../../Component/Container/Container";

const TopHeader = () => {
  return (
    <div>
      <h4 className="py-2 primaryBgColor text-center font-bold text-white">
        EIIEl-32150
      </h4>

      <div className="my-container my-5 flex justify-center">
        <div className="flex gap-3">
          <div>
            <img className="h-10 w-10" src={logo} alt="" />
          </div>
          <div className="text-center">
            <h2 className="text-2xl  font-bold">
              Chithulia Digar Alim Madrasah
            </h2>
            <p className="text-lg font-semibold">Mollar Char, Gaibandah</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
