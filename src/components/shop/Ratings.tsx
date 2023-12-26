import React from "react";
import { FaStarHalfStroke } from "react-icons/fa6";
import { TiStarFullOutline } from "react-icons/ti";

//  Need to figure out what rating value to put here
export default function Ratings({ rating }: { rating: any }) {
  const ratingToString = rating.toString();
  let result = [];
  for (let i = 1; i < ratingToString; ++i) {
    result.push(<TiStarFullOutline key={i} className="text-[#FFA500]" />);

    if (!Number.isInteger(ratingToString) && i === ratingToString.length) {
      result.push(<FaStarHalfStroke key={i + 1} className="text-[#FFA500]" />);
    }
  }
  return <div className="flex">{result}</div>;
}
