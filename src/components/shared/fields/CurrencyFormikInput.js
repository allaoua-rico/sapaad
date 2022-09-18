import { useState } from "react";
import CurrencyInput from "react-currency-input-field";
import { displayFormikFieldErrors } from "../../../utils/functions";
import FieldWrapper from "../wrappers/FieldWrapper";
import InputLabel from "./InputLabel";

export default function CurrencyFormikInput({
  placeholder,
  label,
  formik,
  name,
  value,
  onChange,
  horizontal,
  disabled,
  inputClassName,
}) {
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  const handleOnValueChange = (value) => {
    if (!value) {
      onChange("");
      return;
    }
    onChange(value);
  };
  const props = {
    value,
    id: name,
    name: name,
    fixedDecimalLength: 2,
    onValueChange: handleOnValueChange,
    onFocus: onFocus,
    onBlur: onBlur,
    className:
      "focus:outline-none w-full  " +
      (focused ? "" : "") +
      (inputClassName && " " + inputClassName),
    placeholder: placeholder,
    disabled,
  };
  return (
    <div>
      <FieldWrapper horizontal={horizontal}>
        <div className={horizontal && "w-1/3"}>
          <InputLabel>{label}</InputLabel>
        </div>
        <div
          className={
            `flex items-center
            my-auto py-2 px-3
            border rounded
            bg-white
      ` +
            (focused ? "border-zinc-400" : " border-zinc-40") +
            (horizontal && " w-2/3")
          }
        >
          <CurrencyInput {...props} />
        </div>
      </FieldWrapper>
      <div>{displayFormikFieldErrors(formik, name)}</div>
    </div>
  );
}
