import React from "react";
import instaLogo from "../assets/Instagram_logo.png";

const Signup = () => {
  return (
    <div className="bg-white border-2 my-2 mx-12   max-w-[17rem] flex flex-col items-center p-6">
      <img src={instaLogo} alt="logo" width={150} height={50} />
      <p className="text-gray-400 font-medium text-sm text-center">
        Sign up to see photos and videos from your friends.
      </p>
      <form className="flex flex-col my-3">
        <input
          className="border my-1 p-2 text-xs rounded-sm bg-gray-100"
          placeholder="Mobile Number or Email"
        />
        <input
          className="border my-1 p-2 text-xs rounded-sm bg-gray-100"
          placeholder="Full Name"
        />
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
        <p className="text-[0.65rem] text-gray-400 text-center py-2">
          By signing up, you agree to our
          <span className="text-blue-800"> Terms</span>,
          <span className="text-blue-800"> Privacy Policy</span> and{" "}
          <span className="text-blue-800">Cookies Policy</span> .
        </p>
        <button
          type="submit"
          className="bg-[#0095f6] text-xs text-white rounded-lg font-medium p-1.5 my-3"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
