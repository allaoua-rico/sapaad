import React from "react";
import CategoryButton from "./CategoryButton";

export default function MenuCategoriesMain({ setCat }) {
  return (
    <div>
      <CategoryButton onClick={() => setCat("burgers")} color="orange">
        Burgers
      </CategoryButton>
      <CategoryButton onClick={() => setCat("pizzas")} color="pink">
        Pizzas
      </CategoryButton>
      <CategoryButton onClick={() => setCat("beverages")} color="red">
        Beverages
      </CategoryButton>
    </div>
  );
}
