import React from "react";

export default function AddedToCart({ msg }: { msg: string }) {
  return (
    <section className="fixed shadow-2xl top-10 bg-green-400 px-20 rounded-2xl py-2">
      {msg}
    </section>
  );
}
