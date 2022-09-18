import _ from "lodash";
import { useState } from "react";
import { useEffect } from "react";
import { MdCheckCircle } from "react-icons/md";

export default function SelectedTextCardButton({
  item,
  itemClick,
  itemsSelected,
}) {
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    const isInArray = itemsSelected.find((el) => _.isEqual(el, item));
    isInArray ? setIsSelected(true) : setIsSelected(false);
  }, [itemsSelected]);

  return (
    <button
      type="button"
      onClick={itemClick}
      className={
        `flex flex-col justify-center items-center space-y-4
          rounded p-5 bg-gray-100
        hover:bg-mainPrimary/30 transition-all duration-200 
          relative ` +
        (isSelected
          ? "border-2 border-thirdPrimary"
          : "border-2 border-gray-300")
      }
    >
      <span className="font-medium whitespace-nowrap">{item.name}</span>
      <MdCheckCircle
        className={
          "w-4 h-4 absolute right-1 -top-2 " +
          (isSelected ? "text-thirdPrimary" : "text-transparent")
        }
      />
    </button>
  );
}
