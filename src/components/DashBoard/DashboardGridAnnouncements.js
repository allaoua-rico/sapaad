import { GrAnnounce } from "react-icons/gr";

export default function DashboardGridAnnouncements() {
  return (
    <div className="flex flex-col h-full pt-5">
      <div
        className="flex items-center
      border border-gray-300 rounded-md 
      p-1
      "
      >
        <div className="w-7 h-7 ">
          <GrAnnounce className="w-7 h-7" />
        </div>
        <input
          type="text"
          placeholder="Type announcement"
          className="outline-0 p-2 min-w-0"
        />
        <div>
          <button
            className="bg-[#5bb75b] text-white text-lg font-medium
        py-2 px-5
        rounded-md
        flex-1
        "
          >
            Post
          </button>
        </div>
      </div>
      <div className="mx-auto flex flex-col items-center my-auto">
        <img
          src="/announcement-waiting.png"
          className="w-32 h-32 animate-scaleUp"
          alt="loading"
        />
        <div className="text-xs">I have no appointments yet</div>
      </div>
    </div>
  );
}
