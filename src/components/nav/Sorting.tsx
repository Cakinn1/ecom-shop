import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { fetchCategoryByName } from "../../apiservices/api";
export default function Sorting({
  fetchData,
  setInputValue,
}: {
  fetchData: () => void;
  setInputValue: (value: string) => void;
}) {
  function RenderStoringOptions({ value }: { value: string }) {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
      <div className="relative group" onMouseLeave={() => setIsHovered(false)}>
        <div
          className="flex gap-x-3   items-center cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
        >
          <h1 className="font-bold">{value}</h1>
          {isHovered ? (
            <IoChevronUp className="" />
          ) : (
            <IoChevronDown className="g" />
          )}
        </div>
        <div
          className={`border ${
            isHovered
              ? "group-hover:opacity-100"
              : "opacity-0 pointer-events-none"
          } bg-white border flex gap-x-12 -bottom-[240px] p-6 rounded-lg shadow-2xl  w-[400px] duration-300 absolute`}
        >
          <div className="space-y-2">
            <h1 className="font-bold text-lg">Shop</h1>
            <p
              onClick={() => fetchData()}
              className="cursor-pointer text-gray-400"
            >
              Shop All Products
            </p>
            <p
              onClick={() => setInputValue("laptops")}
              className="cursor-pointer text-gray-400"
            >
              Computer & Tablet
            </p>
            <p
              onClick={() => setInputValue("smartphones")}
              className="cursor-pointer text-gray-400"
            >
              Cellphone
            </p>
            <p
              onClick={() => setInputValue("automotive")}
              className="cursor-pointer text-gray-400"
            >
              Accessories
            </p>
            <p
              onClick={() => setInputValue("mens-watches")}
              className="cursor-pointer text-gray-400"
            >
              WoodStack Watch
            </p>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold text-lg">Featured</h1>
            <p
              onClick={() => setInputValue("mens-shirts")}
              className="cursor-pointer text-gray-400"
            >
              Men's Clothes
            </p>
            <p
              onClick={() => setInputValue("tops")}
              className="cursor-pointer text-gray-400"
            >
              Womens Clothes
            </p>
            <p
              onClick={() => setInputValue("skincare")}
              className="cursor-pointer text-gray-400"
            >
              Skincare
            </p>
          </div>
        </div>

        {/* Featured
Mens Clothes

Womens Clothes

Woostock Watch Premium */}
      </div>
    );
  }
  const [isHovered, setIsHovered] = useState<boolean>(false);
  console.log(isHovered);
  return (
    <nav className="max-w-[1400px] flex justify-between items-center mx-auto px-10">
      <div className="flex gap-x-12">
        <RenderStoringOptions value="Stores" />
        <div
          className="group relative"
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            onMouseEnter={() => setIsHovered(true)}
            className="flex gap-x-3 items-center cursor-pointer"
          >
            <h1 className="font-bold">Watch</h1>
            {isHovered ? (
              <IoChevronUp className="" />
            ) : (
              <IoChevronDown className="g" />
            )}
          </div>
          <div
            className={`border ${
              isHovered
                ? "group-hover:opacity-100"
                : "opacity-0 pointer-events-none"
            } bg-white border flex gap-x-12 -bottom-[105px] p-6 rounded-lg shadow-2xl  w-[230px] duration-300 absolute`}
          >
            <div className="space-y-2">
              <p
                onClick={() => setInputValue("mens-watches")}
                className="cursor-pointer text-gray-400"
              >
                Men watches
              </p>
              <p
                onClick={() => setInputValue("womens-watches")}
                className="cursor-pointer text-gray-400"
              >
                Womens Watches
              </p>
            </div>
          </div>
        </div>
        <h1 className="font-bold" onClick={() => setInputValue("motorcycle")}>
          Motorcycle
        </h1>
        <h1 className="font-bold" onClick={() => setInputValue("furniture")}>
          Furniture
        </h1>
        <h1
          className="font-bold"
          onClick={() => setInputValue("home-decoration")}
        >
          Home Decoration
        </h1>
      </div>

      <div></div>
    </nav>
  );
}
