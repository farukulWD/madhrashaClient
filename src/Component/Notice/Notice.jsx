import axios from "axios";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Notice = () => {
  const [notice, setNotice] = useState([]);
  axios.get("notice.json").then((res) => {
    setNotice(res.data);
  });

  return (
    <div className="my-container">
      <div className="flex gap-2 my-1 border py-1">
        <h3 className="px-2 text-xl text-red-600 font-bold">Notice</h3>
        <Marquee>
          {notice?.map((no, index) => (
            <h className="mx-2 cursor-pointer text-red-800" key={index}>
              <Link to={"/notice"}>
                <span className="">{index + 1}</span>
                --{no?.title}
              </Link>
            </h>
          ))}
          {/* <div className="mx-2">Ami</div>
          <div className="mx-2">Ami2</div>
          <div className="mx-2">Ami3</div>
          <div className="mx-2">Ami4</div> */}
        </Marquee>
      </div>
    </div>
  );
};

export default Notice;
