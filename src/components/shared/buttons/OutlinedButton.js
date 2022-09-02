export default function OutlinedButton(props) {
  const { onClick, text } = props;
  return (
    <button
      type="button"
      className="min-w-[130px] 
      font-semibold hover:text-thirdPrimary 
      transition-all duration-150 
      border border-gray-400 hover:border-gray-500
      rounded-md px-3 py-2
    bg-mainBg hover:bg-white
      "
      onClick={onClick}
      {...props}
    >
      {text ? text : "Cancel"}
    </button>
  );
}
