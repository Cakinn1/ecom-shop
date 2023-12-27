import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Landing from "./pages/Landing";
import { useState } from "react";
import { ShopProps } from "./typings/typings";
import BookMark from "./pages/BookMark";
import BookMarkMode from "./models/BookMarkMode";
export default function App() {
  //  need to book bookmark system somewhere else,
  const [bookMarkCart, setBookMarkCart] = useState<ShopProps["products"]>([]);
  const [shopData, setShopData] = useState<ShopProps["products"]>([]);
  const [bookMarkModel, setBookMarkModel] = useState<boolean>(false);

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

  return (
    <Router>
      {/* delete model for now add back later. */}
      {/* {bookMarkModel && <BookMarkMode />} */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/shop"
          element={
            <Shop
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
