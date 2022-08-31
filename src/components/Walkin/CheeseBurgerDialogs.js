import { Dialog, Slide } from "@mui/material";
import { forwardRef } from "react";
import { FaStarOfLife } from "react-icons/fa";
import FilledButton from "../shared/buttons/FilledButton";
import OutlinedButton from "../shared/buttons/OutlinedButton";

export default function CheeseBurgerDialogs({ open, setOpen }) {
  const handleClose = () => setOpen(null);

  return (
    <Dialog open={open} TransitionComponent={Transition} onClose={handleClose}>
      <div className="bg-gray-100 p-3 space-y-2 flex flex-col">
        <h3 className="text-3xl text-green-600 border-b-2 pb-2 border-gray-300">
          Cheese Burger
        </h3>
        <div>
          
        </div>
        <div className="flex justify-between pt-5">
          <div className="flex items-center text-sm">
            <FaStarOfLife className="text-orange-400" /> = Required
          </div>
          <div className="flex items-center space-x-3">
            <OutlinedButton onClick={handleClose} text="Cancel" />
            <FilledButton onClick={handleClose} text="Add Modifiers" />
          </div>
        </div>
      </div>
    </Dialog>
  );
}

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} timeout={500} />;
});
