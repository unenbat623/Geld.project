import React, { useContext } from "react";
import Record from "../record";
import { TransactionContext } from "@/context/TransactionContext";

const BottomSection = () => {
  const { transactions } = useContext(TransactionContext);
  return (
    <div className="w-full h-full bg-base-100 border-y-rounded rounded-t-xl p-5">
      <h1 className="">Last Records</h1>
      {transactions.map((transaction) => (
        <Record transaction={transaction} />
      ))}
    </div>
  );
};

export default BottomSection;
