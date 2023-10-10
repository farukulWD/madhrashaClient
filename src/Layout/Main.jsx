import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Component/Shared/Navbar/Navbar";
import Footer from "../Component/Shared/Footer/Footer";
import TopHeader from "../Pages/Home/TopHeader/TopHeader";
import Notice from "../Component/Notice/Notice";

const Main = () => {
  return (
    <>
      <TopHeader></TopHeader>
      <Navbar></Navbar>
      <Notice></Notice>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
