import React from "react";
import { useState } from "react";
const recordToday = [1, 2, 3, 4, 5];
const recordYesterday = [1, 2, 3, 4, 5, 6];

const RecordFile = () => {
  return (
    <div className=" w-full bg-gray-200">
      <div className=" flex p-5 justify-between">
        <div className=" flex  h-10 mx-3 ">
          <img src="left.svg" className="" />
          <div className="text-black mt-2">Last 30 Days</div>
          <img src="right.svg" />
        </div>
        <select className="select select-bordered w-full  max-w-xs">
          <option disabled selected>
            Who shot first?
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>
      <div className="flex mx-10 p-2 border-2 rounded-xl border-gray-400  justify-between">
        <div className="flex ">
          <div className="form-control">
            <label className="cursor-pointer label">
              <input type="checkbox" className="checkbox checkbox-info" />
              <span className="label-text mx-3">Select All</span>
            </label>
          </div>
        </div>
        <div className="text-gray-300">- 35,000₮</div>
      </div>
      <div>
        <p className="p-3 text-black font-semibold text-2xl">Today</p>
      </div>
      {recordToday.map(() => {
        return (
          <div className=" my-5 flex p-2 mx-10 border-2 rounded-xl border-gray-400  justify-between">
            <div className="flex ">
              <div className="form-control">
                <label className="cursor-pointer label">
                  <input type="checkbox" className="checkbox checkbox-info" />
                  <span className="label-text mx-3  ">Select All</span>
                </label>
              </div>
            </div>
            <div className="text-[#23E01F]">- 1,000₮</div>
          </div>
        );
      })}
      <div>
        <p className="p-3 text-black font-semibold text-2xl">Yesterday</p>
      </div>
      {recordYesterday.map(() => {
        return (
          <div className=" my-5 flex p-2 mx-10 border-2 rounded-xl border-gray-400  justify-between">
            <div className="flex ">
              <div className="form-control">
                <label className="cursor-pointer label">
                  <input type="checkbox" className="checkbox checkbox-info" />
                  <span className="label-text mx-3">Select All</span>
                </label>
              </div>
            </div>
            <div className="text-[#EAB308]">- 1,000₮</div>
          </div>
        );
      })}
    </div>
  );
};

export default RecordFile;
