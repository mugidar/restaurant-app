"use client";
import { useEffect, useState } from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";
import { links } from "../../../data";
import Link from "next/link";
import Phone from "../ui/Phone/Phone";
import Cart from "../ui/Cart/Cart";
const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [open]);
  return (
    <div>
      <span onClick={() => setOpen(!open)}>
        {open ? <CloseIcon /> : <DensityMediumIcon />}
      </span>
      {open && (
        <ul className="absolute z-10 flex text-3xl items-center justify-center gap-5 flex-col top-[150px] md:top-[110px] left-0 bg-orange-600 w-full h-[calc(100vh-140px)] md:h-[calc(100vh-110px)]">
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
            <Link href={"/orders"} onClick={() => setOpen(!open)}>
              orders
            </Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Cart color="lime" />
          </li>
          <li>
            <Phone phone="0980133832" />
          </li>
        </ul>
      )}
    </div>
  );
};

export default MobileMenu;
