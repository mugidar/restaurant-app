"use client"
import Link from "next/link";
import "./cart.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCartStore } from "@/zustand/store";
import { useEffect } from "react";

interface CartProps {
  color?: string;
}

const Cart: React.FC<CartProps> = ({ color = "white" }) => {
  const {totalItems} = useCartStore()
  useEffect(() => {
    useCartStore.persist.rehydrate()
  },[])
  return (
    <Link href={"/cart"}>
      <ShoppingCartIcon sx={{color: color}} fontSize={"medium" } />
      Cart [{totalItems}]
    </Link>
  );
};

export default Cart;
