import React from "react";
import IncomeCard from "./IncomeCard";
import SecondCard from "./SecondCard";
import LastCard from "./LastCard";

const Cards = () => {
  return (
    <div className="flex justify-center gap-20 mt-10">
      <IncomeCard />
      <SecondCard />
      <LastCard />
    </div>
  );
};

export default Cards;
