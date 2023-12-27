import React, { useEffect, useState } from "react";
import Income from "./IncomeCard";

import myAxios from "@/utils/axios";

const TopInfo = () => {
  const [totals, setTotals] = useState({ totalIncome: 0, totalExpense: 0 });

  const getTotalIncExp = async () => {
    console.log("START");
    const {
      data: { totalIncome },
    } = await myAxios.get("/transactions/totalIncome");
    setTotals({ ...totals, totalIncome });
    console.log("END");
  };

  useEffect(() => {
    console.log("EE");
    getTotalIncExp();
  }, []);

  return (
    <div className="flex w-full mt-6">
      <div className="flex-1 ">
        <img className="w-full h-full" src="/assets/cardPng/large.png" />
      </div>
      <Income totalIncome={totals.totalIncome} />
      <div className="flex-1 ml-7 p-4 bg-white rounded-2xl">
        <div className="flex items-center border-b-2 mb-3 pb-2 text-xs">
          <p className="ml-1 lg:text-base">Total Expenses</p>
        </div>
        <div>
          <span className="font-bold lg:text-4xl md:text-2xl text-xl">
            {" "}
            -80,500,000₮
          </span>
          <p className="text-xs lg:text-base lg:my-4 md:my-3 my-2 text-slate-500">
            Your Expense Amount
          </p>
          <div className="flex items-center ">
            <span className="ml-1 lg:text-base text-xs">
              32% from last month
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopInfo;
