import React from "react";
import { ShopProps } from "../typings/typings";

export interface BookMarkProps {
  bookMarkCart: ShopProps["products"];
}

export default function BookMark({ bookMarkCart }: BookMarkProps) {
  return (
    <div className="max-w-[1000px] mx-auto">
      <div>
        {bookMarkCart.map((item) => {
          return item.id;
        })}
      </div>
    </div>
  );
}
