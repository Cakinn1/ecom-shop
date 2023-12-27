import React, { useEffect, useState } from "react";
import Category from "../components/shop/Category";
import { fetchAllData, fetchCategoryByName } from "../apiservices/api";
import { ShopProps } from "../typings/typings";
import Products from "../components/shop/Products";
import ShopLoading from "../components/shop/ShopLoading";
import { Link } from "react-router-dom";

export default function Shop({
  addBookMark,
  shopData,
  setShopData,
  setBookMarkModel,
  bookMarkCart,
  cartCounter,
  setCartCounter,
  isLoading,
  setIsLoading,
  inputValue,
  setInputValue,
  setCart,
  cart,
}: {
  addBookMark: (value: number) => void;
  setShopData: (value: ShopProps["products"]) => void;
  shopData: ShopProps["products"];
  setBookMarkModel: (value: boolean) => void;
  bookMarkCart: ShopProps["products"];
  cartCounter: number;
  setCartCounter: (value: number) => void;
  setIsLoading: (value: boolean) => void;
  isLoading: boolean;
  inputValue: string;
  setInputValue: (value: string) => void;
  cart: ShopProps["products"];
  setCart:(value: ShopProps['products']) => void;
}) {
  const [addedToCart, setAddedToCart] = useState<string>("");

  function addCart(id: number) {
    const findItem = cart.find((item) => item.id === id);
    if (!findItem) {
      const newItem = shopData.find((item) => {
        return item.id === id;
      });
      if (newItem) {
        newItem.quantity = 1;
        setCart([...cart, newItem]);
        addCartTextClearTimeout(`Added, ${newItem.title}`);
      }
    } else {
      setCart(
        cart.map((item) => {
          return item.id === id
            ? { ...item, quantity: item.quantity! + 1 }
            : item;
        })
      );
      addCartTextClearTimeout(`Added Again, ${findItem.title}`);
    }
    setCartCounter(cartCounter + 1);
  }

  function addCartTextClearTimeout(value: string) {
    setAddedToCart(value);
    const timer = setTimeout(() => {
      setAddedToCart("");
    }, 800);
    return () => clearInterval(timer);
  }

  return (
    <section className="max-w-[1000px] mx-auto">
      {/* <Link to="/bookmark">bookmark temp</Link> */}

      {/* <p onClick={() => fetchData()}>click to change to all data</p> */}
      <div>
        <Category setInputValue={setInputValue} />
      </div>
      <div className="py-20">
        {isLoading && <ShopLoading />}
        <Products
          setBookMarkModel={setBookMarkModel}
          addBookMark={addBookMark}
          addedToCart={addedToCart}
          products={shopData}
          cart={cart}
          addCart={addCart}
          bookMarkCart={bookMarkCart}
        />
      </div>
    </section>
  );
}
