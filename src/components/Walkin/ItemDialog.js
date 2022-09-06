import { Dialog, Slide } from "@mui/material";
import { Formik } from "formik";
import { forwardRef, useState } from "react";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { IoCloseCircleSharp } from "react-icons/io5";
import { CheeseBurgerValidationSchema } from "../../utils/validation/ValidationSchema";
import InputFormik from "../shared/fields/InputFormik";
import CheeseBurgerUpdateDialogs from "./CheeseBurgerUpdateDialogs";
import ItemInfoDialog from "./ItemInfoDialog";
import * as yup from "yup";

export default function ItemDialog({
  open,
  setOpen,
  item,
  handleOpenDiscount,
}) {
  const handleClose = () => setOpen(null);
  const [openItemInfo, setOpenItemInfo] = useState(false);
  const handleOpenItemInfo = () => setOpenItemInfo(true);

  const [openCBModifier, setOpenCBModifier] = useState(false);
  const handleOpenCBModifier = () => setOpenCBModifier(true);

  const updateItem = (item) => {
    console.log(item.choices);
  };
  return (
    <Dialog
      PaperProps={{
        sx: {
          overflow: "visible",
        },
      }}
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
    >
      <div
        className="flex flex-col flex-1 
        relative min-w-[560px]
        "
      >
        <Formik
          initialValues={{ notes: "" }}
          validationSchema={yup.object({ ...CheeseBurgerValidationSchema })}
          //   onSubmit={handleSubmit}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <div
                className="bg-gray-100 p-6 
                space-y-2 flex flex-col
                min-w-min 
                "
              >
                <h3 className="text-3xl text-green-600 border-b-2 pb-2 border-gray-300">
                  {item.name}
                </h3>
                <InputFormik
                  name="notes"
                  formik={props}
                  placeholder="Enter notes"
                  textarea
                  rows={3}
                />
                <div className="grid grid-cols-3 gap-x-4 w-full">
                  <button
                    className="bg-[#49afcd] text-white
                  flex flex-col items-center w-full
                  py-4 px-3 rounded
                  "
                    onClick={handleOpenDiscount}
                  >
                    <span className="text-xl font-bold">%</span>
                    <span className="text-sm">Discount</span>
                  </button>
                  <button
                    className={
                      `text-white
                        flex flex-col items-center w-full
                        py-4 px-3 rounded
                         ` +
                      (item.name == "Cheese Burger"
                        ? "bg-[#5bb75b]"
                        : "bg-[#dceddc]")
                    }
                    disabled={item.name !== "Cheese Burger"}
                    onClick={handleOpenCBModifier}
                  >
                    <span className="text-xl font-bold">%</span>
                    <span className="text-sm">Modifiers</span>
                  </button>
                  <button
                    className="bg-[#006dcc] text-white
                    flex flex-col items-center w-full
                    py-4 px-3 rounded
                    cursor-help
                    "
                    onClick={handleOpenItemInfo}
                  >
                    <span className="text-xl font-bold">
                      <HiQuestionMarkCircle />
                    </span>
                    <span className="text-sm">Item Info</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
        <button
          onClick={handleClose}
          className="absolute -right-4 -top-4 z-50 bg-white rounded-full"
        >
          <IoCloseCircleSharp
            className="w-12 h-12 fill-red-600 
           -m-2	"
          />
        </button>
      </div>
      <ItemInfoDialog
        item={item}
        open={openItemInfo}
        setOpen={setOpenItemInfo}
      />
      {openCBModifier && (
        <CheeseBurgerUpdateDialogs
          item={item}
          updateItem={updateItem}
          open={openCBModifier}
          setOpen={setOpenCBModifier}
        />
      )}
    </Dialog>
  );
}

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} timeout={500} />;
});
