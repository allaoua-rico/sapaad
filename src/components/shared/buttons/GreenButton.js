export default function GreenButton({ children, onClick }) {
  return (
    <button
      className="bg-[#75ca75] text-sm text-white
      flex items-center
      py-1 px-3 rounded
      border border-[#e9f2e9]
      space-x-1
      "
      onClick={onClick}
    >
      {children}
    </button>
  );
}
