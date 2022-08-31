import CategoryButton from "./CategoryButton";

export default function MenuCategoriesPizzas() {
  return (
    <div>
      <CategoryButton
        // onClick={() => setCat("burgers")}
        color="pink"
      >
        Chicken Pizza
      </CategoryButton>
      <CategoryButton
        //  onClick={() => setCat("pizzas")}
        color="pink"
      >
        Margherita Pizza
      </CategoryButton>
      <CategoryButton
        // onClick={() => setCat("beverages")}
        color="pink"
      >
        Veg Pizza
      </CategoryButton>
    </div>
  );
}
