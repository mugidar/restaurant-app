import Link from "next/link";
import "./cart.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface CartProps {
  color?: string;
  size?: string;
}

const Cart: React.FC<CartProps> = ({ color = "white", size = "middle" }) => {
  return (
    <Link href={"/cart"}>
      <ShoppingCartIcon sx={{color: color}} fontSize={size} />
      Cart [3]
    </Link>
  );
};

export default Cart;
