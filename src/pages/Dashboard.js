import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import DashboardHeader from "../components/DashBoard/DashboardHeader";
import DashBoardSalesTopSection from "../components/DashBoard/DashboardSalesSummary/DashBoardSalesTopSection";
import { useGlobalState } from "../context/stateProvider";

export default function Dashboard() {
  const { pathname } = useLocation();

  const [{ period }, dispatch] = useGlobalState();

  const setFilterStartDate = (start) =>
    dispatch({ type: "SET_FILTER_DATE", payload: { start } });

  const setFilterEndDate = (end) =>
    dispatch({ type: "SET_FILTER_DATE", payload: { end } });

  const [hideSalesTopSection, setHideSalesTopSection] = useState(false);

  useEffect(() => {
    setHideSalesTopSection(pathname == "/dashboard/saved_reports");
  }, [pathname]);

  return (
    <div className="relative">
      <DashboardHeader />

      <div className="flex flex-col px-5 space-y-2 py-6">
        <div style={{ display: hideSalesTopSection ? "none" : "block" }}>
          <DashBoardSalesTopSection
            filterStartDate={period.start}
            setFilterStartDate={setFilterStartDate}
            filterEndDate={period.end}
            setFilterEndDate={setFilterEndDate}
          />
        </div>
        <Outlet
          context={[
            { filterStartDate: period.start, filterEndDate: period.end },
          ]}
        />
      </div>
    </div>
  );
}
