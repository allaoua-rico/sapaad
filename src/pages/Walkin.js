import { Backdrop } from "@mui/material";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import PlaceOrdersDialog from "../components/Walkin/PlaceOrdersDialog";
import WalkinDialog from "../components/Walkin/WalkinDialog";
import WalkinMenuCategories from "../components/Walkin/WalkinMenuCategories";
import WalkinSearchSection from "../components/Walkin/WalkinSearchSection";
import WalkinTopLeft from "../components/Walkin/WalkinTopLeft";

export default function Walkin() {
  // Tutorial states
  const [activeDialogStep, setActiveDialogStep] = useState(1);
  const [dialogOpen, setDialogOpen] = useState(true);
  const closeDialog = () => setDialogOpen(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const menuCategoriesRef = useRef();
  const searchSectionRef = useRef();
  const searchInputRef = useRef();
  const addNotesRef = useRef();
  const discountRef = useRef();
  const topLeftRef = useRef({ addNotesRef, discountRef });
  const placeOrderRef = useRef();
  useEffect(() => {
    menuCategoriesRef.current &&
      activeDialogStep == 2 &&
      setAnchorEl(menuCategoriesRef.current);
    searchSectionRef.current &&
      activeDialogStep == 3 &&
      setAnchorEl(searchSectionRef.current);
    searchInputRef.current &&
      activeDialogStep == 4 &&
      setAnchorEl(searchInputRef.current);
    addNotesRef.current &&
      activeDialogStep == 5 &&
      setAnchorEl(addNotesRef.current);
    discountRef.current &&
      activeDialogStep == 6 &&
      setAnchorEl(discountRef.current);
    placeOrderRef.current &&
      activeDialogStep == 7 &&
      setAnchorEl(placeOrderRef.current);
  }, [
    activeDialogStep,
    menuCategoriesRef,
    searchSectionRef,
    searchInputRef,
    addNotesRef,
    discountRef,
    placeOrderRef,
  ]);
  const disableBlur = "z-[9997] relative flex-1 flex";

  const [placeOrderOpen, setPlaceOrderOpen] = useState(false);
  const handleClickPlaceOrders = () => setPlaceOrderOpen(true);

  return (
    <div className="p-4 flex flex-col h-full flex-1">
      <div className="grid grid-cols-4 gap-x-5">
        <WalkinTopLeft
          ref={topLeftRef}
          className="col-span-3"
          step={activeDialogStep}
        />
        <button
          onClick={handleClickPlaceOrders}
          className={
            `flex items-center justify-center space-x-1
        bg-green-700 text-white font-medium 
          py-4 px-6
          rounded 
        ` + (activeDialogStep == 7 && disableBlur)
          }
          ref={placeOrderRef}
        >
          <FaCheck className="w-5 h-5" />
          <span>Discounts</span>
        </button>
      </div>
      <div className="flex space-x-5 py-3 flex-1">
        <div
          style={{ width: "50%" }}
          className={"flex-1 flex " + (activeDialogStep == 3 && disableBlur)}
          ref={searchSectionRef}
        >
          <WalkinSearchSection step={activeDialogStep} ref={searchInputRef} />
        </div>
        <div
          style={{ width: "50%" }}
          className={"flex-1 flex " + (activeDialogStep == 2 && disableBlur)}
          ref={menuCategoriesRef}
        >
          <WalkinMenuCategories />
          <Backdrop
            sx={{ zIndex: 9998 }}
            invisible
            open={activeDialogStep == 2}
          />
        </div>
      </div>
      <WalkinDialog
        anchorEl={anchorEl}
        step={activeDialogStep}
        next={() =>
          activeDialogStep < 7 && setActiveDialogStep(activeDialogStep + 1)
        }
        back={() =>
          activeDialogStep > 1 && setActiveDialogStep(activeDialogStep - 1)
        }
        open={dialogOpen}
        closeDialog={closeDialog}
      />
      <PlaceOrdersDialog open={placeOrderOpen} setOpen={setPlaceOrderOpen} />
    </div>
  );
}
