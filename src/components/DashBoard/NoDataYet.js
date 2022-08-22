export default function NoDataYet() {
  return (
    <div className="flex flex-col h-full">
      <div className="mx-auto flex flex-col items-center my-auto">
        <img
          src="/waiting.png"
          className="w-32 h-32 animate-scaleUp"
          alt="loading"
        />
        <div className="text-xs">I have no data yet</div>
      </div>
    </div>
  );
}
