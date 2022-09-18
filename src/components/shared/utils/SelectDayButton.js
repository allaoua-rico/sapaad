import _ from "lodash";
import { useEffect } from "react";
import { useState } from "react";

const SelectDayButton = ({ day, itemClick, itemsSelected }) => {
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    const isInArray = itemsSelected.find((el) => _.isEqual(el, day));
    isInArray ? setIsSelected(true) : setIsSelected(false);
  }, [itemsSelected]);
  return (
    <button
      type="button"
      onClick={itemClick}
      className={
        `w-7 h-7 p-3
        flex justify-center items-center
        border border-gray-400 rounded-full 
        ` + (isSelected ? "bg-[#4eaccc] text-white" : "")
      }
    >
      {day[0]}
    </button>
  );
};

export default SelectDayButton;
