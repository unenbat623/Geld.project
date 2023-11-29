import React from "react";

const categoryicon = () => {
  return (
    <div>
      <div className="mt-1">Category</div>
      <div className=" flex w-[320px]  border-gray-400 text-black p-1  gap-1 ">
        <details className="dropdown">
          <summary className="m-1 btn">
            Find or choose category <img src="droping.svg" />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li className="border-b-gray-300">
              <a className="border-b-gray-300">
                <img src="Plus.svg" />
                Add Category
              </a>
            </li>
            <li>
              <a>
                <img src="homE.svg" className="rounded-xl" />
                Home
              </a>
            </li>
            <li>
              <a>
                <img src="Gift.svg" className=" rounded-xl" />
                Gift
              </a>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
};

export default categoryicon;
