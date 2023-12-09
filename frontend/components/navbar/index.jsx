import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  const handleRecordClick = () => {
    router.push("/record");
  };
  const handlerDashboard = () => {
    router.push("/");
  };
  const handlerProfile = ()=>{
    router.push("/profile")
  }
  useEffect(() => {}, []);
  return (
    <div>
      <div className="w-full bg-gray-200">
        <div className="navbar bg-white px-20">
          <div className="flex-1 gap-5">
            <a className="btn btn-ghost text-xl" onClick={handlerDashboard}>
              <img src="vector.png" />
            </a>
            <button
              className="text-[#0F172A] text-xl font-medium"
              onClick={handlerDashboard}
            >
              Dashboard
            </button>
            <button className="text-[#0F172A]" onClick={handleRecordClick}>
              Records
            </button>
            <button className="text-[#0F172A]" onClick={handlerProfile}>
              Profile
            </button>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <button className="px-5 mr-3 border text-white rounded-3xl bg-[#0166FF]">
                + Record
              </button>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="text-info">+ Record</span>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src="dark.png" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
