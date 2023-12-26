import React from "react";
import { ShopProps } from "../../typings/typings";
import Product from "./Product";

interface ProductsProps {
  products: ShopProps["products"];
}

export default function Products({ products }: ProductsProps) {

  return (
    <section className="flex flex-wrap  gap-x-3 ">
      {products.map((data) => {
        return <Product  key={data.id} {...data} />;
      })}
    </section>
  );
}
