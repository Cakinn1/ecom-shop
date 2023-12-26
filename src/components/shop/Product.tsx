import React from "react";
import { ShopProps, singleProduct } from "../../typings/typings";
import Ratings from "./Ratings";
import { IoBagOutline } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import TotalPrice from "../ui/TotalPrice";
export default function Product({
  brand,
  price,
  category,
  description,
  discountPercentage,
  id,
  images,
  rating,
  stock,
  thumbnail,
  title,
}: singleProduct) {
  const totalPrice = price - (price * discountPercentage) / 100;

  return (
    <div className="min-h-[400px] hover:scale-110 hover:shadow-2xl bg-white hover:border-0 cursor-pointer duration-300 space-y-4 rounded-lg flex-grow p-4 min-w-[22%] max-w-[24%] mb-4 border">
      <figure>
        <img
          src={images[0]}
          className="object-cover h-[200px] w-full rounded-lg"
          alt=""
        />
      </figure>

      <div className="space-y-1">
        <h1>{title}</h1>
        <Ratings rating={rating} />
        <div className="flex gap-x-2 text-sm">
          <p className="text-gray-400 line-through ">${price}</p>
          <p className=" bg-gray-200 text-[10px] px-2 rounded-md text-black">
            ${discountPercentage}%
          </p>
        </div>
          <TotalPrice price={price} discountPercentage={discountPercentage} />
        <div className="pt-4 flex justify-between items-center">
          <div className="bg-blue-500 p-2 px-3 text-white rounded-lg">
            <IoBagOutline className="text-2xl " />
          </div>
          <FaBookmark className="text-2xl text-gray-300" />
        </div>
      </div>
    </div>
  );
}
