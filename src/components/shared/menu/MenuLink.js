import { Link, useLocation } from "react-router-dom";
import MenuNavItem from "./MenuNavItem";

export default function MenuLink({ onClose, to, content, width }) {
  let { pathname } = useLocation();

  return (
    <MenuNavItem onClick={onClose}>
      <Link style={{ textDecoration: "none" }} to={to}>
        <div
          className={
            "px-5 py-1 text-left " +
            (pathname == to ? " bg-blue-500 text-white " : "") +
            (width ? width : "")
          }
        >
          {content}
        </div>
      </Link>
    </MenuNavItem>
  );
}
