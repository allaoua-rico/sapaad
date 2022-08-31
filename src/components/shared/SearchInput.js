import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchInput({ placeholder, className }) {
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  return (
    <div
      className={
        `flex items-center justify-between w-full
        my-auto py-1 px-3
        border border-zinc-400 rounded-full
        ` +
        className +
        " " +
        (focused ? "bg-white" : "bg-gray-100")
      }
    >
      <input
        type="text"
        onFocus={onFocus}
        onBlur={onBlur}
        className={
          "focus:outline-none w-full " + (focused ? "bg-white" : "bg-gray-100")
        }
        placeholder={placeholder}
      />
      <button>
        <FaSearch />
      </button>
    </div>
  );
}
