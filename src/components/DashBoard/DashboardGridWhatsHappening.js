export default function DashboardGridWhatsHappening() {
  return (
    <div className="relative p-5 flex flex-col h-full">
      <div
        className="w-fit
      text-gray-400 text-lg 
        border-b-2 pb-2
            "
      >
        What's happening
      </div>

      <div
        className="flex-1 
        flex flex-col justify-center items-center
      text-gray-500"
      >
        <img
          src="/DashboardLiveLoading.png"
          className="w-12 h-12 animate-[spin_2s_linear_infinite]"
          alt="loading"
        />
        <div className="text-xs text-gray-400 pt-4">WAITING FOR DATA</div>
      </div>

      <div
        className="rounded-full
        text-xs
        absolute right-4 top-4
      bg-gray-200 text-gray-400
        py-1 px-3
        "
      >
        LIVE
      </div>
    </div>
  );
}
