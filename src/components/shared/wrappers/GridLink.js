import { Link } from "react-router-dom";

export default function GridLink({ children, to }) {
  return (
    <Link
      to={to}
      className="hover:bg-[#59d2c6] rounded-sm
      border border-gray-300
      p-8
      flex flex-col items-center relative
      hover:text-white group
      transition-all duration-200 
      "
    >
      {children}
    </Link>
  );
}
