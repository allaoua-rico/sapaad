export default function CheckboxWLabel({
  label,
  onChange,
  value,
  inputClassName,
}) {
  return (
    <div className="space-x-2 group flex items-center py-2">
      <input
        className={"group-hover:cursor-pointer " + inputClassName}
        id={label}
        type="checkbox"
        value={value}
        onChange={onChange}
        checked={value}
      />
      <label className="group-hover:cursor-pointer" for={label}>
        {label}
      </label>
    </div>
  );
}
