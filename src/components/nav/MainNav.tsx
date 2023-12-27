import React from "react";
import { IoMicOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
export default function MainNav({
  cartCounter,
  setSearchByTitle,
}: {
  cartCounter: number;
  setSearchByTitle: (value: string) => void;
}) {
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
                onChange={(e) => setSearchByTitle(e.target.value)}
                type="text"
                placeholder="Search"
                className="bg-slate-100 focus:outline-none w-[300px] px-4  py-4 rounded-md"
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
            </div>
            <div className="flex items-center gap-x-4">
              <CiUser className="text-4xl" />
              <div className="flex gap-x-3">
                <div className="relative">
                  <HiOutlineShoppingBag className="text-4xl" />
                  <div className="absolute bg-red-500 top-0 -right-[6px] rounded-2xl px-2 text-white">
                    {cartCounter}
                  </div>
                </div>

                <div>
                  <p className="text-[12px] text-gray-400">subtotal</p>
                  <p className="text-[12px] font-bold">$0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
