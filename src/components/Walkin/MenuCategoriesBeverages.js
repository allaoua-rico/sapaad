import CategoryButton from "./CategoryButton";

export default function MenuCategoriesBeverages({ addToArray }) {
  return (
    <div>
      <CategoryButton
        onClick={() => addToArray({ name: "Bottled Water", price: "3.00" })}
        color="red"
      >
        Bottled Water
      </CategoryButton>
      <CategoryButton
        onClick={() => addToArray({ name: "Coke", price: "5.00" })}
        color="red"
      >
        Coke
      </CategoryButton>
      <CategoryButton
        onClick={() => addToArray({ name: "Pepsi", price: "5.00" })}
        color="red"
      >
        Pepsi
      </CategoryButton>
    </div>
  );
}
