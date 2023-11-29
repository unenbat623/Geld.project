import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SignUp = () => {
  const router = useRouter();
  const handleSignUpClick1 = () => {
    router.push("/login");
  };
  const handleCurrencyClick = () => {
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
                  Create Geld account
                </div>
                <div className=" text-slate-700">
                  <p>Sign up below to create your Wallet account</p>
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="h-12 flex items-center w-[420px] py-2 bg-neutral-100 border border-slate-400 rounded-lg p-4"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className="h-12 flex items-center w-[420px] py-2 gap-1 bg-neutral-100 rounded-lg p-4 border border-slate-400 "
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Password"
                  className="h-12 flex items-center w-[420px] py-2 bg-neutral-100 border border-slate-400 rounded-xl p-4"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Re-Password"
                  className="h-12 flex items-center w-[420px] py-2 bg-neutral-100 border border-slate-400 rounded-xl p-4"
                />
              </div>
              <button
                type="submit"
                value="Submit"
                className=" flex justify-center items-center w-[420px] h-12 gap-1 bg-[#0166FF] rounded-3xl text-white"
                onClick={handleCurrencyClick}
              >
                Sign up
              </button>
              <div className="flex">
                <div>Already have account?</div>
                <button
                  className="text-[#0166FF] flex justify-center items-center gap-1 px-3 "
                  onClick={handleSignUpClick1}
                >
                  Log in
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

export default SignUp;
