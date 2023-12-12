import React from "react";
import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import { UserContext } from "../context/UserProvider";

const SignUp = () => {
  const router = useRouter();
  const handleSignUpClick1 = () => {
    router.push("/login");
  };

  useEffect(() => {}, []);

  const { changeFormUserData, signup } = useContext(UserContext);

  return (
    <div className="flex w-screen h-screen">
    <div className="flex-1 flex flex-col items-center justify-center bg-white gap-3">
      <div className="flex gap-2">
      <img src="vector.png"/>
     <img src="Geld.svg"/>
     </div>
      <h3 className="font-semibold text-xl text-gray-700 ">Create Geld account</h3>
      <p className="text-gray-300">
        Sign up below to create your wallet account
      </p>
      <input
        type="text"
        placeholder="Name"
        className="input input-bordered bg-[#F3F4F6] border-neutral-200 w-full mt-6 max-w-xs"
        name="name"
        onChange={(e)=>{
          changeFormUserData(e.target.name,e.target.value)
        }}
        value={changeFormUserData.name}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        className="input input-bordered bg-[#F3F4F6] border-neutral-200 w-full max-w-xs"
        onChange={(e)=>{
          changeFormUserData(e.target.name,e.target.value)
        }}
        value={changeFormUserData.email}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        className="input input-bordered bg-[#F3F4F6] border-neutral-200 w-full max-w-xs"
        onChange={(e)=>{
          changeFormUserData(e.target.name,e.target.value)
        }}
        value={changeFormUserData.password}
      />
      <input
        type="password"
        name="re-password"
        placeholder="Re-password"
        className="input input-bordered bg-[#F3F4F6] border-neutral-200 w-full max-w-xs"
        onChange={(e)=>{
          changeFormUserData(e.target.name,e.target.value)
        }}
        value={changeFormUserData.password}
      />
      <button
        onClick={signup}
        className="btn bg-[#0166FF] border-[#0166FF] w-full max-w-xs text-lg text-white font-normal rounded-full"
      >
        Sign up
      </button>
      <div className="flex gap-2 mt-7">
        <h3 className="text-[#334155]">Already have account?</h3>
        <button
          onClick={handleSignUpClick1}
          className="text-[#0166FF]"
        >
          Log in
        </button>
      </div>
    </div>
    <div className="flex-1 bg-[#0166FF] "></div>
  </div>
  );
};

export default SignUp;
