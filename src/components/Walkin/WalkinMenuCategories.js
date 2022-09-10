import HomeIcon from "@mui/icons-material/Home";
import { Breadcrumbs } from "@mui/material";
import { useState } from "react";
import SwitchComponents from "../shared/utils/SwitchComponents";
import MenuCategoriesMain from "./MenuCategoriesMain";
import MenuCategoriesBurgers from "./MenuCategoriesBurgers";
import MenuCategoriesBeverages from "./MenuCategoriesBeverages";
import MenuCategoriesPizzas from "./MenuCategoriesPizzas";
import MuiStyledBreadcrumb from "../shared/utils/MuiStyledBreadcrumb";

export default function WalkinMenuCategories({ addToArray }) {
  const [activeComponent, setActiveComponent] = useState("Main");
  const setCategory = (cat) => setActiveComponent(categories[cat].name);

  return (
    <div
      className="border border-gray-300
      flex flex-col flex-1 items-stretch
    bg-gray-100
      "
    >
      <div className="p-2 bg-gray-200 text-gray-500">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <MuiStyledBreadcrumb
            onClick={() => setActiveComponent("Main")}
            component="a"
            href="#"
            label="Menu Categories"
            icon={<HomeIcon fontSize="small" />}
          />
          {activeComponent !== "Main" && (
            <MuiStyledBreadcrumb
              component="a"
              href="#"
              label={activeComponent}
            />
          )}
        </Breadcrumbs>
      </div>
      <div className="py-3 px-1 flex flex-wrap">
        <SwitchComponents active={activeComponent}>
          <MenuCategoriesMain name="Main" setCat={setCategory} />
          <MenuCategoriesBurgers addToArray={addToArray} name="burgers" />
          <MenuCategoriesPizzas addToArray={addToArray} name="pizzas" />
          <MenuCategoriesBeverages addToArray={addToArray} name="beverages" />
        </SwitchComponents>
      </div>
    </div>
  );
}

const categories = {
  burgers: {
    name: "burgers",
    // component: <MenuCategoriesBurgers name="burgers" />,
  },
  pizzas: {
    name: "pizzas",
    // component: <MenuCategoriesPizzas name="pizzas" />,
  },
  beverages: {
    name: "beverages",
    // component: <MenuCategoriesBeverages name="beverages" />,
  },
};
