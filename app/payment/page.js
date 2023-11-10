import React from "react";
import TableSortAndSelection from "@/components/Table";
import Sidebar from "@/components/Sidebar";
import Paybar from "@/components/Paybar";

export default function page() {
  return (
    <div className="flex">
      <Sidebar />
      <TableSortAndSelection />
      <Paybar />
    </div>
  );
}
