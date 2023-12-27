import React from "react";
import { IoMicOutline } from "react-icons/io5";
export default function MainNav() {
  return (
    <nav>
      <div className="max-w-[1400px] mx-auto p-10">
        <div className="flex justify-between items-center">
          <div>
            <img src="/logo.webp" className="h-10" alt="" />
          </div>
          <div className="flex items-center gap-x-4">
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                className="bg-slate-100 px-24 py-4 rounded-md"
              />
            </form>
            <div className="bg-slate-100 text-sm  items-center gap-x-2 py-2 px-10 flex h-[56px] h-14/ rounded-md ">
              <div>
                <IoMicOutline className=" text-gray-400 text-3xl" />
              </div>
              <div>
                <p className="text-gray-400">Customer Support</p>
                <p className="font-semibold">000-000-000</p>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
