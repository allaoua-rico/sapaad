import { Dialog, Slide } from "@mui/material";
import { forwardRef, useEffect, useRef, useState } from "react";
import { FaStarOfLife } from "react-icons/fa";
import FilledButton from "../shared/buttons/FilledButton";
import OutlinedButton from "../shared/buttons/OutlinedButton";
import CheeseBurgerRightSection from "./CheeseBurgerRightSection";
import CheeseBurgerRightSectionScroll from "./CheeseBurgerRightSectionScroll";

export default function CheeseBurgerDialogs({ open, setOpen }) {
  const handleClose = () => setOpen(null);
  const [selected, setSelected] = useState(0);
  const rightSecRef = useRef();

  const [elementsOffsetTops, setElementsOffsetTops] = useState([]);
  const [rSScrollTop, setRSScrollTop] = useState(null);
  const scrollBy = (px) => rightSecRef.current?.scrollBy(px);
  const scrollToEl = (px) => rightSecRef.current?.scrollToEl(px);

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
              {sections.map((sec, index) => (
                <LSButton
                  onClick={() => scrollToEl(elementsOffsetTops[index])}
                  selected={selected == index}
                  required={sec.required}
                >
                  {sec.name}
                </LSButton>
              ))}
            </div>
            {/* right Setion */}
            <div
              className="w-4/5 min-w-[670px]
              flex 
            "
            >
              <CheeseBurgerRightSection
                ref={rightSecRef}
                sections={sections}
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
            <FilledButton onClick={handleClose} text="Add Modifiers" />
          </div>
        </div>
      </div>
    </Dialog>
  );
}

const sections = [
  {
    name: "Choose Your Bread",
    required: true,
    choices: [
      { name: "Wheat", value: "Wheat" },
      { name: "Wholegrain", value: "Wholegrain" },
    ],
    maxChoices: 1,
  },
  {
    name: "Toppings",
    choices: [
      { name: "Caramelized Onions", value: "Caramelized Onions" },
      { name: "Tomatos", value: "Tomatos" },
      { name: "Lettuce", value: "Lettuce" },
    ],
    maxChoices: 3,
  },
  {
    name: "Add One",
    choices: [
      { name: "Cheese", value: "Cheese" },
      { name: "Chicken", value: "Chicken" },
      { name: "Bacon", value: "Bacon" },
    ],
    maxChoices: 3,
  },
];

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

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} timeout={500} />;
});
