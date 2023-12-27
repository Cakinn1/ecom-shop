import React, { useEffect } from "react";

export default function BookMarkMode() {
  // useEffect(() => {
  //     document.body.classList.add('scroll')
  // }, [])
  return (
    <div className="bg-black  h-screen absolute w-full bg-opacity-45">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="bg-white justify-between  w-[330px] p-6 h-[200px] rounded-lg flex items-center">
          <button className="bg-red-300 hover:brightness-125 duration-300 hover:scale-110 active:scale-90 rounded-2xl p-4">
            Are you sure?
          </button>
          <button className="bg-green-300 hover:brightness-125 duration-300 hover:scale-110 active:scale-90 rounded-2xl  p-4">
            Click to undo
          </button>
        </div>
      </div>
    </div>
  );
}
