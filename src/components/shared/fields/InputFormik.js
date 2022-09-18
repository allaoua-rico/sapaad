import { displayFormikFieldErrors } from "../../../utils/functions";
import FieldWrapper from "../wrappers/FieldWrapper";
import Input from "./Input";
import InputLabel from "./InputLabel";

export default function InputFormik({
  placeholder,
  label,
  formik,
  name,
  type,
  textarea,
  rows,
  horizontal,
  disabled,
  inputClassName,
}) {
  const props = {
    value: formik.values[name],
    onChange: (e) => formik.setFieldValue(name, e.target.value),
    type: type ? type : "text",
    inputClassName: inputClassName,
    placeholder: placeholder,
    disabled,
    textarea,
    rows,
    horizontal,
  };

  return (
    <div className="w-full">
      <FieldWrapper horizontal={horizontal}>
        <div className={horizontal && "w-1/3"}>
          <InputLabel>{label}</InputLabel>
        </div>
        <Input {...props} />
      </FieldWrapper>
      <div>{displayFormikFieldErrors(formik, name)}</div>
    </div>
  );
}
