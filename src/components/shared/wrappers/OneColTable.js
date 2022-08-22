export default function OneColTable({ label, value }) {
  return (
    <div
      className="text-center 
    border rounded divide-y
    w-full
    "
    >
      <div className="p-[10px] font-light text-gray-500 text-lg">{label}:</div>
      <div className="p-[10px] text-2xl">{value}</div>
    </div>
  );
}
