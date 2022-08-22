import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function HeaderLgNavLink({ to, text }) {
  let { pathname } = useLocation();
  return (
    <Link
      to={to}
      className={
        `flex items-center 
        space-x-1 group 
        h-full px-4 
        whitespace-nowrap
        ` + (pathname == to && " bg-[#767676]")
      }
    >
      {text}
    </Link>
  );
}
