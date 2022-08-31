import CategoryButton from "./CategoryButton";

export default function MenuCategoriesBeverages() {
  return (
    <div>
      <CategoryButton
        // onClick={() => setCat("burgers")}
        color="red"
      >
        Bottled Water
      </CategoryButton>
      <CategoryButton
        //  onClick={() => setCat("pizzas")}
        color="red"
      >
        Coke
      </CategoryButton>
      <CategoryButton
        // onClick={() => setCat("beverages")}
        color="red"
      >
        Pepsi
      </CategoryButton>
    </div>
  );
}
