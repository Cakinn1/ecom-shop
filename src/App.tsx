import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Landing from "./pages/Landing";
import { useEffect, useState } from "react";
import { ShopProps } from "./typings/typings";
import BookMark from "./pages/BookMark";
import BookMarkMode from "./models/BookMarkMode";
import Nav from "./pages/Nav";
import { fetchAllData, fetchCategoryByName } from "./apiservices/api";
export default function App() {
  //  need to book bookmark system somewhere else,
  const [bookMarkCart, setBookMarkCart] = useState<ShopProps["products"]>([]);
  const [cartCounter, setCartCounter] = useState<number>(0);
  const [shopData, setShopData] = useState<ShopProps["products"]>([]);
  const [bookMarkModel, setBookMarkModel] = useState<boolean>(false);
  const [searchByTitle, setSearchByTitle] = useState<string>("iphone");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  //  need to fix bookmark model
  function addBookMark(id: number) {
    const itemIsAlreadyInCart = bookMarkCart.find((item) => item.id === id);
    if (itemIsAlreadyInCart) {
      setBookMarkModel(!bookMarkCart);
      setBookMarkCart(bookMarkCart.filter((item) => item.id !== id));
    } else {
      const newItem = shopData.find((item) => item.id === id);
      if (newItem) {
        newItem.bookMarkValue = !newItem.bookMarkValue;
        setBookMarkCart([...bookMarkCart, newItem]);
      }
    }
  }

  async function fetchData() {
    try {
      setIsLoading(true);
      const data = await fetchAllData();
      setShopData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

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

  // create input field here to connect
  //  the nav and products

  return (
    <Router>
      {/* delete model for now add back later. */}
      {/* {bookMarkModel && <BookMarkMode />} */}
      <Nav
        setInputValue={setInputValue}
        fetchData={fetchData}
        cartCounter={cartCounter}
        setSearchByTitle={setSearchByTitle}
      />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/shop"
          element={
            <Shop
              inputValue={inputValue}
              setInputValue={setInputValue}
              setIsLoading={setIsLoading}
              isLoading={isLoading}
              setCartCounter={setCartCounter}
              cartCounter={cartCounter}
              bookMarkCart={bookMarkCart}
              setBookMarkModel={setBookMarkModel}
              addBookMark={addBookMark}
              shopData={shopData}
              setShopData={setShopData}
            />
          }
        />
        <Route
          path="/bookmark"
          element={<BookMark bookMarkCart={bookMarkCart} />}
        />
      </Routes>
    </Router>
  );
}
