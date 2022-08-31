import { Dialog, Slide } from "@mui/material";
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import OutlinedButtonSm from "../shared/buttons/OutlinedButtonSm";
import { IoCloseSharp } from "react-icons/io5";

export default function DiscountsDialog({ open, setOpen }) {
  const handleClose = () => setOpen(null);

  return (
    <Dialog open={open} TransitionComponent={Transition} onClose={handleClose}>
      <div className="bg-gray-100 p-3 space-y-2">
        <h2 className="text-2xl font-bold">Add Discount</h2>
        <div className="bg-gray-200 py-16 px-12">
          <div className="text-3xl font-bold pb-5">No discounts Found!</div>
          <div className="text-gray-400 space-y-2">
            <div>To add Discount, go to:</div>
            <Link className="text-blue-400" to="">
              Setup
            </Link>{" "}
            {">"} Location Setup {">"} Surcharges and Discounts.
          </div>
        </div>
        <div className="flex justify-end pt-5">
          <OutlinedButtonSm onClick={handleClose} text="Close" />
        </div>
        <button onClick={handleClose} className="absolute right-3 top-3">
          <IoCloseSharp className="fill-gray-400" />
        </button>
      </div>
    </Dialog>
  );
}

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} timeout={500} />;
});
