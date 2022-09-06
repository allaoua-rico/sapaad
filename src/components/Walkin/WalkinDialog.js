import React from "react";
import DotsMobileStepper from "../shared/utils/MuiDotsStepper";
import { Backdrop, Popover } from "@mui/material";
import WalkinDialogBackNext from "./WalkinDialogBackNext";

export default function WalkinDialog({
  anchorEl,
  step,
  next,
  back,
  closeDialog,
  open,
}) {
  
  return (
    <>
      <Backdrop sx={{ color: "#fff", zIndex: 9996 }} open={open} />
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={anchorOrigin[step - 1]}
        transformOrigin={transformOrigin[step - 1]}
        open={open}
        sx={{
          zIndex: 9999,
          "& .MuiPopover-paper": { maxWidth: "440px" },
        }}
      >
        <div className="relative">
          <button
            onClick={closeDialog}
            className="text-blue-400
            absolute right-3 top-3"
          >
            Quit
          </button>
          <div
            className="pt-12 px-7 pb-5 space-y-1
           flex flex-col items-center
          "
          >
            <div className="flex">
              <div className="pr-2">
                <div
                  className="font-bold text-white
                flex items-center justify-center
                w-10 h-10
                rounded-full bg-blue-300"
                >
                  {step}
                </div>
              </div>
              <p className="text-sm">{stepsText[step - 1]}</p>
            </div>
            <DotsMobileStepper steps={7} step={step} />
            <WalkinDialogBackNext next={next} back={back} step={step} />
          </div>
        </div>
      </Popover>
    </>
  );
}

const stepsText = [
  `This is the Walk-in POS interface. The POS is the heart of
Sapaad; here's where you take orders for your customers and bill
them. Let's show you around the interface.`,
  `This is the POS menu. Click a Menu Category to see a list of menu items in that category. Click a menu item to add it to the order.
`,
  `This is the bill. Here you can add, remove, increase quantities, add modifiers, and build your customer’s bill.
`,
  `You can use the search bar to quickly look for a menu item. Simply highlight the item in the search results using your up-down arrow keys and hit enter to quickly add the item to the order.
`,
  `You can add notes to the order. The notes will get printed with the bill (incase you want it it to) or to the Kitchen print so that your kitchen staff know what to do
`,
  `Click this button to add discounts to the bill. You will have to configure Discounts first. You can do that using the Setup section of Sapaad.
`,
  <div className="space-y-3">
    <div>
      Once you’ve taken the order and made sure it’s correct, click this button
      to place the order. Sapaad will generate a bill for the customer.
    </div>
    <div>
      And that’s all! Don’t forget you can add your own menu items at anytime.
    </div>
  </div>,
];
const anchorOrigin = [
  {
    vertical: "center",
    horizontal: "center",
  },
  {
    vertical: "center",
    horizontal: "left",
  },
  {
    vertical: "center",
    horizontal: "right",
  },
  {
    vertical: "bottom",
    horizontal: "center",
  },
  {
    vertical: "bottom",
    horizontal: "center",
  },
  {
    vertical: "bottom",
    horizontal: "center",
  },
  {
    vertical: "center",
    horizontal: "left",
  },
];
const transformOrigin = [
  {
    vertical: "center",
    horizontal: "center",
  },
  {
    vertical: "center",
    horizontal: "right",
  },
  {
    vertical: "center",
    horizontal: "left",
  },
  {
    vertical: "top",
    horizontal: "center",
  },
  {
    vertical: "top",
    horizontal: "center",
  },
  {
    vertical: "top",
    horizontal: "center",
  },
  {
    vertical: "center",
    horizontal: "right",
  },
];

// <Dialog
//   sx={{ "& .MuiDialog-paper": { zIndex: 9999 } }}
//   onClose={handleClose}
//   open={open}
// >
//   <div className="relative">
//     <button
//       className="text-blue-400
//         absolute right-3 top-3"
//     >
//       Quit
//     </button>
//     <div className="pt-12 px-7 pb-5">
//       <p>
//         This is the Walk-in POS interface. The POS is the heart of Sapaad;
//         here's where you take orders for your customers and bill them. Let's
//         show you around the interface.
//       </p>
//       {/* <DotsMobileStepper /> */}
//     </div>
//   </div>
// </Dialog>
