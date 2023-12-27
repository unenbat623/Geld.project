import React from "react";
import { getCurrencySymbol, getIcons } from "@/utils";

const Record = ({ transaction }) => {
  return (
    <div className="border-b-2 py-6 flex justify-between items-center">
      <div className="flex items-center">
        <div className={`rounded-full bg-[#0166FF] p-4`}>
          {/* "#0166FF" ${transaction.iconcolor} */}
          {getIcons(transaction?.iconname, "white")}
        </div>
        <div className="ml-3">
          <h2 className="font-medium">{transaction?.name}</h2>
          <h3 className="text-gray-500 text-xs">{transaction?.created_at}</h3>
        </div>
      </div>

      <h4
        className={`${
          transaction.transaction_type === "EXP"
            ? "text-red-500"
            : "text-lime-500"
        } font-semibold`}
      >
        {transaction.amount}
        {getCurrencySymbol(transaction.currency_type)}
      </h4>
    </div>
  );
};

export default Record;
