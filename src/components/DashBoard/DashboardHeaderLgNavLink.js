import { isArray } from "lodash";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function DashboardHeaderLgNavLink({ to, text }) {
  let { pathname } = useLocation();

  return (
    <Link
      to={isArray(to) ? to[0] : to}
      className={
        `flex items-center 
        space-x-1 group 
        h-full px-4 
        whitespace-nowrap
        hover:bg-gray-300 hover:text-gray-500
        transition-all duration-150
        ` +
        ((pathname == to ||
          (isArray(to) && to.find((path) => path == pathname))) &&
          " bg-mainBg text-gray-500")
      }
    >
      {text}
    </Link>
  );
}
