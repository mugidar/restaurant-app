import "./phone.scss";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

interface PhoneProps {
  color?: string;
  phone?: string;
}

const Phone: React.FC<PhoneProps> = ({ color, phone = "0980133832" }) => {
  const formatted = phone.replace(
    /(\d{3})(\d{3})(\d{2})(\d{2})/,
    "$1-$2-$3-$4"
  );

  return (
    <div className="flex items-center bg-amber-600 px-2 py-1 rounded-md">
      <LocalPhoneIcon sx={{ color: color }} fontSize="middle" />
      {formatted}
    </div>
  );
};

export default Phone;
