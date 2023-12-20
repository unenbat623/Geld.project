import React, { useContext } from "react";
import Currency from "@/components/Step/currency";
import Balance from "@/components/Step/balance";
import { StepContext } from "@/context/stepContext";
import Finish from "@/components/Step/finish";

const StepPage = () => {
  const { step } = useContext(StepContext);

  return (
    <div>
      {step === 1 && <Currency />}
      {step === 2 && <Balance />}
      {step === 3 && <Finish />}
    </div>
  );
};

export default StepPage;
