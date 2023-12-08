import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const handleSignUpClick = () => {
    router.push("/signup");
  };
  const handleNumberOne = () => {
    router.push("/step_one");
  };
  useEffect(() => {}, []);
  return (
    <div className="flex w-screen h-screen">
    <div className="flex-1 flex flex-col items-center justify-center bg-white gap-3">
      <img src="Geld.svg"/>
      <h3 className="font-semibold text-xl text-gray-700 ">Welcome Back</h3>
      <p className="text-gray-300">
        Welcome back, Please enter your details
      </p>
      <input
        type="text"
        placeholder="Email"
        className="input input-bordered bg-[#F3F4F6] border-neutral-200 w-full mt-6 max-w-xs"
      />
      <input
        type="text"
        placeholder="Password"
        className="input input-bordered bg-[#F3F4F6] border-neutral-200 w-full max-w-xs"
      />
      <button
        onClick={handleNumberOne}
        className="btn bg-[#0166FF] border-[#0166FF] w-full max-w-xs text-lg text-white font-normal rounded-full"
      >
        Log in
      </button>
      <div className="flex gap-2 mt-7">
        <h3 className="text-[#334155]">Don't have an account?</h3>
        <button
          className="text-[#0166FF]"
          onClick={handleSignUpClick}
        >
          Sign up
        </button>
      </div>
    </div>
    <div className="flex-1 bg-[#0166FF] "></div>
  </div>
  );
};

export default Login;
