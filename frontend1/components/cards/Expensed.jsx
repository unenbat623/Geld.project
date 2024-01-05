import React from "react";

const Expensed = ({ totalExpense }) => {
  return (
    <div className="flex-1 ml-7 p-4 bg-white rounded-2xl">
      <div>
        {totalExpense > 0 && (
          <span className="font-bold lg:text-4xl md:text-2xl text-xl text-blue-400">
            {totalExpense}₮{console.log(totalExpense)}
          </span>
        )}

        {!totalExpense && <div className="skeleton h-9 w-full"></div>}
        <p className="text-xs my-2 lg:text-base md:my-3 lg:my-4 text-slate-500">
          Your Expense Amount
        </p>
        <div className="flex items-center">
          <span className="ml-1 lg:text-base text-xs">32% from last month</span>
        </div>
      </div>
    </div>
  );
};

export default Expensed;
