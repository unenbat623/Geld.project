import React, { useState } from "react";
import Add from "./add";

const Category = () => {
  const recordCategory = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  return (
    <>
      <div className="  bg-gray-200">
        <div>
          <div className="drawer px-20 pt-5 lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
              <div className="p-3 text-black font-semibold text-2xl">
                Records
              </div>
              <button
                type="submit"
                value="Submit"
                className=" flex justify-center items-center w-[420px] h-10 gap-1 bg-[#0166FF] rounded-3xl text-white"
                onClick={() => {
                  setIsAddModalOpen(true);
                }}
              >
                + Add
              </button>
              <input
                className="flex w-[420px] rounded-lg text-black mt-3 p-4 h-9 gap-1"
                placeholder="Search"
              ></input>
              <div className="p-3 text-black font-semibold text-2xl">Types</div>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <input type="checkbox" className="checkbox checkbox-info" />
                  <span className="label-text">All</span>
                </label>
              </div>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <input type="checkbox" className="checkbox checkbox-info" />
                  <span className="label-text">Income</span>
                </label>
              </div>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <input type="checkbox" className="checkbox checkbox-info" />
                  <span className="label-text">Expense</span>
                </label>
              </div>

              <div className="flex justify-between">
                <p className="p-3 text-black font-semibold text-2xl">
                  Category
                </p>
                <button>Clear</button>
              </div>
              <div>
                {recordCategory.map(() => {
                  return (
                    <div className="flex justify-between py-2">
                      <img src="Leading.svg" />
                      <p>Shopping</p>
                      <img src="dropdown.svg" />
                    </div>
                  );
                })}
              </div>
              <div className="flex mt-5">
                <img src="adding.svg" />
                <p className="px-5">Category</p>
              </div>
              <div className="mt-10">
                <p className="p-3 text-black font-semibold text-2xl">
                  Amount Range
                </p>
              </div>
              <div className="">
                <input className="mx-2" placeholder="0" />
                <input className="mx-2" placeholder="1000" />
              </div>
              <div className="mt-10 ">
                <input
                  type="range"
                  min={0}
                  max="100"
                  className="range range-info p-3"
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

export default Category;
