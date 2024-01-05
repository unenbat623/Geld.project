import React, { useContext } from "react";
import Currency from "@/components/step/currency";
import Balance from "@/components/step/balance";
import { StepContext } from "@/context/stepContext";
import Finish from "@/components/step/finish";

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
