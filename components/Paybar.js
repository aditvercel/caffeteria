"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";
import { useCart } from "./CartProvider";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
const tips = [
  { text: "5k", value: 5000 },
  { text: "10k", value: 10000 },
  { text: "15k", value: 15000 },
  { text: "20k", value: 20000 },
];

export default function Paybar() {
  const router = useRouter();
  const [tip, setTip] = useState();

  const handletip = (e) => {
    setTip(Number(e.target.value));
  };
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
  const final_price = totalprice + servicecharge + (tip ? tip : 0);
  console.log("harga terakhir", final_price);

  const handlecacel = () => {
    resetCart();
    setTip(0);
  };

  const handlePayment = () => {
    axios.post("api/payment_user", final_price).then((item) => {
      console.log(item.data);
      router.push(item.data);
    });
  };

  return (
    <div className="w-[45%] shadow-xl p-5 hidden md:inline">
      <div className="grid justify-between border-b-2 border-dotted border-black pb-5">
        <div className="text-2xl font-semibold ">Payable amount</div>
      </div>
      <div className="grid mt-10 mb-10 gap-2 border-dotted border-b-2 border-black">
        <div className=" font-medium text-lg align-middle flex items-center">
          add Tip
        </div>
        <div className="flex gap-5 mb-5">
          {tips.map((item) => {
            return (
              <>
                <button
                  className="border border-black w-14 h-14 rounded-lg flex items-center justify-center"
                  value={Number(item.value)}
                  onClick={handletip}
                >
                  {item.text}
                </button>
              </>
            );
          })}
        </div>
      </div>
      <div className="mt-5 border-dashed border border-black p-2 grid">
        <div className="border-b border-dashed border-black">
          <div className=" justify-between flex">
            <div>Sub Total</div>
            <div>{formatToIDR(totalprice)}</div>
          </div>
          <div className=" justify-between flex">
            <div>Tip</div>
            <div>{(tip && formatToIDR(tip)) || 0}</div>
          </div>
          <div className=" justify-between flex">
            <div>Service Charge 2%</div>
            <div>{formatToIDR(servicecharge)}</div>
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <div>TOTAL</div>
          <div>{formatToIDR(totalprice + (tip ? tip : 0) + servicecharge)}</div>
        </div>
        <div className="flex justify-between mt-5">
          <Button type={"NO"} text={"Cancel"} onClick={handlecacel} />
          <Button type={"YES"} text={"PAY"} onClick={handlePayment} />
        </div>
      </div>
    </div>
  );
}
