import React from "react";
import instaLogo from "../assets/Instagram_logo.png";

const Signin = () => {
  return (
    <div className="bg-white border-2 my-2 mx-12   max-w-[17rem] flex flex-col items-center p-6">
      <img src={instaLogo} alt="logo" width={150} height={50} />

      <form className="flex flex-col my-3">
        <input
          className="border my-1 p-2 text-xs rounded-sm bg-gray-100"
          placeholder="Username"
        />
        <input
          className="border my-1 p-2 text-xs rounded-sm bg-gray-100"
          placeholder="Password"
        />
        <p className="text-[0.65rem] text-gray-400 text-center py-2">
          People who use our service may have uploaded your contact information
          to Instagram.<span className="text-blue-800">Learn More.</span>
        </p>

        <button
          type="submit"
          className="bg-[#0095f6] text-xs text-white rounded-lg font-medium p-1.5 my-3"
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default Signin;
