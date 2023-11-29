import React from "react";

const SecondCard = () => {
  return (
    <div>
      <div className="w-[600px] bg-white rounded-3xl h-[330px]">
        <div>
          <div className="flex p-5 bg-white rounded-3xl border-b-4">
            <img src="green.svg" />
            <p className="text-black ml-5 text-xl">Your Income</p>
          </div>
          <div className="mt-9 p-3 ml-8">
            <div>
              <p className=" text-4xl text-black font-semibold">1,200,000 ₮</p>
              <p className="text-xl font-normal mt-3">Your Income Amount</p>
            </div>
          </div>
          <div className="flex p-5 ">
            <img src="up.svg" />
            <p className="text-black ml-5 text-xl">32% from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondCard;
