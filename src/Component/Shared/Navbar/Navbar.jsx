import React from "react";

const Navbar = () => {
  const menuItem = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Teachers</a>
      </li>
      <li>
        <a className="primaryBgColor cursor-pointer">Login</a>
      </li>
    </>
  );
  return (
    <div className="primaryBgColor">
      <div className="navbar my-container">
        <div className="">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow primaryBgColor rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
        </div>
        <div className="hidden mx-auto lg:flex">
          <ul className="menu font-bold menu-horizontal px-1">{menuItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
