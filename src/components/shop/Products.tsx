import React from "react";
import { ShopProps } from "../../typings/typings";
import Product from "./Product";
import AddedToCart from "./AddedToCart";

interface ProductsProps {
  products: ShopProps["products"];
  addCart: (value: number) => void;
  cart: ShopProps["products"];
  addedToCart: string;
  addBookMark: (value: number) => void
}

export default function Products({
  products,
  addCart,
  cart,
  addedToCart,
  addBookMark
}: ProductsProps) {
  return (
    <section className="flex flex-wrap  gap-x-3 ">
      {products.map((data) => {
        return (
          <Product
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
  );
}
