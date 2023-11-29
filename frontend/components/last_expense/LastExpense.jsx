import React from "react";

const LastExpense = () => {
  const recorddata = [1, 2];
  return (
    <div className="mt-10 bg-white flex flex-col gap-10 rounded-xl w-full ">
      <div className="mx-10 mt-5 border-b-2 text-black font-semibold text-lg">
        Last Record
      </div>
      {recorddata.map(() => {
        return (
          <div className="flex mx-10 border-b-gray-400  justify-between">
            <div className="flex ">
              <img
                src="House.svg"
                className="bg-[#0166FF] w-10 p-[10px] rounded-full border-[#0166FF]"
              />
              <div className="mx-5 ">
                <div>Lending & Renting</div>
                <div>3 hours ago</div>
              </div>
            </div>
            <div className="text-[#84CC16]">- 1,000₮</div>
          </div>
        );
      })}
    </div>
  );
};

export default LastExpense;
