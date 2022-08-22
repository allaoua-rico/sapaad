import { AiFillPrinter } from "react-icons/ai";

export default function TableTopSection({ filterStartDate, filterEndDate }) {
  const format = "DD MMMM YYYY HH:mm";

  return (
    <div
      className="flex justify-between 
    text-xs font-thin
    border-b border-black pb-1
    "
    >
      <div>{`Period: From ${filterStartDate.format(
        format
      )} To: ${filterEndDate.format(format)}`}</div>
      <div className="flex items-center space-x-1">
        <span>
          {`Printed on ${filterStartDate.format(format)} by Jhon Vonn | `}
        </span>
        <AiFillPrinter />
        <span>Print</span>
      </div>
    </div>
  );
}
