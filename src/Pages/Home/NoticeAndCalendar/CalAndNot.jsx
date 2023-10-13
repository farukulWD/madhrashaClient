import React from "react";
import CalendarComponent from "./CalendarComponent";
import NoticeBoard from "./NoticeBoard";

const CalAndNot = () => {
  return (
    <div className="my-container my-5 md:flex justify-evenly gap-6">
      <div className="">
        <NoticeBoard></NoticeBoard>
      </div>
      <div className="">
        <CalendarComponent></CalendarComponent>
      </div>
    </div>
  );
};

export default CalAndNot;
