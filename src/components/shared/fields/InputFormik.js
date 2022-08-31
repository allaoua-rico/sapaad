import { useState } from "react";
import { displayFormikFieldErrors } from "../../../utils/functions";
import InputLabel from "./InputLabel";

export default function InputFormik({
  placeholder,
  label,
  formik,
  name,
  type,
  textarea,
  rows,
}) {
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const props = {
    value: formik.values[name],
    onChange: (e) => formik.setFieldValue(name, e.target.value),
    type: type ? type : "text",
    onFocus: onFocus,
    onBlur: onBlur,
    className: "focus:outline-none w-full " + (focused ? "" : ""),
    placeholder: placeholder,
  };

  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <div
        className={
          `flex items-center
            my-auto py-2 px-3
            border rounded
            bg-white
      ` + (focused ? "border-zinc-400" : "border-zinc-40")
        }
      >
        {textarea ? (
          <textarea
            {...props}
            rows={rows}
            style={{ resize: "none" }}
          ></textarea>
        ) : (
          <input {...props} />
        )}
      </div>
      <div>{displayFormikFieldErrors(formik, name)}</div>
    </div>
  );
}
