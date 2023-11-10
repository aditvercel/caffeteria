import React from "react";

export default function Button({ type, text, onClick }) {
  const handleClick = () => {
    if (typeof onClick === "function") {
      onClick();
    } else {
      console.log("onClick is not a function");
    }
  };

  return (
    <>
      {type === "NO" && (
        <button
          onClick={handleClick}
          className="border bg-red-500 p-2 text-white w-20 text-center font-medium rounded-md"
        >
          {text}
        </button>
      )}
      {type === "YES" && (
        <button
          onClick={handleClick}
          className="border bg-green-500 p-2 text-white w-20 text-center font-medium rounded-md"
        >
          {text}
        </button>
      )}
    </>
  );
}
