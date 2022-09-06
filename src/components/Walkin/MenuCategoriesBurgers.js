import { useState } from "react";
import CheeseBurgerDialogs from "./CheeseBurgerDialogs";
import CategoryButton from "./CategoryButton";

export default function MenuCategoriesBurgers({ addToArray }) {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <div>
      <CategoryButton onClick={() => setOpenDialog(true)} color="orange">
        Cheese Burgers
      </CategoryButton>
      <CategoryButton
        onClick={() => addToArray({ name: "Grilled Beef Burgers", price: 15 })}
        color="orange"
      >
        Grilled Beef Burgers
      </CategoryButton>
      <CategoryButton
        onClick={() =>
          addToArray({ name: "Grilled Chicken Burgers", price: 15 })
        }
        color="orange"
      >
        Grilled Chicken Burgers
      </CategoryButton>
      <CheeseBurgerDialogs
        addToArray={addToArray}
        open={openDialog}
        setOpen={setOpenDialog}
      />
    </div>
  );
}
