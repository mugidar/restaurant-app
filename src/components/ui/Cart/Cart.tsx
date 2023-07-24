import Link from "next/link";
import "./cart.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface CartProps {
  color?: string;
}

const Cart: React.FC<CartProps> = ({ color = "white" }) => {
  return (
    <Link href={"/cart"}>
      <ShoppingCartIcon sx={{color: color}} fontSize={"medium" } />
      Cart [3]
    </Link>
  );
};

export default Cart;
