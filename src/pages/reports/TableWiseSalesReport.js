import ExportToCsv from "../../components/Reports.js/ExportToCsv";
import PrintLink from "../../components/shared/buttons/PrintLink";
import MainPaper from "../../components/shared/wrappers/MainPaper";
import * as React from "react";
import ReturnLinkButton from "../../components/shared/buttons/ReturnLinkButton";
import MainH1 from "../../components/shared/wrappers/Reports/MainH1";
import ReportToolbarLeftWrapper from "../../components/shared/wrappers/Reports/ReportToolbarLeftWrapper";
import ReportToolbarRightWrapper from "../../components/shared/wrappers/Reports/ReportToolbarRightWrapper";
import ReportMainWrapper from "../../components/shared/wrappers/Reports/ReportMainWrapper";
import OneColTable from "../../components/shared/wrappers/OneColTable";
import DropDownFilter from "../../components/shared/Select/DropDownFilter";
import ReportToolbarWrapper from "../../components/shared/wrappers/Reports/ReportToolbarWrapper";
import MuiTable from "../../components/MuiTable/MuiTable";

export default function TableWiseSalesReport() {
  return (
    <ReportMainWrapper>
      <ReportToolbarWrapper>
        <ReportToolbarLeftWrapper>
          <ReturnLinkButton to="/dashboard/marketing" />
          <MainH1>Table Wise Sales Report</MainH1>
        </ReportToolbarLeftWrapper>
        <ReportToolbarRightWrapper>
          <DropDownFilter name="Dine-In-Area" filters={[]} />
          <DropDownFilter name="Table" filters={[]} />
          <ExportToCsv />
          <PrintLink />
        </ReportToolbarRightWrapper>
      </ReportToolbarWrapper>
      <MainPaper>
        <MuiTable rows={rows} headCells={headCells} />
        <div
          className="
         flex flex-col space-y-4 sm:space-y-0
         sm:flex-row sm:space-x-6
         justify-center items-center
         "
        >
          <div className="sm:w-1/4 w-full">
            <OneColTable label="Total Orders" value="0" />
          </div>
          <div className="sm:w-1/4 w-full">
            <OneColTable label="Total No of Covers Served" value="0" />
          </div>
          <div className="sm:w-1/4 w-full">
            <OneColTable label="Total Amount" value="SAR 0.00" />
          </div>
        </div>
      </MainPaper>
    </ReportMainWrapper>
  );
}

function createData(
  Order,
  type,
  OrderTime,
  By,
  When,
  What,
  Who,
  Reason,
  Amount
) {
  return {
    Order,
    type,
    OrderTime,
    By,
    When,
    What,
    Who,
    Reason,
    Amount,
  };
}

const rows = [
  //   createData("Cupcake", 305, 3.7, 67, 4.3),
  //   createData("Donut", 452, 25.0, 51, 4.9),
  //   createData("Eclair", 262, 16.0, 24, 6.0),
  //   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  //   createData("Gingerbread", 356, 16.0, 49, 3.9),
  //   createData("Honeycomb", 408, 3.2, 87, 6.5),
  //   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  //   createData("Jelly Bean", 375, 0.0, 94, 0.0),
  //   createData("KitKat", 518, 26.0, 65, 7.0),
  //   createData("Lollipop", 392, 0.2, 98, 0.0),
  //   createData("Marshmallow", 318, 0, 81, 2.0),
  //   createData("Nougat", 360, 19.0, 9, 37.0),
  //   createData("Oreo", 437, 18.0, 63, 4.0),
];

const headCells = [
  {
    id: "Date",
    numeric: false,
    disablePadding: true,
    label: "Date",
  },
  {
    id: "Total_Orders",
    numeric: false,
    disablePadding: true,
    label: "Total Orders",
  },
  {
    id: "Total_Amount",
    numeric: true,
    disablePadding: false,
    label: "Total Amount (SAR)",
  },
  {
    id: "No_of_Cover_Served",
    numeric: true,
    disablePadding: false,
    label: "No of Cover(s) Served",
  },
];
