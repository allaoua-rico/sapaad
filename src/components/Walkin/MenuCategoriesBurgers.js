import { useState } from "react";
import CheeseBurgerDialogs from "./CheeseBurgerDialogs";
import CategoryButton from "./CategoryButton";

export default function MenuCategoriesBurgers() {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <div>
      <CategoryButton onClick={() => setOpenDialog(true)} color="orange">
        Cheese Burgers
      </CategoryButton>
      <CategoryButton onClick={() => setOpenDialog(true)} color="orange">
        Grilled Beef Burgers
      </CategoryButton>
      <CategoryButton onClick={() => setOpenDialog(true)} color="orange">
        Grilled Chicken Burgers
      </CategoryButton>
      <CheeseBurgerDialogs open={openDialog} setOpen={setOpenDialog} />
    </div>
  );
}
