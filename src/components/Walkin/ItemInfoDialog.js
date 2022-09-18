import { Dialog, Slide } from "@mui/material";
import { forwardRef } from "react";
import OutlinedButtonSm from "../shared/buttons/OutlinedButtonSm";
import { IoCloseSharp } from "react-icons/io5";
import Transition from "../shared/utils/Transition";

export default function ItemInfoDialog({ open, setOpen, item }) {
  const handleClose = () => setOpen(null);

  return (
    <Dialog open={open} TransitionComponent={Transition} onClose={handleClose}>
      <div className="bg-gray-100 p-3 space-y-2">
        <h2 className="text-2xl font-bold">{item.name}</h2>
        <div
          className="border-y border-gray-200 py-16 px-12 
        text-gray-400 
        text-center
        "
        >
          <div className="font-semibold text-gray-800">
            No details available.
          </div>
          <p>
            Hint: You can add images and descriptions for each menu item in
            setup
          </p>
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


