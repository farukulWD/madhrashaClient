import React from "react";
import Marquee from "react-fast-marquee";

const Notice = () => {
  return (
    <div className="my-container">
      <div className="flex gap-2 my-1 border py-1">
        <h3 className="px-2 font-bold">Notice</h3>
        <Marquee>
          <div className="mx-2">Ami</div>
          <div className="mx-2">Ami2</div>
          <div className="mx-2">Ami3</div>
          <div className="mx-2">Ami4</div>
        </Marquee>
      </div>
    </div>
  );
};

export default Notice;
