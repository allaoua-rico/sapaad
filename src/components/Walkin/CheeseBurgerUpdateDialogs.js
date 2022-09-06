import { Dialog } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { FaStarOfLife } from "react-icons/fa";
import FilledButton from "../shared/buttons/FilledButton";
import OutlinedButton from "../shared/buttons/OutlinedButton";
import CheeseBurgerRightSection from "./CheeseBurgerRightSection";
import CheeseBurgerRightSectionScroll from "./CheeseBurgerRightSectionScroll";
import { Formik } from "formik";
import * as yup from "yup";
import Transition from "../shared/utils/Transition";
import { cheeseBurgerModifiers } from "../../data/walkinData";
import { CheeseBurgerValidationSchema } from "../../utils/validation/ValidationSchema";

export default function CheeseBurgerUpdateDialogs({
  open,
  setOpen,
  updateItem,
  item,
}) {
  const handleClose = () => setOpen(null);
  const [selected, setSelected] = useState(0);
  const rightSecRef = useRef();

  const [elementsOffsetTops, setElementsOffsetTops] = useState([]);
  const [rSScrollTop, setRSScrollTop] = useState(null);
  const scrollBy = (px) => rightSecRef.current?.scrollBy(px);
  const scrollToEl = (px) => rightSecRef.current?.scrollToEl(px);

  const initialValues = {};
  cheeseBurgerModifiers.map((sec) => {
    if (sec.maxChoices == 1)
      return (initialValues[sec.name] = item.choices[sec.name].name);
    const array = sec.choices.map((choice) => {
      let found = false;
      item.choices[sec.name].map((initialChoice) => {
        if (choice.name == initialChoice.name) found = true;
      });
      return found;
    });
    initialValues[sec.name] = [...array];
  });

  useEffect(() => {
    // handle first and last
    if (rSScrollTop <= elementsOffsetTops[0]) return setSelected(0);
    if (rSScrollTop > elementsOffsetTops[elementsOffsetTops.length - 2])
      return setSelected(elementsOffsetTops.length - 1);
    // handle rest
    const index = elementsOffsetTops.findIndex((offsetTop, index, array) => {
      if (index == 0) return false;
      return offsetTop < rSScrollTop || rSScrollTop < array[index + 1];
    });
    return setSelected(index);
  }, [rSScrollTop]);

  const handleSubmit = (values) => {
    const choices = {};
    // resolve choices
    cheeseBurgerModifiers.map((sec) => {
      const section = values[sec.name];
      if (sec.maxChoices == 1) {
        choices[sec.name] = sec.choices.find(
          (choice) => choice.value == section
        );
      } else {
        choices[sec.name] = sec.choices.filter((item, index) => section[index]);
      }
    });
    console.log(choices);
    updateItem({ name: "Cheese Burger", choices, price: 10, editable: true });
    handleClose();
  };

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
        className="flex flex-col flex-1 min-w-fit 
        relative
        "
      >
        <Formik
          initialValues={initialValues}
          validationSchema={yup.object({ ...CheeseBurgerValidationSchema })}
          onSubmit={handleSubmit}
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
                  Cheese Burger
                </h3>
                <div className="divide-x-2 flex w-full py-3">
                  {/* left Setion */}
                  <div className="w-1/5 min-w-[170px] space-y-2 mx-4">
                    {cheeseBurgerModifiers.map((sec, index) => (
                      <LSButton
                        type="button"
                        onClick={() => scrollToEl(elementsOffsetTops[index])}
                        selected={selected == index}
                        required={sec.required}
                      >
                        {sec.name}
                      </LSButton>
                    ))}
                  </div>
                  {/* right Setion */}
                  <div className="w-4/5 min-w-[670px] flex">
                    <CheeseBurgerRightSection
                      formik={props}
                      ref={rightSecRef}
                      sections={cheeseBurgerModifiers}
                      setElementsOffsetTops={setElementsOffsetTops}
                      setRSScrollTop={setRSScrollTop}
                    />

                    <CheeseBurgerRightSectionScroll scroll={scrollBy} />
                  </div>
                </div>
              </div>
              <div className="flex justify-between pt-5 bg-gray-200 p-6 w-full flex-1">
                <div className="flex items-center text-sm">
                  <FaStarOfLife className="text-orange-400" /> = Required
                </div>
                <div className="flex items-center space-x-3">
                  <OutlinedButton onClick={handleClose} text="Cancel" />
                  <FilledButton
                    type="button"
                    onClick={props.submitForm}
                    text="Update Modifiers"
                  />
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </Dialog>
  );
}

function LSButton({ children, selected, required, ...props }) {
  return (
    <div
      className={
        "relative transition-all duration-250 " +
        (selected ? "scale-[1.12]" : "hover:scale-105")
      }
    >
      {required && (
        <FaStarOfLife
          className="absolute -left-2 -top-1 z-10
          w-6 h-6
        bg-white rounded-full p-1
        text-orange-400"
        />
      )}
      <button
        className={
          `text-white font-medium whitespace-nowrap
        py-4 px-2 
        rounded-xl w-full 
    ` + (selected ? "bg-blue-400" : "bg-blue-300")
        }
        {...props}
      >
        {children}
      </button>
    </div>
  );
}
