"use client";
import React from "react";
import { useState } from "react";
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import { useCart } from "./CartProvider";

export default function Rowtable({ data }) {
  const [cquatity, setCquantity] = useState();

  const { cart, addToCart, removeFromCart, resetCart, updateQuantity } =
    useCart();
  const [isedit, setIsedit] = useState(false);

  const handlequantity = (e) => {
    if (e.target.value >= 0) {
      setCquantity(e.target.value);
    } else {
      setCquantity(1);
    }
  };

  const handleEdit = () => {
    setIsedit((prev) => {
      return !prev;
    });
  };

  const formatToIDR = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  data.totalprice = formatToIDR(data.price * data.quantity);
  return (
    <>
      <tr key={data.id}>
        <td>{data.index + 1}</td>
        <td>{data.ordername}</td>
        <td>{data.price}</td>
        <td>
          {isedit ? (
            <input
              placeholder="quantity"
              type="number"
              onChange={handlequantity}
              min={1}
            />
          ) : (
            data.quantity
          )}
        </td>
        <td>{data.totalprice}</td>
        <td>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              justifyContent: "space-between",
              zIndex: 10,
            }}
          >
            <Button
              size="sm"
              variant="plain"
              color="neutral"
              onClick={handleEdit}
            >
              {isedit ? "Cancel" : "Edit"}
            </Button>
            {isedit ? (
              <Button
                size="sm"
                variant="soft"
                className=" text-green-500"
                onClick={async () => {
                  await updateQuantity(data.id, cquatity);
                  setIsedit(false);
                }}
              >
                Save
              </Button>
            ) : (
              <Button
                size="sm"
                variant="soft"
                color="danger"
                onClick={() => removeFromCart(data.id)}
              >
                Delete
              </Button>
            )}
          </Box>
        </td>
      </tr>
    </>
  );
}
