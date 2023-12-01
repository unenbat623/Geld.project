import { useState } from "react";
import Add from "./add";
import Categoryicon from "./categoryicon";
const Income = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  return (
    <>
      <div className="bg-[#555555db] top-0 right-0 left-0 block bottom-0 fixed">
        <div className=" opacity- bg-white w-[792px] h-[450px] ml-[700px] p-5 mt-[350px] justify-start text-start">
          <div className="border-b-gray-500 flex py-3 font-semibold text-black px-6 ">
            Add Record
          </div>
          <div className="border rounded-full"></div>
          <div className="flex  gap-6 mt-6">
            <div className="flex-col pl-5 justify-start">
              <div className=" mr-3 ">
                <div
                  className="flex justify-center
                "
                >
                  <button
                    className=" rounded-2xl w-[150px] text-[#000000] bg-gray-300 flex justify-center items-center gap-1  border-8 border-gray-300"
                    onClick={() => {
                      setIsAddModalOpen(true);
                    }}
                  >
                    Expense
                  </button>
                  <button className="rounded-2xl w-[150px] text-[#FFFFFF] bg-[#16A34A] flex justify-center items-center gap-1  border-8 border-[#16A34A] ">
                    Income
                  </button>
                </div>
                <div className="">
                  <input
                    type="text"
                    placeholder="₮ 000.00"
                    className="flex w-[320px] border border-gray-400 rounded-lg text-black mt-3 p-5 h-9 gap-1"
                  />
                </div>
                <div>
                  <Categoryicon />
                </div>
              </div>
              <div className="flex mt-1 gap-2">
                <div>
                  {" "}
                  Date
                  <select className="select select-bordered w-full  max-w-xs">
                    <option>Oct 30, 2023</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                </div>
                <div>
                  Date
                  <select className="select select-bordered w-full  max-w-xs">
                    <option>4:15 PM</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                </div>
              </div>
              <div>
                <button className="flex justify-center items-center mt-3 w-[340px] h-10 gap-1 bg-[#16A34A] rounded-3xl text-white ">
                  Add Record
                </button>
              </div>
            </div>
            <div className="w-full">
              <div className="mb-1">Payee</div>
              <select className="select select-bordered w-full  max-w-xs">
                <option>Write here</option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <div className="mt-1">
                <p>Note</p>
                <textarea
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-lg w-full  max-w-xs"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isAddModalOpen && <Add />}
    </>
  );
};
export default Income;