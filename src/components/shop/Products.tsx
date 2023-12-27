import React, { useState } from "react";
import { ShopProps } from "../../typings/typings";
import Product from "./Product";
import AddedToCart from "./AddedToCart";

interface ProductsProps {
  products: ShopProps["products"];
  addCart: (value: number) => void;
  cart: ShopProps["products"];
  addedToCart: string;
  addBookMark: (value: number) => void;
  setBookMarkModel: (value: boolean) => void;
  bookMarkCart: ShopProps["products"];
}

export default function Products({
  products,
  addCart,
  cart,
  addedToCart,
  addBookMark,
  setBookMarkModel,
  bookMarkCart,
}: ProductsProps) {
  const [lastIndex, setLastIndex] = useState<number>(8);

  function handleButtonSlice() {
    setLastIndex(lastIndex + 8);
  }

  return (
    <>
      <section className="flex flex-wrap  gap-x-3 ">
        {products.slice(0, lastIndex).map((data) => {
          return (
            <Product
              bookMarkCart={bookMarkCart}
              setBookMarkModel={setBookMarkModel}
              key={data.id}
              addedToCart={addedToCart}
              cart={cart}
              addCart={addCart}
              addBookMark={addBookMark}
              {...data}
            />
          );
        })}
        {addedToCart && <AddedToCart msg={addedToCart} />}
      </section>
      {products.length > 6 && products.length < 100 && (
        <div className="flex justify-center items-center">
          <button
            onClick={() => handleButtonSlice()}
            className="px-10 py-2 rounded-2xl hover:brightness-125 duration-300 text-white shadow-2xl bg-blue-500"
          >
            Click for more
          </button>
        </div>
      )}
    </>
  );
}
