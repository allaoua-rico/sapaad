export default function FormikCheckboxWLabel({
  label,
  onChange,
  value,
  inputClassName,
  name,
}) {
  return (
    <div className="space-x-2 group flex items-center py-2">
      <input
        id={label}
        type="checkbox"
        name={name}
        value={value}
        className={"group-hover:cursor-pointer " + inputClassName}
        onChange={onChange}
      />
      <label className="group-hover:cursor-pointer whitespace-nowrap" for={label}>
        {label}
      </label>
    </div>
  );
}
