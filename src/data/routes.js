import SetupLocations from "../pages/SetupPage.js/SetupLocations";
import SetupLocationsEdit from "../pages/SetupPage.js/SetupLocationsEdit";
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
];
