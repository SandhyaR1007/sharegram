import React, { useState } from "react";
import Signup from "../components/Signup";
import loginMobile from "../assets/loginMobile.png";
import login_1 from "../assets/login1.png";
import login_2 from "../assets/login2.png";
import login_3 from "../assets/login3.png";
import login_4 from "../assets/login4.png";

const Login = () => {
  let loginImgs = [
    { id: 1, img: login_1 },
    { id: 2, img: login_2 },
    { id: 3, img: login_3 },
    { id: 4, img: login_4 },
  ];
  const [currentImg, setCurrentImg] = useState(0);
  // setInterval(() => {
  //   if (currentImg == loginImgs.length - 1) {
  //     setCurrentImg(0);
  //   } else {
  //     setCurrentImg(currentImg + 1);
  //   }
  // }, 10000);

  return (
    <div className="h-full bg-gray-100 flex">
      <div className="hidden md:flex w-1/2 my-auto  justify-end">
        <img
          src={loginMobile}
          alt="loginMobile"
          className="max-w-sm relative"
        />
        <img
          src={loginImgs[currentImg].img}
          alt="loginMobile"
          className="absolute h-4/5 top-10 left-64 ease-in-out duration-500"
        />
      </div>
      <div className=" m-auto  md:w-1/2">
        <Signup />
        <div className="bg-white border-2 my-1 mx-12   max-w-[17rem] flex flex-col items-center py-2 px-6">
          <p className="text-xs  text-center py-2">
            Have an account?<span className="text-sky-700"> Log in</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
