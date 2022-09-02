import React from "react";

export default function CheckboxesGroup({
  checkedState,
  list,
  wrapperClass,
  setCheckedState,
  name,
}) {
  //   const handleChange = (e) => setSelected(e.target.value);

  const handleChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };
  return (
    <div className={wrapperClass}>
      {React.Children.toArray(
        list.map(({ text, value }, index) => (
          <div className="space-x-2 group flex items-center ">
            <input
              className="group-hover:cursor-pointer"
              type="checkbox"
              id={value}
              name={name}
              value={value}
              onChange={() => handleChange(index)}
              checked={checkedState[index]}
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
