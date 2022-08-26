import { Link } from "react-router-dom";
import SelectButton from "./SelectButton";
import { AiOutlinePrinter } from "react-icons/ai";

export default function PrintLink() {
  return (
    <Link to="" >
      <SelectButton>
        <AiOutlinePrinter />
      </SelectButton>
    </Link>
  );
}
