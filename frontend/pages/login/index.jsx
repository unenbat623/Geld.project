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
    <div>
      <div>
        <div className="flex">
          <div className="h-screen w-full bg-white">
            <div className=" flex-col items-center gap-10 flex justify-center mt-[300px] ml-20">
              <div className="flex">
                <img src="vector.png" />
                <img src="Geld.svg" className=" md:drop-shadow-xl px-2" />
              </div>
              <div className="flex-col">
                <div className="text-slate-900 text-center text-2xl p-2">
                  Welcome Back
                </div>
                <div className=" text-slate-700">
                  <p>Welcome back, Please enter your details</p>
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className="h-12 flex items-center w-[420px] py-2 bg-neutral-100 border border-slate-400 rounded-xl p-4"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Password"
                  className="h-12 flex items-center w-[420px] py-2 bg-neutral-100 border border-slate-400 rounded-xl p-4"
                />
              </div>
              <button
                type="submit"
                value="Submit"
                className=" flex justify-center items-center w-[420px] h-12 gap-1 bg-[#0166FF] rounded-3xl text-white"
                onClick={handleNumberOne}
              >
                Log in
              </button>
              <div className="flex">
                <div>Don’t have account?</div>
                <button
                  className="text-[#0166FF] flex justify-center items-center gap-1 px-3 "
                  onClick={handleSignUpClick}
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#0166FF] h-screen w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
