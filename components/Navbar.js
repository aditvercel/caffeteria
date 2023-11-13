"use client";

import Link from "next/link";
import React from "react";
import Avatar from "@mui/material/Avatar";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <>
      <div className="h-20 border border-black bg-slate-800 flex gap-20 align-middle justify-between items-center p-5">
        <Link href={"/"} className=" font-medium text-3xl text-white">
          GreatCafeteria
        </Link>
        <div className="flex gap-5 align-middle">
          <div>
            <Avatar alt="Remy Sharp" src={session && session.user.image} />
          </div>
          {session ? (
            <button
              onClick={() => signOut()}
              className=" self-center text-white font-medium"
            >
              LOGOUT
            </button>
          ) : (
            <Link
              href={"/login"}
              className=" self-center text-white font-medium"
            >
              LOGIN
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
