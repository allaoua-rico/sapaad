export default function OutlinedButton(props) {
  const { setOpen, text } = props;
  return (
    <button
      type="button"
      className="min-w-[130px] font-semibold hover:text-thirdPrimary transition-all duration-150 border hover:border-thirdPrimary rounded-md px-3 py-2"
      onClick={() => setOpen(false)}
      {...props}
    >
      {text ? text : "Cancel"}
    </button>
  );
}
