"use client";

import React, { useEffect, useState } from "react";
import HomeCard from "./HomeCard";
import MockFood from "../mockfood";

const tipe = [{ text: "Maincourse" }, { text: "Drinks" }, { text: "Dessert" }];

export default function Homeview() {
  const [data, setData] = useState(MockFood.food);

  const filterDish = (data, text) => {
    return data.filter((item) => item.type === text);
  };

  const handleFilter = (text) => {
    const filteredData = filterDish(MockFood.food, text);
    setData(filteredData);
  };

  return (
    <>
      <div className="flex w-[100%] justify-start p-5 shadow-md">
        <div className="grid">
          <div className="mt-10 mb-5 justify-evenly hidden md:flex">
            {tipe.map((item) => {
              return (
                <>
                  <button
                    className="border-black border w-[120px] rounded-md h-10 focus:bg-black focus:text-white "
                    key={item.text}
                    onClick={() => handleFilter(item.text)}
                  >
                    {item.text}
                  </button>
                </>
              );
            })}
          </div>
          <div className="grid gap-10 md:gap-5 md:h-screen md:overflow-y-scroll w-full grid-cols-2 md:grid-cols-4 md:p-5">
            {data.map((item, index) => {
              return <HomeCard key={index} itemnya={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
