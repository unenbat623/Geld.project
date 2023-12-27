import React from "react";

const Income = ({ totalIncome }) => {
  return (
    <div className="flex-1 ml-7 p-4 bg-white rounded-2xl">
      <div className="flex items-center border-b-2 mb-3 pb-2 text-xs">
        <p className="ml-1 lg:text-base">Your Income</p>
      </div>
      <div>
        {totalIncome > 0 && (
          <span className="font-bold lg:text-4xl md:text-2xl text-xl">
            {totalIncome}₮{console.log(totalIncome)}
          </span>
        )}

        {!totalIncome && <div className="skeleton h-9 w-full"></div>}
        <p className="text-xs my-2 lg:text-base md:my-3 lg:my-4 text-slate-500">
          Your Income Amount
        </p>
        <div className="flex items-center">
          <span className="ml-1 lg:text-base text-xs">32% from last month</span>
        </div>
      </div>
    </div>
  );
};

export default Income;
