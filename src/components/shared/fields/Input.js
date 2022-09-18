import { useState } from "react";

export default function Input(props) {
  const { horizontal, textarea, rows, inputClassName } = props;
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  return (
    <div
      className={
        `flex items-center
            my-auto py-2 px-3
            border rounded
          bg-white
        ` +
        (focused ? " border-zinc-400" : " border-zinc-200") +
        (!!horizontal ? " w-2/3" : "")
      }
    >
      {textarea ? (
        <textarea
          {...props}
          rows={rows}
          style={{ resize: "none" }}
          onFocus={onFocus}
          onBlur={onBlur}
          className={
            "focus:outline-none w-full " +
            (inputClassName ? " " + inputClassName : "")
          }
        ></textarea>
      ) : (
        <input
          {...props}
          onBlur={onBlur}
          onFocus={onFocus}
          className={
            "focus:outline-none w-full " +
            (inputClassName ? " " + inputClassName : "")
          }
        />
      )}
    </div>
  );
}
