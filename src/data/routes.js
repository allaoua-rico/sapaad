import SetupLocations from "../pages/SetupPage.js/SetupLocations";
import SetupLocationsEdit from "../pages/SetupPage.js/SetupLocationsEdit";
import SetupLocationsGeneralDetails from "../pages/SetupPage.js/SetupLocationsGeneralDetails";
import SetupLocationsMenuManagement from "../pages/SetupPage.js/SetupLocationsMenuManagement";
import SetupLocationsSurchargeAndDiscount from "../pages/SetupPage.js/SetupLocationsSurchargeAndDiscount";
import SetupPage from "../pages/SetupPage.js/SetupPage";

export const setupRoutes = [
  { path: "/setup", name: "Setup", Component: SetupPage },
  {
    path: "/setup/setup_locations",
    name: "Locations",
    Component: SetupLocations,
  },
  {
    path: "/setup/setup_locations/:locationId/edit",
    name: "A",
    Component: SetupLocationsEdit,
  },
  {
    path: "/setup/setup_locations/:locationId/edit/general_details",
    name: "A",
    Component: SetupLocationsGeneralDetails,
  },
  {
    path: "/setup/setup_locations/:locationId/edit/pos_menu_management",
    name: "Menu Management",
    Component: SetupLocationsMenuManagement,
  },
  {
    path: "/setup/setup_locations/:locationId/edit/pos_menu_management/surcharge_and_discount",
    name: "Surcharges and Discounts",
    Component: SetupLocationsSurchargeAndDiscount,
  },
  {
    path: "/setup/setup_locations/:locationId/edit/pos_menu_management/tax_rate",
    name: "Tax Rates",
    Component: SetupLocationsSurchargeAndDiscount,
  },
  {
    path: "/setup/setup_locations/:locationId/edit/pos_menu_management/menu",
    name: "Menu",
    Component: SetupLocationsSurchargeAndDiscount,
  },
  {
    path: "/setup/setup_locations/:locationId/edit/staff",
    name: "Staff",
    Component: SetupLocationsSurchargeAndDiscount,
  },
  {
    path: "/setup/setup_items",
    name: "Menu",
    // Component: SetupLocationsSurchargeAndDiscount,
  },
  {
    path: "/setup/setup_items/:itemId/edit",
    name: "Edit",
    // Component: SetupLocationsSurchargeAndDiscount,
  },
  {
    path: "/setup/setup_items/:itemId/upload",
    name: "Upload",
    // Component: SetupLocationsSurchargeAndDiscount,
  },
  {
    path: "/setup/setup_items/new",
    name: "New Menu Item",
    // Component: SetupLocationsSurchargeAndDiscount,
  },
];
