import React from "react";
import { BiHeart } from "react-icons/bi";
import { BsThreeDots, BsDot } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { CiSaveDown2 } from "react-icons/ci";

const Post = () => {
  let story = [
    {
      id: 1,
      name: "Your story",
      img: "https://source.unsplash.com/random/?girl/",
      seen: true,
    },
    {
      id: 2,
      name: "thecodedose",
      img: "https://source.unsplash.com/random/?code/",
      seen: false,
    },
    {
      id: 3,
      name: "google",
      img: "https://source.unsplash.com/random/?google/",
      seen: false,
    },
    {
      id: 4,
      seen: true,
      name: "snow",
      img: "https://source.unsplash.com/random/?dogs/",
    },
    {
      id: 5,
      seen: true,
      name: "bts",
      img: "https://source.unsplash.com/random/?music/",
    },
  ];
  return (
    <div className="px-1 py-2" style={{ borderBottom: "1px solid lightgray" }}>
      {/* acc details */}
      <div className="flex items-center justify-between ">
        <div className="flex items-center my-1">
          <img
            src={story[1].img}
            alt={story[1].name}
            className={`rounded-full p-0.5 border-2 border-red-600 `}
            width="40px"
            style={{ height: "40px" }}
          />
          <span className="text-sm px-1">{story[1].name}</span>
          <span className="flex items-center text-sm text-gray-500">
            <BsDot /> 2d
          </span>
        </div>
        <span>
          <BsThreeDots />
        </span>
      </div>
      {/* media */}
      <div>
        <img src={story[0].img} alt={story[0].name} className="rounded-sm" />
      </div>
      {/* media details */}
      <div className="mx-1">
        <div className="flex items-center justify-between my-2">
          <div className="flex ">
            <BiHeart className=" text-md" />
            <FaRegComment className="mx-1 text-md" />
            <FiSend className="mx-1 text-md" />
          </div>
          <span>
            <CiSaveDown2 className="mx-1 text-md" />
          </span>
        </div>
        <div className="text-sm">1200 likes</div>
        <div className="text-sm ">
          <span className="font-semibold mr-2">{story[1].name}</span>
          Everyone has their own timeline, so just do your best and stay
          disciplined. Be honest and consistent with your efforts...
        </div>
        <p className="text-sm text-gray-400">View all 7 comments</p>
      </div>
    </div>
  );
};

export default Post;
