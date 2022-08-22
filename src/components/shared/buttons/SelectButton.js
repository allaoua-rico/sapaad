export default function SelectButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
      rounded flex items-center text-white bg-secondBg
      py-1 px-3
      "
    >
      {children}
    </button>
  );
}
