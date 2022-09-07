export const cheeseBurgerModifiers = [
  {
    name: "Choose Your Bread",
    required: true,
    choices: [
      { name: "Wheat", value: "Wheat" },
      { name: "Wholegrain", value: "Wholegrain" },
    ],
    maxChoices: 1,
    editable: true,
  },
  {
    name: "Toppings",
    choices: [
      { name: "Caramelized Onions", value: "Caramelized Onions" },
      { name: "Tomatos", value: "Tomatos" },
      { name: "Lettuce", value: "Lettuce", price: "1.00" },
    ],
    maxChoices: 3,
  },
  {
    name: "Add Ons",
    choices: [
      { name: "Cheese", value: "Cheese", price: "1.00" },
      { name: "Chicken", value: "Chicken", price: "2.00" },
      { name: "Bacon", value: "Bacon", price: "1.00" },
    ],
    maxChoices: 3,
  },
];
