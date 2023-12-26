import React, { useEffect, useState } from "react";
import RenderCatogry from "./RenderCatogry";

import { categoryItems } from "../../constants/constants";

interface CategoryProps {
  setInputValue: (value: string) => void;
}

export default function Category({ setInputValue }: CategoryProps) {
  return (
    <section className=" border  mt-[100px] flex items-center rounded-2xl bg-white shadow-lg p-6">
      {categoryItems.map((category) => {
        return (
          <RenderCatogry
            setInputValue={setInputValue}
            key={category.title}
            image={category.image}
            title={category.title}
            amount={category.amount}
          />
        );
      })}
    </section>
  );
}
