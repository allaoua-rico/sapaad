import { RiSendPlaneFill } from "react-icons/ri";
import SelectButton from "../shared/buttons/SelectButton";

export default function SendSms({ disabled }) {
  return (
    <SelectButton disabled={disabled}>
      <div className="flex items-center space-x-2">
        <RiSendPlaneFill />
        <span>Send SMS</span>
      </div>
    </SelectButton>
  );
}
