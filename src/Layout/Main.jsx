import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Component/Shared/Navbar/Navbar";
import Footer from "../Component/Shared/Footer/Footer";
import TopHeader from "../Pages/Home/TopHeader/TopHeader";

const Main = () => {
  return (
    <>
      <TopHeader></TopHeader>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
