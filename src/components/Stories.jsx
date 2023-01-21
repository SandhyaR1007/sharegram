import React from "react";

const Stories = () => {
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
    <ul className="flex w-full md:w-1/3 justify-center  p-0">
      {story.map((item) => (
        <li className="flex flex-col justify-center items-center mx-2 py-1 px-0.5">
          <img
            className={`rounded-full p-0.5 border-2 ${
              item.seen ? "border-gray-300" : "border-red-600"
            } `}
            src={item.img}
            alt={item.name}
            width="50px"
            style={{ height: "50px" }}
          />

          <span
            className={`text-xs my-0.5 ${
              item.seen ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {item.name}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Stories;
