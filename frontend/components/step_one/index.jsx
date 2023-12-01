import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Currency = () => {
  const router = useRouter();
  const handleBalanceClick = () => {
    router.push("/step_two");
  };
  useEffect(() => {}, []);
  return (
    <div className="flex">
      <div className="h-screen w-full justify-center items-center text-center  bg-white">
        <div className="mt-20">
          <div className="flex gap-2 mb-10 justify-center">
            <img src="vector.png" />
            <img src="Geld.svg" className=" px-2" />
          </div>
          <div className="flex-col mb-10">
            <ul className="steps steps-vertical lg:steps-horizontal">
              <li className="step step-info">Currency</li>
              <li className="step ">Balance</li>
              <li className="step">Finish</li>
            </ul>
          </div>
        </div>
        <div className="mt-[250px]">
          <div className="flex justify-center ">
            <img
              src="Money.png"
              className="border-8 bg-[#0166FF] rounded-full border-[#0166FF]"
            />
            <div className="p-3 font-semibold text-2xl">
              Select base currency
            </div>
          </div>
          <div className="flex justify-center mt-6 p-5 items-center text-center">
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                MNT - Mongolian Tugrik
              </option>
              <option>USD - US Dollar</option>
              <option>EUR - Euro</option>
            </select>
          </div>
          <p className="text-slate-600 p-5">
            Your base currency should be the one you use most often. All
            <br />
            transaction in other currencies will be calculated based on this one
          </p>
          <div className="flex mt-5 justify-center">
            <button
              type="submit"
              value="Submit"
              className=" flex justify-center items-center w-[420px] h-12 gap-1 bg-[#0166FF] rounded-3xl text-white"
              onClick={handleBalanceClick}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currency;