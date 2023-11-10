import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PaymentIcon from "@mui/icons-material/Payment";
import EditNoteIcon from "@mui/icons-material/EditNote";
import SettingsIcon from "@mui/icons-material/Settings";
import Link from "next/link";

const sidemenu = [
  {
    text: "Menu",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    text: "Payment",
    icon: <PaymentIcon />,
    link: "/payment",
  },
  {
    text: "History",
    icon: <EditNoteIcon />,
    link: "/history",
  },
  {
    text: "Setting",
    icon: <SettingsIcon />,
    link: "/setting",
  },
];

export default function Sidebar() {
  return (
    <div className="w-[15%] borde p-5 shadow-lg mt-20 hidden md:inline">
      <div className="grid gap-20 justify-center">
        {sidemenu.map((item, index) => {
          return (
            <Link href={item.link} key={index} className="grid gap-2">
              <button>{item.icon}</button>
              <button className=" hover:text-green-500">{item.text}</button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
