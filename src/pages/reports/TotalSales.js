import { useSearchParams } from "react-router-dom";
import ExportToCsv from "../../components/Reports.js/ExportToCsv";
import PrintLink from "../../components/shared/buttons/PrintLink";
import ReturnLinkButton from "../../components/shared/buttons/ReturnLinkButton";
import DropDownFilter from "../../components/shared/Select/DropDownFilter";
import MainPaper from "../../components/shared/wrappers/MainPaper";
import MainH1 from "../../components/shared/wrappers/Reports/MainH1";
import ReportMainWrapper from "../../components/shared/wrappers/Reports/ReportMainWrapper";
import ReportToolbarLeftWrapper from "../../components/shared/wrappers/Reports/ReportToolbarLeftWrapper";
import ReportToolbarRightWrapper from "../../components/shared/wrappers/Reports/ReportToolbarRightWrapper";
import ReportToolbarWrapper from "../../components/shared/wrappers/Reports/ReportToolbarWrapper";

export default function TotalSales() {
  let [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type");

  return (
    <ReportMainWrapper>
      <ReportToolbarWrapper>
        <ReportToolbarLeftWrapper>
          <ReturnLinkButton to="/dashboard/sales" />
          <MainH1>
            {type == "sales"
              ? "Sales By Location"
              : type == "orders"
              ? "Orders  By Location"
              : "Total Sales"}
          </MainH1>
        </ReportToolbarLeftWrapper>
        <ReportToolbarRightWrapper>
          <DropDownFilter
            name="Payment"
            filters={[
              { text: "Cash", value: "Cash" },
              { text: "Visa", value: "Visa" },
              { text: "Mastercard", value: "Mastercard" },
              { text: "Paid Online", value: "Paid Online" },
              { text: "Unpaid", value: "Unpaid" },
            ]}
          />
          <ExportToCsv />
          <PrintLink />
        </ReportToolbarRightWrapper>
      </ReportToolbarWrapper>
      <MainPaper>
        <div className="py-36 px-12">
          <div className="mx-auto flex flex-col items-center">
            <img src="/sad_robot.png" alt="sad_robot" className="w-20 h-20" />
            <p className="p-3 text-gray-300 text-lg">No data available</p>
          </div>
        </div>
      </MainPaper>
    </ReportMainWrapper>
  );
}
