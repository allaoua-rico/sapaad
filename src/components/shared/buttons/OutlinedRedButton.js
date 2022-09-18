import OutlinedButton from "./OutlinedButton";

export default function OutlinedRedButton(props) {
  const { onClick, text, className } = props;
  return (
    <OutlinedButton
      className={
        `border-red-500 hover:!border-red-600
      text-red-500 hover:!text-red-600
        ` + (className && " " + className)
      }
      onClick={onClick}
      text={text ? text : "Delete"}
    />
  );
}
