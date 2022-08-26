import { Outlet } from "react-router-dom";
import DashboardHeader from "../../components/DashBoard/DashboardHeader";
import DashBoardSalesTopSection from "../../components/DashBoard/DashboardSalesSummary/DashBoardSalesTopSection";
import { useGlobalState } from "../../context/stateProvider";
import { useLocation } from "react-router-dom";
export default function Reports() {
  const [{ period }, dispatch] = useGlobalState();

  const setFilterStartDate = (start) =>
    dispatch({ type: "SET_FILTER_DATE", payload: { start } });

  const setFilterEndDate = (end) =>
    dispatch({ type: "SET_FILTER_DATE", payload: { end } });

  const { pathname } = useLocation();
  return (
    <div>
      <DashboardHeader />
      <div className="flex flex-col px-5 space-y-2 py-6">
        <div
          style={{
            display:
              pathname == "/reports/inactive_customers" ? "none" : "block",
          }}
        >
          <DashBoardSalesTopSection
            filterStartDate={period.start}
            setFilterStartDate={setFilterStartDate}
            filterEndDate={period.end}
            setFilterEndDate={setFilterEndDate}
          />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
