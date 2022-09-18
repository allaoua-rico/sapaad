export default function FilledButtonSm(props) {
  const { disabled, onClick, text, type } = props;
  return (
    <button
      type={type ? type : "submit"}
      onClick={onClick}
      disabled={disabled}
      className="rounded-md px-3 py-1
      text-black bg-white text-xs  font-semibold
      hover:text-mainSecondary hover:bg-gray-200 
        transition-all duration-150 
        border border-gray-500
        "
    >
      {text ? text : "Save"}
    </button>
  );
}
