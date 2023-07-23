"use client";
import { useState } from "react";
import "./mobilemenu.scss";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";
import { links } from "../../../data";
import Link from "next/link";
import Phone from "../ui/Phone/Phone";
import Cart from "../ui/Cart/Cart";
const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(false);
  return (
    <div>
      <span onClick={() => setOpen(!open)}>
        {open ? <CloseIcon /> : <DensityMediumIcon />}
      </span>
      {open && (
        <ul className="absolute flex text-3xl items-center justify-center gap-5 flex-col top-[110px] left-0 bg-orange-600 w-full h-[calc(100vh-110px)]">
          {links.map((link) => (
            <Link onClick={() => setOpen(false)} href={link.url} key={link.url}>
              <li>{link.title}</li>
            </Link>
          ))}
          {user ? (
            <Link href={"/orders"} onClick={() => setOpen(!open)}>
              Orders
            </Link>
          ) : (
            <Link href={"/login"} onClick={() => setOpen(!open)}>
              Login
            </Link>
          )}
          <li>
            <Cart color="lime" />
          </li>
          <li>
            <Phone phone="067131062435" />
          </li>
        </ul>
      )}
    </div>
  );
};

export default MobileMenu;
