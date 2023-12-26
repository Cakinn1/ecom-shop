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
  const [bookMarkCart, setBookMarkCart] = useState<ShopProps["products"]>([]);
  const [addedToCart, setAddedToCart] = useState<string>("");
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
  }

  function addCartTextClearTimeout(value: string) {
    setAddedToCart(value);
    const timer = setTimeout(() => {
      setAddedToCart("");
    }, 800);
    return () => clearInterval(timer);
  }

  function addBookMark(id: number) {
    const itemIsAlreadyInCart = bookMarkCart.find((item) => item.id === id);
    if (itemIsAlreadyInCart) {
      setBookMarkCart(bookMarkCart.filter((item) => item.id !== id));
    } else {
      const newItem = shopData.find((item) => item.id === id);
      if (newItem) {
        newItem.bookMarkValue = !newItem.bookMarkValue;
        setBookMarkCart([...bookMarkCart, newItem]);
      }
    }
  }

  console.log(bookMarkCart);

  return (
    <section className="max-w-[1000px] mx-auto">
      <div>
        <Category setInputValue={setInputValue} />
      </div>
      <div className="py-20">
        {isLoading && <ShopLoading />}
        <Products
          addBookMark={addBookMark}
          addedToCart={addedToCart}
          products={shopData}
          cart={cart}
          addCart={addCart}
        />
      </div>

      <div>d</div>
    </section>
  );
}
