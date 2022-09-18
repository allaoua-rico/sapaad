import React from "react";

export default function RadiosGroup({
  selected,
  radios,
  wrapperClass,
  setSelected,
  name,
}) {
  const handleChange = (e) => setSelected(e.target.value);
  return (
    <div className={wrapperClass}>
      {React.Children.toArray(
        radios.map(({ text, value }) => (
          <div className="space-x-2 group flex items-center">
            <input
              className="group-hover:cursor-pointer"
              type="radio"
              id={value}
              name={name}
              value={value}
              onChange={handleChange}
              checked={value === selected}
            />
            <label
              className="group-hover:cursor-pointer whitespace-nowrap"
              for={value}
            >
              {text}
            </label>
          </div>
        ))
      )}
    </div>
  );
}
