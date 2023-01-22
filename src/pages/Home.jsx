import React from "react";
import Stories from "../components/Stories";
import Post from "../components/Post";

const Home = () => {
  return (
    <div className="w-full md:w-4/5 flex">
      <div className="w-full md:w-2/3 md:px-5">
        <Stories />
        <Post />
        <Post />
        <Post />
      </div>
      <div className="hidden md:flex w-1/3">Sugggestions</div>
    </div>
  );
};

export default Home;
