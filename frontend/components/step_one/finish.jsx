import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Finish = () => {
  const router = useRouter();
  const handleHomeClick = () => {
    router.push("/");
  };
  useEffect(() => {}, []);
  return (
    <div className="flex">
      <div className="h-screen w-full justify-center items-center text-center  bg-white">
        <div className="mt-16">
          <div className="flex gap-2 mb-10 justify-center">
            <img src="vector.png" />
            <img src="Geld.svg" className=" px-2" />
          </div>
          <div className="flex-col mx-3 mb-10">
            <ul className="steps steps-vertical lg:steps-horizontal">
              <li className="step step-info ml-5">Currency</li>
              <li className="step step-info mx-3">Balance</li>
              <li className="step step-info mr-5">Finish</li>
            </ul>
          </div>
        </div>
        <div className="flex mt-[150px] flex-col items-center justify-center ">
          <div>
            <img
              src="Check.svg"
              className="border-8 flex justify-center bg-[#0166FF] rounded-full border-[#0166FF]"
            />
          </div>
          <div className="p-3 font-semibold text-2xl">Good Job!</div>
        </div>
        <p className="text-slate-600 p-5">
          Your very first account has been created.
          <br />
          Now continue to dashboard and start tracking
        </p>
        <div className="flex justify-center">
          <button
            type="submit"
            value="Submit"
            className=" flex justify-center items-center w-[420px] h-12 gap-1 bg-[#0166FF] rounded-3xl text-white"
            onClick={handleHomeClick}
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Finish;
