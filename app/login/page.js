"use client";

import React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@/components/Button";
import { useSession, signIn, signOut } from "next-auth/react";

export default function page() {
  const [showPassword, setShowPassword] = useState(false);
  const { data: session } = useSession();
  const [typing, setTyping] = useState();
  console.log(typing);
  console.log("session", session);

  const handleClickShowPassword = () =>
    setShowPassword((prev) => {
      return !prev;
    });

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTyping((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div className=" mt-20 md:mt-0 grid md:flex gap-5 p-2 min-h-screen">
      <div className="md:w-[50%] p-2 grid items-center justify-center shadow-md shadow-black">
        <div className="relative top-[-50px]">
          <div className="flex justify-center align-middle motion-safe:animate-bounce">
            <img
              src={
                "https://cdni.iconscout.com/illustration/premium/thumb/indian-food-5863589-4874943.png"
              }
              className="w-60 h-60"
            />
          </div>
          <div className="text-center text-4xl font-extralight">
            Greatcafeteria
          </div>
          <div>your Food partner</div>
        </div>
      </div>

      <div className="md:w-[50%] p-2 flex items-center justify-center">
        <div className="grid">
          <div className="text-center text-4xl font-extralight">
            Sign in to Greatcafeteria
          </div>
          <form>
            <div className="grid mt-5">
              <TextField
                id="standard-basic"
                label="Username"
                name="UserName"
                variant="standard"
                onChange={handleChange}
              />
            </div>
            <div className="grid mt-5">
              <TextField
                id="standard-basic"
                label="Password"
                name="Password"
                variant="standard"
                type="password"
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-end mt-5">
              {session ? (
                <Button
                  text={"LOGOUT"}
                  type={"NO"}
                  onClick={() => {
                    signOut();
                  }}
                />
              ) : (
                <button
                  onClick={() => {
                    signIn("Credential", typing);
                  }}
                >
                  login
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
