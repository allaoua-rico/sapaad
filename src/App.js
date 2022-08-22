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

        <div className="flex-1 relative flex flex-col">
          <Routes>
            <Route path="/" element={<Landing />} />
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
              <Route path="cancelled_orders" element={<CancelledOrders />} />
              <Route path="top_selling_items" element={<TopSellingItems />} />

            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
