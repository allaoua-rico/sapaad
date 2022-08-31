import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

export default function WalkinDialogBackNext({ next, back, step }) {
  return (
    <div className="flex items-center space-x-4 text-sm">
      <button
        disabled={step == 1}
        onClick={back}
        className={
          `flex items-center space-x-2
            py-2 px-4
      ` + (step == 1 ? "text-gray-500 bg-gray-100" : "text-white bg-orange-400")
        }
      >
        <HiArrowNarrowLeft />
        <span>Back</span>
      </button>
      <button
        disabled={step == 7}
        onClick={next}
        className={
          `flex items-center space-x-2
            py-2 px-4
      ` + (step == 7 ? "text-gray-500 bg-gray-100" : "text-white bg-orange-400")
        }
      >
        <span>Next</span>
        <HiArrowNarrowRight />
      </button>
    </div>
  );
}
