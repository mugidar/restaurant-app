import Link from "next/link";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import { links } from "../../../data";
import "./header.scss";
import MobileMenu from "../MobileMenu/MobileMenu";
import Cart from "../ui/Cart/Cart";
import Phone from "../ui/Phone/Phone";
import Logo from "../ui/Logo/Logo";

const Header = () => {
  return (
    <header className="flex items-center h-[70px] ">
      <div className="container flex justify-between items-center p-[10px]">
        <nav className="hidden md:block">
          <ul className="flex gap-10 uppercase">
            {links.map((link) => (
              <Link href={link.url} key={link.url}>
                <li>{link.title}</li>
              </Link>
            ))}
          </ul>
        </nav>
        <Logo />
        <div className="hidden md:flex items-center gap-5">
          <Phone />
          <div>
            <Link href={"/orders"}>Orders</Link>
          </div>
          <div>
            <Cart />
          </div>
        </div>

        <div className="flex md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;