import { Link } from "react-router-dom";
import FilledButton from "../shared/buttons/FilledButton";
import MuiCircularProgress from "../shared/utils/MuiCircularProgress";

export default function SetupResponse() {
  return (
    <div className="flex flex-col items-center space-y-10">
      <MuiCircularProgress />
      <div className="text-3xl text-center">
        Please wait while we setup your trial account!
      </div>
      <div className="text-sm font-medium">Finishing up</div>
      <Link to="/walkin">
        <FilledButton text="Go to walkin" type="button" />
      </Link>
    </div>
  );
}
