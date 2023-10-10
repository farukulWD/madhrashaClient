import React from "react";
import { Link } from "react-router-dom";
import { AiFillMessage } from "react-icons/ai";

const Links = () => {
  return (
    <div className="bg-white">
      <div className="px-2 grid grid-cols-3 gap-4 py-2">
        <Link>
          <div className="flex flex-col text-2xl bg-green-200 border py-1 items-center gap-2">
            <AiFillMessage className=""></AiFillMessage>
            <span className="">Notice</span>
          </div>
        </Link>
        <Link>
          <div className="flex flex-col text-2xl bg-green-200 border py-1 items-center gap-2">
            <AiFillMessage className=""></AiFillMessage>
            <span className="">Notice</span>
          </div>
        </Link>
        <Link>
          <div className="flex flex-col text-2xl bg-green-200 border py-1 items-center gap-2">
            <AiFillMessage className=""></AiFillMessage>
            <span className="">Notice</span>
          </div>
        </Link>
        <Link>
          <div className="flex flex-col text-2xl bg-green-200 border py-1 items-center gap-2">
            <AiFillMessage className=""></AiFillMessage>
            <span className="">Notice</span>
          </div>
        </Link>
        <Link>
          <div className="flex flex-col text-2xl bg-green-200 border py-1 items-center gap-2">
            <AiFillMessage className=""></AiFillMessage>
            <span className="">Notice</span>
          </div>
        </Link>
        <Link>
          <div className="flex flex-col text-2xl bg-green-200 border py-1 items-center gap-2">
            <AiFillMessage className=""></AiFillMessage>
            <span className="">Notice</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Links;
