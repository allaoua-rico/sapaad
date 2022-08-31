import { Dialog, Slide } from "@mui/material";
import { forwardRef } from "react";
import { MdErrorOutline } from "react-icons/md";
import FilledButton from "../shared/buttons/FilledButton";

export default function PlaceOrdersDialog({ open, setOpen }) {
  const handleClose = () => setOpen(null);

  return (
    <Dialog open={open} TransitionComponent={Transition} onClose={handleClose}>
      <div
        className="bg-gray-100 p-3 space-y-2
      flex flex-col items-center
      "
      >
        <div
          className="py-16 px-12
        flex flex-col items-center
        "
        >
          <MdErrorOutline className="w-20 h-20 text-orange-300" />
          <div className="text-3xl font-bold pb-5">No discounts Found!</div>
          <div className="text-gray-800 font-medium space-y-2">
            Please add an item to the bill to place an order!
          </div>
        </div>
        <div className="flex justify-center pt-5">
          <FilledButton onClick={handleClose} text="Ok" />
        </div>
      </div>
    </Dialog>
  );
}

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} timeout={500} />;
});
