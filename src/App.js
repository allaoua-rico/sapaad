import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import HeaderLg from "./components/HeaderLg";
import DashBoardSalesGrid from "./components/DashBoard/DashBoardSalesGrid";
import DashBoardMarketingGrid from "./components/DashBoard/DashBoardMarketingGrid";
import DashBoardSalesSummary from "./components/DashBoard/DashBoardSalesSummary";
import DashBoardSavedReports from "./components/DashBoard/DashBoardSavedReports";
import ModificationsAndReprints from "./pages/reports/ModificationsAndReprints";
import Landing from "./pages/Landing";
import Reports from "./pages/reports/Reports";
import TotalSales from "./pages/reports/TotalSales";
import CancelledOrders from "./pages/reports/CancelledOrders";
import TopSellingItems from "./pages/reports/TopSellingItems";
import StaffWiseReport from "./pages/reports/StaffWiseReport";
import TotalOrders from "./pages/reports/TotalOrders";
import TopGrossingItems from "./pages/reports/TopGrossingItems";
import HourlyReport from "./pages/reports/HourlyReport";
import CancelledItems from "./pages/reports/CancelledItems";
import NewCustomers from "./pages/reports/NewCustomers";
import TotalSurcharges from "./pages/reports/TotalSurcharges";
import TotalDiscounts from "./pages/reports/TotalDiscounts";
import DeliveryReport from "./pages/reports/DeliveryReport";
import InactiveCustomers from "./pages/reports/InactiveCustomers";
import TopComboItems from "./pages/reports/TopComboItems";
import TopCustomers from "./pages/reports/TopCustomers";
import TopModifiers from "./pages/reports/TopModifiers";
import TableWiseSalesReport from "./pages/reports/TableWiseSalesReport";
import NumberOfPersonServedByLocation from "./pages/reports/NumberOfPersonServedByLocation";
import TopPaidModifiers from "./pages/reports/TopPaidModifiers";
import AreaWiseSalesReport from "./pages/reports/AreaWiseSalesReport";
import BuildingWiseSalesReport from "./pages/reports/BuildingWiseSalesReport";
import Setup from "./pages/Setup";
import Walkin from "./pages/Walkin";
import SetupPage from "./pages/SetupPage.js/SetupPage";
import SetupLocations from "./pages/SetupPage.js/SetupLocations";
import React from "react";
import SetupLocationsEdit from "./pages/SetupPage.js/SetupLocationsEdit";
import SetupLocationsGeneralDetails from "./pages/SetupPage.js/SetupLocationsGeneralDetails";
import SetupLocationsMenuManagement from "./pages/SetupPage.js/SetupLocationsMenuManagement";
import SetupLocationsSurchargeAndDiscount from "./pages/SetupPage.js/SetupLocationsSurchargeAndDiscount";
import SetupLocationsTaxRate from "./pages/SetupPage.js/SetupLocationsTaxRate";
import SetupLocationsMenu from "./pages/SetupPage.js/SetupLocationsMenu";
import SetupLocationsStaff from "./pages/SetupPage.js/SetupLocationsStaff";
import SetupItems from "./pages/SetupPage.js/SetupItems";
import ItemNewAndEdit from "./pages/SetupPage.js/ItemNewAndEdit";
import ItemUpload from "./pages/SetupPage.js/ItemUpload";

function App() {
  return (
    <BrowserRouter>
      <div
        className="
    bg-mainBg text-black 
      min-h-screen 
      flex flex-col flex-1 justify-between
      "
      >
        <HeaderLg />
        <div className="flex-1 relative flex flex-col ">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/businessSetup" element={<Setup />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<DashBoardSalesGrid />} />
              <Route path="sales" element={<DashBoardSalesGrid />} />
              <Route path="marketing" element={<DashBoardMarketingGrid />} />
              <Route path="sales_summary" element={<DashBoardSalesSummary />} />
              <Route path="saved_reports" element={<DashBoardSavedReports />} />
            </Route>
            <Route path="/reports" element={<Reports />}>
              <Route
                path="modifications_and_reprints"
                element={<ModificationsAndReprints />}
              />
              <Route path="total_sales" element={<TotalSales />} />
              <Route path="hourly_report" element={<HourlyReport />} />
              <Route path="cancelled_orders" element={<CancelledOrders />} />
              <Route path="top_selling_items" element={<TopSellingItems />} />
              <Route path="staff_wise_report" element={<StaffWiseReport />} />
              <Route path="total_orders" element={<TotalOrders />} />
              <Route path="top_grossing_items" element={<TopGrossingItems />} />
              <Route path="cancelled_items" element={<CancelledItems />} />
              <Route path="new_customers" element={<NewCustomers />} />
              <Route path="total_surcharges" element={<TotalSurcharges />} />
              {/* Table component */}
              <Route path="total_discounts" element={<TotalDiscounts />} />
              <Route path="delivery_report" element={<DeliveryReport />} />
              <Route
                path="inactive_customers"
                element={<InactiveCustomers />}
              />
              <Route path="top_combo_items" element={<TopComboItems />} />
              <Route path="top_customers" element={<TopCustomers />} />
              <Route path="top_modifiers" element={<TopModifiers />} />
              <Route
                path="table_wise_sales_report"
                element={<TableWiseSalesReport />}
              />
              <Route
                path="number_of_person_served_by_location"
                element={<NumberOfPersonServedByLocation />}
              />
              <Route path="top_paid_modifiers" element={<TopPaidModifiers />} />
              <Route
                path="area_wise_sales_report"
                element={<AreaWiseSalesReport />}
              />
              <Route
                path="building_wise_sales_report"
                element={<BuildingWiseSalesReport />}
              />
            </Route>
            <Route path="/walkin" element={<Walkin />} />
            <Route path="/setup" element={<SetupPage />}>
              <Route path="setup_locations">
                <Route index element={<SetupLocations />} />
                <Route path=":locationId">
                  <Route path="edit">
                    <Route index element={<SetupLocationsEdit />} />
                    <Route
                      path="general_details"
                      element={<SetupLocationsGeneralDetails />}
                    />
                    <Route path="pos_menu_management">
                      <Route index element={<SetupLocationsMenuManagement />} />
                      <Route
                        path="surcharge_and_discount"
                        element={<SetupLocationsSurchargeAndDiscount />}
                      />
                      <Route
                        path="tax_rate"
                        element={<SetupLocationsTaxRate />}
                      />
                      <Route path="menu" element={<SetupLocationsMenu />} />
                    </Route>
                    <Route path="staff" element={<SetupLocationsStaff />} />
                  </Route>
                </Route>
              </Route>
              <Route path="setup_items">
                <Route index element={<SetupItems />} />
                <Route path=":itemId">
                  <Route path="edit" element={<ItemNewAndEdit />} />
                  <Route path="upload" element={<ItemUpload />} />
                </Route>
                <Route path="new" element={<ItemNewAndEdit />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
