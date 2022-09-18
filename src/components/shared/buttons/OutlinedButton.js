export default function OutlinedButton(props) {
  const { onClick, text, className } = props;
  return (
    <button
      {...props}
      className={
        `min-w-[130px] 
        font-semibold hover:text-thirdPrimary 
        border border-gray-400 hover:border-gray-500
        rounded-md px-3 py-2
      bg-mainBg hover:bg-white
        transition-all duration-150 ` + (className && " " + className)
      }
      type="button"
      onClick={onClick}
    >
      {text ? text : "Cancel"}
    </button>
  );
}
