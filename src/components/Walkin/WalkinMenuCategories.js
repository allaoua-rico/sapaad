import HomeIcon from "@mui/icons-material/Home";
import { Breadcrumbs } from "@mui/material";
import { emphasize, styled } from "@mui/material/styles";
import { useState } from "react";
import SwitchComponents from "../shared/utils/SwitchComponents";
import MenuCategoriesMain from "./MenuCategoriesMain";
import MenuCategoriesBurgers from "./MenuCategoriesBurgers";
import Chip from "@mui/material/Chip";
import MenuCategoriesBeverages from "./MenuCategoriesBeverages";
import MenuCategoriesPizzas from "./MenuCategoriesPizzas";

export default function WalkinMenuCategories() {
  const [activeComponent, setActiveComponent] = useState("Main");

  const categories = {
    burgers: {
      name: "burgers",
      component: <MenuCategoriesBurgers name="burgers" />,
    },
    pizzas: {
      name: "pizzas",
      component: <MenuCategoriesPizzas name="pizzas" />,
    },
    beverages: {
      name: "beverages",
      component: <MenuCategoriesBeverages name="beverages" />,
    },
  };
  // console.log(activeComponent)
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
          <StyledBreadcrumb
            onClick={() => setActiveComponent("Main")}
            component="a"
            href="#"
            label="Menu Categories"
            icon={<HomeIcon fontSize="small" />}
          />
          {activeComponent !== "Main" && (
            <StyledBreadcrumb component="a" href="#" label={activeComponent} />
          )}
        </Breadcrumbs>
      </div>
      <div className="py-3 px-1 flex flex-wrap">
        <SwitchComponents active={activeComponent}>
          <MenuCategoriesMain name="Main" setCat={setCategory} />
          {/* {Object.keys(categories).map((key) => categories[key].component)} */}
          <MenuCategoriesBurgers name="burgers" />
          <MenuCategoriesPizzas name="pizzas" />
          <MenuCategoriesBeverages name="beverages" />
          <div></div>
        </SwitchComponents>
      </div>
    </div>
  );
}

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});
