import { useOutletContext } from "react-router-dom";
import MainPaper from "../shared/wrappers/MainPaper";
import DiscountTable from "./DashboardSalesSummary/DiscountTable";
import OrderTypesTable from "./DashboardSalesSummary/OrderTypesTable";
import PaymentTypesTable from "./DashboardSalesSummary/PaymentTypesTable";
import RevenuesTable from "./DashboardSalesSummary/RevenuesTable";
import SalesByCategoryTable from "./DashboardSalesSummary/SalesByCategoryTable";
import SalesByCollectionsTable from "./DashboardSalesSummary/SalesByCollectionsTable";
import SalesByStaffTable from "./DashboardSalesSummary/SalesByStaffTable";
import SalesByTagTable from "./DashboardSalesSummary/SalesByTagTable";
import SurchargeTable from "./DashboardSalesSummary/SurchargeTable";
import VoidsTable from "./DashboardSalesSummary/VoidsTable";
import TableTopSection from "./TableTopSection";

export default function DashBoardSalesSummary({}) {
  const [{ filterStartDate, filterEndDate }] = useOutletContext();

  return (
    <MainPaper>
      <div className="space-y-3 text-xs">
        <div className="text-center ">
          <h1 className="text-xl font-bold">Business Summary</h1>
          <div className="text-xs">store name</div>
        </div>
        <TableTopSection
          filterEndDate={filterEndDate}
          filterStartDate={filterStartDate}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-6">
          <RevenuesTable />
          <OrderTypesTable />
          <div></div>
          <DiscountTable />
          <PaymentTypesTable />
          <VoidsTable />
          <SurchargeTable />
        </div>
        <SalesByStaffTable />
        <SalesByCategoryTable />
        <SalesByTagTable />
        <SalesByCollectionsTable />
      </div>
    </MainPaper>
  );
}
