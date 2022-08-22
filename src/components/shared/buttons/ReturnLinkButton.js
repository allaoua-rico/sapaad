import { RiArrowLeftCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function ReturnLinkButton({ to }) {
  return (
    <Link to={to}>
      <RiArrowLeftCircleLine className="w-11 h-11 fill-secondBg" />
    </Link>
  );
}
