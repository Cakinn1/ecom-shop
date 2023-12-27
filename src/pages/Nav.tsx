import React from "react";
import TopNav from "../components/nav/TopNav";
import MainNav from "../components/nav/MainNav";
import Sorting from "../components/nav/Sorting";

export default function Nav({
  cartCounter,
  setSearchByTitle,
  fetchData,
  setInputValue,
}: {
  cartCounter: number;
  setSearchByTitle: (value: string) => void;
  fetchData: () => void;
  setInputValue: (value: string) => void;
}) {
  return (
    <nav>
      <TopNav />
      <MainNav setSearchByTitle={setSearchByTitle} cartCounter={cartCounter} />
      <Sorting setInputValue={setInputValue} fetchData={fetchData} />
    </nav>
  );
}
