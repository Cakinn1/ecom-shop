import React from "react";

export default function ShopLoading() {
  return (
    <section className="flex flex-wrap gap-x-4">
      {new Array(8).fill(0).map((_, index) => {
        return (
          <div
            className="w-[238px] rounded-lg mb-6 h-[400px] bg-gray-400 animate-pulse"
            key={index}
          ></div>
        );
      })}
    </section>
  );
}
