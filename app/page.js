import React from "react";
import Homeview from "@/components/Homeview";
import Orderbar from "@/components/Orderbar";
import Sidebar from "@/components/Sidebar";

export default function page() {
  return (
    <>
      <div className="flex justify-between">
        <Sidebar />
        <Homeview></Homeview>
        <Orderbar />
      </div>
    </>
  );
}
