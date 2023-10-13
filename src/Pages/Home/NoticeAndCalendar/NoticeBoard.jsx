import axios from "axios";
import React from "react";
import { useState } from "react";

const NoticeBoard = () => {
  const [notice, setNotice] = useState([]);
  axios.get("notice.json").then((res) => setNotice(res.data));
  return (
    <div className="primaryBgColor md:w-96 p-4">
      <div className="bg-white mb-2 rounded">
        <h3 className="px-2 py-1 text-2xl font-bold text-center">Notice:</h3>
      </div>
      {notice?.slice(0, 5).map((nt) => (
        <div className="bg-white px-2 rounded mb-1">
          <h2 className="text-xl">{nt?.title}</h2>
          <p>{nt?.date}</p>
        </div>
      ))}
      <div className="flex justify-center">
        <button className="btn btn-sm">All Notice</button>
      </div>
    </div>
  );
};

export default NoticeBoard;
