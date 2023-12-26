import React, { useEffect, useState } from "react";
import Category from "../components/shop/Category";
import { fetchCategoryByName } from "../apiservices/api";
import { ShopProps } from "../typings/typings";
import Products from "../components/shop/Products";
import ShopLoading from "../components/shop/ShopLoading";

export default function Shop() {
  const [inputValue, setInputValue] = useState<string>("");
  const [shopData, setShopData] = useState<ShopProps["products"]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cart, setCart] = useState<ShopProps["products"]>([]);
  useEffect(() => {
    async function fetchCategoryByClick() {
      try {
        setIsLoading(true);
        const categoryData = await fetchCategoryByName(inputValue || "laptops");
        setShopData(categoryData.products);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
    fetchCategoryByClick();
  }, [inputValue]);

  function addCart(id: number) {
    const findItem = cart.find((item) => item.id === id);
    console.log(findItem);

    if (!findItem) {
      const newItem = shopData.find((item) => {
        return item.id === id;
      });

      if (newItem) {
        newItem.quantity = 1;
        setCart([...cart, newItem]);
      }
    } else {
      setCart(
        cart.map((item) => {
          return item.id === id
            ? { ...item, quantity: item.quantity! + 1 }
            : item;
        })
      );
    }
  }

  return (
    <section className="max-w-[1000px] mx-auto">
      <div>cart</div>
      <div>
        <Category setInputValue={setInputValue} />
      </div>
      <div className="py-20">
        {isLoading && <ShopLoading />}
        <Products products={shopData} />
      </div>
    </section>
  );
}
