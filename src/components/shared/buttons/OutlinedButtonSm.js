export default function OutlinedButtonSm(props) {
  const { text, onClick } = props;
  return (
    <button
      className="py-1 px-3
        border border-gray-300 rounded 
        text-xs font-bold
      bg-mainBg hover:bg-white
        transition-all duration-150 
    "
      onClick={onClick}
    >
      {text}
    </button>
  );
}
