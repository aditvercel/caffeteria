"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { uuid } from "uuidv4";
import { useEffect, useState } from "react";
import { useCart } from "./CartProvider";

export default function Orderbar() {
  const [data, setData] = useState();
  const {
    cart,
    addToCart,
    removeFromCart,
    resetCart,
    calculateTotalPrice,
    formatToIDR,
  } = useCart();

  const totalprice = calculateTotalPrice(cart);
  const servicecharge = (totalprice * 2) / 100;

  useEffect(() => {
    setData(uuid());
  }, []);
  return (
    <div className="w-[45%] shadow-xl p-5 hidden md:inline">
      <div className="grid justify-between border-b-2 border-dotted border-black pb-5">
        <div className="text-2xl font-semibold">Order ID :</div>
        <div>{data}</div>
      </div>
      <div className="mt-10 grid gap-5 max-h-[250px] overflow-y-scroll">
        {cart.map((item) => {
          return (
            <div className="w-full h-20 p-2 bg-slate-600 rounded-xl flex gap-2">
              <img
                src={item.gambar}
                className=" w-16 h-16 rounded-lg shadow-sm shadow-white"
              />
              <div className=" align-middle items-top grid w-[50%] text-white">
                <div>{item.ordername}</div>
                <div className="text-xl font-bold">RP.20.000</div>
              </div>
              <div className=" align-middle items-top grid text-white">
                <div>quatity</div>
                <div className=" text-xl font-bold">{item.quantity}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-5 border-dashed border border-black p-2 grid">
        <div className="border-b border-dashed border-black">
          <div className=" justify-between flex">
            <div>Sub Total</div>
            <div>{formatToIDR(calculateTotalPrice(cart))}</div>
          </div>
          <div className=" justify-between flex">
            <div>Service Charge 2%</div>
            <div>{formatToIDR(servicecharge)}</div>
          </div>
        </div>
        <div className=" justify-between flex mt-5">
          <div>TOTAL</div>
          <div>{formatToIDR(totalprice + servicecharge)}</div>
        </div>
        <div className="flex justify-between mt-5">
          <Button type={"NO"} text={"Cancel"} onClick={resetCart} />

          <Link href={"/payment"}>
            <Button type={"YES"} text={"payment"} />
          </Link>
        </div>
      </div>
    </div>
  );
}
