import React, { useContext } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { StepContent, StepContext } from "@mui/material";

const Balance = () => {
  const router = useRouter();
  const handleFinishClick = () => {
    router.push("/step_three");
  };
  const { changeStepData, stepData } = useContext(StepContext);
  useEffect(() => {}, []);
  return (
    <div className="flex">
      <div className="h-screen w-full justify-center items-center text-center  bg-white">
        <div className=" ">
          <div className="mt-16">
            <div className="flex gap-2 mb-10 justify-center">
              <img src="vector.png" />
              <img src="Geld.svg" className=" px-2" />
            </div>
            <div className="flex-col  mb-10">
              <ul className="steps steps-vertical lg:steps-horizontal">
                <li className="step step-info">Currency</li>
                <li className="step step-info">Balance</li>
                <li className="step">Finish</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center mt-40 ">
            <img
              src="Coins.png"
              className="border-8 bg-[#0166FF] rounded-full border-[#0166FF]"
            />
            <div className="p-3 font-semibold text-2xl">
              Select base currency
            </div>
          </div>
          <div className="flex justify-center p-5 items-center text-center">
            <input
              placeholder="Balance"
              name="balance"
        value={stepData.balance}
        onChange={(e) => {
          changeStepData(e.target.name, e.target.value);
        }}
        type="number"
              className="h-12 flex items-center w-[390px] py-2 bg-neutral-100 border border-slate-400 rounded-lg p-4"
            />
          </div>
          <p className="text-slate-600 p-2">
            How much cash do you have in your wallet?
          </p>
          <div className="flex mt-5 justify-center">
            <button
              type="submit"
              value="Submit"
              className=" flex justify-center items-center w-[400px] h-12 gap-1 bg-[#0166FF] rounded-3xl text-white"
              onClick={handleFinishClick}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
