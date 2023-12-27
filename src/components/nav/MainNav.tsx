import React, { useState } from "react";
import { IoMicOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { ShopProps } from "../../typings/typings";
import { IoMdClose } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa6";
export default function MainNav({
  cartCounter,
  setSearchByTitle,
  cart,
  setCart,
}: {
  cartCounter: number;
  setSearchByTitle: (value: string) => void;
  cart: ShopProps["products"];
  setCart: (vale: ShopProps["products"]) => void;
}) {
  const [isCartItemsHidden, setIsCardItemsHidden] = useState<boolean>(true);

  function handleAddQuantity(id: number) {
    setCart(
      cart.map((item) => {
        return item.id === id
          ? { ...item, quantity: item.quantity! + 1 }
          : item;
      })
    );
  }

  function handleLowerQuantity(id: number) {
    setCart(
      cart.map((item) => {
        return item.id === id
          ? { ...item, quantity: item.quantity! - 1 }
          : item;
      })
    );
  }

  function deleteFromCart(id: number) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function RenderCartItems() {
    return (
      <div className="absolute overflow-x-auto bg-white border shadow-2xl h-[400px]  space-y-4 top-0  p-6 w-[340px] right-0">
        <div className="flex items-center justify-between border-b pb-1">
          <h1 className="font-bold text-lg">Your Cart</h1>
          <IoMdClose
            onClick={() => setIsCardItemsHidden(!isCartItemsHidden)}
            className="text-2xl hover:scale-110 cursor-pointer active:scale-90 duration-300"
          />
        </div>
        <div className="space-y-4">
          {cart.map((cartItems) => {
            return (
              <div className="flex justify-between gap-x-2 border-b pb-4">
                <div className="flex gap-x-2">
                  <figure>
                    <img
                      className="w-16 object-cover h-16 rounded-md"
                      src={cartItems.images[0]}
                      alt=""
                    />
                  </figure>
                  <div>
                    <p className="text-[10px] text-gray-400">
                      {"Woodstock " + cartItems.brand}
                    </p>
                    <h1 className="font-bold text-[12px]">{cartItems.title}</h1>
                    <p className="text-[11px] text-gray-400">
                      {" "}
                      stock: {cartItems.stock}
                    </p>
                    <p className="text-[11px]">${cartItems.price}</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex">
                    <div className="bg-slate-200 w-10 h-10 flex justify-center items-center rounded-l-md">
                      {cartItems.quantity}
                    </div>
                    <div>
                      <div
                        onClick={() => handleAddQuantity(cartItems.id)}
                        className=" h-5 w-5 border-slate-200 rounded-tr-md flex justify-center items-center cursor-pointer  border"
                      >
                        <FaChevronUp className="text-sm" />{" "}
                      </div>
                      <div
                        onClick={() => handleLowerQuantity(cartItems.id)}
                        className="  h-5 w-5 border-slate-200 rounded-br-md flex justify-center cursor-pointer  items-center  border"
                      >
                        <FaChevronDown className="text-sm" />
                      </div>
                    </div>
                  </div>
                  <FaRegTrashAlt
                    onClick={() => deleteFromCart(cartItems.id)}
                    className="ml-auto mt-2 hover:text-red-500 cursor-pointer duration-300"
                  />
                </div>
              </div>
            );
          })}

          {cart.length < 1 && (
            <div className="flex justify-center items-center">
              Sorry there are no items in here 
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <nav>
      <div className="max-w-[1400px] mx-auto p-10">
        <div className="flex justify-between items-center">
          <div>
            <img src="/logo.webp" className="h-10" alt="" />
          </div>
          <div className="flex items-center gap-x-4 relative">
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
                <div
                  className="relative cursor-pointer hover:scale-110  duration-300 active:scale-90"
                  onClick={() => setIsCardItemsHidden(!isCartItemsHidden)}
                >
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
      {isCartItemsHidden && <RenderCartItems />}
    </nav>
  );
}
