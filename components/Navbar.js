import Link from "next/link";
import React from "react";
import Avatar from "@mui/material/Avatar";

export default function Navbar() {
  return (
    <>
      <div className="h-20 border border-black bg-slate-800 flex gap-20 align-middle justify-between items-center p-5">
        <Link href={"/"} className=" font-medium text-3xl text-white">
          GreatCafeteria
        </Link>
        <div className="flex gap-5 align-middle">
          <div>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </div>
          <Link href={"/login"} className=" self-center text-white font-medium">
            LOGIN
          </Link>
        </div>
      </div>
    </>
  );
}
