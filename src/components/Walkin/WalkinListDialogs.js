import { Dialog } from "@mui/material";
import React from "react";
import OutlinedButton from "../shared/buttons/OutlinedButton";
import Transition from "../shared/utils/Transition";

export default function WalkinListDialogs({ open, setOpen, addToArray }) {
  const handleClose = () => setOpen(null);

  const margheritasList = [
    { name: "Margherita Large", price: "2.00" },
    { name: "Margherita Medium", price: "2.00" },
    { name: "Margherita XXL", price: "2.00" },
  ];
  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": { m: 0, maxWidth: "none", maxHeight: "100%" },
        height: "670px",
        maxHeight: "100%",
        my: "auto",
      }}
      maxWidth={false}
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
    >
      <div
        className="flex flex-col flex-1 min-w-fit relative
        p-5
        "
      >
        <h2 className="text-xl text-gray-400 pb-2">
          <span>Please choose option for the </span>
          <span className="font-bold text-black">Margherita Pizza</span>
        </h2>
        <ul className="border border-gray-300 divide-y divide-gray-300">
          {React.Children.toArray(
            margheritasList.map((item) => (
              <li>
                <button
                  className="py-2 px-2 text-left font-medium
                  w-full 
                  hover:bg-[#42cd79] hover:text-white
                  transition-all duration-150
                  "
                  onClick={() => addToArray(item)}
                >
                  {item.name}
                </button>
              </li>
            ))
          )}
        </ul>
        <div
          className="flex justify-end w-full flex-1
         pt-5 
        "
        >
          <OutlinedButton onClick={handleClose} text="Cancel" />
        </div>
      </div>
    </Dialog>
  );
}
