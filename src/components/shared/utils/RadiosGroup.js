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
    <div className={"text-white bg-secondBg py-1 px-3 rounded " + wrapperClass}>
      {React.Children.toArray(
        radios.map(({ text, value }) => (
          <div className="space-x-1 group">
            <input
              className="group-hover:cursor-pointer"
              type="radio"
              id={value}
              name={name}
              value={value}
              onChange={handleChange}
              checked={value === selected}
            />
            <label className="group-hover:cursor-pointer" for={value}>
              {text}
            </label>
          </div>
        ))
      )}
    </div>
  );
}
