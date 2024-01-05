import React, { useEffect, useState } from "react";
import Income from "./IncomeCard";

import myAxios from "@/utils/axios";
import Expensed from "./Expensed";

const TopInfo = () => {
  const [totals, setTotals] = useState({ totalIncome: 0, totalExpense: 0 });

  const getTotalIncExp = async () => {
    console.log("START");
    const {
      data: { totalIncome, totalExpense },
    } = await myAxios.get("/transactions/total");
    setTotals({ ...totals, totalIncome, totalExpense });
    console.log("END");
  };

  useEffect(() => {
    console.log("EE");
    getTotalIncExp();
  }, []);

  return (
    <div className="flex w-full px-12 mt-6">
      <div className="flex-1 ">
        <img className="w-full h-full" />
      </div>
      <Income totalIncome={totals.totalIncome} />
      <button
        onClick={() => {
          console.log("MM", totals);
        }}
      ></button>
      <div className="flex-1 ml-7 p-4 bg-white rounded-2xl">
        <div className="flex items-center border-b-2 mb-3 pb-2 text-xs">
          <p className="ml-1 lg:text-base">Total Expenses</p>
        </div>
        <Expensed totalExpense={totals.totalExpense} />
      </div>
    </div>
  );
};

export default TopInfo;
