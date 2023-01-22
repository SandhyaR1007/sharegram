import React from "react";
import { BiHeart } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { MdExplore } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { RiFilmFill, RiMessengerLine } from "react-icons/ri";
import { FiPlusSquare } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

const Menubar = () => {
  const divClasses =
    "flex items-center p-2 md:rounded-[20px] md:hover:bg-gray-100 cursor-pointer ";
  const iconClasses = "text-xl md:mr-2";
  const labelClasses = "hidden md:block mx-2 text-sm";
  return (
    <div
      className="flex justify-between md:justify-around md:flex-col 
    w-full md:w-1/5  
    fixed  
    md:relative
    h-10 md:h-screen bottom-0 
    pb-2
     md:p-5
     border-t-2
     md:border-r-2
     md:border-t-0
     bg-white
     "
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
        alt="sharegram"
        height={40}
        width={90}
        className="my-1 mx-2 hidden md:block"
      />
      <div className={`${divClasses}`}>
        <span className="text-xl md:mr-2 ">
          <HiHome />
        </span>
        <span className={`${labelClasses}`}>Home</span>
      </div>

      <div className={`${divClasses}`}>
        <span className={`${iconClasses} hidden md:block`}>
          <BsSearch />
        </span>
        <span className={`${labelClasses}`}>Search</span>
      </div>
      <div className={`${divClasses}`}>
        <span className={`${iconClasses}`}>
          <MdExplore />
        </span>
        <span className={`${labelClasses}`}>Explore</span>
      </div>
      <div className={`${divClasses}`}>
        <span className={`${iconClasses}`}>
          <RiFilmFill />
        </span>
        <span className={`${labelClasses}`}>Reels</span>
      </div>
      <div className={`${divClasses}`}>
        <span className={`${iconClasses}`}>
          <RiMessengerLine />
        </span>
        <span className={`${labelClasses}`}>Message</span>
      </div>
      <div className={`${divClasses}`}>
        <span className={`${iconClasses} hidden md:block`}>
          <BiHeart />
        </span>
        <span className={`${labelClasses}`}>Notifications</span>
      </div>

      <div className={`${divClasses}`}>
        <span className={`${iconClasses}`}>
          <FiPlusSquare />
        </span>
        <span className={`${labelClasses}`}>Create</span>
      </div>
      <div className={`${divClasses}`}>
        <span className={`${iconClasses}`}>
          <CgProfile />
        </span>
        <span className={`${labelClasses}`}>Profile</span>
      </div>
    </div>
  );
};

export default Menubar;
