import { twMerge } from "tailwind-merge";
import "./logo.scss";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={twMerge("text-2xl font-bold", className)}><Link href={"/"}>
    MUGIFOOD</Link></div>
  );
};

export default Logo;
