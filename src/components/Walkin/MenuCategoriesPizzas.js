import { useState } from "react";
import CategoryButton from "./CategoryButton";
import WalkinListDialogs from "./WalkinListDialogs";

export default function MenuCategoriesPizzas({ addToArray }) {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <div>
      <CategoryButton
        onClick={() => addToArray({ name: "Chicken Pizza", price: 5 })}
        color="pink"
      >
        Chicken Pizza
      </CategoryButton>
      <CategoryButton onClick={() => setOpenDialog(true)} color="pink">
        Margherita Pizza
      </CategoryButton>
      <CategoryButton
        onClick={() => addToArray({ name: "Veg Pizza", price: 5 })}
        color="pink"
      >
        Veg Pizza
      </CategoryButton>
      <WalkinListDialogs
        addToArray={addToArray}
        open={openDialog}
        setOpen={setOpenDialog}
      />
    </div>
  );
}
