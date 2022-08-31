import { RiStickyNoteFill } from "react-icons/ri";
import { MdOutlineAdd } from "react-icons/md";
import { forwardRef, useState } from "react";
import AddNotesMenu from "./AddNotesMenu";
import DiscountsDialog from "./DiscountsDialog";

const WalkinTopLeft = forwardRef(({ className, step }, ref) => {
  const { addNotesRef, discountRef } = ref.current;
  const disableBlur = "z-[9997] relative flex-1 flex";

  const [addNotesAnchorEl, setAddNotesAnchorEl] = useState(null);
  const addNotesOpen = Boolean(addNotesAnchorEl);
  const handleClickAdd = (e) => setAddNotesAnchorEl(e.currentTarget);

  const [discountOpen, setDiscountOpen] = useState(false);
  const handleClickDiscounts = () => setDiscountOpen(true);

  return (
    <div className={className}>
      <div
        className="bg-gray-200 p-2
        flex items-center justify-between
        rounded
    "
      >
        <div>
          <div className="text-sm font-medium">New Order:</div>
          <div className="text-2xl font-bold">A</div>
        </div>
        <div className="grid grid-cols-2 gap-x-2">
          <button
            onClick={handleClickAdd}
            ref={addNotesRef}
            className={
              `flex items-center space-x-1
          bg-orange-400 text-white font-medium
            py-2 px-4
            rounded 
        ` + (step == 5 && disableBlur)
            }
          >
            <RiStickyNoteFill />
            <span>Add Notes</span>
          </button>
          <button
            onClick={handleClickDiscounts}
            ref={discountRef}
            className={
              `flex items-center space-x-1
        bg-blue-400 text-white font-medium
          py-2 px-4
          rounded
        ` + (step == 6 && disableBlur)
            }
          >
            <MdOutlineAdd className="w-5 h-5" />
            <span>Discounts</span>
          </button>
        </div>
      </div>
      <AddNotesMenu
        anchorEl={addNotesAnchorEl}
        open={addNotesOpen}
        setAnchorEl={setAddNotesAnchorEl}
      />
      <DiscountsDialog open={discountOpen} setOpen={setDiscountOpen} />
    </div>
  );
});

export default WalkinTopLeft;
