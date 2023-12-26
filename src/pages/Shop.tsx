import React, { useEffect, useState } from "react";
import Category from "../components/shop/Category";
import { fetchCategoryByName } from "../apiservices/api";
import { ShopProps } from "../typings/typings";
import Products from "../components/shop/Products";
import ShopLoading from "../components/shop/ShopLoading";

export default function Shop() {
  const [inputValue, setInputValue] = useState<string>("laptops");
  const [shopData, setShopData] = useState<ShopProps["products"]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function fetchCategoryByClick() {
    try {
      setIsLoading(true);
      const categoryData = await fetchCategoryByName(inputValue);
      setShopData(categoryData.products);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }
  useEffect(() => {
    fetchCategoryByClick();
  }, [inputValue]);

  return (
    <section className="max-w-[1000px] mx-auto">
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
