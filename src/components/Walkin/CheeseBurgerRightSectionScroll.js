import { FaAngleDoubleUp, FaAngleDoubleDown } from "react-icons/fa";

export default function CheeseBurgerRightSectionScroll({ scroll }) {
  return (
    <div className="relative flex flex-1 ">
      <div className="flex flex-col justify-between items-center absolute h-full">
        <button
          onClick={() => scroll(-120)}
          className="bg-gray-500 p-2 text-white rounded-full scale-[1.20]"
        >
          <FaAngleDoubleUp />
        </button>

        <div
          style={{
            borderLeft: "3px dotted #a6bdc7",
            height: "100%",
            marginTop: "12px",
            marginBottom: "12px",
          }}
        />
        <button
          onClick={() => scroll(120)}
          className="bg-gray-500 p-2 text-white rounded-full scale-[1.20]"
        >
          <FaAngleDoubleDown />
        </button>
      </div>
    </div>
  );
}
