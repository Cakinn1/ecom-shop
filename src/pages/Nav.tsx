import React from "react";
import TopNav from "../components/nav/TopNav";
import MainNav from "../components/nav/MainNav";
import Sorting from "../components/nav/Sorting";
import { ShopProps } from "../typings/typings";

export default function Nav({
  cartCounter,
  setSearchByTitle,
  fetchData,
  setInputValue,
  cart,
  setCart
}: {
  cartCounter: number;
  setSearchByTitle: (value: string) => void;
  fetchData: () => void;
  setInputValue: (value: string) => void;
  cart: ShopProps["products"];
  setCart: (vale: ShopProps['products']) => void
}) {
  return (
    <nav>
      <TopNav />
      <MainNav setCart={setCart} cart={cart} setSearchByTitle={setSearchByTitle} cartCounter={cartCounter} />
      <Sorting setInputValue={setInputValue} fetchData={fetchData} />
    </nav>
  );
}
