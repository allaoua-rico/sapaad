export default function OutlinedButtonSm(props) {
  const { text, onClick } = props;
  return (
    <button
      className="py-1 px-3
        border border-gray-300 rounded 
        text-xs font-bold
      bg-gray-100
    "
      onClick={onClick}
    >
      {text}
    </button>
  );
}
