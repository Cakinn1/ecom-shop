import React from "react";
import TopNav from "../components/nav/TopNav";
import MainNav from "../components/nav/MainNav";

export default function Nav({cartCounter, setSearchByTitle}: {cartCounter: number, setSearchByTitle: (value: string) => void}) {
  return (
    <nav>
      <TopNav />
      <MainNav setSearchByTitle={setSearchByTitle} cartCounter={cartCounter} />
    </nav>
  );
}
