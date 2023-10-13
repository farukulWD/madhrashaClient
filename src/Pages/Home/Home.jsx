import React from "react";
import Notice from "../../Component/Notice/Notice";
import BannerSection from "./BannerSection/BannerSection";
import CalAndNot from "./NoticeAndCalendar/CalAndNot";

const Home = () => {
  return (
    <div>
      <Notice></Notice>
      <BannerSection></BannerSection>
      <CalAndNot></CalAndNot>
    </div>
  );
};

export default Home;
