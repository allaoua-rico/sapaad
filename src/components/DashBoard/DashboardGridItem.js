import { Link } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";

export default function DashboardGridItem({ title, to, content }) {
  return (
    <div className="relative p-5 flex flex-col h-full">
      <div
        className="w-fit
      text-gray-400 text-lg 
        border-b-2 pb-2
      "
      >
        {title}
      </div>

      <div
        className="
        flex-1 flex flex-col justify-center 
      text-gray-500"
      >
        {content}
      </div>

      {to && (
        <Link
          to={to}
          className="
        absolute right-[1px] top-[1px]
      bg-gray-400 
        py-2 px-3
        "
        >
          <BiLinkExternal className="text-white" />
        </Link>
      )}
    </div>
  );
}
