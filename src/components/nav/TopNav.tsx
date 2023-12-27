import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { FiMap } from "react-icons/fi";
export default function TopNav() {
  return (
    <nav className="bg-[#262626] text-white py-4 px-10 ">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-x-5">
          <FiMap />
          <h4 className="text-sm">Free Shipping Over $100</h4>
        </div>
        <div className="gap-x-5 flex items-center">
          <h4 className="text-sm">Australia</h4>
          <h4 className="text-sm">English</h4>
          <FaTwitter className="text-lg duration-300 cursor-not-allowed active:scale-90 hover:scale-110" />
          <FaFacebook className="text-lg duration-300 cursor-not-allowed active:scale-90 hover:scale-110" />
          <FaPinterest className="text-lg duration-300 cursor-not-allowed active:scale-90 hover:scale-110" />
          <FaInstagram className="text-lg duration-300 cursor-not-allowed active:scale-90 hover:scale-110" />
        </div>
      </div>
    </nav>
  );
}
