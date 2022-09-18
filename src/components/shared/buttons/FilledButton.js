export default function FilledButton(props) {
  const { disabled, onClick, text, type, className } = props;
  return (
    <button
      type={type ? type : "submit"}
      onClick={onClick}
      disabled={disabled}
      className={
        `min-w-[130px] w-full rounded-md px-3 py-2
    text-black bg-white 
    hover:text-mainSecondary hover:bg-gray-200 
      transition-all duration-150 
      font-semibold
      border border-gray-500
      ` + (className ? className : "")
      }
    >
      {text ? text : "Save"}
    </button>
  );
}
