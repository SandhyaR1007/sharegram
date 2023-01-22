import React from "react";
import { BiHeart } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { MdOutlineExpandMore } from "react-icons/md";

const Navbar = () => {
  return (
    <div
      className="fixed bg-white py-1.5 px-2 flex items-center w-full justify-between md:hidden"
      style={{ borderBottom: "1px solid lightgray" }}
    >
      <div className="flex items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
          alt="sharegram"
          height={40}
          width={90}
        />
        <span>
          <MdOutlineExpandMore />
        </span>
      </div>

      <div className=" flex items-center bg-slate-200  rounded-md text-sm font-light">
        <span className="text-slate-400 ml-2">
          <BsSearch />
        </span>
        <input
          placeholder="Search"
          className="bg-slate-200 px-3 py-1 rounded-md text-sm font-light outline-none"
        />
      </div>

      <span className="text-2xl">
        <BiHeart />
      </span>
    </div>
  );
};

export default Navbar;
