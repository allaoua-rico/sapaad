export default function FilledButton(props) {
  const { disabled, onClick, text, type } = props;
  return (
    <button
      type={type ? type : "submit"}
      onClick={onClick}
      disabled={disabled}
      className="min-w-[130px] w-full font-semibold bg-mainBg text-black hover:text-thirdPrimary transition-all duration-150 rounded-md p-3"
    >
      {text ? text : "Save"}
    </button>
  );
}
