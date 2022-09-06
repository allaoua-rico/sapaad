import { Backdrop } from "@mui/material";
import _ from "lodash";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import ItemDialog from "../components/Walkin/ItemDialog";
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

  const [list, setList] = useState([]);
  const addToArray = (item) => setList([...list, { ...item, qty: 1 }]);
  const removeFromArray = (index) =>
    setList([...list].filter((item, item2) => item2 !== index));

  const [openItem, setopenItem] = useState(false);
  const [item, setItem] = useState(null);
  const handleOpenItemDialog = (index) => {
    setItem(list[index]);
    setopenItem(true);
  };
  const handleOpenDiscount = () => topLeftRef.current?.openDiscountDialog();

  return (
    <div className="p-4 flex flex-col flex-1 h-full">
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
          <span>Place Order</span>
        </button>
      </div>
      <div className="flex space-x-5 py-3 flex-1">
        <div
          style={{ width: "50%" }}
          className={"flex-1 flex " + (activeDialogStep == 3 && disableBlur)}
          ref={searchSectionRef}
        >
          <WalkinSearchSection
            ref={searchInputRef}
            list={list}
            setList={setList}
            step={activeDialogStep}
            removeFromArray={removeFromArray}
            handleOpenItemDialog={handleOpenItemDialog}
          />
        </div>
        <div
          style={{ width: "50%" }}
          className={"flex-1 flex " + (activeDialogStep == 2 && disableBlur)}
          ref={menuCategoriesRef}
        >
          <WalkinMenuCategories addToArray={addToArray} />
          <Backdrop
            sx={{ zIndex: 9998 }}
            invisible
            open={activeDialogStep == 2}
          />
        </div>
      </div>
      <>
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
        <PlaceOrdersDialog
          list={list}
          open={placeOrderOpen}
          setOpen={setPlaceOrderOpen}
        />
        <ItemDialog
          handleOpenDiscount={handleOpenDiscount}
          open={openItem}
          setOpen={setopenItem}
          item={item}
        />
      </>
    </div>
  );
}
