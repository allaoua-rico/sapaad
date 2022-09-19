export default function GreenButton({ children, onClick }) {
  return (
    <button
      type="button"
      className="bg-[#75ca75] hover:bg-[#5b9c5b] 
      transition-all duration-100 
      text-sm text-white
      flex items-center justify-center w-full
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
