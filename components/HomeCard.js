"use client";
import Image from "next/image";
import chili from "public/chili.svg";
import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useCart } from "./CartProvider";

export default function HomeCard({ itemnya, key }) {
  const [isFocused, setIsFocused] = useState(false);
  const { cart, addToCart, removeFromCart } = useCart();

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleAddcart = () => {
    addToCart(itemnya);
  };

  const SpicyIcons = ({ spicyLevel }) => {
    const spicyIcons = Array.from({ length: spicyLevel }, (_, index) => (
      <Image key={index} src={chili} alt="chili" className="w-5 h-5" />
    ));

    return <>{spicyIcons}</>;
  };

  const formatToIDR = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  return (
    <div className="w-40 h-40 grid relative">
      {isFocused && (
        <button
          className="text-white z-10 absolute top-0 bottom-0 left-0 right-0 m-auto w-full h-full backdrop-blur-sm"
          onBlur={handleBlur}
          onClick={handleAddcart}
          onMouseLeave={handleBlur}
        >
          <AddShoppingCartIcon sx={{ fontSize: 60 }} />
        </button>
      )}
      <div
        className="bg-slate-700 rounded-md overflow-hidden"
        onFocus={handleFocus}
        onMouseEnter={handleFocus}
        tabIndex="0"
      >
        <img src={itemnya.gambar} className="h-[60%] w-full" />
        <div className="text-white text-center line-clamp-1 mt-2">
          {itemnya.ordername}
        </div>
        <div className="flex justify-between p-1">
          <div className=" text-white">{formatToIDR(itemnya.price)}</div>
          <div className="flex relative">
            <SpicyIcons spicyLevel={itemnya.spicy} />;
          </div>
        </div>
      </div>
    </div>
  );
}
